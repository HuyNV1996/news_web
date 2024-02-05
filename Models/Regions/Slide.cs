using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class Slide
    {
        [Field(Options = FieldOption.HalfWidth)]
        public StringField TopTitle { get; set; }


        [Field(Options = FieldOption.HalfWidth)]
        public StringField SubTitle { get; set; }


        [Field]
        public TextField Description { get; set; }


        [Field]
        public ImageField Image { get; set; }
    }
}
