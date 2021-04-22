import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from "./app.component";
import { AddComponent } from "./app/add/add.component";

@NgModule({
imports:[
    BrowserModule,
    FormsModule,
    // UpgradeModule
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