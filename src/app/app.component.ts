import { Component } from "@angular/core";

@Component({
    selector:'migration-app',
    template:''
})
export class AppComponent {



    

    $http.get("./migration.json").then( (response) {
        console.log(response.data.records);
        this.persons = response.data.records;
    });

    var modalInstance = null;
    addRecord() {
        modalInstance = $modal.open({
            animation: false,
            templateUrl: "./add.html",
            controller: 'addCtrl',
            scope: this,
            size: '',
            resolve: {
            }
        });
    }
    this.dataShow = {
        id: '0',
        firstName: 'ddd',
        sirName: 'ddd',
        isActive: 'true',
    }
    viewRecord (id) {
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
                            records: function () {
                                return response.data;
                            }
                        }
                    });
                });

        }
    }
    editRecord (id) {
        if (id > 0) {
            $http.get('./migration.json')
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
                            record: function () {
                                return response.data;
                            }
                        }
                    });
                });
        }

    }
    this.edited = -1;
    this.dataUpdate = {
        id: '0',
        firstName: 'ddd',
        sirName: 'ddd',
        isActive: 'true',
    };
    deletRecord(id) {
        if (confirm('Are you sure you want to delete this?')) {
            this.persons.splice(id, 1);
        }
    }
}