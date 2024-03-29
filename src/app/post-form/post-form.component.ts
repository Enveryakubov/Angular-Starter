import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  text = '';

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAdd.emit(post);

      this.title = this.text = '';
    }
  }

  focusTitle(el: HTMLInputElement) {
    el.focus();
  }
}
