import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { ClothesComponent } from '../clothes/clothes.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from '../category.component';

const routes: Routes = [{'path': 'category', component: CategoryComponent, children: [
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'clothes', component: ClothesComponent}
]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class CategoryRoutingModule { }
