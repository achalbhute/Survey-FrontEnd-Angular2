import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { UserComponent } from './component/user.component';
import { AdminComponent } from './component/admin.component';
import { ErrorComponent } from './component/notFound.component';

const appRoutes : Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: '404',
        component: ErrorComponent
    },
    {path: '**', redirectTo: '/404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);