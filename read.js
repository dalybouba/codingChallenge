
app.component('viewCtrl',{
    
    templateUrl:'./read.html',
    bindings:{
        data:''
    },
    controller :function () {
    function init() {
        this.person = this.dataShow;
    }
    init();

}]);