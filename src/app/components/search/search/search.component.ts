import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('input', { static: true }) input: ElementRef;
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}
  searchString?: string;
  posts?: Post[];
  users?: User[];
  searchResults?: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(800),
        distinctUntilChanged(),
        tap((event: KeyboardEvent) => {
          this.searchString = this.input.nativeElement.value;
          this.filterUsers();
        })
      )
      .subscribe();
  }

  filterUsers() {
    this.searchResults = this.users.filter((user) =>
      user.username.toUpperCase().includes(this.searchString.toUpperCase())
    );
    console.log(this.searchResults);
  }
}
