<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create(
            ['name'=>"admin-RADAMA",
            'password'=>Hash::make('23061992'),
            'role'=>'ADMIN',
            ]
        );
        User::create(
            ['name'=>"USER-RADAMA",
            'password'=>Hash::make('87654321'),
            'role'=>'USER',
            ]
        );
    }
}
