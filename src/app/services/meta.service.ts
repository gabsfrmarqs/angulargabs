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
    // Remove existing tags
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('name="theme-color"');
    
    // Add new tags
    if (tags.title) {
      this.meta.addTags([
        { property: 'og:title', content: tags.title },
        { name: 'twitter:title', content: tags.title }
      ]);
    }
    if (tags.description) {
      this.meta.addTags([
        { property: 'og:description', content: tags.description },
        { name: 'twitter:description', content: tags.description }
      ]);
    }
    if (tags.image) {
      this.meta.addTags([
        { property: 'og:image', content: tags.image },
        { name: 'twitter:image', content: tags.image }
      ]);
    }
    if (tags.url) {
      this.meta.addTags([
        { property: 'og:url', content: tags.url }
      ]);
    }
    if (tags.color) {
      this.meta.addTags([
        { name: 'theme-color', content: tags.color }
      ]);
    }
    
    // Ensure type is set
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
