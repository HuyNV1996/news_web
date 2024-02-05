using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class ImageLabel
    {
		[Field(Title = "Text")]
		public StringField Title { get; set; }

		[Field(Title = "Banner")]
		public ImageField Image { get; set; }

    }
}
