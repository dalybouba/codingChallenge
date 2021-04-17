import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { ReadComponent } from "./read/read.component";
import { UpdateComponent } from "./update/update.component";


const routes: Routes = [
{
    path:'add',
    component:AddComponent
},
{
    path:'update',
    component:UpdateComponent
},
{
    path:'read',
    component:ReadComponent
},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }