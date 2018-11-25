using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.Requistion2
{
    public class RequistionManager : DomainService, IRequisitionManager
    {
        public IEnumerable<Approval> approval(string orderID)
        {
            SqlConnection con2 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con2.Open();
            string approve = "";
            List<Approval> list1 = new List<Approval>();
            approve = "select A.cOrderID,A.cCNTypeCode,A.cPrtCode,B.cPrintCtrl,A.xApprQtty from cnas.cnas.BranchRequest A (nolock) left join cnas.cnas.CNType B (nolock) on A.cCNTypeCode = B.cCNType  where A.cOrderID ='"+ orderID+"'";
            SqlCommand com = new SqlCommand(approve, con2);
            using (SqlDataReader read2 = com.ExecuteReader())
            {
                while (read2.Read())
                {
                    Approval data = new Approval();
                    data.cCNTypeCode = read2["cCNTypeCode"].ToString();
                    data.cOrderID = read2["cOrderID"].ToString();
                    data.cPrtCode = read2["cPrtCode"].ToString();
                    data.cPrintCtrl = read2["cPrintCtrl"].ToString();
                    list1.Add(data);

                }
            }
            con2.Close();
            return list1;
        }

        public IEnumerable<check> check(string printctrl)
        {
            SqlConnection con3 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con3.Open();
            List<check> data = new List<check>();
            string check = "";
            check = "SELECT cCode,cSeq,xMax,FirstNo,cRemark,Status,cCNLen FROM [CNAS].[cnas].[CtrlCN] (nolock) where cCode = '" + printctrl + "' and Status = '1'";
            SqlCommand com3 = new SqlCommand(check, con3);
            using (SqlDataReader read3= com3.ExecuteReader())
            {
                while (read3.Read())
                {
                    check data1 = new check();
                    data1.cCNLen = read3["cCNLen"].ToString();
                    data1.cCode = read3["cCode"].ToString();
                    data1.cSeq = read3["cSeq"].ToString();
                    data1.xMax = Convert.ToInt32(read3["xMax"]);
                    data1.FirstNo = Convert.ToInt32(read3["FirstNo"]);
                    data1.cRemark = read3["cRemark"].ToString();
                    data1.Status = read3["Status"].ToString();
                    data.Add(data1);
                }
            }
            con3.Close();
            return data;
           
        }

        public IEnumerable<Requisition> GetRequisitions()
        {
            SqlConnection con = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con.Open();
            string extract = "";
            List<Requisition> listofdata = new List<Requisition>();
            extract = "select B.cCNTypeDesc,A.cOrderID,A.cTrxCode,A.cType,A.cTypeCd,A.cPrtCode,A.xQtty,A.cActno,C.ccompanyname,A.cCreatedBrno,A.dCreated,E.[desc] as Acc_Type,A.cSenderAcc ,A.cRecAcc,A.cRequestRemark,(A.cCreatedBy + '/' + F.StaffName) StaffName,G.[desc] category,H.dDtPrinted as LastPrinted from cnas.cnas.BranchRequest A (nolock)left join cnas.cnas.CNType B (nolock) on ltrim(A.cCNTypeCode) = ltrim(B.cCNType) and B.cstatus = 'A' left join CRM.dbo.apickupdetails C(nolock) on A.cActno = C.caccountNo  left join CRM.dbo.aacctdetails D(nolock) on A.cActno = D.caccountno  left join gdexpdb.oms.parameter E(nolock) on E.dropcode = D.caccttype and E.status = '1' and category = 'TypeAcct' left join[CNAS].[cnas].[AppUser] F(nolock) on F.StaffID = A.cCreatedBy left join gdexpdb.oms.parameter G (nolock) on G.dropcode = A.cTypeCd and G.status = '1' and G.category = A.cType left join (SELECT cAccountno, MAX(dDtPrinted) dDtPrinted FROM[CNAS].[cnas].[ReqHist] (nolock) group by cAccountno) H on H.cAccountno = A.cActno where A.cstatus = 'N'  and(A.cTypeCd NOT in ('0301','0302','0303','0304','0201','0202','0203','0204','0205') and E.[desc] != 'Prepaid' )  order by cOrderID desc ";
            SqlCommand com = new SqlCommand(extract,con);
            using (SqlDataReader read1 = com.ExecuteReader())
            {
                while (read1.Read())
                {
                    Requisition transdata = new Requisition();
                    transdata.Acc_Type = read1["Acc_Type"].ToString();
                    transdata.cCNTypeDesc = read1["cCNTypeDesc"].ToString();
                    transdata.cOrderID = read1["cOrderID"].ToString();
                    transdata.cTrxCode = read1["cTrxCode"].ToString();
                    transdata.cType =  Convert.ToInt32(read1["cType"]);
                    transdata.cTypeCd = Convert.ToInt32(read1["cTypeCd"]);
                    transdata.cPrtCode = read1["cPrtCode "].ToString();
                    transdata.xQtty = Convert.ToInt32(read1["xQtty"]);
                    transdata.cActno = read1["cActno "].ToString();
                    transdata.ccompanyname = read1["ccompanyname"].ToString();
                    transdata.cCreatedBrno = read1["cCreatedBrno "].ToString();
                    transdata.dCreated = Convert.ToDateTime(read1["dCreated"]);
                    transdata.cSenderAcc = read1["cSenderAcc"].ToString();
                    transdata.cRecAcc = read1["cRecAcc"].ToString();
                    transdata.cRequestRemark = read1["cRequestRemark"].ToString();
                    transdata.StaffName = read1["StaffName"].ToString();
                    transdata.category = read1["category"].ToString();
                    transdata.LastPrinted = Convert.ToDateTime(read1["LastPrinted"]);
                    listofdata.Add(transdata);

                }
            }
            con.Close();
            return listofdata;
        }

        public void updatebranch(string ReferenceNo)
        {
            SqlConnection con1 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con1.Open();
            string update = "";
            update = "update cnas.cnas.BranchRequest set cstatus = 'R' where cOrderID =@ReferenceNo1";
            
            using(SqlCommand com1 = new SqlCommand(update, con1))
            {
                com1.Parameters.AddWithValue("ReferenceNo1", ReferenceNo);
                int rows = com1.ExecuteNonQuery();
                Console.Write(rows);
            }
            con1.Close();
           // throw new NotImplementedException();
        }

        public void updaterequest()
        {
            SqlConnection con1 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Second"].ConnectionString);
            con1.Open();
            string update = "";
            update = "update cnas.cnas.BranchRequest set cstatus = 'A',xApprQtty = '50',cApprovedBy = '50604',cAppvDept='KUA',dApprovedBy = '2018-11-07' where cOrderID = 'SSC18/000000007'";

            using (SqlCommand com1 = new SqlCommand(update, con1))
            {
               // com1.Parameters.AddWithValue("ReferenceNo1");
                int rows = com1.ExecuteNonQuery();
                Console.Write(rows);
            }
            con1.Close();
            //throw new NotImplementedException();
        }
    }
}
