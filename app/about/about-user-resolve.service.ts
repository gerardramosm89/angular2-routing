import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Injectable()

export class AboutUserResolve implements Resolve<User> {
	constructor(private router: Router, private service: UserService){
	
	}
	
	resolve(route: ActivatedRouteSnapshot){
		let username = route.params['username'];

		return this.service.getUser(username).then(user => {
			if (user) {
				console.log("This user from service.getUser is: ", user);
				return user;
			} else {
				this.router.navigate['/about'];
				return false;
			}
		});
	}
}
