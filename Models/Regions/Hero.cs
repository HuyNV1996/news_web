using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class Hero
    {
        [Field(Options = FieldOption.HalfWidth)]
        public StringField Name { get; set; }

        [Field(Options = FieldOption.HalfWidth)]
        public StringField Title { get; set; }

        [Field]
        public ImageField Avatar { get; set; }
    }
}
