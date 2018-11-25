using Abp.Application.Services;
using LibraryApp.Models.ReqStatus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.StatusREQ
{
   public interface IReqStatusAppService: IApplicationService
    {
        IEnumerable<BranchStatus> getstatus();
        IEnumerable<category> getcate();
    }
}
