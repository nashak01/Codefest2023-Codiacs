using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class Session
    {
        public Session()
        {
            ChildDrawnImages = new HashSet<ChildDrawnImage>();
            FeelingRatings = new HashSet<FeelingRating>();
            MemoryJarItems = new HashSet<MemoryJarItem>();
            SessionsFeelings = new HashSet<SessionsFeeling>();
        }

        public int SessionId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? ChildUserId { get; set; }
        public int? CouncillorUserId { get; set; }
        public DateTime? EndDate { get; set; }

        public virtual User? ChildUser { get; set; }
        public virtual User? CouncillorUser { get; set; }
        public virtual ICollection<ChildDrawnImage> ChildDrawnImages { get; set; }
        public virtual ICollection<FeelingRating> FeelingRatings { get; set; }
        public virtual ICollection<MemoryJarItem> MemoryJarItems { get; set; }
        public virtual ICollection<SessionsFeeling> SessionsFeelings { get; set; }
    }
}
