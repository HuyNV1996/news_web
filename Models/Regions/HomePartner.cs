using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class HomePartner
    {
        [Field(Title = "Liên kết", Options = FieldOption.HalfWidth)]
        public StringField Link { get; set; }
        [Field(Title = "Logo", Options = FieldOption.HalfWidth)]
        public ImageField Logo { get; set; }
    }
}
