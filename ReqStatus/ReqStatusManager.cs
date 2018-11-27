using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.ReqStatus
{
    public class ReqStatusManager : DomainService, IReqStatusManager
    {
       

        public IEnumerable<BranchStatus> getbranchstatus()
        {
            SqlConnection con = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con.Open();
            List<BranchStatus> collect = new List<BranchStatus>();
            string branch = "";
            branch = "select origin_code,(origin_code + ' - ' +origin_desc) as origin from gdexpdb.dbo.station (nolock) where status = '1'";
            SqlCommand com = new SqlCommand(branch, con);
            using (SqlDataReader readbranch = com.ExecuteReader())
            {
                while (readbranch.Read())
                {
                    BranchStatus data = new BranchStatus();
                    data.origin_code = readbranch["origin_code"].ToString();
                    data.origin = readbranch["origin"].ToString();
                    collect.Add(data);
                }
            }
            con.Close();
            return collect;          
        }

        public IEnumerable<category> getcategory()
        {
            SqlConnection con1 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con1.Open();
            List<category> cate = new List<category>();
            string category1 = "";
            category1 = "select dropcode,[desc] from gdexpdb.oms.parameter where category = 'TypeAcct' and status = '1'";
            SqlCommand com1 = new SqlCommand(category1, con1);
            using (SqlDataReader readcategory = com1.ExecuteReader())
            {
                while (readcategory.Read())
                {
                    category data = new category();
                    data.dropcode = readcategory["dropcode"].ToString();
                    data.desc = readcategory["desc"].ToString();
                    cate.Add(data);
                }
            }
            con1.Close();
            return cate;
            throw new NotImplementedException();
        }

        public IEnumerable<ReqStatus> searchAcc(string Accountnum)
        {
            SqlConnection con2 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con2.Open();
            List<ReqStatus> Accdata = new List<ReqStatus>();
            string Acc = "";
            Acc = "select A.cOrderID,G.[desc] category,A.cActno,C.ccompanyname,A.xQtty,A.xApprQtty,A.xPrtQtty,(A.cCreatedBy+'/'+F.StaffName) StaffName,A.cApprovedBy,cPrintedBy,A.cCBP,cstatus = case when A.cstatus = 'N'  then 'New Request'  when A.cstatus = 'A'  then 'Approved' when A.cstatus = 'R'  then 'Rejected' when A.cstatus = 'I'  then 'In Progress' when A.cstatus = 'C'  then 'Completed'    when A.cstatus = 'D'  then 'Cancelled'  else 'New' end  from cnas.cnas.BranchRequest A (nolock)  left join cnas.cnas.CNType B (nolock) on ltrim(A.cCNTypeCode) = ltrim(B.cCNType) and B.cstatus = 'A' left join CRM.dbo.apickupdetails C (nolock) on A.cActno = C.caccountNo left join CRM.dbo.aacctdetails D (nolock) on A.cActno = D.caccountno left join gdexpdb.oms.parameter E (nolock) on E.dropcode = D.csubaccttype and E.status = '1' left join [CNAS].[cnas].[AppUser] F (nolock) on F.StaffID = A.cCreatedBy left join gdexpdb.oms.parameter G (nolock) on G.dropcode = A.cTypeCd and G.status = '1' and G.category = A.cType where A.cActno = '"+Accountnum+"'";
            SqlCommand com2 = new SqlCommand(Acc, con2);
            using (SqlDataReader read2 = com2.ExecuteReader())
            {
                while (read2.Read())
                {
                    ReqStatus data = new ReqStatus();
                    data.cActno = read2["cActno"].ToString();
                    data.cApprovedBy = read2["cApprovedBy"].ToString();
                    data.category = Convert.ToInt32(read2["category"]);
                    data.cCBP = read2["cCBP"].ToString();
                    data.ccompanyname = Convert.ToInt32(read2["ccompanyname"]);
                    data.cOrderID = read2["cOrderID"].ToString();
                    data.cPrintedBy = read2["cPrintedBy"].ToString();
                    data.cstatus = read2["cstatus"].ToString();
                    data.xQtty = Convert.ToInt32(read2["xQtty "]);
                    data.xPrtQtty = Convert.ToInt32(read2["xPrtQtty "]);
                    data.xApprQtty = Convert.ToInt32(read2["xApprQtty "]);
                    data.StaffName = Convert.ToInt32(read2["StaffName "]);
                    Accdata.Add(data);
                }
            }
            con2.Close();
            return Accdata;
           // throw new NotImplementedException();
        }

        public IEnumerable<ReqStatus> searchID(string ID1)
        {
            SqlConnection con3 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con3.Open();
            List<ReqStatus> IDdata = new List<ReqStatus>();
            string ID = "";
            ID = "select A.cOrderID,G.[desc] category,A.cActno,C.ccompanyname,A.xQtty,A.xApprQtty,A.xPrtQtty,(A.cCreatedBy+'/'+F.StaffName) StaffName,A.cApprovedBy,cPrintedBy,A.cCBP,cstatus = case when A.cstatus = 'N'  then 'New Request'  when A.cstatus = 'A'  then 'Approved' when A.cstatus = 'R'  then 'Rejected' when A.cstatus = 'I'  then 'In Progress' when A.cstatus = 'C'  then 'Completed'    when A.cstatus = 'D'  then 'Cancelled'  else 'New' end  from cnas.cnas.BranchRequest A (nolock)  left join cnas.cnas.CNType B (nolock) on ltrim(A.cCNTypeCode) = ltrim(B.cCNType) and B.cstatus = 'A' left join CRM.dbo.apickupdetails C (nolock) on A.cActno = C.caccountNo left join CRM.dbo.aacctdetails D (nolock) on A.cActno = D.caccountno left join gdexpdb.oms.parameter E (nolock) on E.dropcode = D.csubaccttype and E.status = '1' left join [CNAS].[cnas].[AppUser] F (nolock) on F.StaffID = A.cCreatedBy left join gdexpdb.oms.parameter G (nolock) on G.dropcode = A.cTypeCd and G.status = '1' and G.category = A.cType where A.cActno = '" + ID + "'";
            SqlCommand com2 = new SqlCommand(ID, con3);
            using (SqlDataReader read2 = com2.ExecuteReader())
            {
                while (read2.Read())
                {
                    ReqStatus data = new ReqStatus();
                    data.cActno = read2["cActno"].ToString();
                    data.cApprovedBy = read2["cApprovedBy"].ToString();
                    data.category = Convert.ToInt32(read2["category"]);
                    data.cCBP = read2["cCBP"].ToString();
                    data.ccompanyname = Convert.ToInt32(read2["ccompanyname"]);
                    data.cOrderID = read2["cOrderID"].ToString();
                    data.cPrintedBy = read2["cPrintedBy"].ToString();
                    data.cstatus = read2["cstatus"].ToString();
                    data.xQtty = Convert.ToInt32(read2["xQtty "]);
                    data.xPrtQtty = Convert.ToInt32(read2["xPrtQtty "]);
                    data.xApprQtty = Convert.ToInt32(read2["xApprQtty "]);
                    data.StaffName = Convert.ToInt32(read2["StaffName "]);
                    IDdata.Add(data);
                }
            }
            con3.Close();
            return IDdata;
            throw new NotImplementedException();
        }
    }
}
