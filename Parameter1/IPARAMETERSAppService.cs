using Abp.Application.Services;
using LibraryApp.Models;
using SOTSCanvas.Parameter1.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Parameter1
{
   public interface IPARAMETERSAppService: IApplicationService
    {
        IEnumerable<CN> GetCN1();
        IEnumerable<branch> getb();
        IEnumerable<cngrp> cng(string code);
        IEnumerable<cntype> cnt(string acc);
        IEnumerable<CN> GetsubCN(string input);
        IEnumerable<companyname> Gataccount(string input,string input2, string input3);
        string getrefer(string input);
        Task creat(insert[] input);
    }
}
