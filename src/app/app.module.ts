import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { StorageService } from './services/storage.service';
import { TodoService } from './services/todo.service';
import { ToDoComponent } from './components/to-do/to-do.component';

@NgModule({
  declarations: [ AppComponent, ToDoComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [StorageService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
