<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Category;
use App\Models\ParkingRecord;
use App\Models\Payment;
use App\Models\PlateNumber;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf; 

class RegisterVehiclesController extends Controller
{
    public function create() {
        $category = Category::all(); 
        return Inertia::render('Vehicle/VehicleForm', ['category'=> $category]);
    }
 
    public function store(Request $request) {
        $category = Category::all(); 
        $request->validate([
            "category.value" => 'required|exists:categories,id',
            "vehicleName" => "required|string|max:255",
            "number_plate" => "required|string|max:255|unique:".PlateNumber::class,
            "color" => "required|string|max:255",
            "entry_date" => "required",
            "parkingCharges" => "required",
        ]);
        // dd($request->all());
       $plate = PlateNumber::create([
            'number_plate' => $request->number_plate, 
            'type_plate' => $request->paletType['label'],
            'city' => $request->city['label'] ,
       ]);

       $car = Car::create([
            'model'=> $request->vehicleName,
            'plate_number_id' => $plate->id,
            'category_id' => $request->category['value'] ,
            'color' => $request->color,   
        ]);

        $parking = ParkingRecord::create([
            'car_id' => $car->id,
            'entry_date' => $request->entry_date, 
            'amount' => $request->parkingCharges
        ]);
        
        $print = [
            'model' => $car->model, 
            'plate_number' => $plate->number_plate,
            'name' => $car->category->name, 
            'entry_date' => $parking->entry_date,
            'amount' => $parking->amount
        ];
        // dd($print);
        // return $this->generateInvoice($print); 
        // return Inertia::render('Vehicle/VehicleForm', ['bill'=> $print,  ['category'=> $category]]);
        return redirect()->back()->with('success'); 
    }

    protected function generateInvoice($print) {
        $invoiceData = [
            'print' => $print
        ]; 
        $pdf = PDF::loadView('bill', $invoiceData); 
        return $pdf->stream('invoice.pdf'); 
    }
    
    public function index() {
       
        $count_cars = ParkingRecord::where('status', '=', 'parked')->count();
        $count_exit = ParkingRecord::where('status', '=', 'exited')
                        ->whereDate('exist_date', Carbon::today())->count();
        $report = ParkingRecord::with(['car.plateNumber','car.category'])->where('status', '=', 'parked')->latest()->get();
        $report = $report->map(function($item) {
            return [
                'id' => $item->id,
                'category' => $item->car->category->name, 
                'model' => $item->car->model, 
                'entry_date' => $item->entry_date, 
                'plate_number' => $item->car->plateNumber->number_plate, 
                'city' => $item->car->plateNumber->city, 
                'type_plate' => $item->car->plateNumber->type_plate, 
                'amount' => $item->amount
            ];
        });

        return Inertia::render('Vehicle/Index', ['report'=> $report, 'count_cars'=>$count_cars , 'count_exit'=> $count_exit]);
    }

    public function exit(Request $request) {
        // dd($request->all());
        // $request->validate([
        //     "type" => 'required',
        // ]);
        
        $now = now()->format('Y-n-j G:i:s');

        $parkingRecord = ParkingRecord::findOrFail($request->id);
        
        $parkingRecord->update([
            'exist_date'=> $now,
            'status' => 'exited',
        ]); 
        
        Payment::create([
            'parking_record_id' => $parkingRecord->id,
            'payment_type' => 'cash',
            'amount_paid' => $request->total,
            'payment_date' => $now
        ]);

        return redirect()->back()->with('success'); 
    }

    public function register(){
        $cars = Car::with(['plateNumber', 'category'])->get();
        $cars = $cars->map(function($item) {
            return [
                'car_id' => $item->id, 
                'number_plate' => $item->plateNumber->number_plate,
                'model' => $item->model,
                'category' => $item->category->name
            ];
        });
        return Inertia::render('Vehicle/RegisterCar', ['cars'=>$cars]);
    }

    public function registerStore(Request $request) {
      
        $request->validate([
            "number_plate.value" => "required",
            "entry_date" => "required",
            "parkingCharges" => "required",
        ]);

        ParkingRecord::create([
            'car_id' => $request->number_plate['value'],
            'entry_date' => $request->entry_date, 
            'amount' => $request->parkingCharges
        ]);
        return redirect()->back()->with('success'); 
    }

}
