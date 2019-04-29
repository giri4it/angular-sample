import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { ClothesComponent } from '../clothes/clothes.component';
import { CategoryRoutingModule } from '../category-routing/category-routing.module';

@NgModule({
  declarations: [ElectronicsComponent, ClothesComponent],
  imports: [
    CommonModule, CategoryRoutingModule
  ]
})
export class CategoryModule { }
