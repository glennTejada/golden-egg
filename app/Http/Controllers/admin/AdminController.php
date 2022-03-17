<?php

namespace App\Http\Controllers\admin;

use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

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

    public function delete($id){
        User::find($id)->delete();
        return redirect()->back();
    }
    public function fileExport()
    {
        return Excel::download(new UsersExport, 'winners-list.xlsx');
    }
}
