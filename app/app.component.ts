import { Component } from "@angular/core";

@Component({
    selector: 'app',
    template: './app.html'
})
export class AppComponent {
    person
    persons

    deletRecord(id) {
        if (confirm('Are you sure you want to delete this?')) {
            this.persons.splice(id, 1);
        }
    };
    $http.get("./migration.json").then(response) {
        console.log(response.data.records);
        this.persons = response.data.records;
    });
    
    const modalInstance = null;
    addRecord() {
        modalInstance = this.$modal.open({
            animation: false,
            templateUrl: "./add.html",
            controller: 'addCtrl',
            scope: this,
            size: '',
            resolve: {
            }
        });
    }
    dataShow = {
        id: '0',
        firstName: 'ddd',
        sirName: 'ddd',
        isActive: 'true',
    }
    viewRecord(id) {
        console.log(id)
        if (id > 0) {
            $http.get('./migration.json')
    
                .then(function (response) {
                    var element = this.persons.find((el) => el.id == id);
                    this.dataShow.id = element.id;
                    this.dataShow.firstName = element.firstName;
                    this.dataShow.sirName = element.sirName;
                    this.dataShow.isActive = element.isActive;
                    console.log(element)
                    modalInstance = $modal.open({
                        animation: false,
                        templateUrl: './read.html',
                        controller: 'viewCtrl',
                        scope: this,
                        size: '',
                        resolve: {
                            records() {
                                return response.data;
                            }
                        }
                    });
                });
    
        }
    }
    editRecord(id) {
        if (id > 0) {
            get('./migration.json')
                .then(function (response) {
                    var element = this.persons.find((el) => el.id == id);
                    this.dataUpdate.id = element.id;
                    this.dataUpdate.firstName = element.firstName;
                    this.dataUpdate.sirName = element.sirName;
                    this.dataUpdate.isActive = element.isActive;
                    modalInstance = $modal.open({
                        animation: false,
                        templateUrl: './update.html',
                        controller: 'updateCtrl',
                        scope: this,
                        size: '',
                        resolve: {
                            record() {
                                return response.data;
                            }
                        }
                    });
                });
        }
    
    }





    constructor($http, $modal) { }

    //     this.edited = -1;
    // this.dataUpdate = {
    //     id: '0',
    //     firstName: 'ddd',
    //     sirName: 'ddd',
    //     isActive: 'true',
    // };

}


angular.element(document).ready(function () {
    angular.bootstrap(document.body, ['app'])
})









}