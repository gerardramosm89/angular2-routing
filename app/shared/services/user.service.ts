import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
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

]);
@Injectable()
export class UserService{
	

	getUsers(){
		return usersPromise;
	}

	getUser(username) {

		return usersPromise.then(users => users.find(user => user.username === username));
	}
}
