using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Việc làm", IsArchive = true, UseBlocks = false)]
    [ContentTypeRoute(Title = "Việc làm", Route = "/viec-lam")]
    public class ViecLamPage : Page<ViecLamPage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Tuyển dụng", ListTitle = "Tuyển dụng", ListPlaceholder = "Tuyển dụng", Icon = "fas fa-quote-right")]
        public PostArchive<DynamicPost> Archive { get; set; }
    }
}
