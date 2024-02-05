using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class ProductFinanceSection
    {
        [Field(Title = "Mô tả giới thiệu sản phẩm")]
        public StringField Desc { get; set; }

        [Field(Title = "Danh sách sản phẩm")]
        IList<ProductFinance> Products { get; set; }
    }
}
