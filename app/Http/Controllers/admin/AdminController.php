<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        $winners = count(User::all()) ;
        return view('admin.index',compact('winners'));
    }

    public function list(){
        $winners = User::all();
        return view('admin.list',compact('winners'));
    }
}
