using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.Branch
{
   public interface IBranchRequestManager:IDomainService 
    {
        Task<BranchRequest> create(BranchRequest input);
        IEnumerable<checkID> getorderiD();
    }
}
