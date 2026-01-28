<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class SpatieRole extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'view dashboard']);
        Permission::create(['name' => 'view stats']);
        Permission::create(['name' => 'do test']);


        Role::create(['name' => 'admin'])->givePermissionTo(['manage users', 'view dashboard']);
        Role::create(['name' => 'user'])->givePermissionTo(['do test', 'view stats']);

    }
}
