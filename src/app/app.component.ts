import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LeekspinComponent } from './leekspin/leekspin.component'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, LeekspinComponent]
})
export class AppComponent {
  title = 'angulargabs';

  
}