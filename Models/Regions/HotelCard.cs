using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
    public class HotelCard
    {
        [Field(Title = "Baner")]
        public ImageField Banner { get; set; }

        [Field(Title = "Tiêu đề")]
        public StringField Title { get; set; }

        [Field(Title = "Liên kết")]
        public StringField Link { get; set; }
    }
}
