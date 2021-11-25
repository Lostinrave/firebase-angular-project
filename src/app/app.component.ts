import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quiz';
  public currentQuestion: number = 0;
  public progress: number = 0;
  public answers: Array<any> = [];
  public quizQuestions: Array<any> = [];
  public quiz: any = {};


  constructor(db: AngularFireDatabase) {
    db.object('quizes/abc').valueChanges().subscribe((data: any) => {
      console.warn("Quiz data:");
      this.quiz = data;
      this.quizQuestions = data.questions;

      console.warn(this.quizQuestions);
    });
  }

  nextQuestion() {
    if (this.progress < 100) {
      this.currentQuestion++;
      this.countProgress();
    }
  }

  previousQuestion() {
    if (this.progress > 1) {
      this.currentQuestion--;
      this.countProgress();
    }
  }

  countProgress() {
    let questionsCount = Object.keys(this.quizQuestions).length;
    this.progress = (this.currentQuestion) / questionsCount * 100;
    console.log("Progress: " + this.progress);
  }
}
