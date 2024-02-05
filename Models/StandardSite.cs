using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models
{
    /// <summary>
    /// Basic page with main content in markdown.
    /// </summary>
    [SiteType(Title = "Standard Site")]
    public class StandardSite : SiteContent<StandardSite>
    {
        [Region]
        public HtmlField Footer { get; set; }
    }
}
