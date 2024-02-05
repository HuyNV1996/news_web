using Piranha.Models;
using Piranha.AttributeBuilder;
using Piranha.Extend;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Tìm kiếm tuyển dụng", UseBlocks = false)]
    [ContentTypeRoute(Title = "Tìm kiếm tuyển dụng", Route = "/searchrecruite")]
    public class SearchRecruite : Page<SearchRecruite>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public Banner Banner { get; set; }
    }
}
