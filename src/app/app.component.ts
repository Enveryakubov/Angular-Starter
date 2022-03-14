import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Title 1', text: 'Some sample text here', id: 1 },
    { title: 'Title 2', text: 'Another sample text here', id: 2 },
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
