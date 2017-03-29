import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '16c32afb60e5f0556fba';
  private client_secret = '9062767c15aafa9d2585d146632620fe9e299bf3';

  constructor(
    private _http: Http 
  ) {
    console.log('Github Service Ready...');
    this.username='amnotafraid';
  }

  getUser() {
  return this._http.get('http://api.github.com/users/' +
                            this.username + 
                            '?client_id='+this.client_id +
                            '&client_secret='+this.client_secret)
    .map(res => res.json()); // returns an Observable in JSON format
  }

  getRepos() {
  return this._http.get('http://api.github.com/users/' +
                            this.username + 
                            '/repos'+
                            '?client_id='+this.client_id +
                            '&client_secret='+this.client_secret)
    .map(res => res.json()); // returns an Observable in JSON format
  }

  updateUser(username:string) {
    this.username = username;
  }
}
