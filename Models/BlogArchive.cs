using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models
{
    [PageType(Title = "Blog archive", UseBlocks = false, IsArchive = true)]
    public class BlogArchive : Page<BlogArchive>
    {
        /// <summary>
        /// Gets/sets the page header.
        /// </summary>
        [Region]
        public Regions.Hero Hero { get; set; }

        /// <summary>
        /// View model property for storing the current archive items.
        /// </summary>
        public PostArchive<DynamicPost> Archive { get; set; }
    }
}
