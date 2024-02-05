using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

public class Footer
{
    [Field(Title = "Địa chỉ")]
    public StringField Address { get; set; }
    [Field(Title = "Số điện thoại")]
    public StringField Phone { get; set; }

    [Field(Title = "Fax")]
    public StringField Fax { get; set; }

    [Field(Title = "Email")]
    public StringField Email { get; set; }
}