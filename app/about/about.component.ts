import { Component } from '@angular/core';

export class User {
	id:number;
	name: string;
	username: string;
	avatar: string;
}
const users: User[] = [
	{
		id: 1,
		name: 'Gerry',
		username: 'gerardramosm89',
		avatar: 'https://avatars3.githubusercontent.com/u/22526582?v=3&s=460'
	},
  {
    id: 2,
    name: 'Chris',
    username: 'csawtelle',
		avatar: 'https://avatars1.githubusercontent.com/u/12061655?v=3&s=400'
  }

]
@Component({
  selector: 'about-page',
	styles:[`
		.profile-card {
			background: #f3f3f3;
			border-radius: 4px;
			padding:30px;
			text-align: center;
		}
	`],
	template: `
	<div class="row" *ngIf="users">
		<div class="col-xs-3" *ngFor="let user of users">
			<div class="profile-card" [routerLink]="['/about',user.username]">
		<img [src]="user.avatar" class="img-responsive img-circle">

		<h2>{{ user.name }}</h2>
		<p><a href="http://github.com/{{user.username}}">{{ user.username }}</a></p>
			</div>
		</div>
	</div>
	`
})

export class AboutComponent {
	users: Users[] = users;
}
