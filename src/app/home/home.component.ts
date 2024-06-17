import { Component } from '@angular/core';
import { LeekspinComponent } from '../leekspin/leekspin.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
}
