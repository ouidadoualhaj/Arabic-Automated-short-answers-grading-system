import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
 
   
        private fetchQuestionsUrl = 'api/fetchQuestions'; // modify URL to match your backend API
        
        constructor(private http: HttpClient) { }
      
        fetchQuestions(): Observable<Question[]> {
          return this.http.get<Question[]>(this.fetchQuestionsUrl);
        }
      }

