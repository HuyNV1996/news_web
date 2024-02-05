using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;
using Piranha.AttributeBuilder;

namespace web_ttkd.Models
{
    [PageType(Title = "Trang chủ", IsArchive = false, UseBlocks = false)]
    [ContentTypeRoute(Title = "HomePage", Route = "/")]
    public class HomePage : Page<HomePage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public IList<BannerHome> Banner { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Tin mới nhất", ListTitle = "Tin mới nhất", ListPlaceholder = "Tin mới nhất")]
        public IList<Piranha.Extend.Fields.PostField> News { get; set; }

		[Region(Display = RegionDisplayMode.Content, Title = "Bài viết bổ sung", ListTitle = "Bài viết bổ sung", ListPlaceholder = "Bài viết bổ sung")]
		public IList<Piranha.Extend.Fields.PostField> NewsMore { get; set; }

	    [Region(Display = RegionDisplayMode.Content, Title = "Giải pháp cung cấp", ListTitle = "Giải pháp cung cấp", ListPlaceholder = "Giải pháp cung cấp")]
        public IList<HomeSolution> Solutions { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Dịch vụ chăm sóc khách hàng", ListTitle = "Dịch vụ chăm sóc khách hàng", ListPlaceholder = "Dịch vụ chăm sóc khách hàng")]
        public HomeCareCustomer CareCustomer { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Đối tác", ListTitle = "Đối tác", ListPlaceholder = "Đối tác")]
        public IList<HomePartner> Partners { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Đánh giá", ListTitle = "Đánh giá", ListPlaceholder = "Đánh giá")]
        public IList<HomeReviewer> Reviewer { get; set; }
    }
}
