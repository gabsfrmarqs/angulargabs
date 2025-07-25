import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-otaku',
  standalone: false,
  templateUrl: './otaku.component.html',
  styleUrl: './otaku.component.scss',
  encapsulation: ViewEncapsulation.None //Allows for overriding the global style
})
export class OtakuComponent {
  ngOnInit() {
    window.alert("૮ ˶ᵔ ᵕ ᵔ˶ ა OTAKU (˶˃ ᵕ ˂˶) .ᐟ.ᐟ");
  }

}
