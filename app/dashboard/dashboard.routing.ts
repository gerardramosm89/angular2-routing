import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
	{
		path: 'dashboard',
		children: [
			{
				path: '',
				component: DashboardComponent,
			},
			{
				path: 'users',
				component: DashboardUsersComponent,
				children: [
					{
						path: '',
						component: DashboardUsersHomeComponent
					},
					{
						path: ':username',
						component: DashboardUserDetailsComponent
					}
				]
			}
		]
	}
];

export const dashboardRouting: ModuleWithProvider = RouterModule.forChild(dashboardRoutes);
