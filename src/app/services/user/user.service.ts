import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: string = "arpan";
  constructor() { }

  changeName() {
    this.userName = "Ashish";
  }
}
