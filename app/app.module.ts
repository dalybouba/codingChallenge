import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from "./app.component";
import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";
import { ReadComponent } from "./read/read.component";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UpgradeModule
],
declarations :[
    AppComponent,
    AddComponent,
    UpdateComponent,
    ReadComponent
],
providers :[

],
bootstrap:[
    AppComponent
],
entryComponents:[

]
})
export class AppModule {}