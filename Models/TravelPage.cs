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

    [PageType(Title = "Du lịch", UseBlocks = false)]
    [ContentTypeRoute(Title = "Du lịch", Route = "/du-lich")]
    public class TravelPage : Page<TravelPage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public ImageField Banner { get; set; }

		[Region(Display = RegionDisplayMode.Content, Title = "Hệ thống khách sạn", ListTitle = "Hệ thống khách sạn", ListPlaceholder = "Hệ thống khách sạn")]
		public IList<HotelCard> ListHotel { get; set; }

		[Region(Display = RegionDisplayMode.Content, Title = "Banner thông tin ưu đãi", ListTitle = "Banner thông tin ưu đãi", ListPlaceholder = "Banner thông tin ưu đãi")]
		public IList<BannerDiscountTravel> Discount { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Tiêu đề tin ưu đãi", ListTitle = "Tiêu đề tin ưu đãi", ListPlaceholder = "Tiêu đề tin ưu đãi")]
        public StringField TitleDiscount { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Chia sẻ kinh nghiệm", ListTitle = "Chia sẻ kinh nghiệm", ListPlaceholder = "Chia sẻ kinh nghiệm")]
        public IList<Piranha.Extend.Fields.PostField> ReadALot_Travel { get; set; }

	}
}
