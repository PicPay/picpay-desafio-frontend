import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/Models/IUsers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  @Input() items: Array<IUser>;
  @Output() itemSelected = new EventEmitter<{ data: any}>();

  
    constructor() { }
  
    ngOnInit() {
    }
  
    clickItem(item: any){
      this.itemSelected.emit({ data: item })
    }
  }
