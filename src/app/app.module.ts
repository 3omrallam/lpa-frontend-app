import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
