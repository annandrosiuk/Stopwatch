import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material/material.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { DblclickService } from './services/dblclick.service';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DblclickService],
  bootstrap: [AppComponent],
})
export class AppModule { }
