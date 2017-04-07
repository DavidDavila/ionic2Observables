import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebSocket } from '../../providers/websocket';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [ WebSocket ]
})
export class MapPage {
	public lat: number;
	public lng: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _websocket: WebSocket) {
 		this.lat = 40.420088;
  	this.lng = -3.688810; 
  	this.sendMsg('Ionic App Start')
  }
  sendMsg(msg){
  	this._websocket.sendMsg(msg)
  }
}
