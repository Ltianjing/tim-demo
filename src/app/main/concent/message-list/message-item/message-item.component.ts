import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MsgItemIntf } from '../message-list.component';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() itemData: MsgItemIntf;
  @Output() itemClickEvent = new EventEmitter<MsgItemIntf>();

  onTitleClick(item: MsgItemIntf) {
    this.itemClickEvent.emit(item);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
