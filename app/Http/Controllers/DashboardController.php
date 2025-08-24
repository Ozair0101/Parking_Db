<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Category;
use App\Models\ParkingRecord;
use App\Models\Payment;
use App\Models\PlateNumber;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

use function Pest\Laravel\options;

class DashboardController extends Controller
{
    public function create() {
        // dd(Gate::allows('browse_dashboard_report'));
        $user = Auth::user(); 
        if(!$user->hasPermission("browse_dashboard")){
            return redirect()->route('vehicles.create'); 
        }
        $count_cars = ParkingRecord::where('status', '=', 'parked')->count();
        $count_exit = ParkingRecord::where('status', '=', 'exited')
                        ->whereDate('exist_date', Carbon::today())->count();
        
        $today_revenue = Payment::whereDate('payment_date', Carbon::today())->sum('amount_paid');
        $last_month_revenue = Payment::where('payment_date', '>=', Carbon::now()->subDays(30))->sum('amount_paid');

        $report = ParkingRecord::with(['car.plateNumber','car.category', 'payment'])->latest()->get();

        $report = $report->map(function($item) {
                return [
                    'id' => $item->id,
                    'category' => $item->car->category->name, 
                    'model' => $item->car->model, 
                    'status' => $item->status,
                    'entry_date' => $item->entry_date, 
                    'exist_date' => $item->exist_date, 
                    'plate_number' => $item->car->plateNumber->number_plate, 
                    'city' => $item->car->plateNumber->city, 
                    'type_plate' => $item->car->plateNumber->type_plate, 
                    'amount' => optional($item->payment)->amount_paid,   
             ];
        });  
        return Inertia::render('Dashboard', ['report'=> $report, 'count_cars'=>$count_cars , 'count_exit'=> $count_exit, 'last_month_revenue'=>$last_month_revenue, 'today_revenue'=> $today_revenue]);
    }   

    public function edit($id) {
        $data= ParkingRecord::findOrFail($id); 
        $category = Category::all(); 
        $data = [
                'id' => $data->id, 
                'color' => $data->car->color, 
                'car_id' => $data->car->id, 
                'category' => $data->car->category->name, 
                'category_id' => $data->car->category->id, 
                'model' => $data->car->model, 
                'number_plate' => $data->car->plateNumber->number_plate,
                'number_plate_id' => $data->car->plateNumber->id,
                'type_plate' => $data->car->plateNumber->type_plate,
                'city' => $data->car->plateNumber->city,
                'entry_date' => $data->entry_date, 
                'amount' => $data->amount
           ]; 
        // dd($data);
        return Inertia::render('Vehicle/Edit', ['data'=>$data, 'category'=>$category]);
    }

    public function update(Request $request, $id) {
        $request->validate([
            "category.value" => 'required|exists:categories,id',
            "vehicleName" => "required|string|max:255",
            // "number_plate" => "required|string|max:255|unique:".PlateNumber::class,
            "color" => "required|string|max:255",
            "entry_date" => "required",
            "parkingCharges" => "required",
        ]);

        // dd($request->all());
        $plate = PlateNumber::findOrFail($request->number_plate_id);
        
        $plate = $plate->update([
            'number_plate' => $request->number_plate, 
            'type_plate' => $request->paletType['label'],
            'city' => $request->city['label'] ,
        ]);
        
        $car = Car::findOrFail($request->car_id);
        $car = $car->update([
            'model'=> $request->vehicleName,
            'category_id' => $request->category['value'] ,
            'color' => $request->color,   
        ]);
        
        $parkingRecord = ParkingRecord::findOrFail($id); 
        $parkingRecord->update([
            'entry_date' => $request->entry_date, 
            'amount' => $request->parkingCharges
        ]); 
        // dd("sdf"); 
       return redirect()->route('dashboard');
    }

    public function delete($id) {
        $record = ParkingRecord::findOrFail($id);
        $record->delete(); 
        return redirect()->back()->with('success');
    }    

}
