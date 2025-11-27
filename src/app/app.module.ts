import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';  
import { LeekspinComponent } from './leekspin/leekspin.component';
import { OtakuComponent } from './otaku/otaku.component';
import { ParamoreComponent } from './paramore/paramore.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { NgOptimizedImage } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GoBackComponent } from './shared/go-back/go-back.component'; // Importing the GoBackComponent
import { TetoComponent } from './teto/teto.component';

// Using modules instead of standalone components. As god intended.

@NgModule({
  declarations: [
    HomeComponent,
    LeekspinComponent,
    OtakuComponent,
    ParamoreComponent,
    WhoamiComponent,
    GoBackComponent,
    TetoComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    NgOptimizedImage,
    MatSidenavModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    NgOptimizedImage,
    MatSidenavModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }