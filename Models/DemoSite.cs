using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;
using Piranha.Extend.Fields;
using web_ttkd.Models;
using web_ttkd.Models.Regions;

[SiteType(Title = "General site")]
public class DemoSite : SiteContent<DemoSite>
{
    [Region(Title = "Footer", Display = RegionDisplayMode.Setting)]
    public Footer FooterContents { get; set; }
    [Region(Title = "Mạng xã hội", Display = RegionDisplayMode.Setting)]
    public Social Socials { get; set; }

    [Region(Display = RegionDisplayMode.Setting, Title = "Bất động sản (sản phẩm/ tin tức)", ListTitle = "Bất động sản (sản phẩm/ tin tức)", ListPlaceholder = "Bất động sản (sản phẩm/ tin tức)")]
    public IList<CardLink> RealEstateFeatured { get; set; }

    [Region(Display = RegionDisplayMode.Setting, Title = "Tài chính (sản phẩm/ tin tức)", ListTitle = "Tài chính (sản phẩm/ tin tức)", ListPlaceholder = "Tài chính (sản phẩm/ tin tức)")]
    public IList<CardLink> FinacneFeatured { get; set; }

    [Region(Display = RegionDisplayMode.Setting, Title = "Du lịch (sản phẩm/ tin tức)", ListTitle = "Du lịch (sản phẩm/ tin tức)", ListPlaceholder = "Du lịch (sản phẩm/ tin tức)")]
    public IList<CardLink> TravelFeatured { get; set; }

	[Region(Title = "Người nhận mail", Display = RegionDisplayMode.Setting)]
	public StringField MailReceiver { get; set; }
}