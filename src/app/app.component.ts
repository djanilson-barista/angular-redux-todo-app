import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo App: Angular + Redux';
  subtitle = `
    this app is a simple study of integrate Angular and NgRx. Which is an approach to creating reactive applications with Angular;
  `;
}
