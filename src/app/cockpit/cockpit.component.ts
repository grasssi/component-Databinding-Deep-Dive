import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCeated') blueprintrCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerContentOutput') ServerContentOutput :ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(namInput: HTMLInputElement) {
    this.serverCreated.emit({
       serverName: namInput.value,// Using Local References in Templates
        serverContent: this.ServerContentOutput.nativeElement.value // usin iterrpollation
       })
  }

  onAddBlueprint(namInput: HTMLInputElement) {
    this.blueprintrCreated.emit({ 
      serverName: namInput.value,
       serverContent: this.ServerContentOutput.nativeElement.value })
  }
}