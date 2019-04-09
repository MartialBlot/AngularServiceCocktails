import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CocktailService} from './cocktail.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from  '@angular/common/http';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
