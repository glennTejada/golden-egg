<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(){
        return view("admin.auth.login");
    }

    public function login_post(Request $request){
        $credentials = ['email' => $request->email, 'password' => $request->password, 'status' => 1];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect('/admin');
        }
        else {
            return back()
                ->withInput($request->only('email'))
                ->withErrors(['invalid' => 'Wrong Email or Password']);
        }
    }
}
