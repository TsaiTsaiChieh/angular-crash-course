import { Component } from '@angular/core';
import {MyFirstService} from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss'],
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(private services: MyFirstService) {
    this.messages = services.getAllMessages()
    this.isSubmitted = this.messages.length > 0
  }

  deleteMessage(index: number) {
    this.services.deleteMessage(index)
  }
  onSubmit() {
    this.isSubmitted = true;
    this.services.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }
}
