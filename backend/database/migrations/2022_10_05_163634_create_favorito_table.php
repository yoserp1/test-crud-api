<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoritoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorito', function (Blueprint $table) {
            $table->id()->unsigned();
            $table->bigInteger('id_usuario')->length(20)->unsigned()->comment('Llave foranea del id de tabla usuario');
            $table->string('ref_api', 255)->comment('ref_api del usuario');
            $table->timestamps();

            $table->foreign('id_usuario')->references('id')->on('usuario')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorito');
    }
}
