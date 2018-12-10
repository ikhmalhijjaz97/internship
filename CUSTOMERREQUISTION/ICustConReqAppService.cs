using Abp.Application.Services;
using LibraryApp.Models.CustConReq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.CUSTOMERREQUISTION
{
   public interface ICustConReqAppService: IApplicationService
    {
        IEnumerable<CustConReq> getall(string Acc);
        IEnumerable<avoid> getcnban();
    }
}
