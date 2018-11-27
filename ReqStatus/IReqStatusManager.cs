using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.ReqStatus
{
   public interface IReqStatusManager: IDomainService
    {
        IEnumerable<BranchStatus> getbranchstatus();
        IEnumerable<category> getcategory();
        IEnumerable<ReqStatus> searchID(string ID);
        IEnumerable<ReqStatus> searchAcc(string Accountnum);

    }
}
