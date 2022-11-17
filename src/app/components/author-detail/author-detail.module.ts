import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthorDetailComponent],
  exports: [AuthorDetailComponent],
})
export class AuthorDetailModule {}
