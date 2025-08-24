<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ParkingRecord extends Model
{
    protected $fillable = [
        'car_id',
        'entry_date',
        'exist_date',
        'status', 
        'amount'
    ];

    public function car(){
        return $this->belongsTo(Car::class);
    }

    public function payment() {
        return $this->hasOne(Payment::class); 
    }
}