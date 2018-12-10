using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Branches.Dto
{
   public class GetInput
    {
        public string cOrderID { get; set; }
        public string cTrxCode { get; set; }
        public string cType { get; set; }
        public string cTypeCd { get; set; }
        public string cPrtCode { get; set; }
        public int xQtty { get; set; }
        public int? xPrtQtty { get; set; }
        public int? xApprQtty { get; set; }
        public int? xCancelCnt { get; set; }
        public decimal? dUnitPrice { get; set; }
        public string cTypeDesc { get; set; }
        public string cImpReq { get; set; }
        public string cSenderInd { get; set; }
        public string cActno { get; set; }
        public string cAppvDept { get; set; }
        public string cChargeTo { get; set; }
        public string cCNFor { get; set; }
        public string cDesc { get; set; }
        public string cReceiverInd { get; set; }
        public string cRecAcc { get; set; }
        public string cRequestRemark { get; set; }
        public string cstatus { get; set; }
        public string cPrintReq { get; set; }
        public string cBrno { get; set; }
        public string cBrActno { get; set; }
        public string cCreatedBrno { get; set; }
        public string cCreatedBy { get; set; }
        public DateTime? dCreated { get; set; }
        public string cCBP { get; set; }
        public string cCBPRvr { get; set; }
        public string cCBPDept { get; set; }
        public string cCBPSender { get; set; }
        public string cUpdatedBy { get; set; }
        public DateTime? dUpdateBy { get; set; }
        public string cApprovedBy { get; set; }
        public DateTime? dApprovedBy { get; set; }
        public string cPrintedBy { get; set; }
        public DateTime? dtPrinted { get; set; }
        public string cAcknwBy { get; set; }
        public string cAcknwBrno { get; set; }
        public DateTime? dAcknw { get; set; }
        public string cStartNo { get; set; }
        public string cEndNO { get; set; }
        public string cSubActno { get; set; }
        public string cRejectRemark { get; set; }
        public string cActionRemark { get; set; }
        public string cCNTypeCode { get; set; }
        public string cSenderAcc { get; set; }
        public string PrintTypeGrp { get; set; }
        public string cEmailTo { get; set; }
        public string cRequestDept { get; set; }
    }
}
