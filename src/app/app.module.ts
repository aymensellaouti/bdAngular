import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CvComponent } from './cv/cv/cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { CvDetailComponent } from './cv/cv-detail/cv-detail.component';
import { NotFound404Component } from './not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    CvComponent,
    NgstyleComponent,
    MiniwordComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    CvDetailComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
