using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class Feeling
    {
        public Feeling()
        {
            SessionsFeelings = new HashSet<SessionsFeeling>();
        }

        public int FeelingId { get; set; }
        public DateTime? CreationDate { get; set; }
        public string? Description { get; set; }

        public virtual ICollection<SessionsFeeling> SessionsFeelings { get; set; }
    }
}
