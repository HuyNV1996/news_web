using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class ManagementField
    {
        [Field(Title = "Tên quản lý")]
        public StringField NameTitle { get; set; }

        [Field( Title= "Chức vụ")]
        public StringField PositionTitle { get; set; }
        [Field(Title = "Ảnh đại diện")]
        public ImageField Avatar { get; set; }

        [Field (Description = "Mô tả")]
        public StringField Description { get; set; }
    }

   
}
