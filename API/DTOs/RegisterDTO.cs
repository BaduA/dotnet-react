using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\)(?=.*[a-z])(?=.*[A-Z]).{4,8}$",ErrorMessage ="password not valid")]
        public string Password { get; set; }
        [Required]
        public string Username { get; set; }
    }
}