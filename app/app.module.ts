import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";
import { ReadComponent } from "./read/read.component";
@NgModule({
imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
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