import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutModule } from './about/about.module';
@NgModule({
  imports: [ BrowserModule,appRouting,AboutModule,FormsModule ],
  declarations: [ 
		AppComponent,
		HomeComponent,
		ContactComponent,
		NotFoundComponent,
	],
	providers:[ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
