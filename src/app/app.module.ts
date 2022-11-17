import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './components/card/card.module';
import { TableModule } from './components/table/table.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { AuthorsComponent } from './components/authors/authors/authors.component';
import { AuthorsModule } from './components/authors/authors.module';
import { AuthorDetailComponent } from './components/author-detail/author-detail/author-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'posts',
    component: TableComponent,
  },
  {
    path: 'authors',
    component: AuthorsComponent,
  },
  {
    path: 'authors/:id',
    component: AuthorDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    TableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NavbarModule,
    AuthorsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
