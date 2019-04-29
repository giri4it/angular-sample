import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ElectronicsComponent } from './category/electronics/electronics.component';
import { ClothesComponent } from './category/clothes/clothes.component';
import { CategoryModule } from './category/category/category.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CategoryModule,
    AngularFontAwesomeModule, BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
