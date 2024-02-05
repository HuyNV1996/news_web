using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class ProductFinance


    {
        [Field(Title = "Id (Ví dụ: _asavings)")]
        public StringField Id { get; set; }
        [Field(Title = "Tên gói (Ví dụ: Asavings)")]
        public StringField Name { get; set; }
        
        [Field(Title = "Tiêu đề")]
        public StringField Title { get; set; }

        [Field(Title = "Nội dung")]
        public HtmlField Content { get; set; }
        [Field(Title = "Liên kết")]
        public StringField Link { get; set; }
    }
}
