import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeekspinComponent } from './leekspin/leekspin.component'; 
import { WhoamiComponent } from './whoami/whoami.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'leekspin',
        component: LeekspinComponent,
    },
    {
        path: 'whoami',
        component: WhoamiComponent,
    }
];
