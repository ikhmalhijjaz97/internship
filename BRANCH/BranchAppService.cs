using Abp.Application.Services;
using AutoMapper;
using LibraryApp.BRANCH.Dto;
using LibraryApp.Models.CNAS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.BRANCH
{
    public class BranchAppService : ApplicationService, IBranchAppService
    {
        private readonly IBranchRequestManager _branchManager;
        public BranchAppService(IBranchRequestManager branchManager)
        {
            _branchManager = branchManager;
        }
        public async Task create(GetInput input)
        {
            BranchRequest output = Mapper.Map<GetInput,BranchRequest>(input);
           await _branchManager.create(output);
           
        }
    }
}
