import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';



import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './main/title/title.component';
import { ConcentComponent } from './main/concent/concent.component';
import { MenuComponent } from './main/menu/menu.component';
import { MessageListComponent } from './main/concent/message-list/message-list.component';
import { ContactListComponent } from './main/concent/contact-list/contact-list.component';
import { MyListComponent } from './main/concent/my-list/my-list.component';
import { MessageItemComponent } from './main/concent/message-list/message-item/message-item.component';
import { MessageTitleComponent } from './main/title/message-title/message-title.component';
import { MyTitleComponent } from './main/title/my-title/my-title.component';
import { ContactTitleComponent } from './main/title/contact-title/contact-title.component';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TitleComponent,
    ConcentComponent,
    MenuComponent,
    MessageListComponent,
    ContactListComponent,
    MyListComponent,
    MessageItemComponent,
    MessageTitleComponent,
    MyTitleComponent,
    ContactTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NzSpaceModule,
    NzLayoutModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzMessageModule,
    NzAvatarModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
