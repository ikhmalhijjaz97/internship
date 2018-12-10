using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.CustConReq
{
   public class CustConReq
    { 
        public string caccountNo { get; set; }
        public string cPickOriginCode { get; set; }
        public string cControlOriginCode { get; set; }
        public string cStatus { get; set; }
        public string cPrtDisable { get; set; }
        public string SubAccType { get; set; }
        public string TypeAcc { get; set; }
        public string cCNTypeCode { get; set; }
        public string cSender { get; set; }
        public string cAllBr { get; set; }
        public string cAllNtw { get; set; }
        public string ccompanyname { get; set; }
        public string caddress1 { get; set; }
        public string caddress2 { get; set; }
        public string caddress3 { get; set; }
        public string cpostcode { get; set; }
        public string ctown { get; set; }
        public string cstate { get; set; }
        public string caccttype { get; set; }
        public string csubaccttype { get; set; }

    }
    public class printctrl
    {
       // public string cCNType { get; set; }
        public string cPrintCtrl { get; set; }
    }
    public class avoid {
        public string cCNTypeCode { get; set; }
    }

}
