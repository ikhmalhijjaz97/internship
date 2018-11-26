using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Models
{
    [Table("oms.parameter")]
   public partial class PARAMETERS: Entity
    {
        [Key]
        [StringLength(20)]
        public string category { get; set; }

        [StringLength(5)]
        public string dropcode { get; set; }

        [StringLength(40)]
        public string desc { get; set; }

        [StringLength(10)]
        public string createdby { get; set; }

        public DateTime? createddate { get; set; }

        [StringLength(10)]
        public string updatedby { get; set; }

        public DateTime? updateddate { get; set; }

        [StringLength(1)]
        public string status { get; set; }

        [StringLength(2)]
        public string subcategory { get; set; }
    }
    public class CN
    {

        public string desc { get; set; }
        public string dropcode { get; set; }
    }

    public class input1
    {
        public string dropcode { get; set; }
    }

    public class companyname
    {
        public string ccompanyname { get; set; }
        public string caccountno { get; set; }
    }
    public class branch
    {       
        public string origin_code { get; set; }
         public string description { get; set; }
    }
    public class cntype { 
        public string cCNTypeCode { get; set; }
    }
    public class cngrp
    {
        public string printtypegrp { get; set; }
    }

    public class insert
    {
        public string dropcode { get; set; }
        public string NO { get; set; }
        public string branch { get; set; }
        public string subcn { get; set; }
        public string caccountno { get; set; }
        public string quantity { get; set; }
        public string remark { get; set; }
        
          
    }
}
