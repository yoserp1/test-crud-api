<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\NgBuildService;

class AppController extends Controller
{
    //
    /**
     * Our custom service provider is going to make sure
     * $ng is a singleton
     */
    public function index(NgBuildService $ng)
    {
        // Provide our service's assets as $ngAssets inside
        // of app.blade.php
        return view('app', ['ngAssets' => $ng->assets]);
    }
}
