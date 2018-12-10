using Abp.Application.Services;
using AutoMapper;
using LibraryApp.Branches.Dto;
using LibraryApp.Models.Branch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Branches
{
    public class BranchAppService : ApplicationService, IBranchAppService
    {
        private readonly IBranchRequestManager _branchManager;
        string refer = " ";
        public BranchAppService(IBranchRequestManager branchManager)
        {
            _branchManager = branchManager;
        }
        public async Task create(List<GetInput2> input,string id)
        {
            GetInput datainsert = new GetInput();
            //input.cOrderID= _branchManager.getreferenceNO("B");
            //refer = input.cOrderID;
            for (var i = 0; i < input.Count; i++)
            {
                var date3 = DateTime.Now;

                datainsert.cOrderID = input[i].referno;
                datainsert.cTrxCode = "B";
                datainsert.cType = input[i].dropcode;
                datainsert.cTypeCd = input[i].subcn;
                datainsert.cPrtCode = "";
                datainsert.xQtty = input[i].quantity;
                datainsert.xPrtQtty = null;
                datainsert.xApprQtty = null;
                datainsert.xCancelCnt = null;
                datainsert.dUnitPrice = null;
                datainsert.cTypeDesc = null;
                datainsert.cImpReq = null;
                datainsert.cSenderInd = "i";
                datainsert.cActno = input[i].caccountno;
                datainsert.cAppvDept = null;
                datainsert.cChargeTo = null;
                datainsert.cCNFor = null;
                datainsert.cDesc = null;
                datainsert.cReceiverInd = null;
                datainsert.cRecAcc = null;
                datainsert.cRequestRemark = input[i].remark;
                datainsert.cstatus = "N";
                datainsert.cPrintReq = null;
                datainsert.cBrno = input[i].branch;
                datainsert.cBrActno = null;
                datainsert.cCreatedBrno = input[i].branch;
                datainsert.cCreatedBy = id;
                datainsert.dCreated = date3;
                datainsert.cCBP = null;
                datainsert.cCBPRvr = null;
                datainsert.cCBPDept = null;
                datainsert.cCBPSender = null;
                datainsert.cUpdatedBy = null;
                datainsert.dUpdateBy = null;
                datainsert.cApprovedBy = null;
                datainsert.dApprovedBy = null;
                datainsert.cPrintedBy = null;
                datainsert.dtPrinted = null;
                datainsert.cAcknwBy = null;
                datainsert.cAcknwBrno = null;
                datainsert.dAcknw = null;
                datainsert.cStartNo = null;
                datainsert.cEndNO = null;
                datainsert.cSubActno = null;
                datainsert.cRejectRemark = null;
                datainsert.cActionRemark = null;
                datainsert.cCNTypeCode = input[i].cntype;
                datainsert.cSenderAcc = null;
                datainsert.PrintTypeGrp = input[i].cngroup;
                datainsert.cEmailTo = null;
                datainsert.cRequestDept = input[i].cRequestDept;
           

                BranchRequest output = Mapper.Map<GetInput, BranchRequest>(datainsert);
                await _branchManager.create(output);
            }

        }

        public async Task createforcustomer(List<GetInput2> input, string id)
        {
            GetInput datainsert = new GetInput();
            for(var cus = 0; cus < input.Count; cus++)
            {
                var date3 = DateTime.Now;

                datainsert.cOrderID = input[cus].referno;
                datainsert.cTrxCode = "C";
                datainsert.cType = input[cus].dropcode;// ctype
                datainsert.cTypeCd = input[cus].subcn; //subctype
                datainsert.cPrtCode = ""; //printcode
                datainsert.xQtty = input[cus].quantity;//quantity
                datainsert.xPrtQtty = null;
                datainsert.xApprQtty = null;
                datainsert.xCancelCnt = null;
                datainsert.dUnitPrice = null;
                datainsert.cTypeDesc = null;
                datainsert.cImpReq = null;
                datainsert.cSenderInd = null;
                datainsert.cActno = input[cus].caccountno;// accno.
                datainsert.cAppvDept = null;
                datainsert.cChargeTo = null;
                datainsert.cCNFor = null;
                datainsert.cDesc = null;
                datainsert.cReceiverInd = null;
                datainsert.cRecAcc = null; //receiveracc
                datainsert.cRequestRemark = input[cus].remark; //remark
                datainsert.cstatus = "N";
                datainsert.cPrintReq = null;
                datainsert.cBrno = input[cus].branch; //branch
                datainsert.cBrActno = null;
                datainsert.cCreatedBrno = input[cus].branch;
                datainsert.cCreatedBy = id;
                datainsert.dCreated = date3;
                datainsert.cCBP = null;
                datainsert.cCBPRvr = null;
                datainsert.cCBPDept = null;
                datainsert.cCBPSender = null;
                datainsert.cUpdatedBy = null;
                datainsert.dUpdateBy = null;
                datainsert.cApprovedBy = null;
                datainsert.dApprovedBy = null;
                datainsert.cPrintedBy = null;
                datainsert.dtPrinted = null;
                datainsert.cAcknwBy = null;
                datainsert.cAcknwBrno = null;
                datainsert.dAcknw = null;
                datainsert.cStartNo = null;
                datainsert.cEndNO = null;
                datainsert.cSubActno = null;
                datainsert.cRejectRemark = null;
                datainsert.cActionRemark = null;
                datainsert.cCNTypeCode = input[cus].cntype; //cntype
                datainsert.cSenderAcc = null; //sender acc
                datainsert.PrintTypeGrp = input[cus].cngroup; //cngroup
                datainsert.cEmailTo = null; ///sender email
            BranchRequest out1 = Mapper.Map<GetInput, BranchRequest>(datainsert);
                await _branchManager.create(out1);

            }

        }

        public IEnumerable<checkID> GetID()
        {
            return _branchManager.getorderiD();
            //throw new NotImplementedException();
        }
        //public string referreturn()
        //{
        //    return refer;
        //}

        //public string refre(string input)
        //{
        //    return _branchManager.getreferenceNO(input);
        //}
    }
}
