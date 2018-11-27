
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.ReqStatus
{
   public class ReqStatus
    {
      
        public string cOrderID { get; set; }

        public int category { get; set; }

        public int xQtty { get; set; }

        public int ccompanyname { get; set; }

        public int? xPrtQtty { get; set; }

        public int? xApprQtty { get; set; }

        public string cActno { get; set; }

        public int StaffName { get; set; }

        public string cstatus { get; set; }

        public string cCBP { get; set; }

        public string cApprovedBy { get; set; }

        public string cPrintedBy { get; set; }

    }

    public class BranchStatus
    {
        public string origin_code { get; set; }
        public string origin { get; set; }
    }
    public class category
    {
        public string dropcode { get; set; }
        public string  desc { get; set; }
    }
}
