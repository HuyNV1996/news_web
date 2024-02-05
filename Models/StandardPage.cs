using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models;

[PageType(Title = "Standard page")]
[ContentTypeRoute(Title = "Narrow", Route = "/page")]
[ContentTypeRoute(Title = "Wide", Route = "/pagewide")]
public class StandardPage  : Page<StandardPage>
{
    [Region(Display = RegionDisplayMode.Setting)]
    public Regions.Hero Hero { get; set; }
}
