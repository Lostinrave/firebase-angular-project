import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quiz';
  public currentQuestion: number = 0;
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
    this.currentQuestion++;
    this.progress = this.currentQuestion / this.answers.length  * 100;
    console.log("Progress: " + this.progress);
  }
}
