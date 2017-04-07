import { Injectable } from '@angular/core';
import { APIKEY } from '../../conf/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MusicService {	
	private path:string;
	private query:any;
	private topArtists: BehaviorSubject<any>;
	private topTracks: BehaviorSubject<any>;

  	constructor(public http: Http){ 

  		this.init();
  	}

  	resetQuery(){

  		this.query = {};
  		this.path = 'http://ws.audioscrobbler.com/2.0/?api_key=' + APIKEY + '&format=json';
  	}

	init(){
		
		this.resetQuery();
		this.topArtists = new BehaviorSubject(this.getTopArtists());
		this.topTracks = new BehaviorSubject(this.getTopTracks());
	}

	setParam( key:any, value:string){

		this.query[key] = value;
	}

	getTopArtists(){

		this.setParam( 'method', 'geo.gettopartists');
		this.setParam( 'country', 'spain');	
		this.generateUrl();	

		this.getRequest().subscribe( (response => {
       	 	this.resetQuery();
       	 	this.topArtists.next(Object.assign({}, JSON.parse(response['_body'])));
       	}).bind(this))
	}

	getTopTracks(){

		this.setParam( 'method', 'geo.getTopTracks');
		this.setParam( 'country', 'spain');	
		this.generateUrl();	

		this.getRequest().subscribe( response => {
       	 	this.resetQuery();
       	 	this.topTracks.next(Object.assign({}, JSON.parse(response['_body'])));
       	})	
	}

	generateUrl(){

		Object.keys(this.query).map( key =>{
			this.path += '&' + key + '=' + this.query[key]
		}, this)
	}

	getRequest(){

		return this.http.get(this.path)              
	}

	getData(param){

		return  this[param].asObservable();
	}
}