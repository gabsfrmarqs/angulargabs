import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';  
import { BadblogComponent } from './badblog/badblog.component';
import { LeekspinComponent } from './leekspin/leekspin.component';
import { OtakuComponent } from './otaku/otaku.component';
import { ParamoreComponent } from './paramore/paramore.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { NgOptimizedImage } from '@angular/common';

// Using modules instead of standalone components. As god intended.

@NgModule({
  declarations: [
    HomeComponent,
    BadblogComponent,
    LeekspinComponent,
    OtakuComponent,
    ParamoreComponent,
    WhoamiComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    NgOptimizedImage
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    NgOptimizedImage
  ]
})

export class AppModule { }