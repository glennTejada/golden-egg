<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'firstname' => 'Admin',
            'lastname' =>'',
            'suburb'=>'',
            'number'=>'',
            'product'=>'',
            'receipt'=>'',
            'email'=>'admin@gmail.com',
            'password'=> bcrypt('admin'),
            'age'=>'',
            'proof'=>'',
            'affiliates'=>'',
            'transactionId'=>'',
            'isWinner'=>0,
            'status'=>1,
        ]);
    }
}
