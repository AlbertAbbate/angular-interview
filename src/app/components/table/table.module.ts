import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { CardModule } from '../card/card.module';
import { PostDialogModule } from '../post-dialog/post-dialog.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  imports: [CommonModule, CardModule, PostDialogModule, SearchModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
