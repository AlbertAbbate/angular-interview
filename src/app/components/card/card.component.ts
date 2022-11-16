import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

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

  constructor(private userService: UserService, private matDialog: MatDialog) {}

  ngOnInit() {
    if (this.post) {
      this.userService.getUser(this.post.userId).subscribe((user) => {
        this.user = user;
        this.getUserInitials(this.user.name);
        this.author = this.user.name;
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
    const dialogRef = this.matDialog.open(PostDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // const config: MatDialogConfig = {
  //   height: '100%',
  //   width: '100%',
  //   data,
  //   autoFocus: false,
  // };
  // this.matDialog.open(PostDialogComponent, config);
  // }
  openUserDetail(user: User) {}
}
