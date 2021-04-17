angular.module('app').component('addCtrl',{
    templateUrl:'./index.html',
    bindings:{
        data:''
    },
controller : class addCtrl{
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

}});