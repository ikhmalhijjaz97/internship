using Abp.Application.Services;
using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models
{
    public class PARAMETERSManager : DomainService, IPARAMETERSManager
    {
        public IEnumerable<cngrp> cngrp(string code)
        {
            SqlConnection getgrp = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            getgrp.Open();
            List<cngrp> grp = new List<cngrp>();
            string d = " ";
            d = "select PrintTypeGrp from [CNAS].[cnas].[CNType] A (nolock) where cCNType ='" + code + "'";
            SqlCommand connect = new SqlCommand(d, getgrp);
            using (SqlDataReader read = connect.ExecuteReader())
            {
                while (read.Read())
                {
                    cngrp getgrp1 = new cngrp();
                    getgrp1.printtypegrp = read["printtypegrp"].ToString();

                    grp.Add(getgrp1);
                }
            }
            getgrp.Close();
            return grp;
        }

        public IEnumerable<cngrp> cngrpdef()
        {
            SqlConnection getgrpdef = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            getgrpdef.Open();
            List<cngrp> grpdef = new List<cngrp>();
            string ddef = " ";
            ddef = "select PrintTypeGrp from [CNAS].[cnas].[CNType] A (nolock) where cCNType =' '";
            SqlCommand connect = new SqlCommand(ddef, getgrpdef);
            using (SqlDataReader read = connect.ExecuteReader())
            {
                while (read.Read())
                {
                    cngrp getgrp1 = new cngrp();
                    getgrp1.printtypegrp = read["printtypegrp"].ToString();

                    grpdef.Add(getgrp1);
                }
            }
            getgrpdef.Close();
            return grpdef;
        }

        public IEnumerable<cntype> cntypecode(string acc)
        {
            SqlConnection gettype = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            gettype.Open();
            List<cntype> type = new List<cntype>();
            string d = " ";
            d = "select cCNTypeCode from CRM.dbo.apickupdetails A (nolock) where caccountNo = '" + acc + "'";
            SqlCommand connect = new SqlCommand(d, gettype);
            using (SqlDataReader read = connect.ExecuteReader())
            {
                while (read.Read())
                {
                    cntype gettype1 = new cntype();
                    gettype1.cCNTypeCode = read["cCNTypeCode"].ToString();

                    type.Add(gettype1);
                }
            }
            gettype.Close();
            // string type1 = type.ToString();
            return type;
        }

        public async Task create(string refno, string CN, string subcn, string account, string branch, string quantity, string remark, string codetype, string codegrp)
        {
            // SqlConnection con21 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            // con21.Open();
            // string create1 = "";
            // create1= "INSERT INTO [CNAS].[cnas].[BranchRequest] (" +"cOrderID,cTrxCode,cType,cTypeCd,cPrtCode,xQtty,xPrtQtty,xCancelCnt,dUnitPrice,cTypeDesc,cImpReq,cSenderInd,cActno,cAppvDept,cChargeTo,cCNFor,cDesc,cReceiverInd,cRecAcc,cRequestRemark" + ",cstatus,cPrintReq,cBrno,cBrActno,cCreatedBrno,cCreatedBy,dCreated,cCBP,cCBPRvr,cCBPDept,cCBPSender,cUpdatedBy,dUpdateBy,cApprovedBy,dApprovedBy,cPrintedBy,dtPrinted,cAcknwBy" +",cAcknwBrno,dAcknw,cStartNo,cEndNO,cSubActno,cRejectRemark,cActionRemark,cCNTypeCode,PrintTypeGrp)" + "values ('" + refno + "','B','" + CN + "','" + subcn + "','BLANK'" + ",'" + quantity + "',NULL,NULL,NULL,NULL,NULL,NULL,'" + account + "',NULL,NULL,NULL,NULL,NULL,NULL" + ",'" + remark + "','N',NULL,'123',NULL,'" + branch + "','50604','" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss ttt") + "',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'" + codetype + "','" + codegrp + "')";
            // SqlCommand insertcom = new SqlCommand(create1, con21);
            // await insertcom.ExecuteNonQuery();
            // con21.Close();
            //// return 1;

        }

        public IEnumerable<companyname> getAccount(string CNdata, string subCN, string branch)
        {
            SqlConnection con2 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con2.Open();
            string account = "";
            List<companyname> companylist = new List<companyname>();
            account = "select A.caccountno,A.caccttype,A.csubaccttype,(A.caccountno + ' - ' +B.ccompanyname) ccompanyname from CRM.dbo.aacctdetails A (nolock) left join CRM.dbo.apickupdetails B (nolock) on A.caccountno = B.caccountNo left join CRM.dbo.acustomer C (nolock) on A.caccountno = C.caccountNo where A.caccttype = '" + CNdata + "' and A.csubaccttype ='" + subCN + "'  and B.cPickOriginCode ='" + branch + "' and C.cStatus = '08' order by A.caccountno asc";
            SqlCommand command = new SqlCommand(account, con2);
            using (SqlDataReader dataread = command.ExecuteReader())
            {
                while (dataread.Read())
                {
                    companyname data = new companyname();
                    data.ccompanyname = dataread["ccompanyname"].ToString();
                    data.caccountno = dataread["caccountno"].ToString();
                    companylist.Add(data);
                }
            }
            con2.Close();
            return companylist;


        }

        public IEnumerable<branch> getbranch()
        {
            SqlConnection getbranch = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            getbranch.Open();
            List<branch> branches = new List<branch>();
            string d = " ";
            // d = "select origin_code from gdexpdb.dbo.station WHERE  status = '1'";
            d = "select origin_code,( origin_code + '_'+ origin_desc) description from gdexpdb.dbo.station";
            SqlCommand connect = new SqlCommand(d, getbranch);
            using (SqlDataReader read = connect.ExecuteReader())
            {
                while (read.Read())
                {
                    branch getbranch1 = new branch();
                    getbranch1.origin_code = read["origin_code"].ToString();
                    getbranch1.description = read["description"].ToString();
                    branches.Add(getbranch1);
                }
            }
            getbranch.Close();
            return branches;
        }

        public IEnumerable<CN> getCNtype()
        {
            SqlConnection getCN = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            getCN.Open();
            List<CN> CNsend = new List<CN>();
            string d = " ";
            d = "select dropcode,[desc] from gdexpdb.oms.parameter where category = 'TypeAcct' and status = '1' and dropcode NOT in ('01','04')";
            SqlCommand connect = new SqlCommand(d, getCN);
            using (SqlDataReader read = connect.ExecuteReader())
            {
                while (read.Read())
                {
                    CN getcnread = new CN();
                    getcnread.desc = read["desc"].ToString();
                    getcnread.dropcode = read["dropcode"].ToString();
                    CNsend.Add(getcnread);
                }
            }
            getCN.Close();
            return CNsend;
        }

        public string getreferenceNO(string chkcn)
        {
            SqlConnection con = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            SqlConnection con1 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            string oldrefno = "", reqtype = "", yr = ""; ;
            string refno;
            try
            {
                con.Open();
            }
            catch
            {
                con.Close();
                con.Open();
            }
            SqlCommand cmd = new SqlCommand("Select cCtry,cReqType,cYear,nStart,nMax,cRemark from [CNAS].[cnas].[Refno] with (nolock) " +
                                "where cYear = right(YEAR(GETDATE()),4) and cReqType = '" + chkcn + "'", con);
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.Read())
            {
                oldrefno = dr["nStart"].ToString().Trim();
                reqtype = dr["cReqType"].ToString().Trim();
                yr = dr["cYear"].ToString().Trim();
            }
            else
            {
                string query = "";
                con.Close();
                con1.Open();
                query = "INSERT INTO [CNAS].[cnas].[Refno] (cCtry,cReqType,cYear,nStart,nMax,cRemark) VALUES ('MY'," + chkcn + "', right(YEAR(GETDATE()),4) ,0,'999999999','')";
                cmd = new SqlCommand(query, con1);
                cmd.ExecuteNonQuery();
                con1.Close();

                oldrefno = "0";
                reqtype = chkcn;
                yr = DateTime.Now.Year.ToString();
            }
            dr.Close();
            con.Close();

            string alphabet1 = Convert.ToString(DateTime.Now.Year.ToString());

            int num1 = Convert.ToInt32(oldrefno) + 1;

            if (chkcn == "F")
            {
                refno = "SS" + reqtype + Convert.ToString(alphabet1) + "/" + num1.ToString().PadLeft(6, '0');
            }
            else
            {
                refno = "SS" + reqtype + Convert.ToString(alphabet1) + "/" + num1.ToString().PadLeft(9, '0');
            }
            con.Open();
            string query2 = "";
            query2 = "UPDATE [CNAS].[cnas].[Refno] SET nStart = " + num1 + " WHERE cYear = '" + yr + "' and cReqType = '" + chkcn + "' ";

            cmd = new SqlCommand(query2, con);
            cmd.ExecuteNonQuery();
            con.Close();
            return refno;
        }

        public IEnumerable<CN> getSubCNtype(string input)
        {
            SqlConnection getsub = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            getsub.Open();
            List<CN> subdata = new List<CN>();
            string con = " ";
            con = "select dropcode,[desc] from gdexpdb.oms.parameter where category = '" + input + "' and status = '1' and dropcode <> '0206'";
            SqlCommand command = new SqlCommand(con, getsub);
            using (SqlDataReader read1 = command.ExecuteReader())
            {
                while (read1.Read())
                {
                    CN dataforsub = new CN();
                    dataforsub.desc = read1["desc"].ToString();
                    dataforsub.dropcode = read1["dropcode"].ToString();
                    subdata.Add(dataforsub);

                }
            }
            getsub.Close();
            return subdata;
        }
    }
}
