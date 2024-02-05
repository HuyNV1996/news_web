using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class HomeCareCustomer
    {
        [Field(Title = "Title")]
        public StringField Title { get; set; }
        [Field(Title = "Nội dung")]
        public StringField Body { get; set; }
    }
}
