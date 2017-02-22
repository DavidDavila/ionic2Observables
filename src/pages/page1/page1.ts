import { Component } from '@angular/core';
import { MusicService } from '../../providers/musicService/';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
	selector: 'page-page1',
	templateUrl: 'page1.html'
})
export class Page1 {
	 @ViewChild('artistsSlider') artistsSlider: Slides;
	 @ViewChild('tracksSlider') tracksSlider: Slides;


	private topArtists:any;
	private topTracks:any;
	private countArtists:number;
	private countTracks:number;
 	constructor(public navCtrl: NavController, private _musicService: MusicService) {  
 		this.countArtists = 0;
		this.countTracks = 0;
 		this.init();
  	}
  	init(){
  		this._musicService.getData('topArtists').subscribe( result => {
  			this.topArtists = result					
		});  
		this._musicService.getData('topTracks').subscribe( result => {
			this.topTracks = result;
			console.log(result)
		});  
  	}
  	slideChanged(param, slider) {
	    this[param] = this[slider].getActiveIndex();
	}
}
