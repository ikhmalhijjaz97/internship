using Abp.Domain.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models.CustConReq
{
    public class CustConReqManager : DomainService, ICustConReqManager
    {
        public IEnumerable<avoid> getcnban()
        {
            SqlConnection con3 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["fifth"].ConnectionString);
            con3.Open();
            List<avoid> bancn = new List<avoid>();
            string ban = "";
            ban = "SELECT * FROM [CNAS].[cnas].[CNType] where cStatus = 'A' and cPrintCtrl = 'E'";
            SqlCommand com3 = new SqlCommand(ban, con3);
            using (SqlDataReader reader = com3.ExecuteReader())
            {
                while (reader.Read())
                {
                    avoid data = new avoid();
                    data.cCNTypeCode = reader["cCNTypeCode"].ToString();
                    bancn.Add(data);
                }
            }
            con3.Close();
            return bancn;


        }

        public IEnumerable<CustConReq> getcustomerdata(string Acc)
        {
            SqlConnection try2 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["six"].ConnectionString);
            try2.Open();
            List<CustConReq> getcustomer = new List<CustConReq>();
            string data = "";
            data = "select A.caccountNo,A.cPickOriginCode,A.cControlOriginCode,B.cStatus,A.cPrtDisable,F.[desc] as SubAccType,D.[desc] as TypeAcc,A.cCNTypeCode,A.cSender,A.cAllBr,A.cAllNtw,A.ccompanyname,A.caddress1,A.caddress2,A.caddress3,A.cpostcode,A.ctown,A.cstate,C.caccttype,C.csubaccttype from CRM.dbo.apickupdetails A(nolock) left join CRM.dbo.acustomer B(nolock) on A.caccountNo = B.caccountNo left join CRM.dbo.aacctdetails C(nolock) on A.caccountno = C.caccountno left join gdexpdb.oms.parameter D(nolock) on D.dropcode = C.caccttype  and D.category = 'TypeAcct' and D.status = '1' left join gdexpdb.oms.parameter F(nolock) on F.dropcode = C.csubaccttype and F.status = '1' where A.caccountNo = '"+Acc+"' ";
            SqlCommand comdata = new SqlCommand(data, try2);
            using (SqlDataReader datacus= comdata.ExecuteReader())
            {
                while (datacus.Read())
                {
                    CustConReq data2 = new CustConReq();
                    data2.caccountNo = datacus["caccountNo"].ToString();
                    data2.caccttype = datacus["caccttype"].ToString();
                    data2.caddress1 = datacus["caddress1"].ToString();
                    data2.caddress2 = datacus["caddress2"].ToString();
                    data2.caddress3 = datacus["caddress3"].ToString();
                    data2.cAllBr = datacus["cAllBr"].ToString();
                    data2.cAllNtw = datacus["cAllNtw"].ToString();
                    data2.cCNTypeCode = datacus["cCNTypeCode"].ToString();
                    data2.ccompanyname = datacus["ccompanyname"].ToString();
                    data2.cControlOriginCode = datacus["cControlOriginCode"].ToString();
                    data2.cPickOriginCode = datacus["cPickOriginCode"].ToString();
                    data2.cpostcode = datacus["cpostcode"].ToString();
                    data2.cPrtDisable = datacus["cPrtDisable"].ToString();
                    data2.cSender = datacus["cSender"].ToString();
                    data2.cstate = datacus["cstate"].ToString();
                    data2.cStatus = datacus["cStatus"].ToString();
                    data2.csubaccttype = datacus["csubaccttype"].ToString();
                    data2.ctown = datacus["ctown"].ToString();
                    data2.TypeAcc = datacus["TypeAcc"].ToString();
                    data2.SubAccType = datacus["SubAccType"].ToString();
                    getcustomer.Add(data2);

                }
            }
            try2.Close();
            return getcustomer;
              //  throw new NotImplementedException();
        }

        public IEnumerable<printctrl> getprintdata(string cntype)
        {
            SqlConnection con2 = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["fifth"].ConnectionString);
            con2.Open();
            List<printctrl> data = new List<printctrl>();
            string printdata = "";
            printdata = "select cCNType,cPrintCtrl from cnas.cnas.CNType(nolock) where  cStatus = 'A' and cCNType = '" + cntype+ "'";
            SqlCommand com2 = new SqlCommand(printdata, con2);
            using (SqlDataReader read2= com2.ExecuteReader())
            {
                while (read2.Read())
                {
                    printctrl temp = new printctrl();
                    temp.cPrintCtrl = read2["cPrintCtrl"].ToString();
                    data.Add(temp);
                }
            }
            con2.Close();
            return data;
        }
    }
}
