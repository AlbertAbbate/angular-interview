import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css'],
})
export class SingleAuthorComponent implements OnInit {
  @Input() author: User;
  allPosts?: Post[];
  authorPosts: Post[] = [];
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => (this.allPosts = posts));
  }

  navigate() {
    this.router.navigateByUrl('/authors/' + this.author.id);
  }
}
