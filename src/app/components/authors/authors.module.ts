import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { SingleAuthorModule } from '../single-author/single-author.module';

@NgModule({
  imports: [CommonModule, SingleAuthorModule],
  declarations: [AuthorsComponent],
  exports: [AuthorsComponent],
})
export class AuthorsModule {}
