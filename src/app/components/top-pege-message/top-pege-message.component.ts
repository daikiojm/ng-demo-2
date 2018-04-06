import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-pege-message',
  templateUrl: './top-pege-message.component.html',
  styleUrls: ['./top-pege-message.component.css']
})
export class TopPegeMessageComponent implements OnInit {
  message = 'ボタンを押して住所を探してみましょう';
  constructor() { }

  ngOnInit() {
  }

}
