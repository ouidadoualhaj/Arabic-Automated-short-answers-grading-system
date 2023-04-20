import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
  
})
export class AnswerComponent {
  @Input() question: any 
  @Input() set text(answer: string) {
    this._text = answer;
    this.textChange.emit(answer);
    }
    get text(): string {
    return this._text;
    }
    @Output() textChange = new EventEmitter<string>();
    private _text = '';
    @Input() questionId!: number; 
    }