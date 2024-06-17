import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-leekspin',
  standalone: true,
  imports: [MatButtonModule
  ],
  templateUrl: './leekspin.component.html',
  styleUrl: './leekspin.component.scss'
})
export class LeekspinComponent {

  ngOnInit(){
    this.playSound();
  }

  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  
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

  constructor(private location: Location) {}

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
