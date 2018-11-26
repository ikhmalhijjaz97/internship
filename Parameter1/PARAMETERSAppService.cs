using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using LibraryApp.Models;
using SOTSCanvas.Parameter1.Dto;

namespace LibraryApp.Parameter1
{
    public class PARAMETERSAppService : ApplicationService, IPARAMETERSAppService
    {
        public readonly IPARAMETERSManager _paraManager;
        public PARAMETERSAppService(IPARAMETERSManager paraManager)
        {
            _paraManager = paraManager;
        }

        public IEnumerable<cngrp> cng(string code)
        {
            return _paraManager.cngrp(code);
        }

        public IEnumerable<cntype> cnt(string acc)
        {
            return _paraManager.cntypecode(acc);
        }

        public Task creat(insert[] input)
        {
            //var type =
            //{
            //    cCNTypeCode:''
            //}


            //for (var i=0;i < input.Length; i++)
            //{
            //    string type = _paraManager.cntypecode(input[i].caccountno);
            //    string group = _paraManager.cngrp(type);
            //    string refno = _paraManager.getreferenceNO("B");
            //    _paraManager.create(refno,input[i].dropcode,input[i].subcn,input[i].caccountno,input[i].branch,input[i].quantity,input[i].remark,type.ToString(),group);


            //}
            throw new NotImplementedException();
        }

        public IEnumerable<companyname> Gataccount(string input, string input2, string input3)
        {
            return _paraManager.getAccount(input,input2, input3);
        }

        public IEnumerable<branch> getb()
        {
            return _paraManager.getbranch(); 
        }

        public IEnumerable<CN> GetCN1()
        {
            return _paraManager.getCNtype();
        }

        public string getrefer(string input)
        {
            return _paraManager.getreferenceNO(input);
        }

        public IEnumerable<CN> GetsubCN(string input)
        {
            return _paraManager.getSubCNtype(input);
        }
        public IEnumerable<cngrp> cngdef() {

            return _paraManager.cngrpdef();
        }
    }
}
