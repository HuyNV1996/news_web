using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models;

[PageType(Title = "Standard archive", IsArchive = true)]
public class StandardArchive : Page<StandardArchive>
{
    // <summary>
    /// Gets/sets the page header.
    /// </summary>
    [Region]
    public Regions.Hero Hero { get; set; }
    /// <summary>
    /// The currently loaded post archive.
    /// </summary>
    public PostArchive<DynamicPost> Archive { get; set; }
}
