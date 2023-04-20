import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private submitAnswersUrl = 'api/submitAnswers'; // modify URL to match your backend API
  
  constructor(private http: HttpClient) { }

  submitAnswers(answers: Answer[]): Observable<any> {
    return this.http.post<any>(this.submitAnswersUrl, answers);
  }
}