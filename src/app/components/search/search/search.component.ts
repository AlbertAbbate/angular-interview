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
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('input', { static: true }) input: ElementRef;
  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
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
          this.searchString =
            this.input.nativeElement.value != ''
              ? this.input.nativeElement.value
              : undefined;
          this.filterUsers();
        })
      )
      .subscribe();
  }

  filterUsers() {
    if (this.searchString) {
      this.searchResults = this.users.filter((user) =>
        user.username.toUpperCase().includes(this.searchString.toUpperCase())
      );
    } else this.searchResults = [];
  }

  navigateToDetail(userId: number) {
    this.router.navigateByUrl('/authors/' + userId, {
      state: { id: userId },
    });
  }
}
