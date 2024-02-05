using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PostType(Title = "Chi tiết tuyển dụng", UseBlocks = false)]
    public class JobDetailPost : Post<JobDetailPost>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Chi tiết", ListTitle = "Chi tiết", ListPlaceholder = "Chi tiết", Icon = "fas fa-quote-right")]
        public Recruit Detail { get; set; }
    }
}
