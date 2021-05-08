import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  MsgList: MsgItemIntf[] = [
    { id: '1', title: 'user1', sender: 'ss', sendTime: new Date() },
    // { id: '2', title: 'user2', sender: 'ss', sendTime: new Date() },
    // { id: '3', title: 'user3', sender: 'ss', sendTime: new Date() },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onItemClick(item: MsgItemIntf) {
    console.log(item);
  }

}


export interface MsgItemIntf {
  id: string ;
  title: string;
  sender: string;
  sendTime: Date;
}
