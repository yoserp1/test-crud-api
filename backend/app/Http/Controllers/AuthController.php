<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;
use App\Models\Usuario;

class AuthController extends Controller
{
    //
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Las credenciales que has introducido no coinciden con nuestros registros. Intente de Nuevo.'], 401);
        }

        return $this->createNewToken($token);
    }

    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:usuario',
            'password' => 'required|string|confirmed|min:6',
            'address' => 'required|string|max:255',
            'birthdate' => 'required|date_format:Y-m-d',
            'city' => 'required|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $user = Usuario::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'Usuario registrado con éxito!',
            'user' => $user
        ], 201);
    }

    public function logout() {

        auth()->logout();
        return response()->json([
            'message' => 'El usuario cerró la sesión con éxito'
        ]);
    }

    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    public function userProfile() {
        return response()->json(auth()->user());
    }

    public function update(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100',
            'address' => 'required|string|max:255',
            'birthdate' => 'required|date_format:Y-m-d',
            'city' => 'required|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $usuario = Usuario::find(auth()->user()->id);
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->address = $request->address;
        $usuario->birthdate = $request->birthdate;
        $usuario->city = $request->city;
        $usuario->save();

        return response()->json([
            'message' => 'Datos actualizados con éxito!',
            'user' => $usuario
        ], 201);
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
