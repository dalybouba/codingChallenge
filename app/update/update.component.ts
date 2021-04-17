import { Component } from "@angular/core";

@Component({
    selector: 'update',
    templateUrl:'./update.html',
})
    export   class UpdateComponent { 
    person:{};
    dataUpdate:{};
    persons:any;
    edited:number
constructor () {}
    
    ngOnInit() {
        this.person = this.dataUpdate;
    }
    finishEdit(index) {
        this.persons[index] = this.dataUpdate;
        this.edited = -1;
    }
}