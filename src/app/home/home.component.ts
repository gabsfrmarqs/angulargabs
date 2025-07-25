import { Component } from '@angular/core';
import { LeekspinComponent } from '../leekspin/leekspin.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private meta: Meta){
    this.setMetaTags();
  }

  setMetaTags(){
      this.meta.updateTag({ name: 'description', content: 'idk which field is this one!!' });
      this.meta.updateTag({ property: 'og:title', content: 'wow! embed! cool!' });
      this.meta.updateTag({ property: 'og:site_name', content: 'multimeter fanclub' });
      this.meta.updateTag({ property: 'og:description', content: 'Descrição legal!!' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:image', content: 'assets/images/icon.png' });
      this.meta.updateTag({ property: 'og:image:width', content: '256' });
      this.meta.updateTag({ property: 'og:image:height', content: '256' });
  }
}
