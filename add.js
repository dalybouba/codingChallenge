app.component('addCtrl',{
    templateUrl:'./index.html',
    bindings:{
        data:''
    },
controller : function () {
    this.saveEmp = function () {
        this.data = {};

        if (!angular.isDefined(this.firstName) || this.firstName === '') {
            alert('first name  is empty');
            return;
        }
        else if (!angular.isDefined(this.sirName) || this.sirName === '') {
            alert('sir name is empty');
            return;
        } else if (!angular.isDefined(this.isActive) || this.isActive === '') {
            alert('is active is empty');
            return;
        } else {
            this.data.firstName = this.firstName;
            this.data.sirName = this.sirName;
            this.data.isActive = this.isActive;
            console.log(this.data);
        }
        this.cancelModal();
        this.saveRecord(this.data);
    };

}});