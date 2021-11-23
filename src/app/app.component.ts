import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quiz';
  public currentQuestion: number = 1;
  public progress: number = 0;
  public answers : Array<any> = [
    "Atsakymas 1",
    "Atsakymas 2",
    "Atsakymas 3",
    "Atsakymas 4",
  ];
  constructor() {

  }

  nextQuestion(){
    this.currentQuestion;

    // this.progress = 
  }
}
