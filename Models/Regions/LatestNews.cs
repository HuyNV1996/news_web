using Piranha.Extend;
using Piranha.Models;

namespace web_ttkd.Models.Regions
{
    public class LatestNews
    {
        [Field(Title = "Tin tức mới nhất")]
        public IList<Piranha.Extend.Fields.PostField> ReadALot { get; set; }
    }
}
