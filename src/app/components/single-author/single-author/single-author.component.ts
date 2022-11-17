import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css'],
})
export class SingleAuthorComponent implements OnInit {
  @Input() author: User;
  constructor() {}

  ngOnInit() {}
}
