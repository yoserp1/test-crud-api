<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class CharacterController extends Controller
{
    //
    public const RESOURCE = 'https://rickandmortyapi.com/api/character';

    public function list(Request $request)
    {
        $response = Http::withOptions(['verify' => false])->get(self::RESOURCE);
        return $response->json();
    }

    public function detail($id = null)
    {
        $response = Http::withOptions(['verify' => false])->get(self::RESOURCE.'/'.$id);
        return $response->json();
    }
}
