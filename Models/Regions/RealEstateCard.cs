using Piranha.Data;
using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Manager;
using Piranha.Models;
using System.ComponentModel.DataAnnotations;

namespace web_ttkd.Models.Regions
{
    public enum BussinessType
    {
        [Display(Description = "Mua")]
        mua,
        [Display(Description = "Cho thuê")]
        cho_thue,
        [Display(Description = "Ký gửi")]
        ky_gui
    }
    public class RealEstateCard
    {
        [Field(Title = "Hình thức kinh doanh")]
        public SelectField<BussinessType> BussinessType { get; set; }
        [Field(Title = "Loại sản phẩm", Placeholder = "Vui lòng nhập chính xác loại sản phẩm")]
        public StringField ProductSegment { get; set; }

        [Field(Title = "Tiêu đề", Options = FieldOption.HalfWidth)]
        public StringField Title { get; set; }

        [Field(Placeholder ="Chọn icon sao" ,Title = "Đổi icon sao", Options = FieldOption.HalfWidth)]
        public CheckBoxField IsStarIcon { get; set; }

        [Field(Title = "Số lượng phòng", Options = FieldOption.HalfWidth, Description = "Nhập số lượng và đơn vị")]
        public StringField RoomNum { get; set; }

      

        [Field(Title = "Diện tích", Options = FieldOption.HalfWidth, Description = "Nhập diện tích và đơn vị")]
        public StringField Square { get; set; }

       

        [Field(Title = "Giá", Options = FieldOption.HalfWidth, Description = "Nhập giá theo đơn vị VNĐ")]
        public StringField Price { get; set; }

        [Field(Title = "Ảnh", Options = FieldOption.HalfWidth)]
        public ImageField Image { get; set; }

        [Field(Title = "Liên kết", Options = FieldOption.HalfWidth)]
        public StringField LinkBtn { get; set; }
    }
}
