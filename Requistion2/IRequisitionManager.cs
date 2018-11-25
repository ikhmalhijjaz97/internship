using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.Requistion2
{
     public interface IRequisitionManager: IDomainService
    {
        IEnumerable<Requisition> GetRequisitions();
        void updatebranch(string ReferenceNo);
        IEnumerable<Approval> approval(string orderID);
        IEnumerable<check> check(string printctrl);
        void updaterequest();
    }
}
