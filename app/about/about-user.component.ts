import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
	template: `
	<div *ngIf="user">
		<h1>{{user.name}} ({{user.username}})</h1>
		<img [src]="user.avatar" class="img-responsive img-circle">
	</div>
	`
})

export class AboutUserComponent{
	user;
	constructor(private route: ActivatedRoute){
	
	}
	ngOnInit() {
		//grab the current user
		let username = this.route.snapshot.params['username'];
		
		this.user = users.find(function(user){
			return user.username === username;
		})

	}
}
