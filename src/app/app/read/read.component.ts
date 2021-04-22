
import { Component } from "@angular/core";

@Component({
    selector: 'read',
    templateUrl:'./read.html',
})
    export  class ReadComponent {
        dataShow:{};
        person:{};
    constructor () { }
     ngOnInit() {
        this.person = this.dataShow;
     }


}