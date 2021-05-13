import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessageList() {
    return this.http.get<MsgItemIntf[]>("http://localhost:5000/api/msg-list");
  }
}

export interface MsgItemIntf {
  id: string ;
  title: string;
  sender: string;
  sendTime: Date;
}