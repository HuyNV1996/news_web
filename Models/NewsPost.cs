using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace web_ttkd.Models
{
    [PostType(Title = "Tin Tức")]
    public class NewsPost : Post<NewsPost>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Tin liên quan", ListTitle = "Tin liên quan", ListPlaceholder = "Tin liên quan")]
        public IList<Piranha.Extend.Fields.PostField> relateBlogPost { get; set; }
    }
}
