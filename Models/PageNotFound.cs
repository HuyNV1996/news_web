using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "404", UseBlocks = false)]
    [ContentTypeRoute(Title = "Page Not Found", Route = "/pagenotfound")]
    public class PageNotFound : Page<PageNotFound>
    {
        [Region()]
        public Banner banner { get; set; }
    }
}
