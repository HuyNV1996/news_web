using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class Banner
    {
        [Field]
        public StringField Title { get; set; }

        [Field]
        public TextField SubTitle { get; set; }

        [Field]
        public ImageField ImageBanner { get; set; }
    }
}
