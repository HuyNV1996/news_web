using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
	public class IntroVision
	{
		[Field(Title = "Tầm nhìn")]
		public TextField Vision { get; set; }

		[Field(Title = "Sứ mệnh")]
		public TextField Mission { get; set; }

		[Field(Title = "Ảnh (Kích thước 608w x 640h)")]
		public ImageField Image { get; set; }
	}
}
