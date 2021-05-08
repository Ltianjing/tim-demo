import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  msgText: string = ""

  constructor(
    private messageService: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!(this.userName.length && this.password.length)) {
      // this.messageService.warning("请输入用户名和密码！");
      this.msgText = "请输入用户名和密码"
      return;
    }
    this.router.navigate(['/main']);

    
  }

}