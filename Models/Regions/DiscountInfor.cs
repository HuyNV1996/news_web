using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
	public class DiscountInfor
	{
        [Field(Title = "Baner")]
        public IList<ImageField> Banner { get; set; }

	}
}
