import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent implements OnInit {
  @Input() post?: Post;
  @Input() user?: User;
  @Output() closeEmitter = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeEmitter.emit(true);
  }
}
