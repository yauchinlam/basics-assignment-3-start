import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `.increment {
      color: white;
    }`
  ]
})
export class ServerComponent implements OnInit {
  public displayParagraph=false;
  public counters = [0];
  public c_number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getParagraph()
  {
    this.displayParagraph=!this.displayParagraph;
    this.c_number++;
    this.counters.push(this.c_number);
  }

  getBackgroundColor(counter:number)
  {
    return counter>4 ? "blue":"white";
  }
}
