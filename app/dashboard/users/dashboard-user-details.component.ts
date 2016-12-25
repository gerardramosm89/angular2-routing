import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
		<h1 *ngIf="user">{{ user.username }}</h1>
	`
})
export class DashboardUserDetailsComponent implements OnInit {
	user: User;
	constructor(private service: UserService, private route: ActivatedRoute){

	}

	ngOnInit(){
		this.route.params.forEach(params => {
			console.log(params);
    	let username = params['username'];
    	this.service.getUser(username).then(user => {
				return this.user = user;	
		});

	});
}

}
