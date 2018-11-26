
(function () {
    var controllerId = 'app.views.InboundBags.InboundBag';
    angular.module('app').controller(controllerId,
        ['$scope', 'abp.services.app.pARAMETERS', 'abp.services.app.branch',
            function ( $scope ,paraService,branchservice) {
                //debugger
                var vm = this;
 $('#table2').hide;
                var check = [10];
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
                    cEmailTo: ''
                };
                 vm.insert = {
                    //NO: '',
                    branch: '',
                    subcn: '',
                    dropcode: '',
                    caccountno: '',
                    quantity: '',
                    remark: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

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
                    subcname: ''

                };
       // vm.insert3 = [];

              
        vm.bol = false;
        vm.getcn = [];
        vm.getsubcn = [];
        vm.account = [];
        vm.referencecode=[];
                vm.appear = [];
                vm.branch=[];
        //var data2 = [];
                var data2 = "";
                var count = 0;
                vm.count1 = [];
                vm.count1.push(0);
        vm.getsubcnfor = '';
        vm.getcnfor = '';
                var type;
                var refno;
                var group;
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

                    if (data.insert.dropcode !== "" && data.insert.subcn !== "" && data.insert.caccountno !== null && data.insert.caccountno !== "" && data.insert.quantity !== "") {

                        for (var i = 0; i < (check.length); i++) {
                            if (data.insert.caccountno === check[i]) {
                                alert("the account number already exist");
                                return;
                            }
                        }
                        check.push(data.insert.caccountno);
                        if (count === 0) {
                            //insert0.NO = count;
                            insert0.branch = data.insert.branch;
                            insert0.dropcode = data.insert.dropcode;
                            insert0.subcn = data.insert.subcn;
                            insert0.caccountno = data.insert.caccountno;
                            insert0.quantity = data.insert.quantity;
                            insert0.remark = data.insert.remark;
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
                            vm.appear.push(insert0);
                        }
                        else if (count === 1) {
                            //insert1.NO = count;
                            insert1.branch = data.insert.branch;
                            insert1.dropcode = data.insert.dropcode;
                            insert1.subcn = data.insert.subcn;
                            insert1.caccountno = data.insert.caccountno;
                            insert1.quantity = data.insert.quantity;
                            insert1.remark = data.insert.remark;
                            for (var drop11 = 0; drop11 < vm.getcn.length; drop11++) {
                                if (vm.getcn[drop11].dropcode === data.insert.dropcode) {
                                    insert1.dropname = vm.getcn[drop11].desc;
                                }
                            }
                            for (var drop111 = 0; drop111 < vm.getsubcn.length; drop111++) {
                                if (vm.getsubcn[drop111].dropcode=== data.insert.subcn) {
                                    insert1.subcname = vm.getsubcn[drop111].desc;
                                }
                            }
                            vm.appear.push(insert1);
                        }
                        else if (count === 2) {
                            //insert2.NO = count;
                            insert2.branch = data.insert.branch;
                            insert2.dropcode = data.insert.dropcode;
                            insert2.subcn = data.insert.subcn;
                            insert2.caccountno = data.insert.caccountno;
                            insert2.quantity = data.insert.quantity;
                            insert2.remark = data.insert.remark;
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
                            vm.appear.push(insert2);
                        }
                        else if (count === 3) {
                            //insert3.NO = count;
                            insert3.branch = data.insert.branch;
                            insert3.dropcode = data.insert.dropcode;
                            insert3.subcn = data.insert.subcn;
                            insert3.caccountno = data.insert.caccountno;
                            insert3.quantity = data.insert.quantity;
                            insert3.remark = data.insert.remark;
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
                            vm.appear.push(insert3);
                        }
                        else if (count === 4) {
                            //insert4.NO = count;
                            insert4.branch = data.insert.branch;
                            insert4.dropcode = data.insert.dropcode;
                            insert4.subcn = data.insert.subcn;
                            insert4.caccountno = data.insert.caccountno;
                            insert4.quantity = data.insert.quantity;
                            insert4.remark = data.insert.remark;
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
                            vm.appear.push(insert4);
                        }
                        else if (count === 5) {
                            //insert5.NO = count;
                            insert5.branch = data.insert.branch;
                            insert5.dropcode = data.insert.dropcode;
                            insert5.subcn = data.insert.subcn;
                            insert5.caccountno = data.insert.caccountno;
                            insert5.quantity = data.insert.quantity;
                            insert5.remark = data.insert.remark;
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
                            vm.appear.push(insert5);
                        }
                        else if (count === 6) {
                            //insert6.NO = count;
                            insert6.branch = data.insert.branch;
                            insert6.dropcode = data.insert.dropcode;
                            insert6.subcn = data.insert.subcn;
                            insert6.caccountno = data.insert.caccountno;
                            insert6.quantity = data.insert.quantity;
                            insert6.remark = data.insert.remark;
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
                            vm.appear.push(insert6);
                        }
                        else if (count === 7) {
                            //insert7.NO = count;
                            insert7.branch = data.insert.branch;
                            insert7.dropcode = data.insert.dropcode;
                            insert7.subcn = data.insert.subcn;
                            insert7.caccountno = data.insert.caccountno;
                            insert7.quantity = data.insert.quantity;
                            insert7.remark = data.insert.remark;
                            for (var drop4 = 0; drop4 < vm.getcn.length; drop4++) {
                                if (vm.getcn[drop4].dropcode === data.insert.dropcode) {
                                    insert7.dropname = vm.getcn[drop4].desc;
                                }
                            }
                            for (var drop14 = 0; drop14 < vm.getsubcn.length; drop14++) {
                                if (vm.getsubcn[drop14].dropcode === data.insert.subcn) {
                                    insert7.subcn = vm.getsubcn[drop14].desc;
                                }
                            }
                            vm.appear.push(insert7);
                        }
                        else if (count === 8) {
                            //insert8.NO = count;
                            insert8.branch = data.insert.branch;
                            insert8.dropcode = data.insert.dropcode;
                            insert8.subcn = data.insert.subcn;
                            insert8.caccountno = data.insert.caccountno;
                            insert8.quantity = data.insert.quantity;
                            insert8.remark = data.insert.remark;
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
                            vm.appear.push(insert8);
                        }
                        else {
                            //insert9.NO = count;
                            insert9.branch = data.insert.branch;
                            insert9.dropcode = data.insert.dropcode;
                            insert9.subcn = data.insert.subcn;
                            insert9.caccountno = data.insert.caccountno;
                            insert9.quantity = data.insert.quantity;
                            insert9.remark = data.insert.remark;
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
                            vm.appear.push(insert9);
                        }
                        if (count.length > 9) {
                            sweetAlert("warning", "u have inserted more than 10", "");
                            return;
                        }
                        $('#table2').show;
                        count++;
                        for (var inc = 0; inc < vm.count1.length; inc++) {
                            if (inc === vm.count1.length) {
                                vm.count1.push(inc);
                            }
                        }
                        document.getElementById("refercode").style.display = "none";
                        // document.getElementById("table2").style.removeProperty('display');

                    }
                    else {
                        alert("data not complete");
                    }

                };

                vm.delete = function (data) {
                    for (var i = 0; i < vm.appear.length; i++) {
                        if (vm.appear[i].caccountno === data) {
                            //
                            if (i !== 0 && i !== (vm.appear.length - 1)) {

                                //vm.appear.shift();
                                //vm.appear.concat(array2);
                                if (i === 1) {
                                    vm.appear.splice(i, i);
                                    check.splice(i, i);
                                    vm.count1.splice(i, i);
                                } else {
                                    vm.appear.splice(i, (i - 1));
                                    check.splice(i, (i - 1));
                                    vm.count1.splice(i, i - 1);
                                }
                                count--;



                            }
                            else if (i === (vm.appear.length - 1)) {
                                vm.appear.pop();
                                check.pop();
                                vm.count1.pop;
                                count--;
                            }
                            else {
                                vm.appear.shift();
                                check.shift();
                                vm.count1.shift;
                                count--;
                            }

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
                function insertdatato(insertdata, type1, group1, refno1) {

                    var date2 = new Date();
                    var date3 = date2.toISOString();
                    vm.datainsert.cOrderID = refno1;
                    vm.datainsert.cTrxCode = "B";
                    vm.datainsert.cType = insertdata.dropcode;
                    vm.datainsert.cTypeCd = insertdata.subcn;
                    vm.datainsert.cPrtCode = '12';
                    vm.datainsert.xQtty = insertdata.quantity;
                    vm.datainsert.xPrtQtty = null;
                    vm.datainsert.xApprQtty = null;
                    vm.datainsert.xCancelCnt = null;
                    vm.datainsert.dUnitPrice = null;
                    vm.datainsert.cTypeDesc = null;
                    vm.datainsert.cImpReq = null;
                    vm.datainsert.cSenderInd = 'i';
                    vm.datainsert.cActno = insertdata.caccountno;
                    vm.datainsert.cAppvDept = null;
                    vm.datainsert.cChargeTo = null;
                    vm.datainsert.cCNFor = null;
                    vm.datainsert.cDesc = null;
                    vm.datainsert.cReceiverInd = null;
                    vm.datainsert.cRecAcc = null;
                    vm.datainsert.cRequestRemark = insertdata.remark;
                    vm.datainsert.cstatus = 'N';
                    vm.datainsert.cPrintReq = null;
                    vm.datainsert.cBrno = insertdata.branch;
                    vm.datainsert.cBrActno = null;
                    vm.datainsert.cCreatedBrno = insertdata.branch;
                    vm.datainsert.cCreatedBy = "50604";
                    vm.datainsert.dCreated = date3;
                    vm.datainsert.cCBP = null;
                    vm.datainsert.cCBPRvr = null;
                    vm.datainsert.cCBPDept = null;
                    vm.datainsert.cCBPSender = null;
                    vm.datainsert.cUpdatedBy = null;
                    vm.datainsert.dUpdateBy = null;
                    vm.datainsert.cApprovedBy = null;
                    vm.datainsert.dApprovedBy = null;
                    vm.datainsert.cPrintedBy = null;
                    vm.datainsert.dtPrinted = null;
                    vm.datainsert.cAcknwBy = null;
                    vm.datainsert.cAcknwBrno = null;
                    vm.datainsert.dAcknw = null;
                    vm.datainsert.cStartNo = null;
                    vm.datainsert.cEndNO = null;
                    vm.datainsert.cSubActno = null;
                    vm.datainsert.cRejectRemark = null;
                    vm.datainsert.cActionRemark = null;
                    vm.datainsert.cCNTypeCode = type1;
                    vm.datainsert.cSenderAcc = null;
                    vm.datainsert.PrintTypeGrp = group1;
                    vm.datainsert.cEmailTo = null;
                    vm.datainsert.cRequestRemark = null;
                 
                  
                    branchservice.create(vm.datainsert).then(function () {
                        abp.notify.info("Saved Successfully");
                    });
                   //document.getElementById("refercodetable").style.display = "";
                    $('#refercodetable').modal("show");
                    vm.reset();
                   
                };


                function getdata(datain) {

                    paraService.cnt(datain.caccountno).then(function (result) {
                        type = result.data;
                        getdata2(datain);
                       
                    });
                };

                function getdata2(datain) {
                    var type1 = (type[0].cCNTypeCode).toString();
                    try {
                        paraService.cng(type).then(function (result) {
                            group = result.data;
                            getdata3(datain);
                        });
                    }
                    catch(err){
                        paraService.cngdef().then(function (result) {
                            group = result.data;
                            getdata3(datain);
                        });
                            }
                };

                    function getdata3(datain) {
                        var bol = true;
                    do {
                        paraService.getrefer("B").then(function (result) {
                            refno = result.data;
                        });
                        for (var checkref = 0; checkref < vm.referencecode.length; checkref++) {
                            if (vm.referencecode[checkref] === refno) {
                                bol = false;
                            }
                        }
                    } while (bol===false);
                   
                    vm.referencecode.push(refno);
                    insertdatato(datain, type[0].cCNTypeCode, group[0].printtypegrp, refno);
                };
                vm.create = function () {
                    for (var in1 = 0; in1 < (vm.appear.length); in1++) {
                        //for (var coun = 0; coun < vm.appear.length; coun++) {
                        //var type = {
                        //    cCNTypeCode: ''
                        //};
                        //var refno;
                        //var group = {
                        //    printtypegrp: ''
                        //};
                               getdata(vm.appear[in1]);
                        
                      
  
                    }
                };

        // modal pop-ups
                vm.show = function () {
                    $('#submission').modal('show');
                };
                vm.back = function () {
                    $('#submission').modal('hide');
                };


                vm.reset = function () {
                    // i don know
                    vm.appear.splice(0);
                    check.splice(0);
                    vm.count1.splice(0);
                   
                    count = 0;
                };

                vm.close = function () {
                    $('#refercodetable').modal("hide");
                    vm.referencecode.splice(0);
                }



            }
]);


})();