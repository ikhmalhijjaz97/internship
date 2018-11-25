using Abp.Application.Services;
using LibraryApp.Models.Requistion2;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Req
{
    public class RequisitionAppService : ApplicationService, IRequisitionAppService
    {
        private readonly IRequisitionManager _reqmanager;
        public RequisitionAppService(IRequisitionManager reqmanager)
        {
            _reqmanager = reqmanager;
        }

        public IEnumerable<Approval> approvall(string orderID)
        {
            return _reqmanager.approval(orderID);
        }

        public IEnumerable<check> checking(string printctrl)
        {
            return _reqmanager.check(printctrl);
        }

        public IEnumerable<Requisition> getReq()
        {
            return _reqmanager.GetRequisitions();
        }

        public void upbranch(string ReferenceNo)
        {
             _reqmanager.updatebranch(ReferenceNo);
        }

        public void updaterequest1()
        {
             _reqmanager.updaterequest();
        }
    }
}
