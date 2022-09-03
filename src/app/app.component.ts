import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Photos',
      url: '/photos',
      icon: 'image-outline'
    },
  ];

  constructor() {}
}
