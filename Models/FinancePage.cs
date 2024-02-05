using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Tài chính", UseBlocks = false)]
    [ContentTypeRoute(Title = "FinacnePage", Route = "/tai-chinh")]
    public class FinancePage : Page<FinancePage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public IList<ImageField> Banner { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Asavings", ListTitle = "Asavings", ListPlaceholder = "Asavings")]
        public IList<ProductFinance> Asavings { get; set; }
    }
}
