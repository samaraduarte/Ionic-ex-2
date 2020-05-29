import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  async getPosts(){
    const resposta = await this.http.get(this.posts).toPromise();
    return resposta;
  }
}
