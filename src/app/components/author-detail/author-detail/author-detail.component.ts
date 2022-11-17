import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  authorId?: number;
  author?: User;
  posts?: Post[];
  authorPosts: Post[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private postService: PostService
  ) {
    this.authorId = this.router.getCurrentNavigation().extras.state.id;
  }

  ngOnInit() {
    this.userService.getUser(this.authorId).subscribe((author) => {
      this.author = author;
    });
  }
}
