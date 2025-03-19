import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-paramore',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './paramore.component.html',
  styleUrl: './paramore.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class ParamoreComponent {

}
