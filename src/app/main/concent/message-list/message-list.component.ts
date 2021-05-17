import { Component, OnInit } from '@angular/core';
import { MessageService, MsgItemIntf } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  MessageList: MsgItemIntf[];

  constructor(private messageService: MessageService) {
    this.messageService.getMessageList().subscribe((data:MsgItemIntf[]) => {
      this.MessageList = data;
    });
  }

  ngOnInit(): void {}
  onItemClick(item: MsgItemIntf) {
    console.log(item);
  }
}
