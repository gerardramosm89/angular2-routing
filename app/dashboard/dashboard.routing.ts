import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';
export const dashboardRoutes: Routes = [
	{
		path: 'dashboard',
		children: [
			{
				path: '',
				canActivate: [AuthGuard],
				component: DashboardComponent,
			},
			{
				path: 'users',
				canActivateChild: [AuthGuard],
				component: DashboardUsersComponent,
				children: [
					{
						path: '',
						component: DashboardUsersHomeComponent
					},
					{
						path: ':username',
						canDeactivate: [ CanDeactivateGuard ],
						component: DashboardUserDetailsComponent
					}
				]
			}
		]
	}
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
