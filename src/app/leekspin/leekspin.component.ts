import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import { Location } from '@angular/common';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-leekspin',
  standalone: false,
  templateUrl: './leekspin.component.html',
  styleUrl: './leekspin.component.scss'
})
export class LeekspinComponent implements OnInit, OnDestroy {

  ngOnInit(){
    this.playSound();
    this.metaService.updateMetaTags({
      title: 'Leekspin - gabs\' hell',
      description: 'Ievan Polkka intensifies',
      image: 'https://marquesgabriel.dev/assets/images/leek.gif',
      color: '#00FF00'
    });
  }

  ngOnDestroy(){
    this.stopSound();
  }

  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private popstateListener: any;
  
  playSound() {
    if (!this.isPlaying) {
      this.audioElement = new Audio();
      this.audioElement.src = "assets/audio/polkka.wav";
      this.audioElement.loop = true;
      this.audioElement.load();
      this.audioElement.play();
      this.isPlaying = true;
    } else {
      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement.currentTime = 0; // Reset the audio to the beginning
        this.audioElement.play();
      }
    }
  }

  constructor(
    private location: Location,
    private metaService: MetaService
  ) {}

  stopSound() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0; // Reset the audio to the beginning
      this.isPlaying = false;
    }
  }
  
  goBack() {
    this.stopSound();
    this.location.back();
  }
}
