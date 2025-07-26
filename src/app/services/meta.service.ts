import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta) {}

  updateMetaTags(tags: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    color?: string;
  }) {
    if (tags.title) {
      this.meta.updateTag({ property: 'og:title', content: tags.title });
    }
    if (tags.description) {
      this.meta.updateTag({ property: 'og:description', content: tags.description });
    }
    if (tags.image) {
      this.meta.updateTag({ property: 'og:image', content: tags.image });
    }
    if (tags.url) {
      this.meta.updateTag({ property: 'og:url', content: tags.url });
    }
    if (tags.color) {
      this.meta.updateTag({ name: 'theme-color', content: tags.color });
    }
  }
}
