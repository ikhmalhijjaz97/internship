# internsh
 <div ng-app="app" ng-controller="app.views.newauthors.author as vm">
        <div id="AuthorList" name="userEditform" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">@L("cCtegory")</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>@L("Category")</label>
                            <input auto-focus class="form-control" type="text" name="AuthorName" ng-model="vm.author.userName" />
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" ng-click="vm.edit(vm)" data-dismiss="modal" ng-show="vm.showSubmit"><i class="fa fa-save"></i><span>Create</span></button>
                        <button type="submit" class="btn btn-primary" ng-click="vm.save(vm)" data-dismiss="modal" ng-show="vm.showEdit"><i class="fa fa-save"></i><span>Save</span></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card main-content">
                <button ng-click="vm.openModalforNew()" class="btn btn-primary pull-right"><i class="fa fa-plus"></i>New Author</button>
                <div class="header">
                    <h2>
                        @L("Category")
                    </h2>
                </div>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>@L("ID")</th>
                            <th>@L("Category")</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="user in vm.users">
                            <td>{{user.id}}</td>
                            <td>{{user.Category}}</td>
                            
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
