using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
    public class TextHtmlImage
    {
        [Field]
        public StringField Title { get; set; }

        [Field]
        public HtmlField Body { get; set; }

        [Field]
        public ImageField Icon { get; set; }
    }
}
