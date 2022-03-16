<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('suburb');
            $table->string('number');
            $table->string('product');
            $table->string('receipt');
            $table->string('email');
            $table->string('password')->nullable();
            $table->string('age');
            $table->string('proof');
            $table->string('affiliates');
            $table->string('transactionId')->unique();
            $table->integer('isWinner')->default(0);
            $table->integer('status')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
