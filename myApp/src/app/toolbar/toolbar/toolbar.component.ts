import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private isOpenMenu: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  OpenMenu(){
    if(this.isOpenMenu){

    }
  }
}
