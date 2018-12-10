

(function () {
    var controllerId = 'app.views.InboundBags.InboundBag';
    angular.module('app').controller(controllerId,
        ['$scope', 'abp.services.app.pARAMETERS', 'abp.services.app.branch','appSession','$rootScope','abp.services.app.station',
            function ($scope, paraService, branchservice, appSession,$rootScope,stationser) {
                //debugger
                var vm = this;
                var rootdeprt;
                 $scope.user = appSession.user.userName;
                $scope.userid = $scope.user;
                $scope.$watch('crrtst', function () {
                    $scope.var = $rootScope.crrtst;
                    rootdeprt = $scope.var;
                });
                //var user = appSession.user.id;
 $('#table2').hide;
                var check = [];
                vm.branches = [];
                vm.datainsert = {
                    cOrderID: '',
                    cTrxCode: '',
                    cType: '',
                    cTypeCd: '',
                    cPrtCode: '',
                    xQtty: '',
                    xPrtQtty: '',
                    xApprQtty: '',
                    xCancelCnt: '',
                    dUnitPrice: '',
                    cTypeDesc: '',
                    cImpReq: '',
                    cSenderInd: '',
                    cActno: '',
                    cAppvDept: '',
                    cChargeTo: '',
                    cCNFor: '',
                    cDesc: '',
                    cReceiverInd: '',
                    cRecAcc: '',
                    cRequestRemark: '',
                    cstatus: '',
                    cPrintReq: '',
                    cBrno: '',
                    cBrActno: '',
                    cCreatedBrno: '',
                    cCreatedBy: '',
                    dCreated: '',
                    cCBP: '',
                    cCBPRvr: '',
                    cCBPDept: '',
                    cCBPSender: '',
                    cUpdatedBy: '',
                    dUpdateBy: '',
                    cApprovedBy: '',
                    dApprovedBy: '',
                    cPrintedBy: '',
                    dtPrinted: '',
                    cAcknwBy: '',
                    cAcknwBrno: '',
                    dAcknw: '',
                    cStartNo: '',
                    cEndNO: '',
                    cSubActno: '',
                    cRejectRemark: '',
                    cActionRemark: '',
                    cCNTypeCode: '',
                    cSenderAcc: '',
                    PrintTypeGrp: '',
                    cEmailTo: '',
                    cRequestDept:''
                };
                 vm.insert = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                     remark: '',
                     cntype: '',
                     cngroup: '',
                     referno: '',
                     cRequestDept: ''

                };
                var insert0 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''

                };
                var insert1 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''

                };
                var insert2 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''

                };
                var insert3 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''


                };
                var insert4 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''

                };
                var insert5 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''


                };
                var insert6 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''


                };
                var insert7 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''


                };
                var insert8 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''


                };
                var insert9 = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: '',
                    dropname: '',
                    subcname: '',
                    cntype: '',
                    cngroup: '',
                    referno: '',
                    cRequestDept: ''


                };
       // vm.insert3 = [];

              
        vm.bol = false;
        vm.getcn = [];
        vm.getsubcn = [];
        vm.account = [];
        vm.referencecode=[];
                vm.appear = [];
                vm.appearhtml = [];
                var branch1 = {
                   // description: '',
                    origin_code: ''
                };
                vm.branch = [];
                vm.branch2 = [];
                vm.branch3 = [];
        //var data2 = [];
                var data2 = "";
                var count = 0;
                var group1;
                var numcount = 0;
                vm.count1 = [];
                vm.count1.push(0);
        vm.getsubcnfor = '';
                vm.getcnfor = '';
                vm.date = [];
                var type;
                var refno;
                var group;
                vm.reg;
                //refresh();
                function getdatafromDB() {
                    branchservice.getID().then(function (result) {
                        vm.date = result.data;
                    });
                };


                paraService.getreg($scope.user).then(function (result) {
                    vm.reg = result.data;
                    if (vm.reg[0].region !== "" && vm.reg[0].region === "Special") {
                        paraService.regforSpecial($scope.user).then(function (result) {
                            vm.branch2 = result.data;
                            for (var spec = 0; spec < vm.branch2.length; spec++) {
                                stationser.getRegion({ origin_code: vm.branch2[spec].station }).then(function (result) {
                                    vm.branch3 = result.data;
                                    vm.branch.push(vm.branch3);
                                });
                            }
                        }); 
                    }
                    else if (vm.reg[0].region !== "" && vm.reg[0].region !== "Special") {
                        paraService.regforRM(vm.reg[0].region).then(function (result) {
                            vm.branch = result.data;
                        });
                    }
                    else if (vm.reg[0].region !== "" && vm.reg[0].region === "HQ") {
                        paraService.getb().then(function (result) {
                            vm.branch = result.data;
                        });
                    }


                    else {
                        branch1.origin_code = vm.reg[0].station;
                        stationser.getRegion(branch1).then(function (result) {
                            vm.branches.push(result.data);
                            if (vm.branches.origin_code === "PJY") {
                                paraService.getb().then(function (result) {
                                    vm.branch = result.data;
                                });
                            }
                            //vm.branch.push(branch1);
                        });
                       
                    }
                });

                //paraService.getb().then(function (result) {
                //    vm.branch = result.data;
                //    vm.insert.dropcode = "";
                //    vm.insert.subcn = "";
                //    vm.insert.caccountno = "";
                //    vm.insert.quantity = "";
                //    vm.insert.remark = "";
                //   //
                //});
        paraService.getCN1().then(function (result) {
            vm.getcn = result.data;
            getdatafromDB();
        });

        //document.getElementById("cntype1").addEventListener('change', function () {
        //    //for (var i = 0; i < vm.getcn.length; i++) {
        //    //    if (vm.getcn[i].desc === vm.insert.desc) {
        //    //        vm.getcnfor = vm.getcn[i].dropcode;
        //    //    }
        //    //}
        //    
        //   
        //});
                vm.changeinval = function (data1, data2) {
                    var quantity1 = document.getElementById('quantity');

                    var changequantity = parseInt(quantity1.innerHTML);
                    var checkchar = isNaN(data1);
                    var evalue = data1 % 50;
                    if (data1 !== "" && (data1 < 30 || checkchar === true)) {
                        //if () {
                        //    //if (evalue !== 0) {

                        //    //}

                        //} else
                        if (data1 < 30) {
                            document.getElementById('quanremark').innerHTML = "the quantity should be more than 30";
                            document.getElementById('quanremark').style.color = "red";
                            document.getElementById("addbutton").disabled = true;
                        } else {
                            return;
                        }
                        if (checkchar === true) {
                            document.getElementById('char').innerHTML = "the quantity should not have character";
                            document.getElementById('char').style.color = "red";
                            document.getElementById("addbutton").disabled = true;
                        }
                    } else if (evalue !== 0 && vm.insert.dropcode === "91" && (data2 === "9913" || data2 === "9914")) {
                        document.getElementById('quanremark').innerHTML = "the quantity should be multiple of 50";
                        document.getElementById('quanremark').style.color = "red";
                        document.getElementById("addbutton").disabled = true;
                    }
                    //else if () {
                    //    //if (data.insert.dropcode === "91" && (data.insert.subcn === "9913" && data.insert.subcn === "9914")) {
                    //    //    document.getElementById('quanremark').innerHTML = "the quantity should be multiple of 50";
                    //    //    document.getElementById('quanremark').style.color = "red";
                    //    //} else {
                    //    //    document.getElementById('quanremark').innerHTML = "the quantity should be more than 30";
                    //    //    document.getElementById('quanremark').style.color = "red";
                    //    //}

                    //    document.getElementById('char').innerHTML = "the quantity should not have character";
                    //    document.getElementById('char').style.color = "red";
                    //    document.getElementById("addbutton").disabled = true;
                    //}
                    else {
                        document.getElementById('quanremark').innerHTML = "";
                        document.getElementById('quanremark').style.color = "";
                        document.getElementById('char').innerHTML = "";
                        document.getElementById('char').style.color = "";
                        document.getElementById('addbutton').disabled = false;
                    }
                };
                vm.change = function (data) {
                  //  vm.insert.dropcode = "";
                    vm.insert.subcn = "";
                    vm.insert.caccountno = "";
                    vm.insert.quantity = "";
                    vm.insert.remark = "";
                   // vm.insert.branch = "";
                    paraService.getsubCN(data).then(function (result) {
                        vm.getsubcn = result.data;
                    });
                };


        vm.changesub = function (data) {
            if (vm.insert.getsubcn !== "") {
               // vm.insert.dropcode = "";
              //  vm.insert.subcn = "";
                vm.insert.caccountno = "";
                vm.insert.quantity = "";
                vm.insert.remark = "";
              //  vm.insert.branch = "";
                paraService.gataccount(vm.insert.dropcode, data, vm.insert.branch).then(function (result) {
                    vm.account = result.data;
                });
            }
        }

        // every time user click submit all array should reset

                vm.add = function (data) {
                    if (data.insert.dropcode !== "" && data.insert.subcn !== "" && data.insert.caccountno !== null && data.insert.caccountno !== "" && data.insert.quantity !== "") {
                    paraService.cnt(data.insert.caccountno).then(function (result) {
                        type1 = result.data;
                        // getdata2(datain);
                        //  var checkfo = getdata(data.insert.caccountno);

                     

                            if (type1[0].cCNTypeCode !== "") {

                                for (var i = 0; i < check.length; i++) {
                                    if (data.insert.caccountno === check[i]) {
                                       // alert("");
                                        swal("the account number already exist");
                                        return;
                                    }
                                }
                                for (var dat = 0; dat < vm.date.length; dat++) {
                                    if ( data.insert.caccountno === vm.date[dat].cActno) {
                                        // alert("");
                                        swal("the account number already exist in database");
                                        return;
                                    }
                                }
                                check.push(data.insert.caccountno);


                                paraService.cng(type1[0].cCNTypeCode).then(function (result) {
                                    group1 = result.data;
                                if (count === 0) {
                                    //insert0.NO = count;
                                    insert0.branch = data.insert.branch;
                                    insert0.dropcode = data.insert.dropcode;
                                    insert0.subcn = data.insert.subcn;
                                    insert0.caccountno = data.insert.caccountno;
                                    insert0.quantity = data.insert.quantity;
                                    insert0.remark = data.insert.remark;
                                    insert0.cntype = type1[0].cCNTypeCode;
                                    insert0.cngroup = group1[0].printtypegrp;
                                    insert0.cRequestDept = rootdeprt;
                                    //  insert0.cngroup = getdata2(insert0.cntype);
                                    for (var drop = 0; drop < vm.getcn.length; drop++) {
                                        if (vm.getcn[drop].dropcode === data.insert.dropcode) {
                                            insert0.dropname = vm.getcn[drop].desc;
                                        }
                                    }
                                    for (var drop1 = 0; drop1 < vm.getsubcn.length; drop1++) {
                                        if (vm.getsubcn[drop1].dropcode === data.insert.subcn) {
                                            insert0.subcname = vm.getsubcn[drop1].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert0);
                                }
                                else if (count === 1) {
                                    //insert1.NO = count;
                                    insert1.branch = data.insert.branch;
                                    insert1.dropcode = data.insert.dropcode;
                                    insert1.subcn = data.insert.subcn;
                                    insert1.caccountno = data.insert.caccountno;
                                    insert1.quantity = data.insert.quantity;
                                    insert1.remark = data.insert.remark;
                                    insert1.cntype = type1[0].cCNTypeCode;
                                    insert1.cngroup = group1[0].printtypegrp;
                                    insert1.cRequestDept = rootdeprt;
                                    for (var drop11 = 0; drop11 < vm.getcn.length; drop11++) {
                                        if (vm.getcn[drop11].dropcode === data.insert.dropcode) {
                                            insert1.dropname = vm.getcn[drop11].desc;
                                        }
                                    }
                                    for (var drop111 = 0; drop111 < vm.getsubcn.length; drop111++) {
                                        if (vm.getsubcn[drop111].dropcode === data.insert.subcn) {
                                            insert1.subcname = vm.getsubcn[drop111].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert1);
                                }
                                else if (count === 2) {
                                    //insert2.NO = count;
                                    insert2.branch = data.insert.branch;
                                    insert2.dropcode = data.insert.dropcode;
                                    insert2.subcn = data.insert.subcn;
                                    insert2.caccountno = data.insert.caccountno;
                                    insert2.quantity = data.insert.quantity;
                                    insert2.remark = data.insert.remark;
                                    insert2.cntype = type1[0].cCNTypeCode;
                                    insert2.cngroup = group1[0].printtypegrp;
                                    insert2.cRequestDept = rootdeprt;
                                    for (var drop9 = 0; drop9 < vm.getcn.length; drop9++) {
                                        if (vm.getcn[drop9].dropcode === data.insert.dropcode) {
                                            insert2.dropname = vm.getcn[drop9].desc;
                                        }
                                    }
                                    for (var drop19 = 0; drop19 < vm.getsubcn.length; drop19++) {
                                        if (vm.getsubcn[drop19].dropcode === data.insert.subcn) {
                                            insert2.subcname = vm.getsubcn[drop19].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert2);
                                }
                                else if (count === 3) {
                                    //insert3.NO = count;
                                    insert3.branch = data.insert.branch;
                                    insert3.dropcode = data.insert.dropcode;
                                    insert3.subcn = data.insert.subcn;
                                    insert3.caccountno = data.insert.caccountno;
                                    insert3.quantity = data.insert.quantity;
                                    insert3.remark = data.insert.remark;
                                    insert3.cntype = type1[0].cCNTypeCode;
                                    insert3.cngroup = group1[0].printtypegrp;
                                    insert3.cRequestDept = rootdeprt;
                                    for (var drop8 = 0; drop8 < vm.getcn.length; drop8++) {
                                        if (vm.getcn[drop8].dropcode === data.insert.dropcode) {
                                            insert3.dropname = vm.getcn[drop8].desc;
                                        }
                                    }
                                    for (var drop18 = 0; drop18 < vm.getsubcn.length; drop18++) {
                                        if (vm.getsubcn[drop18].dropcode === data.insert.subcn) {
                                            insert3.subcname = vm.getsubcn[drop18].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert3);
                                }
                                else if (count === 4) {
                                    //insert4.NO = count;
                                    insert4.branch = data.insert.branch;
                                    insert4.dropcode = data.insert.dropcode;
                                    insert4.subcn = data.insert.subcn;
                                    insert4.caccountno = data.insert.caccountno;
                                    insert4.quantity = data.insert.quantity;
                                    insert4.remark = data.insert.remark;
                                    insert4.cntype = type1[0].cCNTypeCode;
                                    insert4.cngroup = group1[0].printtypegrp;
                                    insert4.cRequestDept = rootdeprt;
                                    for (var drop7 = 0; drop7 < vm.getcn.length; drop7++) {
                                        if (vm.getcn[drop7].dropcode === data.insert.dropcode) {
                                            insert4.dropname = vm.getcn[drop7].desc;
                                        }
                                    }
                                    for (var drop17 = 0; drop17 < vm.getsubcn.length; drop17++) {
                                        if (vm.getsubcn[drop17].dropcode === data.insert.subcn) {
                                            insert4.subcname = vm.getsubcn[drop17].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert4);
                                }
                                else if (count === 5) {
                                    //insert5.NO = count;
                                    insert5.branch = data.insert.branch;
                                    insert5.dropcode = data.insert.dropcode;
                                    insert5.subcn = data.insert.subcn;
                                    insert5.caccountno = data.insert.caccountno;
                                    insert5.quantity = data.insert.quantity;
                                    insert5.remark = data.insert.remark;
                                    insert5.cntype = type1[0].cCNTypeCode;
                                    insert5.cngroup = group1[0].printtypegrpp1;
                                    insert5.cRequestDept = rootdeprt;
                                    for (var drop6 = 0; drop6 < vm.getcn.length; drop6++) {
                                        if (vm.getcn[drop6].dropcode === data.insert.dropcode) {
                                            insert5.dropname = vm.getcn[drop6].desc;
                                        }
                                    }
                                    for (var drop16 = 0; drop16 < vm.getsubcn.length; drop16++) {
                                        if (vm.getsubcn[drop16].dropcode === data.insert.subcn) {
                                            insert5.subcname = vm.getsubcn[drop16].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert5);
                                }
                                else if (count === 6) {
                                    //insert6.NO = count;
                                    insert6.branch = data.insert.branch;
                                    insert6.dropcode = data.insert.dropcode;
                                    insert6.subcn = data.insert.subcn;
                                    insert6.caccountno = data.insert.caccountno;
                                    insert6.quantity = data.insert.quantity;
                                    insert6.remark = data.insert.remark;
                                    insert6.cntype = type1[0].cCNTypeCode;
                                    insert6.cngroup = group1[0].printtypegrp;
                                    insert6.cRequestDept = rootdeprt;
                                    for (var drop5 = 0; drop5 < vm.getcn.length; drop5++) {
                                        if (vm.getcn[drop5].dropcode === data.insert.dropcode) {
                                            insert6.dropname = vm.getcn[drop5].desc;
                                        }
                                    }
                                    for (var drop15 = 0; drop15 < vm.getsubcn.length; drop15++) {
                                        if (vm.getsubcn[drop15].dropcode === data.insert.subcn) {
                                            insert6.subcname = vm.getsubcn[drop15].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert6);
                                }
                                else if (count === 7) {
                                    //insert7.NO = count;
                                    insert7.branch = data.insert.branch;
                                    insert7.dropcode = data.insert.dropcode;
                                    insert7.subcn = data.insert.subcn;
                                    insert7.caccountno = data.insert.caccountno;
                                    insert7.quantity = data.insert.quantity;
                                    insert7.remark = data.insert.remark;
                                    insert7.cntype = type1[0].cCNTypeCode;
                                    insert7.cngroup = group1[0].printtypegrp;
                                    insert7.cRequestDept = rootdeprt;
                                    for (var drop4 = 0; drop4 < vm.getcn.length; drop4++) {
                                        if (vm.getcn[drop4].dropcode === data.insert.dropcode) {
                                            insert7.dropname = vm.getcn[drop4].desc;
                                        }
                                    }
                                    for (var drop14 = 0; drop14 < vm.getsubcn.length; drop14++) {
                                        if (vm.getsubcn[drop14].dropcode === data.insert.subcn) {
                                            insert7.subcname = vm.getsubcn[drop14].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert7);
                                }
                                else if (count === 8) {
                                    //insert8.NO = count;
                                    insert8.branch = data.insert.branch;
                                    insert8.dropcode = data.insert.dropcode;
                                    insert8.subcn = data.insert.subcn;
                                    insert8.caccountno = data.insert.caccountno;
                                    insert8.quantity = data.insert.quantity;
                                    insert8.remark = data.insert.remark;
                                    insert8.cntype = type1[0].cCNTypeCode;
                                    insert8.cngroup = group1[0].printtypegrp;
                                    insert8.cRequestDept = rootdeprt;
                                    for (var drop3 = 0; drop3 < vm.getcn.length; drop3++) {
                                        if (vm.getcn[drop3].dropcode === data.insert.dropcode) {
                                            insert8.dropname = vm.getcn[drop3].desc;
                                        }
                                    }
                                    for (var drop13 = 0; drop13 < vm.getsubcn.length; drop13++) {
                                        if (vm.getsubcn[drop13].dropcode === data.insert.subcn) {
                                            insert8.subcname = vm.getsubcn[drop13].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert8);
                                }
                                else if (count===9) {
                                    //insert9.NO = count;
                                    insert9.branch = data.insert.branch;
                                    insert9.dropcode = data.insert.dropcode;
                                    insert9.subcn = data.insert.subcn;
                                    insert9.caccountno = data.insert.caccountno;
                                    insert9.quantity = data.insert.quantity;
                                    insert9.remark = data.insert.remark;
                                    insert9.cntype = type1[0].cCNTypeCode;
                                    insert9.cngroup = group1[0].printtypegrp;
                                    insert9.cRequestDept = rootdeprt;
                                    for (var drop2 = 0; drop2 < vm.getcn.length; drop2++) {
                                        if (vm.getcn[drop2].dropcode === data.insert.dropcode) {
                                            insert9.dropname = vm.getcn[drop2].desc;
                                        }
                                    }
                                    for (var drop12 = 0; drop12 < vm.getsubcn.length; drop12++) {
                                        if (vm.getsubcn[drop12].dropcode === data.insert.subcn) {
                                            insert9.subcname = vm.getsubcn[drop12].desc;
                                        }
                                    }
                                    vm.appearhtml.push(insert9);
                                }
                                else{
                                    //sweetAlert("warning", "", ""); \
                                    swal("you have insert more than 10");
                                    return;
                                }
                                    $('#table2').show;
                                    document.getElementById("tablediv").style.display = "";
                                   // clearall();
                                    count++;
                                  
                                //for (var inc = 0; inc < vm.count1.length; inc++) {
                                //    if (inc === vm.count1.length) {
                                //        vm.count1.push(inc);
                                //    }
                                //}
                                document.getElementById("refercode").style.display = "none";
                                // document.getElementById("table2").style.removeProperty('display');
                                });
                            } else {
                              //  alert();
                                swal("Sub Account Type is empty, Please check with Sales Support Department");
                            }
                      
                    });
                       
                
                }
                        else {
                    //alert("");
                    swal("data not complete");
                }

                  
                };

                vm.delete = function (data) {
                    for (var i = 0; i < vm.appearhtml.length; i++) {
                        if (vm.appearhtml[i].caccountno === data) {
                            vm.appearhtml.splice(i, 1);
                            vm.appear.splice(i, 1);
                            check.splice(i, 1);
                            count--;
                            vm.count1.splice(i, 1);
                            //
                            //if (i !== 0 && i !== (vm.appear.length - 1)) {

                            //    //vm.appear.shift();
                            //    //vm.appear.concat(array2);
                            //    if (i === 1) {
                            //        vm.appear.splice(i, i);
                            //        vm.appearhtml.splice(i, i);
                            //        check.splice(i, i);
                            //        vm.count1.splice(i, i);
                            //    } else {
                            //        vm.appear.splice(i, (i - 1));
                            //        vm.appearhtml.splice(i, (i-1));
                            //        check.splice(i, (i - 1));
                            //        vm.count1.splice(i, i - 1);
                            //    }
                            //    count--;



                            //}
                            //else if (i === (vm.appearhtml.length - 1)) {
                            //    vm.appear.pop();
                            //    vm.appearhtml.pop();
                            //    check.pop();
                            //    vm.count1.pop;
                            //    count--;
                            //}
                            //else {
                            //    vm.appear.shift();
                            //    vm.appearhtml.shift();
                            //    check.shift();
                            //    vm.count1.shift;
                            //    count--;
                            //}

                            //for (var j = 0; j < (check.length - 1); j++) {
                            //    if (check[i] === data) {
                            //        check[i].splice(i-1,i);
                            //    }
                            //}

                        }
                    }
                    return;
                };


                // insert data
                function insertdatato(insertdata) {                  
                    branchservice.create(insertdata, $scope.user).then(function () {
                        abp.notify.info("Saved Successfully");
                        $('#refercodetable').modal("show");
                        document.getElementById("tablediv").style.display = "none";
                        clearall();
                        vm.reset();
                        getdatafromDB();
                    });
                   //document.getElementById("refercodetable").style.display = "";
                  
                   
                };
                //function getdata(datain) {
                //    var type1;
                //    ///vm.referencecode.splice(0);
                //    paraService.cnt(datain).then(function (result) {
                //        type1 = result.data;
                //       // getdata2(datain);
                       
                //        return type1;
                //    });
                    
                //};


                //function getdata2(datain) {
                //    var group1;
                //    //var type1 = (type[0].cCNTypeCode).toString();
                //    //if(type1 !=="") {
                //    paraService.cng(datain).then(function (result) {
                //        group1 = result.data;
                //        insert0.cngroup = group1;
                       
                //        //getdata3(datain, group1[0].printtypegrp);
                //    });
                    
                 //   }
                 //else {
                 //       paraService.cngdef().then(function (result) {
                 //           group = result.data;
                 //           getdata3(datain);
                 //       });
                 //           }
            
                vm.create = function () {
                    createafter(vm.appearhtml.length);
                };
   
    function createafter(numcount) {
        
                    paraService.getrefer("B").then(function (result) {
                        refno = result.data;
                       
                            vm.referencecode.push(refno);
                            if (numcount === 1) {
                                insert0.referno = refno;
                                vm.appear.push(insert0);
                            }
                            else if (numcount === 2) {
                                insert1.referno = refno;
                                vm.appear.push(insert1);
                            }
                            else if (numcount === 3) {
                                insert2.referno = refno;
                                vm.appear.push(insert2);
                            }
                            else if (numcount === 4) {
                                insert3.referno = refno;
                                vm.appear.push(insert3);
                            }
                            else if (numcount === 5) {
                                insert4.referno = refno;
                                vm.appear.push(insert4);
                            }
                            else if (numcount === 6) {
                                insert5.referno = refno;
                                vm.appear.push(insert5);
                            }
                            else if (numcount === 7) {
                                insert6.referno = refno;
                                vm.appear.push(insert6);
                            }
                            else if (numcount === 8) {
                                insert7.referno = refno;
                                vm.appear.push(insert7);
                            }
                            else if (numcount === 9) {
                                insert8.referno = refno;
                                vm.appear.push(insert8);
                            }
                            else if (numcount === 10) {
                                insert9.referno = refno;
                                vm.appear.push(insert9);
                                
                            }
                            else {
                                alert("bug need to be fix");
                            }                            
                        numcount--;
                        if (numcount === 0) {
                            insertdatato(vm.appear);
                        } else {
                            createafter(numcount);
                        } 
                        
                     
                        //for (var in1 = 0; in1 < (vm.appear.length-1); in1++) {  
                        //}
                      //  setTimeout, 300);
                    });
                   
                };

        // modal pop-ups
                vm.show = function () {
                    if (vm.appearhtml.length !== 0) {
                        $('#submission').modal('show');
                    }
                  
                };
                vm.back = function () {
                    $('#submission').modal('hide');
                };


                vm.reset = function () {
                    // i don know
                    vm.appear.splice(0);
                    check.splice(0);
                    vm.count1.splice(0);
                    vm.appearhtml.splice(0);
                   
                    count = 0;
                };
                vm.cleardata = function () {
                    vm.insert.dropcode = "";
                    vm.insert.subcn = "";
                    vm.insert.caccountno = "";
                    vm.insert.quantity = "";
                    vm.insert.remark = "";
                };
                function clearall() {
                    vm.insert.dropcode = "";
                    vm.insert.subcn = "";
                    vm.insert.caccountno = "";
                    vm.insert.quantity = "";
                    vm.insert.remark = "";
                    vm.insert.branch = "";
                }
                vm.close = function () {
                    $('#refercodetable').modal("hide");
                    vm.referencecode.splice(0);
                }
            }
]);


})();