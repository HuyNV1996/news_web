using Piranha.AttributeBuilder;
using Piranha.Models;
using Piranha.Data;
using Piranha.Extend;
using Piranha.Extend.Fields;
using System.Collections.Generic;
using System.Reflection;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Tin Tức", IsArchive = true, UseBlocks = false)]
    [ContentTypeRoute(Title = "NewsPage", Route = "/newspage")]
    public class NewsPage : Page<NewsPage>
    {

        [Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Tin tức và kiến thức", ListTitle = "Tin tức và kiến thức", ListPlaceholder = "Tin tức và kiến thức")]
        public IList<Piranha.Extend.Fields.PostField> SlidePost { get; set; }

        [Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Tin tức nổi bật", ListTitle = "Tin tức nổi bật", ListPlaceholder = "Tin tức nổi bật")]
        public IList<Piranha.Extend.Fields.PostField> FeaturedNews { get; set; }

        [Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Danh sách tin tức", ListTitle = "Danh sách tin tức", ListPlaceholder = "Danh sách tin tức")]
        public PostArchive<DynamicPost> Archive { get; set; }

        [Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Tin phổ biến", ListTitle = "Tin phổ biến", ListPlaceholder = "Tin phổ biến")]
        public IList<Piranha.Extend.Fields.PostField> ReadALot { get; set; }
    }
}
