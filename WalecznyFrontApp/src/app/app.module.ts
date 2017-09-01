import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListOfTaskComponent } from './components/list-of-task/list-of-task.component';
import { TaskComponent } from './components/task/task.component';
import { FocusOutDirective } from './directives/focus-out-directive'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListOfTaskComponent,
    TaskComponent,

    FocusOutDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
