import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PetComponent } from './pet/pet.component';


const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "new", component: NewComponent},
  {path: "edit/:_id", component: EditComponent},
  {path: "pet/:_id", component: PetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
