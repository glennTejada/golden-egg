<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use thiagoalessio\TesseractOCR\TesseractOCR;

class ApiController extends Controller
{
    public function entry(Request $request){

        $firstname = preg_replace('/\s+/', '', $request->firstname);
        $titleWithOutRegExpression = str_replace( array( '\'', '!','”','#','$','%','&','’','(', '*','+',',',
            '-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'), '', $firstname);
        $imageName = time() . '-' . $titleWithOutRegExpression . '.' . $request->receipt->extension();
        $request->receipt->move(public_path('images'), $imageName);


        $transactionId = $request->transactionId;
        $transactionIdValidation = User::where('transactionId',$transactionId)->first();

        if($transactionIdValidation != null)
            return response()->json(
                [
                    'errors' => 'Transaction Id already used'
                ],400);
        else {
            User::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'suburb' => $request->suburb,
                'number' => $request->number,
                'product' => $request->product,
                'receipt' => $imageName,
                'email' => $request->email,
                'age' => $request->age,
                'proof' => $request->proof,
                'affiliates' => $request->affiliates,
                'isWinner' => 1,
                "transactionId" => $transactionId,
            ]);
            $data = [
                "apiKey" => "61fa033a-c163-4d57-9a84-9952ec525812",
                "transactionId" => $transactionId,
                "entrantId" => ""
            ];

            $client = new Client([
                'headers' => ['Content-Type' => 'x-www-form-urlencoded']
            ]);

            $response = $client->request("POST", "https://pistol-01-yvwa6gxw.instantwinapi.com/api/entry", ['form_params' => $data]);
            $result = json_decode($response->getBody());
            return response()->json($result);
        }
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
