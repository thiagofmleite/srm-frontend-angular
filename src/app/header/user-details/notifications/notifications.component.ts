import { Component, OnInit } from '@angular/core';
import { Notification } from './Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];

  constructor() {
    for (let index = 0; index < 3; index++) {
      this.notifications.push({
        text: `Notificação #${index}`
      });
    }
   }

  ngOnInit() {
  }

}
