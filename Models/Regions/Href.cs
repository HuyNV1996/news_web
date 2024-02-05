using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class Href
    {
        [Field(Title = "Button Text", Options = FieldOption.HalfWidth)]
        public StringField ButtonText { get; set; }

        [Field(Title = "Button Link", Options = FieldOption.HalfWidth)]
        public PageField ButtonLink { get; set; }
    }
}
