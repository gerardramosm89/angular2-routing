import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
export class User {
  id:number;
  name: string;
  username: string;
  avatar: string;
}

@Component({
	styles[`
		img {
			max-width:300px;
			margin:20px auto;
		}
	`],
	template: `
	<div class="jumbotron" *ngIf="user">
		<h1>{{user.name}} ({{user.username}})</h1>
		<img [src]="user.avatar" class="img-responsive img-circle">
	</div>
	`
})

export class AboutUserComponent{
	user;
	constructor(private service: UserService, private route: ActivatedRoute){
	
	}
	ngOnInit() {
		//grab the current user
		let username = this.route.snapshot.params['username'];
		this.service.getUser(username).then(user => this.user = user);	

	}
}
