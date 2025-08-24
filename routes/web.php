<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterVehiclesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


// Route::get('/index', function () {
//     return Inertia::render('Index');
// });
// ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/ozair', function() {
   return inertia('Ozair', [
    'name' => "Mohammad Ozair Khurami Jan"
   ]); 
});


Route::middleware('auth')->group(function () {
    
    Route::get('/', [DashboardController::class, 'create'])->name('dashboard');
    Route::get('/dashboard/{id}', [DashboardController::class, 'edit'])->name('dashboard.edit');
    Route::put('/dashboard/{id}', [DashboardController::class, 'update'])->name('dashboard.update');
    Route::delete('/dashboard/{id}', [DashboardController::class, 'delete'])->name('dashboard.delete');

    Route::get('/registerVehicles', [RegisterVehiclesController::class, 'create'])->name('vehicles.create');
    Route::post('/registerVehicles', [RegisterVehiclesController::class, 'store'])->name('vehicles.store');
    Route::post('/exitVehicles', [RegisterVehiclesController::class, 'exit'])->name('vehicles.exit');
    Route::get('/vehicles', [RegisterVehiclesController::class, 'index'])->name('vehicles.index');
    Route::get('/registerCar', [RegisterVehiclesController::class, 'register'])->name('vehicles.register');
    Route::post('/registerCar', [RegisterVehiclesController::class, 'registerStore'])->name('vehiclesStore.register');

    Route::get('/category', [GategoryController::class, 'create'])->name('categroy.create'); 
    Route::post('/category', [GategoryController::class, 'store'])->name('categroy.store'); 
    Route::get('/category/{id}', [GategoryController::class, 'edit'])->name('categroy.edit'); 
    Route::put('/category/{id}', [GategoryController::class, 'update'])->name('categroy.update'); 
    Route::get('/categories', [GategoryController::class, 'index'])->name('categroy.index'); 
    Route::delete('/categories/{id}', [GategoryController::class, 'delete'])->name('categroy.delete'); 

    Route::get('/report', [GategoryController::class, 'report'])->name('report.report'); 
});

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
