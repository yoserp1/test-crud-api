<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;
use Validator;

use App\Models\Favorito;

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

    public function favorite(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'ref_api' => 'required|string',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $favorito = new Favorito;
        $favorito->id_usuario = auth()->user()->id;
        $favorito->ref_api = $request->ref_api;
        $favorito->save();

        return response()->json([
            'message' => 'Personaje favorito registrado con éxito!',
            'favorito' => $favorito
        ], 201);

    }
}
