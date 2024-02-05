"piranha": "Server=10.0.0.36;Database=WebTTKD;User Id=web_ttkd_user;Password=65D@RY*$)LKAvgrk;Trusted_Connection=False;MultipleActiveResultSets=true",
//"piranha": "Data Source=.;Initial Catalog=web_ttkd; integrated security=true",
Format Code:Crtl + A => Crtl + K and Ctrl + D
# Hiển thị độ rộng fields
# Thêm 1 page mới vào CMS
Ví dụ: Tạo page news
Khai báo model trong /Models/NewsPage.cs
```
namespace web_ttkd.Models
{
    [PageType(Title = "Tin Tức", IsArchive = true, UseBlocks = false)]
    [ContentTypeRoute(Title = "NewsPage", Route = "/newspage")]
    public class NewsPage : Page<NewsPage>
    {
        [Region(Display = RegionDisplayMode.Setting, Title = "Barner", ListTitle = "Barner", ListPlaceholder = "Barner")]
        public Banner BarnerNews { get; set; }

        [Region(Display = RegionDisplayMode.Setting, Title = "Slide tin tức", ListTitle = "Slide tin tức", ListPlaceholder = "Slide tin tức")]
        public IList<Piranha.Extend.Fields.PostField> SlidePost { get; set; }

        [Region(Display = RegionDisplayMode.Setting, Title = "Danh sách tin tức", ListTitle = "Danh sách tin tức", ListPlaceholder = "Danh sách tin tức")]
        public PostArchive<DynamicPost> Archive { get; set; }

        [Region(Display = RegionDisplayMode.Setting, Title = "Tin đọc nhiều", ListTitle = "Tin đọc nhiều", ListPlaceholder = "Tin đọc nhiều")]
        public IList<Piranha.Extend.Fields.PostField> ReadALot { get; set; }
    }
}
```
Vào CMS => Click 'Add page' => Chọn 'Tin tức'


@foreach (var post in LatestPosts())
{
    <div>
        <h2>@post.Post.Title</h2>
        <p>@post.Post.Excerpt</p>
        <a href="@Url.RouteUrl("Piranha.Cms.Models.Post", new { id = post.Id, slug = post.Post.Slug })" class="btn btn-primary">Read more</a>
    </div>
}
<img class="w-100 object-cover" src="@(Model.Banner.Media.PublicUrl.Substring(1) ?? "")" alt="@Model.Banner.Media.PublicUrl.Substring(1)" />

### DEPLOY
Vào tạo database
```
CREATE DATABASE `huy_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
```
Run project
Tham khảo https://tecadmin.net/how-to-install-dotnet-core-on-ubuntu-22-04/