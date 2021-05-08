import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './main/concent/contact-list/contact-list.component';
import { MessageListComponent } from './main/concent/message-list/message-list.component';
import { MyListComponent } from './main/concent/my-list/my-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'message-list', component: MessageListComponent },
      { path: 'contact-list', component: ContactListComponent },
      { path: 'my-list', component: MyListComponent },
      { path: '**', redirectTo: 'message-list', pathMatch: 'full' },
  ] },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
