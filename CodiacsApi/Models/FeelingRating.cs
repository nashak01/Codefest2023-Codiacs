using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class FeelingRating
    {
        public int FeelingRatingId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? SessionId { get; set; }
        public bool? IsStartOfSession { get; set; }

        public virtual Session? Session { get; set; }
    }
}
