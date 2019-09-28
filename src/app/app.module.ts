import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//enables ngmodel
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


















