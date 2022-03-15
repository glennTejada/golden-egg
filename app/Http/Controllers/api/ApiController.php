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
    public function entry(UserRequest $request){

        /*$firstname = preg_replace('/\s+/', '', $request->firstname);
        $titleWithOutRegExpression = str_replace( array( '\'', '!','”','#','$','%','&','’','(', '*','+',',',
            '-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'), '', $firstname);
        $imageName = time() . '-' . $titleWithOutRegExpression . '.' . $request->receipt->extension();
        $request->receipt->move(public_path('images'), $imageName);
        $path = public_path('images') . '/' . $imageName;

        $text = (new TesseractOCR($path))
            ->run();
        return response()->json($text);*/

        $transectionId = rand(0,1);
        $transectionIdValidation = User::where('transectionId',$transectionId)->first();

        if($transectionIdValidation != null)
            // todo: this should be a error response, right now axios is catching it as success response
            return response()->json(
                [
                    "message" => "The given data was invalid.",
                    'errors' => ['transectionId' =>['Transaction Id already used']]
                ]);
        else {
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
                'isWinner' => 1,
                "transectionId" => $transectionId, // todo: if you fix this property name, kindly update front end "entry.js" file too
            ]);
            $data = [
                "apiKey" => "61fa033a-c163-4d57-9a84-9952ec525812",
                "transactionId" => "123456",
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
