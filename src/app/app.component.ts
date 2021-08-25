import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';

import {QuestionsService} from "./services/questions.service";

import {questionsSelector} from "./state/questions.selectors";
import * as QuestionActions from "./state/questions.actions";
import {Question} from "./models/questions.model";
import {filter, tap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  ngOnInit() {
  }

}
