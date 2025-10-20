import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeekspinComponent } from './leekspin/leekspin.component'; 
import { WhoamiComponent } from './whoami/whoami.component';
import { ParamoreComponent } from './paramore/paramore.component';
import { OtakuComponent } from './otaku/otaku.component';
import { BadblogComponent } from './badblog/badblog.component';
import { TetoComponent } from './teto/teto.component';

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
    },
    {
        path: 'paramore',
        component: ParamoreComponent,
    },
    {
        path: 'otaku',
        component: OtakuComponent,
    },
    {
        path: 'blog',
        component: BadblogComponent
    },
    {
        path: 'teto',
        component: TetoComponent
    }
];
