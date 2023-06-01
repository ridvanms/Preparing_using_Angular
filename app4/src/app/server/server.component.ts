import { Component,ViewChild,ElementRef,EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @ViewChild("serverName",{static:false}) serverName?: ElementRef;
  @ViewChild("serverContent",{static:false}) serverContentRef?:ElementRef;
  @Output() serverAdded = new EventEmitter<{name:string,content:string}>();

  constructor(){}
  ngOnInit() {
    
  }
 

  onAddServer(serverName:HTMLInputElement,serverContent:HTMLInputElement){
     this.serverAdded.emit({
      name:serverName.value,
      content:serverContent.value
    })
    serverName.value = ""; 
    serverContent.value = ""; 
  }
} 
