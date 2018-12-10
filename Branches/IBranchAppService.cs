using Abp.Application.Services;
using LibraryApp.Branches.Dto;
using LibraryApp.Models.Branch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Branches
{
    public interface IBranchAppService : IApplicationService
    {
        Task create(List<GetInput2> input,string id);
        Task createforcustomer(List<GetInput2> input,string id);
        IEnumerable<checkID> GetID();
        //string refre(string input);
        //string referreturn();
    }
}
