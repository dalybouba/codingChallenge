import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { AddComponent } from "./add/add.component";
@NgModule({
imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
],
declarations :[
    AppComponent,
    AddComponent
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