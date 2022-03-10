<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function entry(Request $request){

        User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'suburb' => $request->suburb,
            'number' => $request->number,
            'product' => $request->product,
            'receipt' => $request->receipt,
            'email' => $request->email,
            'age' => $request->age,
            'proof' => $request->proof,
            'affiliates' => $request->affiliates,
        ]);
        $data = [
            "apiKey" => "61fa033a-c163-4d57-9a84-9952ec525812",
            "transactionId" => "123456",
            "entrantId" => ""
        ];

        $client = new Client([
            'headers' => ['Content-Type' => 'x-www-form-urlencoded']
        ]);

        $response= $client->request("POST","https://pistol-01-yvwa6gxw.instantwinapi.com/api/entry",['form_params' => $data]);
        $result = json_decode($response->getBody());
        return response()->json($result);
    }

    public function status(Request $request){
        $data = [
            "apiKey" => "61fa033a-c163-4d57-9a84-9952ec525812",
        ];

        $client = new Client([
            'headers' => ['Content-Type' => 'x-www-form-urlencoded']
        ]);

        $response= $client->request("POST","https://pistol-01-yvwa6gxw.instantwinapi.com/api/status",['form_params' => $data]);
        $result = json_decode($response->getBody());
        return response()->json($result);
    }
}
