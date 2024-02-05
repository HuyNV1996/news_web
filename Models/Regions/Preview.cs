using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
	public class BodyPreview
	{
		[Field(Title = "Title Công ty")]
		public StringField About { get; set; }

		[Field(Title = "Công ty")]
		public StringField Company { get; set; }

		[Field(Title = "From")]
		public StringField SubCompany { get; set; }

		[Field(Description = "Mô tả công ty")]
		public StringField Description { get; set; }

		//[Field(Title = "Image")]
		//public ImageField Image1 { get; set; }

		//[Field(Title = "SubImage")]
		//public ImageField Image { get; set; }
	}
}
