

(function () {
    var controllerId = 'app.views.InboundBags.InboundBag';
    angular.module('app').controller(controllerId,
        ['$scope', 'abp.services.app.pARAMETERS', 'abp.services.app.branch',
            function ( $scope ,paraService,branchservice) {
                //debugger
                var vm = this;
 $('#table2').hide;
                var check = [10];
                vm.data = {
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
                    cEmailTo: ''
                };
                 vm.insert = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert0 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert1 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert2 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert3 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert4 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert5 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert6 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert7 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert8 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
                var insert9 = {
                    NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

                };
       // vm.insert3 = [];
        vm.bol = false;
        vm.getcn = [];
        vm.getsubcn = [];
        vm.account = [];
                vm.appear = [];
                vm.branch=[];
        //var data2 = [];
        var data2 = "";
        var count = 0;
        vm.getsubcnfor = '';
        vm.getcnfor = '';

                //refresh();
                paraService.getb().then(function (result) {
                    vm.branch = result.data;
                });
        paraService.getCN1().then(function (result) {
            vm.getcn = result.data;
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
                vm.changeinval = function (data1,data2) {
                    var quantity1 = document.getElementById('quantity');

                    var changequantity = parseInt(quantity1.innerHTML);
                    var checkchar = isNaN(data1);
                    if (data1!=="" &&(data1 < 30 || checkchar === true) ) {
                        if (data1 === "91" && (data2==="9913" && data2 === "9914")) {
                            document.getElementById('quanremark').innerHTML = "the quantity should be multiple of 50";
                            document.getElementById('quanremark').style.color = "red";
                        } else {
                            document.getElementById('quanremark').innerHTML = "the quantity should be more than 30";
                            document.getElementById('quanremark').style.color = "red";
                        }
                        if (checkchar === true) {
                            document.getElementById('char').innerHTML = "the quantity should not have character";
                            document.getElementById('char').style.color = "red";
                            document.getElementById("addbutton").disabled = true;
                        }
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
                    paraService.getsubCN(data).then(function (result) {
                        vm.getsubcn = result.data;
                    });
                };


        vm.changesub = function (data) {
            if (vm.insert.getsubcn !== "") {
                paraService.gataccount(vm.insert.dropcode, data, vm.insert.branch).then(function (result) {
                    vm.account = result.data;
                });
            }
        }

        // every time user click submit all array should reset

        vm.add = function (data) {
            
            if (data.insert.dropcode !== "" && data.insert.subcn !== "" && data.insert.caccountno !== "" && data.insert.quantity !== "") {
                if (check.length === 0) {
                    check.push(data.insert.caccountno);
                }
                
                for (var i = 0; i < (check.length - 1); i++) {
                    if (data.insert.caccountno === check[i]) {
                        alert("the account number already exist");
                    }
                    else {
                        check.push(data.insert.caccountno);
                    }
                }
                if (count === 0) {
                    insert0.NO = count;
                    insert0.dropcode = data.insert.dropcode;
                    insert0.subcn = data.insert.subcn;
                    insert0.caccountno = data.insert.caccountno;
                    insert0.quantity = data.insert.quantity;
                    insert0.remark = data.insert.remark;

                    vm.appear.push(insert0);
                }
                else if (count === 1) {
                    insert1.NO = count;
                    insert1.dropcode = data.insert.dropcode;
                    insert1.subcn = data.insert.subcn;
                    insert1.caccountno = data.insert.caccountno;
                    insert1.quantity = data.insert.quantity;
                    insert1.remark = data.insert.remark;

                    vm.appear.push(insert1);
                }
                else if (count === 2) {
                    insert2.NO = count;
                    insert2.dropcode = data.insert.dropcode;
                    insert2.subcn = data.insert.subcn;
                    insert2.caccountno = data.insert.caccountno;
                    insert2.quantity = data.insert.quantity;
                    insert2.remark = data.insert.remark;

                    vm.appear.push(insert2);
                }
                else if (count === 3) {
                    insert3.NO = count;
                    insert3.dropcode = data.insert.dropcode;
                    insert3.subcn = data.insert.subcn;
                    insert3.caccountno = data.insert.caccountno;
                    insert3.quantity = data.insert.quantity;
                    insert3.remark = data.insert.remark;

                    vm.appear.push(insert3);
                }
                else if (count === 4) {
                    insert4.NO = count;
                    insert4.dropcode = data.insert.dropcode;
                    insert4.subcn = data.insert.subcn;
                    insert4.caccountno = data.insert.caccountno;
                    insert4.quantity = data.insert.quantity;
                    insert4.remark = data.insert.remark;

                    vm.appear.push(insert4);
                }
                else if (count === 5) {
                    insert5.NO = count;
                    insert5.dropcode = data.insert.dropcode;
                    insert5.subcn = data.insert.subcn;
                    insert5.caccountno = data.insert.caccountno;
                    insert5.quantity = data.insert.quantity;
                    insert5.remark = data.insert.remark;

                    vm.appear.push(insert5);
                }
                else if (count === 6) {
                    insert6.NO = count;
                    insert6.dropcode = data.insert.dropcode;
                    insert6.subcn = data.insert.subcn;
                    insert6.caccountno = data.insert.caccountno;
                    insert6.quantity = data.insert.quantity;
                    insert6.remark = data.insert.remark;

                    vm.appear.push(insert6);
                }
                else if (count === 7) {
                    insert7.NO = count;
                    insert7.dropcode = data.insert.dropcode;
                    insert7.subcn = data.insert.subcn;
                    insert7.caccountno = data.insert.caccountno;
                    insert7.quantity = data.insert.quantity;
                    insert7.remark = data.insert.remark;

                    vm.appear.push(insert7);
                }
                else if (count === 8) {
                    insert8.NO = count;
                    insert8.dropcode = data.insert.dropcode;
                    insert8.subcn = data.insert.subcn;
                    insert8.caccountno = data.insert.caccountno;
                    insert8.quantity = data.insert.quantity;
                    insert8.remark = data.insert.remark;

                    vm.appear.push(insert8);
                }
                else {
                    insert9.NO = count;
                    insert9.dropcode = data.insert.dropcode;
                    insert9.subcn = data.insert.subcn;
                    insert9.caccountno = data.insert.caccountno;
                    insert9.quantity = data.insert.quantity;
                    insert9.remark = data.insert.remark;

                    vm.appear.push(insert9);
                }
                if (count > 9) {
                    sweetAlert("warning", "u have inserted more than 10", "");
                }
                $('#table2').show;
                count++;
                return;
                // document.getElementById("table2").style.removeProperty('display');

            }
            else {
                alert("data not complete");
            }
            
        }

        vm.delete = function (data) {
            for (var i = 0; i < vm.appear.length; i++) {
                if (vm.appear[i].caccountno === data) {
                    //
                    if (i !== 0 && i !== (vm.appear.length-1)) {
                        
                        //vm.appear.shift();
                        //vm.appear.concat(array2);
                        if (i === 1) {
                            vm.appear.splice(i, i);
                            check[i].splice(i, i);
                        } else {
                            vm.appear.splice(i, (i - 1));
                            check[i].splice(i,( i-1));
                        }
                       
                        count--;
                        
                        
                    }
                    else if (i === (vm.appear.length-1)) {
                        vm.appear.pop();
                        check.pop();
                        count--;
                    }
                    else {
                        vm.appear.shift();
                        check.shift();
                        count--;
                    }

                    //for (var j = 0; j < (check.length - 1); j++) {
                    //    if (check[i] === data) {
                    //        check[i].splice(i-1,i);
                    //    }
                    //}
                    
                }
            }
            return ;
                }


                // insert data

                vm.create = function () {
                    for (var in1 = 0; in1 < vm.appear.length; in1++) {
                        var type; paraService.cnt(vm.appear[in1].caccountno).then(function (result) {
                            type = result.data;
                        });
                        var group; paraService.cng(type).then(function (result) {
                            group = result.data;
                        });
                        var refno; paraService.getrefer("B").then(function (result) {
                            refno = result.data;
                        });
                        check.cOrderID= refno;
                        check.cTrxCode = "B";
                        check.cType = vm.appear.dropcode;
                        check.cTypeCd = v.appear.subcn;
                        check.cPrtCode = '';
                        check.xQtty = vm.appear.quantity;
                        check.xPrtQtty= null;
                        check.xApprQtty= null;
                        check.xCancelCnt= null;
                        check.dUnitPrice=null;
                        check.cTypeDesc= null;
                        check.cImpReq = null;
                        check.cSenderInd = vm.appear.caccountno;
                        check.cActno= null;
                        check.cAppvDept= null;
                        check.cChargeTo= null;
                        check.cCNFor= null;
                        check.cDesc=null;
                        check.cReceiverInd= null;
                        check.cRecAcc = null;
                        check.cRequestRemark = vm.appear.remark;
                        check.cstatus= 'N';
                        check.cPrintReq = null;
                        check.cBrno = vm.appear.branch;
                        check.cBrActno= null;
                        check.cCreatedBrno = vm.appear.branch;
                        check.cCreatedBy = "50604";
                        check.dCreated = Date.now();
                        check.cCBP= null;
                        check.cCBPRvr = null;
                        check.cCBPDept = null;
                        check.cCBPSender = null;
                        check.cUpdatedBy = null;
                        check.dUpdateBy = null;
                        check.cApprovedBy = null;
                        check.dApprovedBy = null;
                        check.cPrintedBy = null;
                        check.dtPrinted = null;
                        check.cAcknwBy = null;
                        check.cAcknwBrno = null;
                        check.dAcknw = null;
                        check.cStartNo = null;
                        check.cEndNO = null;
                        check.cSubActno = null;
                        check.cRejectRemark = null;
                        check.cActionRemark = null;
                        check.cCNTypeCode= type;
                        check.cSenderAcc = null;
                        check.PrintTypeGrp= group;
                        check.cEmailTo = null;
                        branchservice.create(vm.appear[i]).then(function () {
                            abp.notify.info("Saved Successfully");
                        });
                    }
                };

        // modal pop-ups
        vm.show = function () {
            $('#submission').modal('show');
        }
        vm.back = function () {
            $('#submission').modal('hide');
        }


        vm.reset = function () {
            // i don know
            vm.appear.splice(0);
            check.splice(0);
        }





            }
]);


})();