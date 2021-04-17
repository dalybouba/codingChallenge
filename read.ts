
app.component('viewCtrl',{
    
    templateUrl:'./read.html',
    bindings:{
        data:''
    },
    controller : class viewCtrl{
        dataShow:{};
        person:{};
    constructor () { }
     ngOnInit() {
        this.person = this.dataShow;
     }


}});