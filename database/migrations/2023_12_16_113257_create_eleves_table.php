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
        Schema::create('eleves', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->date('datedenaissance');
            $table->string('sexe');
            $table->string('addresse');
            $table->string('ecoleanterieure');
            $table->string('classeanterieure');
            $table->string('nomdupere')->nullable();
            $table->string('prenomdupere')->nullable();
            $table->string('professiondupere')->nullable();
            $table->string('contactdupere')->nullable();
            $table->string('nomdumere')->nullable();
            $table->string('prenomdumere')->nullable();
            $table->string('professiondumere')->nullable();
            $table->string('contactdumere')->nullable();
            $table->string('nomdututeur')->nullable();
            $table->string('prenomdututeur')->nullable();
            $table->string('professiondututeur')->nullable();
            $table->string('contactdututeur')->nullable();
            $table->boolean('droit');
            $table->boolean('ecolage');
            $table->string('ref_eleve')->nullable();
            $table->unsignedBigInteger('classe_id');
            $table->foreign('classe_id')->references('id')->on('classes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eleves');
    }
};
