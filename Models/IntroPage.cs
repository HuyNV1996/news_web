using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{
    [PageType(Title = "Giới thiệu", UseBlocks = false)]
    [ContentTypeRoute(Title = "Giới thiệu", Route = "/gioi-thieu")]
    public class IntroPage : Page<IntroPage>
    {

        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner", Icon = "fas fa-images")]
        public ImageLabel Banner { get; set; }

		[Region(Display = RegionDisplayMode.Content, Title = "Giới thiệu chung Apec group", ListTitle = "Giới thiệu chung Apec group", ListPlaceholder = "Giới thiệu chung Apec group")]
		public IntroAboutApecGroup AboutApecgroup { get; set; }
		
        [Region(Display = RegionDisplayMode.Content, Title = "Giới thiệu trung tâm kinh doanh", ListTitle = "Giới thiệu trung tâm kinh doanh", ListPlaceholder = "Giới thiệu trung tâm kinh doanh")]
		public IntroAboutTTKD AboutTTKD { get; set; }

		[Region(Display = RegionDisplayMode.Content, Title = "Tầm nhìn và sứ mệnh", ListTitle = "Tầm nhìn và sứ mệnh", ListPlaceholder = "Tầm nhìn và sứ mệnh")]
		public IntroVision AboutVision  { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Lĩnh vực hoạt động", ListTitle = "Lĩnh vực hoạt động", ListPlaceholder = "Lĩnh vực hoạt động")]
        public Banner FiledBussiness { get; set; }

        [Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Dự án đã và đang triển khai", ListTitle = "Dự án dự định triển khai", ListPlaceholder = "Dự án dự định triển khai")]
		public IList<CardLinkSub> ProjectFinished { get; set; }

		[Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Dự án dự định triển khai", ListTitle = "Dự án dự định triển khai", ListPlaceholder = "Dự án dự định triển khai")]
		public IList<CardLinkSub> ProjectInprogress { get; set; }

		[Region(ListExpand = true,Display = RegionDisplayMode.Content, Title = "Đội ngũ quản lý", ListTitle = "Đội ngũ quản lý", ListPlaceholder = "Đội ngũ quản lý", Icon = "fas fa-images")]
        public IList<ManagementField> Management { get; set; }
    }
}
