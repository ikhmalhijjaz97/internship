using Abp.Application.Services;
using LibraryApp.Models.CustConReq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.CUSTOMERREQUISTION
{
   public class CustConReqAppService: ApplicationService, ICustConReqAppService
    {

        private readonly ICustConReqManager _customerManager;
        public CustConReqAppService(ICustConReqManager customerManager)
        {
            _customerManager = customerManager;
        }

        public IEnumerable<CustConReq> getall(string Acc)
        {
            return _customerManager.getcustomerdata(Acc);
        }
    }
}
