using Piranha.Extend.Fields;
using Piranha.Extend;
using Piranha.Models;
using Piranha.AttributeBuilder;
using web_ttkd.Models.Regions;

namespace web_ttkd.Models
{

    [PageType(Title = "Thông tin liên hệ", IsArchive = false, UseBlocks = false)]
    [ContentTypeRoute(Title = "Liên hệ", Route = "/lien-he")]
    public class InfomationPage : Page<InfomationPage>
    {
        [Region(Display = RegionDisplayMode.Content, Title = "Banner", ListTitle = "Banner", ListPlaceholder = "Banner")]
        public ImageField Banner { get; set; }

        [Region(Display = RegionDisplayMode.Content, Title = "Danh sách tư vấn viên", ListTitle = "Danh sách tư vấn viên", ListPlaceholder = "Danh sách tư vấn viên", Icon = "fas fa-quote-right")]
        public IList<Consultancy> Consultancy { get; set; }

        //[Region(Display = RegionDisplayMode.Content, Title = "Chương trình tuyển dụng", ListTitle = "Chương trình tuyển dụng", ListPlaceholder = "Chương trình tuyển dụng", Icon = "fas fa-quote-right")]
        //public IList<Piranha.Extend.Fields.PostField> JobList { get; set; }



    }
}