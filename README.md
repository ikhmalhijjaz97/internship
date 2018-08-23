    <div ng-app="app" ng-controller="app.views.newbooks.book as vm">
        <div>
           
            
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card main-content">

                    <div class="header">
                        <h2>
                            Book
                        </h2>
                        <div class="col-md-12">
                            <button ng-click="vm.openModalforNew()" ng-show="vm.add()" class="btn btn-primary pull-right"><i class="fa fa-plus"></i>New Author</button>
                        </div>
                        <div class="col-md-12">
                            <input class="form-group-sm" ng-model="inputVal" />
                            <button ng-click="vm.showsearch(inputVal)" class="btn btn-primary pull-left" data-toggle="modal">Search</button>
                        </div>
                        <div class="col-md-12">
                           
                            <script>var hijjaz = document.getElementsByTagName("textarea")</script>

                          
                            <text></text>
                        </div>
                       

                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Book Name</th>
                                    <th>Category Id</th>
                                    <th>Date Created</th>
                                    <th>Page Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-repeat="user in vm.books">
                                    <td>{{user.bookName}}</td>
                                    <td>{{user.categoryId}}</td>
                                    <td>{{user.dateCreated}}</td>
                                    <td>{{user.pageNum}}</td>
                                    <td>
                                        <button ng-click="vm.openUserEditModal(user)" class="btn btn-primary btn-xs" data-title="Edit"><span class="glyphicon glyphicon-pencil"></span></button>
                                        <button ng-click="vm.delete(user)" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    <div id="Booklist" name="userEditform" class="modal fade" role="dialog" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">@L("Books")</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>@L("BookName")</label>
                        <input auto-focus class="form-control" type="text" name="AuthorName" ng-model="vm.book.bookName" />
                    </div>
                    <div class="form-group">
                        <label>@L("CategoryId")</label>
                     
                        <select class="form-control" ng-model="vm.book.categoryId">
                            <option ng-repeat="Cate in vm.Cate" value={{Cate.id}}> {{Cate.bookName}}</option>
                        </select>


                    </div>
                  
                    <div class="form-group">
                        <label>@L("PageNumber")</label>
                        <input auto-focus class="form-control" type="text" name="AuthorName" ng-model="vm.book.pageNum;" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" ng-click="vm.edit(vm)" ng-show="vm.showEdit" data-dismiss="modal" ><i class="fa fa-save"></i><span>Save</span></button>
                    <button type="submit" class="btn btn-primary" ng-click="vm.save(vm)" data-dismiss="modal" ng-show="vm.showSubmit"><i class="fa fa-save"></i><span>Create</span></button>
                </div>
            </div>
        </div>
    </div>



    <div id="Search" name="userEditform" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">@L("Books")</h4>
                </div>
                <div class="modal-body">
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="user in vm.hold">
                 
                                <td>{{user.bookName}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                   </div>
            </div>
        </div>

    </div>
   </div>
   
   
   
   
   ####secong
   (function () {
    var controllerId = 'app.views.newbooks.book';
    angular.module('app').controller(controllerId, [
        '$scope', 'abp.services.app.books','abp.services.app.category',
        function ($scope,booksService, categoryService) {
            debugger
            var vm = this;
            debugger
            vm.books = [];
            vm.showEdit = true;
            vm.showSubmit = false;
            vm.book = {
                
                bookName: '',
                categoryId: '',
                dateCreated: '',
                pageNum: ''
            };
            function getlist() {
                booksService.listAll()
                    .then(function (result) {
                    vm.books = result.data;
                });
            }


            // search part
            vm.datasearch = [];
            vm.hold = [];
            vm.word = [];
            var vm = this;

            
            // search part
            
            function getlisttrial(input2) {
                booksService.listAll()
                    .then(function (result) {
                        vm.datasearch = result.data;
                        for (var i = 0, hijjaz = 0, m = 0; i < vm.datasearch.length, m < vm.datasearch.length; i++) {
                            if (vm.datasearch[i].bookName == input2[m]) {
                                vm.hold[hijjaz] = vm.datasearch[i];
                                hijjaz++;
                            }
                            if (i == 3) {
                                i = 0;
                                m++;
                            }
                         
                        }
                    });
                
           
            }
            vm.showsearch = function (inputVal) {
                $('#Search').modal('show');
                
                var input2 = [];
                input2 = inputVal.split(" ");
                getlisttrial(input2);

            }

            //function Actionresult (word){
            //    if (word != null) {
            //        return View(db.GdexApps.Where(x = > x.Name.StartsWith(word) || search == null).ToList());
            //    }
            //}
            // category ID
            function getCategories() {
                debugger
                categoryService.listAll()
                    .then(function (result) {
                        vm.Cate = result.data;
                    })
            }
          
            getCategories();
            // button click 
            //new
            vm.openModalforNew = function () {
                $('#Booklist').modal('show');
              //  vm.book.id = '';
                vm.book.bookName = '';
                vm.book.categoryId= '';
                vm.book.pageNum = '';
                vm.showEdit = false;
                vm.showSubmit = true;

            }
            
           

            //edit
            vm.openUserEditModal = function (user) {
                debugger
                $('#Booklist').modal('show');
                vm.books.id = user.id;
                vm.book.bookName = user.bookName;
                vm.book.dateCreated = user.dateCreated;
                vm.book.categoryId = user.categoryId;
                vm.book.pageNum = user.pageNum;

                vm.showEdit = true;
                vm.showSubmit = false;
                vm.entity = user;
                
            }

            //edit which is update

            vm.edit = function (data) {
                debugger
                var x = {};
                x = vm.entity;
                x.id = vm.entity.id;
                x.bookName = data.book.bookName;
                x.categoryId = data.book.categoryId;
                x.dateCreated = data.book.dateCreated;
                x.pageNum = data.book.pageNum;
               
                


                abp.ui.setBusy();
                booksService.update(x).then(function () {
                    abp.notify.info("saved Sucess");
                    $uibModalInstance.close();
                })
                    .finally(function () {
                        abp.ui.clearBusy();
                        getlist();
                    });
            }



            // create
            vm.save = function (data) {
                abp.ui.setBusy();
                booksService.create(vm.book)
                    .then(function () {
                    abp.notify.info("saved Sucess");
                    $uibModalInstance.close();
                })
                    .finally(function () {
                        abp.ui.clearBusy();
                        getlist();
                    });
            }



            // deleet 
            vm.delete = function (user) {
                abp.message.confirm(
                    "Delete user '" + user.bookName + "'?",
                    function (result) {
                        if (result) {
                            booksService.delete({ id: user.id })
                                .then(function () {
                                    abp.notify.info("Deleted Book: " + user.bookName);
                                   
                                });
                        }
                       
                    });
                getList();
            }


            getlist();

           
        }
    ]);
})();
