using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class MemoryJarItem
    {
        public int MemoryJarItemId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? SessionId { get; set; }
        public string? MemoryDescription { get; set; }
        public int? Ranking { get; set; }

        public virtual Session? Session { get; set; }
    }
}
