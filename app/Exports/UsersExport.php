<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;

class UsersExport implements FromCollection
{
    public function collection()
    {
        $users = DB::table('users')
            ->where('isWinner',1)
            ->select('firstname', 'lastname','suburb','number','product','email','transactionId')->get();
        if($users != null)
            return $users;
        else
            return "No winner Found";
    }
}
