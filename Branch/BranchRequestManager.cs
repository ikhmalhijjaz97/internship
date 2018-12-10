using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.Branch
{
    public class BranchRequestManager : DomainService, IBranchRequestManager
    {
        private readonly IRepository<BranchRequest> _repoManager;
        public BranchRequestManager(IRepository<BranchRequest> repoManager)
        {
            _repoManager = repoManager;
        } 
        public async Task<BranchRequest> create(BranchRequest input)
        {
            var branchcheckid = _repoManager.FirstOrDefault(x => x.cOrderID == input.cOrderID);
            if (branchcheckid != null)
            {
                throw new UserFriendlyException("Detail Already Exist.");
            }
            else
            {
               var output= await _repoManager.InsertAsync(input);
                return output;

            }
          
        }
        public IEnumerable<checkID> getorderiD()
        {
            DateTime date2 = new DateTime();
            date2 = DateTime.Now;
            var output = _repoManager.GetAll().Select(x => new checkID
            {
                cActno = x.cActno,
                dCreated = x.dCreated
            }

            ).ToList();
            var try1 = output.Where(x => x.dCreated >= date2.Date);
            return try1;
        }
    }
}
