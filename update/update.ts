app.component('updateCtrl',{
templateUrl:'./index.html',
bindings:{
    data:''
},
controller :   class updateCtrl{ 
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
}});