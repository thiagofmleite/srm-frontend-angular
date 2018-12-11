import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor() {
    this.user = { name: 'Sandra Oliveira' };
  }

  ngOnInit() {
  }

}
