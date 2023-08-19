import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  messages: Array<any> = []

  constructor() { 
    this.init()
  }
  init(): void {
    this.insert({
      name: 'TC',
      email: 'jecica196@gmail.com',
      message: 'test'
    })
    this.insert({
      name: 'John',
      email: 'John@gmail.com',
      message: 'Hello'
    })
    this.insert({
      name: 'Amy',
      email: 'amy@gmail.com',
      message: 'World'
    })
  }
  insert(message: {name: string, 
    email: string,
    message: string
  }):void {
    this.messages.push(message)
  }

  getAllMessages() {
    return this.messages
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1)
  }
}
