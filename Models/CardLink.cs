using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models
{
    public class CardLink
    {
        [Field(Title = "Baner")]
        public ImageField Banner { get; set; }

        [Field(Title = "Tiêu đề")]
        public StringField Title { get; set; }
        
        [Field(Title = "Mô tả")]
        public StringField Desc { get; set; }
        [Field(Title = "Liên kết")]
        public StringField Link { get; set; }
    }
}
