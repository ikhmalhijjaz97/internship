using Abp.Application.Services;
using LibraryApp.Models.Requistion2;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Req
{
   public interface IRequisitionAppService: IApplicationService
    {
        IEnumerable<Requisition> getReq();
        void upbranch(string ReferenceNo);
        IEnumerable<Approval> approvall(string orderID);
        IEnumerable<check> checking(string printctrl);
        void updaterequest1 ();
    }
}
