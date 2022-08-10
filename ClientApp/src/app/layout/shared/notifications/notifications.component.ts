import { Component, OnInit } from '@angular/core';
import { fa } from 'src/app/shared/readModel/fontAwesomeConstants';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public notificationList:any = [
    { 
      text: 'Lorem Ipsum is simply dummy text',
      isActive: true,
      subText: 'It is a long established fact that a reader will be distracted.',
      icon: 'uil uil-comment-message',
      bgColor: 'primary',
      redirectTo: '/',
      showProgressBar: true,
      progressValue: 75,
      dateTime: '07/20/2022 05:05:59'
    },
    { 
      text: 'Lorem Ipsum is simply dummy text',
      subText: 'It is a long established fact that a reader will be distracted.',
      icon: 'uil uil-comment-message',
      bgColor: 'primary',
      redirectTo: '/',
      showProgressBar: true,
      progressValue: 25,
      dateTime: '07/20/2022 05:05:59'
    }
  ];
  fa:any = fa;

  constructor() { }

  ngOnInit(): void {
  }

}