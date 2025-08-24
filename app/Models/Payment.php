<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'parking_record_id',
        'payment_type',
        'amount_paid',
        'payment_date'
    ];

    public function  parkingRecord() {
        return $this->belongsTo(ParkingRecord::class); 
    }
}