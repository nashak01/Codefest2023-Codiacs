using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class ChildDrawnImage
    {
        public int ChildDrawnImageId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? SessionId { get; set; }
        public string? ImageName { get; set; }
        public byte[]? ImageData { get; set; }

        public virtual Session? Session { get; set; }
    }
}
