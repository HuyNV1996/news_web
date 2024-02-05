using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
	public class IntroAboutApecGroup
	{
		[Field(Title = "Đoạn giới thiệu 1")]
		public TextField Paragraph1 { get; set; }

		[Field(Title = "Đoạn giới thiệu 2")]
		public TextField Paragraph2 { get; set; }

		[Field(Title = "Đoạn giới thiệu 3")]
		public TextField Paragraph3 { get; set; }

		[Field(Title = "Ảnh 1 (bên trái kích thước 448w x 368h)")]
		public ImageField Image1 { get; set; }

		[Field(Title = "Ảnh 2 (bên phải kích thước 336w x 512h)")]
		public ImageField Image2 { get; set; }
	}
}
