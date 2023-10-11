using System;
using System.Collections.Generic;

namespace CodiacsApi.Models
{
    public partial class User
    {
        public User()
        {
            SessionChildUsers = new HashSet<Session>();
            SessionCouncillorUsers = new HashSet<Session>();
            UserCustomisations = new HashSet<UserCustomisation>();
        }

        public int UserId { get; set; }
        public DateTime? CreationDate { get; set; }
        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        public int? Role { get; set; }

        public virtual Role? RoleNavigation { get; set; }
        public virtual ICollection<Session> SessionChildUsers { get; set; }
        public virtual ICollection<Session> SessionCouncillorUsers { get; set; }
        public virtual ICollection<UserCustomisation> UserCustomisations { get; set; }
    }
}
