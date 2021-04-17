app.component('updateCtrl',{
templateUrl:'./index.html',
bindings:{
    data:''
},
controller : function () {
    this.employee = {};
    function init() {
        this.person = this.dataUpdate;
    }
    this.finishEdit = function (index) {
        this.persons[index] = this.dataUpdate;
        this.edited = -1;
    };
    init();



}});