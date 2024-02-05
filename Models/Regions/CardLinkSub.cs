using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
	public class CardLinkSub
	{
		[Field(Title = "Tiêu đề")]
		public StringField Title { get; set; }

		[Field(Title = "Mô tả")]
		public TextField SubTitle { get; set; }

		[Field(Title = "Ảnh banner")]
		public ImageField ImageBanner { get; set; }
        [Field(Title = "Link")]
        public TextField Link { get; set; }
    }
}
