import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  isDetailOpened: boolean = false;
  posts?: Post[];
  selectedPost?: Post;
  selectedPostUser?: User;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  handleButton(event: { post: Post; user: User }) {
    this.selectedPostUser = event.user;
    this.selectedPost = event.post;
    this.isDetailOpened = !this.isDetailOpened;
  }

  handleClose(event: boolean) {
    this.isDetailOpened = !this.isDetailOpened;
  }
}
