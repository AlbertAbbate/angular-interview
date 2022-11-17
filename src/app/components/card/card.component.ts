import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post: Post;
  @Output() buttonEmitter = new EventEmitter<{ post: Post; user: User }>();
  user?: User;
  userInitials?: string;
  author?: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.post) {
      this.userService.getUser(this.post.userId).subscribe((user) => {
        this.user = user;
        this.getUserInitials(this.user.name);
        this.author = this.user.username;
      });
    } else {
      console.error("Non c'è il post");
    }
  }

  getUserInitials(name: string) {
    if (name) {
      this.userInitials = '';
      let allNames = name.split(' ');
      for (let i = 0; i < allNames.length; i++) {
        this.userInitials += allNames[i].charAt(0);
      }
    } else console.error('Nome utente mancante');
  }
  showDetails(data: Post) {
    this.buttonEmitter.emit({ post: data, user: this.user });
    // const dialogRef = this.matDialog.open(PostDialogComponent);
    // dialogRef.afterClosed().subscribe(() => {
    // });

    // return dialogRef.afterClosed();
  }

  openUserDetail(user: User) {
    this.router.navigateByUrl('/authors/' + user.id, {
      state: { id: user.id },
    });
  }
}
