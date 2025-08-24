<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlateNumber extends Model
{
    protected $fillable = [
        'number_plate',
        'type_plate',
        'city',
    ];

    public function car() {
        return $this->hasOne(Car::class); 
    }
}
