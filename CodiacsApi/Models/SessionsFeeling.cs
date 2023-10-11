using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class SessionsFeeling
    {
        public int SessionFeelingId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? SessionId { get; set; }
        public int? FeelingId { get; set; }

        public virtual Feeling? Feeling { get; set; }
        public virtual Session? Session { get; set; }
    }
}
