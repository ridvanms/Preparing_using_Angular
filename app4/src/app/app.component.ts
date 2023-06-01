import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app4';
  servers = [
    {name:"server1",content:"it's so cool"},
    {name:"server2",content:"it's so cool"}
  ]

  onServerAdded(feature:{name:string,content:string}){
    this.servers.push({
      name:feature.name,
      content:feature.content
    })
  }

  
  
}
