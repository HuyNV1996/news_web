using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Bất động sản", UseBlocks = false)]
    [ContentTypeRoute(Title = "RealEstatePage", Route = "/bat-dong-san")]
    public class RealEstatePage : Page<RealEstatePage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public IList<ImageField> Banner { get; set; }

        [Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Danh sách sản phẩm", ListTitle = "Danh sách sản phẩm", ListPlaceholder = "Danh sách sản phẩm", Description = "Danh sách các sản phẩm bất động sản mua/cho thuê/ ký gửi. Vui lòng nhập đầy đủ các thông tin.")]
        public IList<RealEstateCard> ProductList { get; set; }
    }
}
