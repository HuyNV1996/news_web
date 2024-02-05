using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class HomeSolution
    {
        [Field(Title = "Title", Options = FieldOption.HalfWidth)]
        public StringField Title { get; set; }

        [Field(Title = "Banner", Options = FieldOption.HalfWidth)]
        public ImageField Image { get; set; }

        [Field(Title = "Liên kết", Options = FieldOption.HalfWidth)]
        public StringField LinkBtn { get; set; }
    }
}
