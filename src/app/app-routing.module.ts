import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementListComponent } from './ann-list/ann-list.component';
import { AnnouncementComponent } from './ann-item/ann-item.component';

const routes: Routes = [
  {
    path: 'ann-list',
    component: AnnouncementListComponent
  },
  {
    path: 'ann-item/:id',
    component: AnnouncementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
