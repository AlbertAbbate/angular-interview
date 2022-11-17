import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleAuthorComponent } from './single-author/single-author.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SingleAuthorComponent],
  exports: [SingleAuthorComponent],
})
export class SingleAuthorModule {}
