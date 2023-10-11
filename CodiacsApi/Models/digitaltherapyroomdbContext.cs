using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CodiacsApi.Models
{
    public partial class digitaltherapyroomdbContext : DbContext
    {
        public digitaltherapyroomdbContext()
        {
        }

        public digitaltherapyroomdbContext(DbContextOptions<digitaltherapyroomdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ChildDrawnImage> ChildDrawnImages { get; set; } = null!;
        public virtual DbSet<Feeling> Feelings { get; set; } = null!;
        public virtual DbSet<FeelingRating> FeelingRatings { get; set; } = null!;
        public virtual DbSet<MemoryJarItem> MemoryJarItems { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Session> Sessions { get; set; } = null!;
        public virtual DbSet<SessionsFeeling> SessionsFeelings { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<UserCustomisation> UserCustomisations { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:codiacs.database.windows.net,1433;Initial Catalog=digital-therapy-room-db;Persist Security Info=False;User ID=codiacs_admin;Password=Volcano1110;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChildDrawnImage>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ImageName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.ChildDrawnImages)
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK__ChildDraw__Sessi__75A278F5");
            });

            modelBuilder.Entity<Feeling>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<FeelingRating>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IsStartOfSession).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.FeelingRatings)
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK__FeelingRa__Sessi__7D439ABD");
            });

            modelBuilder.Entity<MemoryJarItem>(entity =>
            {
                entity.ToTable("MemoryJarItem");

                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.MemoryDescription)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.MemoryJarItems)
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK__MemoryJar__Sessi__02084FDA");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Session>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.HasOne(d => d.ChildUser)
                    .WithMany(p => p.SessionChildUsers)
                    .HasForeignKey(d => d.ChildUserId)
                    .HasConstraintName("FK__Sessions__ChildU__693CA210");

                entity.HasOne(d => d.CouncillorUser)
                    .WithMany(p => p.SessionCouncillorUsers)
                    .HasForeignKey(d => d.CouncillorUserId)
                    .HasConstraintName("FK__Sessions__Counci__6A30C649");
            });

            modelBuilder.Entity<SessionsFeeling>(entity =>
            {
                entity.HasKey(e => e.SessionFeelingId)
                    .HasName("PK__Sessions__BA8F60473BD21EF5");

                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Feeling)
                    .WithMany(p => p.SessionsFeelings)
                    .HasForeignKey(d => d.FeelingId)
                    .HasConstraintName("FK__SessionsF__Feeli__71D1E811");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.SessionsFeelings)
                    .HasForeignKey(d => d.SessionId)
                    .HasConstraintName("FK__SessionsF__Sessi__70DDC3D8");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.RoleNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.Role)
                    .HasConstraintName("FK__Users__Role__656C112C");
            });

            modelBuilder.Entity<UserCustomisation>(entity =>
            {
                entity.HasKey(e => e.UserCustomisationsId)
                    .HasName("PK__UserCust__CBCF73E05BA21704");

                entity.Property(e => e.BottomLeftWingColour)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.BottomRightWingColour)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreationDate)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FontColour)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TopLeftWingColour)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TopRightWingColour)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Typeface)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserCustomisations)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__UserCusto__UserI__797309D9");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
