import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket?: Socket;
  public socketStatus: boolean = false;

  constructor() {}

  connect(){
    this.socket = io( 'http://10.19.40.59:3000/' , 
      { 
        transports: ["websocket"],
        forceNew: true
      }
    )

    this.checkStatus();

  }


  checkStatus() {

    this.socket!.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket!.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  disconnect() {
    this.socket!.disconnect();
  }
}
