import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestion() {
    let url = 'https://opentdb.com/api.php?amount=1&encode=base64&type=multiple';
    return this.http.get(url);
  }

  // getQuestions() {
  //   const question = this.getQuestion();
  //   return question.pipe(take(10));
  // }
}
