import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path:"add",
    component: AddProductComponent
  },
  {
    path:'add/:id',
    component: AddProductComponent
  },
  {
    path: ":id",
    component: DetailsProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}
