import { Component } from "@angular/core";

@Component({
    selector: 'add',
    templateUrl:'./app/add.html',
})
    

export  class AddComponent {
    data:{}={};
    firstName:string;
    sirName:string;
    isActive:boolean;
constructor () {}
    saveEmp() {       
            this.data = this.firstName;
            this.data = this.sirName;
            this.data = this.isActive;
            console.log(this.data);       
    };

};