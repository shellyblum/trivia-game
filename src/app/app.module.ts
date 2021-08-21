import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {QuestionsService} from "./services/questions.service";

import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import * as questionsReducer from './state/questions.reducer';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "./state/questions.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ questionsList: questionsReducer.reducer }),
    EffectsModule.forFeature([AppEffects]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    CarouselModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
