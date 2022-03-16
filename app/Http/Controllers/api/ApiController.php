<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function entry(UserRequest $request)
    {

        $firstname = preg_replace('/\s+/', '', $request->firstname);
        $titleWithOutRegExpression = str_replace(array('\'', '!', '”', '#', '$', '%', '&', '’', '(', '*', '+', ',',
            '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'), '', $firstname);
        $imageName = time() . '-' . $titleWithOutRegExpression . '.' . $request->receipt->extension();
        $request->receipt->move(public_path('images'), $imageName);


        $transactionId = $request->transactionId;
        $transactionIdValidation = User::where('transactionId', $transactionId)->first();

        if ($transactionIdValidation != null)
            return response()->json(
                [
                    'errors' => 'Transaction Id already used'
                ], 400);
        else {
            $data = [
                "apiKey" => "61fa033a-c163-4d57-9a84-9952ec525812",
                "transactionId" => $transactionId,
                "entrantId" => ""
            ];

            $client = new Client([
                'headers' => ['Content-Type' => 'x-www-form-urlencoded']
            ]);

            try {
                $response = $client->request("POST", "https://pistol-01-yvwa6gxw.instantwinapi.com/api/entry", ['form_params' => $data]);
                $result = json_decode($response->getBody());

                if ($result->status->code == 0) {
                    if ($result->isWinner == null) {
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
                        return response()->json(['code' => 1, 'status' => "Winner"], 200);
                    } else
                        return response()->json(['code' => 2, 'status' => "Looser"], 200);
                } elseif ($result->status->code == 2)
                    return response()->json(['errors' => "A valid, unique transactionId is required"], 400);
                elseif ($result->status->code == 21)
                    return response()->json(['errors' => "Entry frequency exceeded"], 400);
                else
                    return response()->json(['errors' => "Invalid Transaction"], 400);
            } catch (\Exception $exception) {
                return response()->json(['errors' => "Server Error"], 404);
            }
        }
    }

    public function status(Request $request)
    {
        $data = [
            "apiKey" => "61fa033a-c163-4d57-9a84-9952ec525812",
        ];

        $client = new Client([
            'headers' => ['Content-Type' => 'x-www-form-urlencoded']
        ]);

        $response = $client->request("POST", "https://pistol-01-yvwa6gxw.instantwinapi.com/api/status", ['form_params' => $data]);
        $result = json_decode($response->getBody());
        return response()->json($result);
    }
}
