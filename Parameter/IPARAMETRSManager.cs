using Abp.Application.Services;
using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models
{
    public interface IPARAMETERSManager : IDomainService
    {
        IEnumerable<CN> getCNtype();
        IEnumerable<branch> getbranch();
        IEnumerable<cngrp> cngrp(string code);
        IEnumerable<cntype> cntypecode(string acc);
        IEnumerable<cngrp> cngrpdef();
        IEnumerable<CN> getSubCNtype(string input);
        IEnumerable<companyname> getAccount(string CNdata, string subCN, string branch);
        string getreferenceNO(string chkcn);
        Task create(string refno, string CN, string subcn, string account, string branch, string quantity, string remark, string codetype, string codegrp);
      IEnumerable<regiondata> getregion(string username);
        IEnumerable<regforspecial> regforSpecial(string username);
        IEnumerable<branch> regforRM(string username);
    }
}
