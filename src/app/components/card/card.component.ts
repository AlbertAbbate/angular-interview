import { Component, Input, OnInit } from '@angular/core';
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
  user?: User;
  userInitials?: string;
  author?: string;

  constructor(private userService: UserService) {}
  ngOnInit() {
    if (this.post) {
      this.userService.getUser(this.post.userId).subscribe((user) => {
        this.user = user;
        this.getUserInitials(this.user.name);
        this.getAuthor();
      });
    } else {
      console.error("Non c'è il post");
    }
  }

  getAuthor() {
    if (this.user) {
      this.author = this.user.name.split(' ')[0];
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
  showDetails() {}
}
