using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class UserCustomisation
    {
        public int UserCustomisationsId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? UserId { get; set; }
        public string? TopLeftWingColour { get; set; }
        public string? TopRightWingColour { get; set; }
        public string? BottomLeftWingColour { get; set; }
        public string? BottomRightWingColour { get; set; }
        public string? Typeface { get; set; }
        public string? FontColour { get; set; }

        public virtual User? User { get; set; }
    }
}
