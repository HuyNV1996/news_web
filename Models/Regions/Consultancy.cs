using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;
using System.ComponentModel.DataAnnotations;

namespace web_ttkd.Models.Regions
{
	public enum RegionsType
	{
		[Display(Description = "Hà Nội")]
		HaNoi,
		[Display(Description = "Hồ Chí Minh")]
		HoChiMinh,
		[Display(Description = "Huế")]
		Hue
	}
	public class Consultancy
    {
        [Field(Title = "Tên tư vấn viên", Options = FieldOption.HalfWidth)]
        public StringField Name { get; set; }
		[Field(Title = "Vùng/ Miền", Options = FieldOption.HalfWidth)]
		public SelectField<RegionsType> Regions { get; set; }

		[Field(Title = "Ảnh đại diện", Options = FieldOption.HalfWidth)]
        public ImageField Avatar { get; set; }

        [Field(Title = "Chức vụ")]
        public StringField PositionTitle { get; set; }
        [Field(Title = "Mô tả")]
        public TextField Desc { get; set; }

        [Field(Title = "Link đọc thêm")]
        public StringField ReadMoreLink { get; set; }
    }
}
