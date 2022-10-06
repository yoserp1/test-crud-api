<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->id()->unsigned();
            $table->string('name', 50)->comment('nombre del usuario');
            $table->string('email', 50)->unique()->comment('email del usuario');
            $table->string('password', 255)->comment('contrasena del usuario');
            $table->text('address')->nullable()->comment('direccion del usuario');
            $table->date('birthdate')->comment('fecha de nacimiento del usuario');
            $table->string('city', 255)->comment('ciudad del usuario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}
