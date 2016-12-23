import { ModuleWithProviders } from'@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUserComponent } from './about-user.component';
import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
  { path: 'about', component: AboutComponent },
	{ path: 'about/:username', component: AboutUserComponent }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
