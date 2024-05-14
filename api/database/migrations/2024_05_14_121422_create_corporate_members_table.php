<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('corporate_members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('experience')->nullable();
            $table->integer('order')->nullable();
            $table->dateTime('joined_at')->nullable();
            $table->string('designation');
            $table->string('contact_mail');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('corporate_members');
    }
};
