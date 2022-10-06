<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorito extends Model
{
    protected $connection= 'mysql';

    protected $table = 'favorito';

    protected $fillable = ['usuario'];

    public function usuario() {
        return $this->belongsTo(Usuario::class, 'id_usuario', 'id');
    }
}
