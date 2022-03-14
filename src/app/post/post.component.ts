import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnChanges {
  @Input() post: Post | undefined;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {}

  removePost() {
    this.onRemove.emit(this.post?.id);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
