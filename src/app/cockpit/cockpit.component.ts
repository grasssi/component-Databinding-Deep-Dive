import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCeated') blueprintrCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(namInput: HTMLInputElement) {
    this.serverCreated.emit({
       serverName: namInput.value,
        serverContent: this.newServerContent })
  }

  onAddBlueprint(namInput: HTMLInputElement) {
    this.blueprintrCreated.emit({ 
      serverName: namInput.value,
       serverContent: this.newServerContent })
  }
}