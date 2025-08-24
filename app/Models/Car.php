<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'model',
        'category_id',
        'color',
        'plate_number_id',
    ];

    public function category (){
        return $this->belongsTo(Category::class);
    }

    public function parkingRecords (){
        return $this->hasMany(ParkingRecord::class);
    }

    public function plateNumber(){
        return $this->belongsTo(PlateNumber::class); 
    }
    
}
