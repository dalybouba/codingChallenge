var app = angular.module("mainApp", ['ui.bootstrap']);
app.controller('people', ['$scope', '$http', '$uibModal', function ($scope, $http, $modal) {



    $http.get("./migration.json").then(function (response) {
        console.log(response.data.records);
        $scope.persons = response.data.records;
    });

    var modalInstance = null;
    $scope.addRecord = function () {
        modalInstance = $modal.open({
            animation: false,
            templateUrl: "./add.html",
            controller: 'addCtrl',
            scope: $scope,
            size: '',
            resolve: {
            }
        });
    }
    $scope.dataShow = {
        id: '0',
        firstName: 'ddd',
        sirName: 'ddd',
        isActive: 'true',
    }



    $scope.viewRecord = function(id){
        console.log(id)
        if(id > 0) {
          $http.get('./migration.json')
          
            .then(function(response){
                var element= $scope.persons.find((el)=> el.id == id);
                $scope.dataShow.id= element.id;
                $scope.dataShow.firstName= element.firstName;
                $scope.dataShow.sirName= element.sirName;
                $scope.dataShow.isActive= element.isActive;
                console.log(element)
                modalInstance = $modal.open({
                  animation: false,
                  templateUrl: './view_record.html',
                  controller: 'empViewCtrl',
                  scope: $scope,
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
}]);
app.controller('addEmpCtrl', ['$scope', function ($scope) {
    $scope.saveEmp = function () {
        $scope.data = {};

        if (!angular.isDefined($scope.firstName) || $scope.firstName === '') {
            alert('first name  is empty');
            return;
        }
        else if (!angular.isDefined($scope.sirName) || $scope.sirName === '') {
            alert('sir name is empty');
            return;
        } else if (!angular.isDefined($scope.isActive) || $scope.isActive === '') {
            alert('is active is empty');
            return;
        } else {
            $scope.data.firstName = $scope.firstName;
            $scope.data.sirName = $scope.sirName;
            $scope.data.isActive = $scope.isActive;
            console.log($scope.data);
        }
        $scope.cancelModal();
        $scope.saveRecord($scope.data);
    };

}]);



app.controller('empViewCtrl',  ['$scope', function($scope) {
	function init(){
        $scope.person = $scope.dataShow;
    }
	init();
	
}]);
