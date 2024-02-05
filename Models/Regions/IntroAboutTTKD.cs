using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
	public class IntroAboutTTKD
	{
		[Field(Title = "Giới thiệu")]
		public TextField desc { get; set; }

		[Field(Title = "Ảnh (Kích thước 560w x 480h)")]
		public ImageField Image { get; set; }
	}
}
