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
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import {questionsReducer} from './state/questions.reducer';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "./state/questions.effects";
import {questionFeatureKey} from "./state/app.state";
import {QuestionsModule} from "./modules/questions.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(questionFeatureKey, questionsReducer),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    CarouselModule,
    ConfirmDialogModule,
    DialogModule,
    QuestionsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [QuestionsService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
