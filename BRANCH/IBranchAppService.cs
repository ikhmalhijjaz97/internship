using Abp.Application.Services;
using LibraryApp.BRANCH.Dto;
using LibraryApp.Models.CNAS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.BRANCH
{
   public interface IBranchAppService: IApplicationService
    {
        Task create(GetInput input);
    }
}
