import { Component,Input } from '@angular/core';
import { loggingService } from './services/loggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[loggingService]
})
export class AppComponent {
  title = 'app4';
  servers = [
    {name:"server1",content:"it's so cool"},
    {name:"server2",content:"it's so cool"}
  ]
  constructor(private loggingStatus:loggingService){}

  onServerAdded(feature:{name:string,content:string}){
    this.servers.push({
      name:feature.name,
      content:feature.content
    })
    this.loggingStatus.loggingService(feature.name);
  }

  
  
}
