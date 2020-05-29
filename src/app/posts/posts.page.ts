import { Posts } from './../models/posts.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  post: Posts[] = [];
  resposta;

  postsPorPag: Posts[] = [];
  private index = 0;
  private offset = 15;

  valorBarra = 0;

  constructor(private servicePost: PostsService, private toastController: ToastController) {
    setInterval(() => {
      this.valorBarra += 0.03;
    }, 500);
  }


  async ngOnInit() {
    this.mostrarToast();
    this.carregarDados(event);
  }

  async mostrarToast(){
    const toast = await this.toastController.create({
    message: 'Bem vindo!',
    duration: 1000
    });
    toast.present();
  }

  async carregarDados(event){

    this.resposta = await this.servicePost.getPosts();
    this.post = this.resposta;

    this.postsPorPag = this.post.slice(this.index, this.offset + this.index);
    this.index += this.offset;

    setTimeout(() => {
      const newPost = this.post.slice(this.index, this.offset + this.index);
      this.index += this.offset;
      for (let i = 0; i < newPost.length; i++){
        this.postsPorPag.push(newPost[i]);
      }
      event.target.complete();
      if (this.post.length === 100){
        event.target.disable = true;
      }
    }, 500);
  }

}
