import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
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
    if (this.router.getCurrentNavigation()?.extras?.state?.id) {
      this.authorId = this.router.getCurrentNavigation()?.extras?.state?.id;
    } else console.error("Non è stato caricato l'id");
  }

  ngOnInit() {
    if (this.authorId) {
      this.userService.getUser(this.authorId).subscribe((author) => {
        this.author = author;
      });
      this.postService.getPosts().subscribe((posts) => {
        this.posts = posts;
        this.authorPosts = this.posts.filter(
          (post) => post.userId === this.authorId
        );
      });
      console.log(this.authorPosts);
    } else {
      console.error("Manca l'id");
    }
  }
}
