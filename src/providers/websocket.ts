import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WebSocket{
	public ws: $WebSocket;
  constructor() {
  	
  	this.init();
  }
  init(){

  }
  createWebSocket(){
  	this.ws = new $WebSocket('ws://localhost:8079/echo');
  	this.ws.connect();
  		this.ws.getDataStream().subscribe(
	    (msg)=> {
	      	console.log("next", msg.data);
	    	this.ws.close(true)
	    },
	    (msg)=> {
	      	console.log("error", msg);
	    },
	    ()=> {    
	      	console.log("complete");
	      	this.ws.close(false);
	    }
	);
  	this.listenWebSocket();
  }
  listenWebSocket(){
  	this.ws.onMessage(
	    (msg: MessageEvent)=> {	    	
        	console.log("onMessage ", msg.data);
	    },
	    {autoApply: false}
	);	
  }
  sendMsg(msg){  
  	this.createWebSocket();  	
  
 	this.ws.send(msg, WebSocketSendMode.Promise).then(
      	(T) => {
        	console.log("is send");
		},
		(T) => {
			console.log("not send");
		}
    );
  }
}