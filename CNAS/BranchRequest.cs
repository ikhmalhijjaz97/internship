namespace LibraryApp.Models.CNAS
{
    using Abp.Domain.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("cnas.BranchRequest")]
    public partial class BranchRequest : Entity
    {
        [NotMapped ]
        public override int Id { get { return 0; } set { } }
        [Key]
        [StringLength(20)]
        public string cOrderID { get; set; }

       

    [StringLength(40)]
        public string cTrxCode { get; set; }

        [Required]
        [StringLength(15)]
        public string cType { get; set; }

        [Required]
        [StringLength(5)]
        public string cTypeCd { get; set; }

        [StringLength(20)]
        public string cPrtCode { get; set; }

        public int xQtty { get; set; }

        public int? xPrtQtty { get; set; }

        public int? xApprQtty { get; set; }

        public int? xCancelCnt { get; set; }

        public decimal? dUnitPrice { get; set; }

        [StringLength(7)]
        public string cTypeDesc { get; set; }

        [StringLength(1)]
        public string cImpReq { get; set; }

        [StringLength(1)]
        public string cSenderInd { get; set; }

        [Required]
        [StringLength(15)]
        public string cActno { get; set; }

        [StringLength(10)]
        public string cAppvDept { get; set; }

        [StringLength(10)]
        public string cChargeTo { get; set; }

        [StringLength(30)]
        public string cCNFor { get; set; }

        [StringLength(60)]
        public string cDesc { get; set; }

        [StringLength(1)]
        public string cReceiverInd { get; set; }

        [StringLength(15)]
        public string cRecAcc { get; set; }

        [StringLength(200)]
        public string cRequestRemark { get; set; }

        [StringLength(1)]
        public string cstatus { get; set; }

        [StringLength(1)]
        public string cPrintReq { get; set; }

        [StringLength(10)]
        public string cBrno { get; set; }

        [StringLength(15)]
        public string cBrActno { get; set; }

        [StringLength(10)]
        public string cCreatedBrno { get; set; }

        [StringLength(10)]
        public string cCreatedBy { get; set; }

        public DateTime? dCreated { get; set; }

        [StringLength(50)]
        public string cCBP { get; set; }

        [StringLength(50)]
        public string cCBPRvr { get; set; }

        [StringLength(10)]
        public string cCBPDept { get; set; }

        [StringLength(50)]
        public string cCBPSender { get; set; }

        [StringLength(10)]
        public string cUpdatedBy { get; set; }

        public DateTime? dUpdateBy { get; set; }

        [StringLength(10)]
        public string cApprovedBy { get; set; }

        public DateTime? dApprovedBy { get; set; }

        [StringLength(10)]
        public string cPrintedBy { get; set; }

        public DateTime? dtPrinted { get; set; }

        [StringLength(10)]
        public string cAcknwBy { get; set; }

        [StringLength(10)]
        public string cAcknwBrno { get; set; }

        public DateTime? dAcknw { get; set; }

        [StringLength(50)]
        public string cStartNo { get; set; }

        [StringLength(50)]
        public string cEndNO { get; set; }

        [StringLength(11)]
        public string cSubActno { get; set; }

        [StringLength(100)]
        public string cRejectRemark { get; set; }

        [StringLength(100)]
        public string cActionRemark { get; set; }

        [StringLength(6)]
        public string cCNTypeCode { get; set; }

        [StringLength(15)]
        public string cSenderAcc { get; set; }

        [StringLength(20)]
        public string PrintTypeGrp { get; set; }

        [StringLength(100)]
        public string cEmailTo { get; set; }
    }
}
