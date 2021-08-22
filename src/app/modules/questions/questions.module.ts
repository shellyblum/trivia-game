import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../../app-routing.module';

import {QuestionsService} from "../services/questions.service";

import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import {questionsReducer} from '../state/questions.reducer';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "../state/questions.effects";
import {questionFeatureKey} from "../state/app.state";
import { QuestionsComponent } from './questions.component';

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(questionFeatureKey, questionsReducer),
    EffectsModule.forFeature([AppEffects]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    CarouselModule
  ],
  providers: [QuestionsService],
  exports: [QuestionsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class QuestionsModule { }