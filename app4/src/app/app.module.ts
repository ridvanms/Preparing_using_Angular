import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NumbersComponent } from './numbers/numbers.component';
import { heighLightDirective } from './basic-directives/heighlightDirective.directive';
import { BetterHighlightDirective } from './basic-directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NumbersComponent,
    heighLightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
