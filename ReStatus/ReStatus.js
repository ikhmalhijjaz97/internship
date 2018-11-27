(function () {
    var controllerId = 'app.views.ReStatus.ReStatus';
    angular.module('app').controller(controllerId, ['$scope', 'abp.services.app.reqStatus',
        function(scope, reqservice) {

            var vm = this;
            vm.filter = [];
            vm.data = [];
            vm.datasearch;
            vm.search = function (data) {
                if (data === "ID") { 
                    document.getElementById("reqid").style.display="" ;
                }
                else if (data === "ACC") {
                    document.getElementById("Acc").style.display="" ;
                }
                else if (data === "BRANCH") {
                    document.getElementById("branchse").style.display = "";

                } 
                else {
                    alert("do something");
                }
            }

            vm.searchdata = function (data) {
                if (vm.filter === "ID") {
                    reqservice.searchbyID(data).then(function (result) {
                        vm.data = result.data;
                    });
                }
                else if (vm.filter === "ACC") {
                    reqservice.searchbyACC(data).then(function (result) {
                        vm.data = result.data;
                    });
                }
                else if (vm.filter === "BRANCH") {
                    alert("not yet");
                }
                else {

                }
            }


        }]);
})();