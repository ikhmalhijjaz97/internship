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
    }
}
