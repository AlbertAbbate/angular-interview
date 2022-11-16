import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private singleUserUrl = 'https://jsonplaceholder.typicode.com/users/';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(this.singleUserUrl + userId);
  }
}
