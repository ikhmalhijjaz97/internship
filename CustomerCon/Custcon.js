(function(){
var controllerId="app.views.CustomerCon.Custcon";
    angular.module('app').controller(controllerId, ['$scope','abp.services.app.custConReq',
        function ($scope,custservices) {
            var vm = this;
            vm.check = {
                account: ''
            };
            vm.dataDB = [];

            vm.insert1 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert0 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert1 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert2 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert3 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert4 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert5 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert6 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert7 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert8 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
            var insert9 = {
                acc: '',
                acctype: '',
                Reqtype: '',
                print: '',
                quantity: '',
                sender: '',
                receiver: '',
                email: '',
                remark: ''
            };
           
            vm.getforcus = {
                caccountNo :'',
                cPickOriginCode :'',
                cControlOriginCode :'',
                cStatus :'',
                cPrtDisable :'',
                SubAccType: '',
                TypeAcc :'',
                cCNTypeCode :'',
                cSender :'',
                cAllBr :'',
                cAllNtw :'',
                ccompanyname :'',
                caddress1 :'',
                caddress2 :'',
                caddress3 :'',
                cpostcode :'',
                ctown :'',
                cstate :'',
                caccttype :'',
                csubaccttype :''

            }; 
            var index = 1;

            //enter for accno
            document.getElementById("acc").addEventListener('keypress', function (e) {
                if (e.key === "Enter") {
                    var x = document.getElementById("acc").value;
                    vm.checkacc(x);
                }
            });
            document.getElementById("body1").addEventListener('keypress', function () {
              
                for (var bod = 0; bod < (index + 1); bod++) {
                    if (bod === index) {
                        var bod1 = "acc" + index;
                        document.getElementById(bod1).addEventListener('keypress', function (e) {
                            if (e.key === "Enter") {
                                var x = document.getElementById(bod1).value;
                                vm.checkacc(x);
                            }
                        });
                    }
                }
            });


            vm.add = function () {
                //var x = document.getElementsByTagName("form");
                //
               // document.getElementById("bodyse3").appendChild("<input/>")
                //document.getElementById("bodyse3").appendChild("    <form>  < div class= "row" > <div class="col - xs - 8"> <label>Account :</label> <input class="form - control" ng-model="vm.check.account" /> </div> <button class="btn btn - primary" ng-click="vm.checkacc(vm.check.account)">check</button> <br /> </div > <div> <div class="col - md - 6"> <div> <label>Account type :</label> <input class="form - control" /><br /> </div> <div> <label>Print Type :</label> <select id="print" class="form - control"> <option>Sender only</option> </select> </div> <div> <label>Sender :</label> <input class="form - control" /> <p id="address"></p> </div> </div> <div class="col - md - 6">  <div><label>Requisition Type:</label> <div class="form - check"> <input id="normal" class="form - check - input" type="radio" /> <label>Normal</label></div> <div class="form - check">   <input id="rc" class="form - check - input" type="radio" /><label>RC</label> </div><br /> <div> <label>Quantity :</label><input class="form - control" /></div> <div><label>Receiver :</label><input class="form - control" /><p id="addrceiver"></p> </div></div> </div> <div class="row">  <div> <div class="col - xs - 8">  <label>Email To:</label> <input class="form - control" /><br /></div></div><div> <div class="col - xs - 8"> <label>Remarks :</label>  <input c />    </div> </div> </div> </div> </form >");
                var wrapper = $("#pluspage");
                var addForm = $("#form1");
               
              
                var getForm = function (index, action) {
                    return $('\
           <br /><br />  <form>\
           <div class="col-xs-8">\
           <label > Account :</label >\
           <input id="acc'+index+'"class="form-control"  />\
            </div >\
           <div id="nextform'+index+'" hidden="true"> <div class="col-md-6" > <div>  <label>Account type :</label>\
          <input id="ACCty' + index + '" name="name' + index + '" class="form-control" ng-model="vm.insert'+index+'.acc"/><br />  </div>\
          <div><label> Print Type :</label >\
          <select id = "print'+index+'" class= "form-control" > <option>Sender only</option> </select> </div >    \
          <div > <label>Sender :</label>\
          <input id="sender' + index + '" name="sender' + index + '" class="form-control"/>\
          <p id="address"></p> </div > </div >\
          <div class="col-md-6"> <div id="Reqtype'+index+'" > <label>Requisition Type:</label> <div class="form-check">\
          <input id="normal'+index+'" class="form-check-input" type="radio" />\
          <label>Normal</label>\
          </div>  <div class="form-check">\
          <input id="rc'+index+'" class="form-check-input" type="radio" />\
          <label>RC</label> </div> <br />\
          <div><label>Quantity :</label>\
          <input id="quan'+index+'" class="form-control" />\
          </div> <div> <label>Receiver :</label>\
          <input id="receiver'+index+'"class="form-control" />\
          <p id="addrceiver"></p> </div> </div > </div >\
          <div class="row"><div><div class="col-xs-8"> <label>Email To:</label>    \
          <input id="Email' + index + '" name="Email' + index + '" class="form-control"/><br /> </div>     </div>\
          <div>  <div class="col-xs-8"> <label>Remarks :</label>    \
          <input id="remark'+index+'" class="form-control"></div> </div > </div >\
          <a href="#customercon" class="remove">remove form</a>\
        </form>\
    ');
                };              
                        var form = getForm(++index);
                        form.find(".remove").on("click", function () {
                            $(this).parent().remove();
                        });                 
                wrapper.append(form);

            };

            vm.checkacc = function (data) {
                custservices.getall(data).then(function (result) {
                    vm.getforcus = result.data;
                    checkvalid(vm.getforcus);
                   
                });
            };

            function checkvalid(data) {
                if (data[0]!== "") {
                    if (data[0].cStatus !== "08") {
                        swal("Account Not Active");
                        return;
                    }
                    if (data[0].cPrtDisable !== "N") {
                        swal("Account under Block for Printing");
                        return;
                    }
                    if (data[0].typeAcc !== "Customer" && data[0].typeAcc !== "Cash Sales") {
                        swal("Connote Type" + data.TypeAcc + " is Not Allowed");
                        return;
                    } else {
                        document.getElementById("nextform").hidden = false;
                        for (
                            var nextform = 1; nextform < index; nextform++) {
                            var hi = "nextform" + (nextform+1);
                            document.getElementById(hi).hidden = false;
                        }
                        if (data[0].subAccType === "Credit Customer RC") {
                            document.getElementById("print").value = "Receiver Only";
                            document.getElementById("address").innerHTML = data.ccompanyname + " " + data.caddress1 + " " + data.caddress2 + " " + data.caddress3 + " " + data.cpostcode + " " + data.ctown + " " + data.cstate;
                            document.getElementById("addrceiver").innerHTML = data.ccompanyname + " " + data.caddress1 + " " + data.caddress2 + " " + data.caddress3 + " " + data.cpostcode + " " + data.ctown + " " + data.cstate;
                        } else {
                            if (data[0].cSender === "1") {
                                document.getElementById("print").value = "sender Only";
                                document.getElementById("address").innerHTML = data[0].ccompanyname + " " + data[0].caddress1 + " " + data[0].caddress2 + " " + data[0].caddress3 + " " + data[0].cpostcode + " " + data[0].ctown + " " + data[0].cstate;
                            }
                             if ((data[0].cSender === "1" && data[0].cAllBr==="1") || (data[0].cSender === "1" && data[0].cAllNtw === "1")) {
                                // document.getElementById("print").value = "Receiver Only";
                                var x = document.getElementById("print");
                                var y = document.createElement("option");
                                y.text = "sender only";
                                var j = document.createElement("option");
                                j.text = "Receiver Only";
                                x.options.add(y, 1);
                                x.options.add(j, 1);

                            } 
                        }
                    }

                    //if (data.cp) {

                    //}
                } else {
                    swal("Invalid GDEX Account");
                }
                document.getElementById("acctype").value = data[0].subAccType;
                document.getElementById("acctype").disabled = true;
            };


            // insert data maybe ?
            vm.submit = function () {
                for (var i = 1; i < (index+1); i++) {
                    if (i === 1) {
                        insert0.acc = document.getElementById("acc1").value;
                        insert0.acctype = document.getElementById("ACCty1").value;
                        insert0.print = document.getElementById("print1").value;
                        insert0.sender = document.getElementById("sender1").value;
                        insert0.quantity = document.getElementById("quan1").value;
                        insert0.receiver = document.getElementById("receiver1").value;
                        insert0.email = document.getElementById("Email1").value;
                        insert0.remark = document.getElementById("remark1").value;
                        insert0.Reqtype = document.getElementById("Reqtype1").value;
                        vm.dataDB.push(insert0);
                    }
                    else if (i === 2) {
                        insert1.acc = document.getElementById("acc2").value;
                        insert1.acctype = document.getElementById("ACCty2").value;
                        insert1.print = document.getElementById("print2").value;
                        insert1.sender = document.getElementById("sender2").value;
                        insert1.quantity = document.getElementById("quan2").value;
                        insert1.receiver = document.getElementById("receiver2").value;
                        insert1.email = document.getElementById("Email2").value;
                        insert1.remark = document.getElementById("remark2").value;
                        insert1.Reqtype = document.getElementById("Reqtype2").value;
                        vm.dataDB.push(insert1);
                    }
                    else if (i === 3) {
                        insert2.acc = document.getElementById("acc3").value;
                        insert2.acctype = document.getElementById("ACCty3").value;
                        insert2.print = document.getElementById("print3").value;
                        insert2.sender = document.getElementById("sender3").value;
                        insert2.quantity = document.getElementById("quan3").value;
                        insert2.receiver = document.getElementById("receiver3").value;
                        insert2.email = document.getElementById("Email3").value;
                        insert2.remark = document.getElementById("remark3").value;
                        insert2.Reqtype = document.getElementById("Reqtype3").value;
                        vm.dataDB.push(insert2);
                    }
                    else if (i === 4) {
                        insert3.acc = document.getElementById("acc4").value;
                        insert3.acctype = document.getElementById("ACCty4").value;
                        insert3.print = document.getElementById("print4").value;
                        insert3.sender = document.getElementById("sender4").value;
                        insert3.quantity = document.getElementById("quan4").value;
                        insert3.receiver = document.getElementById("receiver4").value;
                        insert3.email = document.getElementById("Email4").value;
                        insert3.remark = document.getElementById("remark4").value;
                        insert3.Reqtype = document.getElementById("Reqtype4").value;
                        vm.dataDB.push(insert3);
                    }
                    else if (i === 5) {
                        insert4.acc = document.getElementById("acc5").value;
                        insert4.acctype = document.getElementById("ACCty5").value;
                        insert4.print = document.getElementById("print5").value;
                        insert4.sender = document.getElementById("sender5").value;
                        insert4.quantity = document.getElementById("quan5").value;
                        insert4.receiver = document.getElementById("receiver5").value;
                        insert4.email = document.getElementById("Email5").value;
                        insert4.remark = document.getElementById("remark5").value;
                        insert4.Reqtype = document.getElementById("Reqtype5").value;
                        vm.dataDB.push(insert4);
                    }
                    else if (i === 6) {
                        insert5.acc = document.getElementById("acc6").value;
                        insert5.acctype = document.getElementById("ACCty6").value;
                        insert5.print = document.getElementById("print6").value;
                        insert5.sender = document.getElementById("sender6").value;
                        insert5.quantity = document.getElementById("quan6").value;
                        insert5.receiver = document.getElementById("receiver6").value;
                        insert5.email = document.getElementById("Email6").value;
                        insert5.remark = document.getElementById("remark6").value;
                        insert5.Reqtype = document.getElementById("Reqtype6").value;
                        vm.dataDB.push(insert5);
                    }
                    else if (i === 7) {
                        insert6.acc = document.getElementById("acc7").value;
                        insert6.acctype = document.getElementById("ACCty7").value;
                        insert6.print = document.getElementById("print7").value;
                        insert6.sender = document.getElementById("sender7").value;
                        insert6.quantity = document.getElementById("quan7").value;
                        insert6.receiver = document.getElementById("receiver7").value;
                        insert6.email = document.getElementById("Email7").value;
                        insert6.remark = document.getElementById("remark7").value;
                        insert6.Reqtype = document.getElementById("Reqtype7").value;
                        vm.dataDB.push(insert6);
                    }
                    else if (i === 8) {
                        insert7.acc = document.getElementById("acc8").value;
                        insert7.acctype = document.getElementById("ACCty8").value;
                        insert7.print = document.getElementById("print8").value;
                        insert7.sender = document.getElementById("sender8").value;
                        insert7.quantity = document.getElementById("quan8").value;
                        insert7.receiver = document.getElementById("receiver8").value;
                        insert7.email = document.getElementById("Email8").value;
                        insert7.remark = document.getElementById("remark8").value;
                        insert7.Reqtype = document.getElementById("Reqtype8").value;
                        vm.dataDB.push(insert7);
                    }
                    else if (i === 9) {
                        insert8.acc = document.getElementById("acc9").value;
                        insert8.acctype = document.getElementById("ACCty9").value;
                        insert8.print = document.getElementById("print9").value;
                        insert8.sender = document.getElementById("sender9").value;
                        insert8.quantity = document.getElementById("quan9").value;
                        insert8.receiver = document.getElementById("receiver9").value;
                        insert8.email = document.getElementById("Email9").value;
                        insert8.remark = document.getElementById("remark9").value;
                        insert8.Reqtype = document.getElementById("Reqtype9").value;
                        vm.dataDB.push(insert8);
                    }
                    else if(i===10){
                        insert9.acc = document.getElementById("acc10").value;
                        insert9.acctype = document.getElementById("ACCty10").value;
                        insert9.print = document.getElementById("print10").value;
                        insert9.sender = document.getElementById("sender10").value;
                        insert9.quantity = document.getElementById("quan10").value;
                        insert9.receiver = document.getElementById("receiver10").value;
                        insert9.email = document.getElementById("Email10").value;
                        insert9.remark = document.getElementById("remark10").value;
                        insert9.Reqtype = document.getElementById("Reqtype10").value;
                        vm.dataDB.push(insert9);
                    }else {
                        swal(" the data is more than 10");
                    }
                }
            };
            



        }// last semicolon for FX
    ]);
})();