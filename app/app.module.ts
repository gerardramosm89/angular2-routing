import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUserComponent } from './about/about-user.component';
@NgModule({
  imports: [ BrowserModule,appRouting ],
  declarations: [ 
		AppComponent,
		HomeComponent,
	  AboutComponent,
		ContactComponent,
		NotFoundComponent,
		AboutUserComponent
	],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
