<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->getMessageBag()->toArray(), 
                'status' => false
            ], 401);
        }
    }
}
