import { Posts } from './../models/posts.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-posts',
  templateUrl: './adicionar-posts.page.html',
  styleUrls: ['./adicionar-posts.page.scss'],
})
export class AdicionarPostsPage implements OnInit {

  post = {} as Posts;

  constructor() { }

  ngOnInit() {
  }

}
