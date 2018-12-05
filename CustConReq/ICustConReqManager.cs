using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.CustConReq
{
   public interface ICustConReqManager: IDomainService
    {
        IEnumerable<CustConReq> getcustomerdata(string Acc);
        IEnumerable<printctrl> getprintdata(string cntype);
    }
}
