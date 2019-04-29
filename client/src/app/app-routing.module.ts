import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ElectronicsComponent } from './category/electronics/electronics.component';
import { ClothesComponent } from './category/clothes/clothes.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent}
];

@NgModule({
  declarations: [
    CategoryComponent, ProductComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
