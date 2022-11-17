import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { CardModule } from '../card/card.module';

@NgModule({
  imports: [CommonModule, CardModule],
  declarations: [AuthorDetailComponent],
  exports: [AuthorDetailComponent],
})
export class AuthorDetailModule {}
