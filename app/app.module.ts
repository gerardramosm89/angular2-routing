import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    appRouting,
		DashboardModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
