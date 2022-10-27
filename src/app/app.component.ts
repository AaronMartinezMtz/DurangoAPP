import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Durango';

  constructor( private socketService: SocketService ){}

  ngOnInit(): void {
    this.socketService.connect()
  }


}
