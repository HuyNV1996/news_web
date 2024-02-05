using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class Recruit
    {
        [Field(Title = "Vị trí/Cấp bậc (Ví dụ: [HN] Trưởng phòng kinh doanh)", Options = FieldOption.HalfWidth)]
        public StringField Level { get; set; }

        [Field(Title = "Mức lương (Ví dụ: 30-50 triệu)",Options = FieldOption.HalfWidth)]
        public StringField Salary { get; set; }

        [Field(Title = "Địa điểm (Ví dụ: Hà Nội)", Options = FieldOption.HalfWidth)]
        public StringField Address { get; set; }

        [Field(Title = "Hình thức công việc (Toàn thời gian/Bán thời gian)", Options = FieldOption.HalfWidth)]
        public StringField JobType { get; set; }

        [Field(Title = "Kinh nghiệm (Ví dụ: 2-3 năm) ")]
        public StringField Exp { get; set; }

        [Field(Title = "Mô tả chi tiết công việc")]
        public HtmlField Body { get; set; }
    }
}
