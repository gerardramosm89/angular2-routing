import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../shared/services/user.service';

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
	users: Users[];
	constructor(private service: UserService){
	
	}
	ngOnInit(){
		this.service.getUsers().then(users => this.users = users);
	}
}
