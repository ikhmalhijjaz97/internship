using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.Requistion2
{
    public class Requisition
    {
        public string cCNTypeDesc { get; set; } 
        public string cOrderID { get; set; }
        public string cTrxCode { get; set; }
        public int cType { get; set; }
        public int cTypeCd { get; set; }
        public string cPrtCode { get; set; }
        public int xQtty { get; set; }
        public string cActno { get; set; }
        public string ccompanyname { get; set; }
        public string cCreatedBrno { get; set; }
        public DateTime? dCreated { get; set; }
        public string Acc_Type { get; set; }
        public string cSenderAcc { get; set; }
        public string cRecAcc { get; set; }
        public string cRequestRemark { get; set; }
        public string StaffName { get; set; }
        public string category { get; set; }
        public DateTime? LastPrinted { get; set; }


    }
    public class Approval
    {
        public string cCNTypeCode { get; set; }
        public string cOrderID { get; set; }
        public string cPrtCode { get; set; }
        public string cPrintCtrl { get; set; }
    }

    public class check
    {
        public string cCode { get; set; }
        public string cSeq { get; set; }
        public string cRemark { get; set; }
        public int xMax { get; set; }
        public int FirstNo { get; set; }
        public string Status { get; set; }
        public string cCNLen { get; set; }
    }
}
