import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
