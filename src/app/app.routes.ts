import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeekspinComponent } from './leekspin/leekspin.component'; 

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'leekspin',
        component: LeekspinComponent,
    }
];
