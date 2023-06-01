import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NumbersComponent } from './numbers/numbers.component';
import { heighLightDirective } from './basic-directives/heighlightDirective.directive';
import { BetterHighlightDirective } from './basic-directives/better-highlight.directive';
import { UnlessDirective } from './basic-directives/unless.directive';
import { DropdownDirective } from './basic-directives/dropdown.directive';
import { loggingService } from './services/loggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NumbersComponent,
    heighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [loggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
