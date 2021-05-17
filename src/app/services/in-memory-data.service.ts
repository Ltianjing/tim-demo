import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MsgItemIntf } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const messages: MsgItemIntf[] = [
      { id: '1', title: 'hello', sender: '李一', sendTime: new Date() },
      { id: '2', title: 'Hi!', sender: '李二', sendTime: new Date() },
      { id: '3', title: '哦吼', sender: '刀马', sendTime: new Date() },
    ];
    return { messages };
  }

  constructor() {}
}
