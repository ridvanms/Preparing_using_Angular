import { Component,Input,inject,OnInit } from '@angular/core';
import { loggingService } from './services/loggingService.service';
import { ServerService } from './services/serversService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[loggingService,ServerService]
})
export class AppComponent implements OnInit {
  title = 'app4';
  
  servers: {name:string,content:string}[] = [];

  private loggingService?: loggingService;
  private serverService: ServerService;
  constructor(){
     this.loggingService = inject(loggingService)
     this.serverService = inject(ServerService)
  }
  ngOnInit(): void {
    this.servers = this.serverService?.servers
  }
  onServerAdded(feature:{name:string,content:string}){
    
    this.serverService?.addServer(feature)
    this.loggingService?.loggingService(feature.name);
  }
  
}
