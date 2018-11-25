using Abp.Application.Services;
using LibraryApp.Models.ReqStatus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.StatusREQ
{
    public class ReqStatusAppService : ApplicationService, IReqStatusAppService
    {
        private readonly IReqStatusManager _reqstatusmanager;
        public ReqStatusAppService(IReqStatusManager reqstatusmanager)
        {
            _reqstatusmanager = reqstatusmanager;
        }
        public IEnumerable<category> getcate()
        {
            return _reqstatusmanager.getcategory();
        }

        public IEnumerable<BranchStatus> getstatus()
        {
            return _reqstatusmanager.getbranchstatus(); 
        }
    }
}
