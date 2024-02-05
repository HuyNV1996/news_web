using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class HomeReviewer
    {
        [Field(Title = "Tên khách hàng", Options = FieldOption.HalfWidth)]
        public StringField Name { get; set; }
        [Field(Title = "Ảnh đại diện", Options = FieldOption.HalfWidth)]
        public ImageField Avatar { get; set; }

        [Field(Title = "Bình luận")]
        public StringField Content { get; set; }
    }
}
