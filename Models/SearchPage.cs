using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Tìm kiếm", UseBlocks = false)]
    [ContentTypeRoute(Title = "Tìm kiếm", Route = "/searchpage")]
    public class SearchPage : Page<SearchPage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public Banner Banner { get; set; }
    }
}
