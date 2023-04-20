import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question-service';
import { AnswerService } from '../answer/answer-service';
import { Answer } from '../answer/answer';




@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent {
  showQuiz = false;
  showInstructions = true;
  currentQuestionIndex = 0;
  currentQuestion!: Question;
  currentAnswer: Answer = { questionId: 0, text: '' };
  questions: any =  [
    { id: 1,
    text: 'ffffffffffffffff',
   
    },
    {  id: 2,
      text: 'jjjjjjjjjjjj',
    },
    {
      id: 3,
      text: 'mmmmmmmmmmmmmmmmmmmmmmm',
    }
    ];

  constructor(private questionService: QuestionService, private answerService: AnswerService) { }

  ngOnInit(): void {
    this.fetchQuestions();
  }
  

  startQuiz() {
    this.showQuiz = true;
    this.showInstructions=false;
  }

  fetchQuestions(): void {
    this.questionService.fetchQuestions()
      .subscribe(questions => {
        this.questions = this.questions;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.currentAnswer.questionId = this.currentQuestion.id;
      });
  }

  submitAnswer(): void {
    this.answerService.submitAnswers([this.currentAnswer])
      .subscribe(() => {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.currentQuestion = this.questions[this.currentQuestionIndex];
          this.currentAnswer = { questionId: this.currentQuestion.id, text: '' };
        } else {
          console.log('All answers submitted!');
        }
      });
      this.currentQuestionIndex++;
    //(this.currentQuestionIndex < this.questions.length) 
    if (this.currentQuestionIndex < 3) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.currentAnswer = { questionId: this.currentQuestion.id, text: '' };
    } else {
      console.log('No more questions!');
    }
  }
  }

