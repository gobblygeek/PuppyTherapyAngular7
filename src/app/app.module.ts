import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DogService } from "./services/dog.services"
import { DogComponent } from './components/dog/dog.component';
import { AppComponent } from "./app.component";
import { FilterPipe } from './components/search.pipe';
import { DogCategoryComponent } from './components/dog/categories.component';

@NgModule({
  declarations: [AppComponent,FilterPipe DogComponent,DogCategoryComponent],
  imports: [BrowserModule,FormsModule, HttpClientModule, AppRoutingModule],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
