using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Piranha;
using Piranha.AspNetCore.Services;
using Piranha.Extend.Fields;
using Piranha.Models;
using web_ttkd.Models;
using web_ttkd.Models.Regions;
using web_ttkd.Models.ViewModels;

namespace web_ttkd.Controllers;

[ApiExplorerSettings(IgnoreApi = true)]
public class CmsController : Controller
{
    private readonly IApi _api;
    private readonly IModelLoader _loader;
    private readonly IDb _db;
    /// <summary>
    /// Default constructor.
    /// </summary>
    /// <param name="api">The current api</param>
    public CmsController(IApi api, IModelLoader loader, IDb db)
    {
        _db = db;
        _api = api;
        _loader = loader;
    }
    [HttpGet]
    [Route("/")]
    public async Task<IActionResult> HomePage(Guid id, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<Models.HomePage>(id, HttpContext.User, draft);

        if (startpage)
        {
            return View("homepage", model);
        }
        return View(model);
    }
    /// <summary>
    /// Gets the blog archive with the given id.
    /// </summary>
    /// <param name="id">The unique page id</param>
    /// <param name="year">The optional year</param>
    /// <param name="month">The optional month</param>
    /// <param name="page">The optional page</param>
    /// <param name="category">The optional category</param>
    /// <param name="tag">The optional tag</param>
    /// <param name="draft">If a draft is requested</param>
    [Route("archive")]
    public async Task<IActionResult> Archive(Guid id, int? year = null, int? month = null, int? page = null,
        Guid? category = null, Guid? tag = null, bool draft = false)
    {
        try
        {
            var model = await _loader.GetPageAsync<StandardArchive>(id, HttpContext.User, draft);
            model.Archive = await _api.Archives.GetByIdAsync<DynamicPost>(id, page, category, tag, year, month);

            return View(model);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized();
        }
    }
    [HttpGet]
    [Route("newspage")]
    public async Task<IActionResult> NewsPage(Guid id, int? year = null, int? month = null, int? page = null,
           Guid? category = null, Guid? tag = null)
    {
        var model = await _api.Pages.GetByIdAsync<NewsPage>(id);
        model.Archive = await _api.Archives.GetByIdAsync(id, page, category, tag, year, month, 6);

        return View(model);
    }
    [Route("searchpage/{keyword?}")]
    public async Task<IActionResult> SearchPage(Guid id, string keyword, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<SearchPage>(id, HttpContext.User, draft);
        var listPost = _db.Posts.Where(x => x.Title.Contains(keyword)).ToList();
        var newsPosts = new List<NewsPost>();
        foreach (var item in listPost)
        {
            var itemPosts = await _loader.GetPostAsync<NewsPost>(item.Id, HttpContext.User, draft);
            newsPosts.Add(itemPosts);
        }
        ViewBag.lstPosts = newsPosts;
        return View(model);
    }
    [HttpGet]
    [Route("searchrecruite/{keyword?}")]
    public async Task<IActionResult> SearchRecruite(Guid id, string keyword, bool draft = false)
    {
        var model = await _loader.GetPageAsync<SearchRecruite>(id, HttpContext.User, draft);
        var listJobs = (from pf in _db.PostFields
                        join pf2 in _db.PostFields on pf.PostId equals pf2.PostId
                        join pf3 in _db.PostFields on pf.PostId equals pf3.PostId
                        join pf4 in _db.PostFields on pf.PostId equals pf4.PostId
                        join p in _db.Posts on pf.PostId equals p.Id
                        where pf2.FieldId == "JobType" && pf3.FieldId == "Level" && pf4.FieldId == "Address"
                        select new JobViewModel
                        {
                            postId = pf.PostId,
                            JobType = pf2.Value,
                            Level = pf3.Value,
                            Address = pf4.Value,
                            Slug = p.Slug
                        })
                        .Distinct()
                        .Where(x => x.JobType != null
                        && x.Level != null
                        && x.Address != null
                        && x.postId != id
                        && x.Level.Contains(keyword)
                        ).ToList();
        //var listJobs = _db.Posts.Where(x => x.Title.Contains(keyword)).ToList();
        ViewBag.ListJobs = listJobs;
        return View("SearchRecruite", model);
    }
    /// <summary>
    /// Gets the page with the given id.
    /// </summary>
    /// <param name="id">The unique page id</param>
    /// <param name="draft">If a draft is requested</param>
    [Route("page")]
    public async Task<IActionResult> Page(Guid id, bool draft = false)
    {
        try
        {
            var model = await _loader.GetPageAsync<StandardPage>(id, HttpContext.User, draft);

            return View(model);
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized();
        }
    }
    
    [HttpGet]
    [Route("gioi-thieu")]
    public async Task<IActionResult> IntroPage(Guid id, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<IntroPage>(id, HttpContext.User, draft);
        Guid guid = Guid.Parse("55183d7b-31b3-40c8-b59e-5ee51c049699");
        var startPageModel = await _loader.GetPageAsync<IntroPage>(guid, HttpContext.User, false);
        ViewBag.StartPage = startPageModel;
        return View(model);
    }
    [HttpGet]
    [Route("viec-lam")]
    public async Task<IActionResult> ViecLamPage(Guid id, bool draft = false)
    {
        var model = await _loader.GetPageAsync<ViecLamPage>(id, HttpContext.User, draft);
        var listJobs = (from pf in _db.PostFields
                        join pf2 in _db.PostFields on pf.PostId equals pf2.PostId
                        join pf3 in _db.PostFields on pf.PostId equals pf3.PostId
                        join pf4 in _db.PostFields on pf.PostId equals pf4.PostId
                        join p in _db.Posts on pf.PostId equals p.Id
                        where pf2.FieldId == "JobType" && pf3.FieldId == "Level" && pf4.FieldId == "Address"
                        select new JobViewModel
                        {
                            postId = pf.PostId,
                            JobType = pf2.Value,
                            Level = pf3.Value,
                            Address = pf4.Value,
                            Slug = p.Slug
                        }).Distinct().Where(x => x.JobType != null && x.Level != null && x.Address != null).ToList();
        ViewBag.ListJobs = listJobs;
        return View(model);
    }
    [HttpGet]
    [Route("bat-dong-san")]
    public async Task<IActionResult> RealEstatePage(Guid id, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<RealEstatePage>(id, HttpContext.User, draft);
        // Buy
        ViewBag.ProductListBuy = model.ProductList
        .Where(x => x.BussinessType.EnumValue.Equals("mua"))
        .Distinct()
        .ToList();
        ViewBag.BuySegment = model.ProductList
        .Where(x => x.BussinessType.EnumValue.Equals("mua"))
        .Select(x => x.ProductSegment)
        .Distinct()
        .ToList();

        // Rent
        ViewBag.ProductListSell = model.ProductList
        .Where(x => x.BussinessType.EnumValue.Equals("cho_thue"))
        .Distinct()
        .ToList();
        ViewBag.RentSegment = model.ProductList
        .Where(x => x.BussinessType.EnumValue.Equals("cho_thue"))
        .Select(x => x.ProductSegment)
        .Distinct()
        .ToList();

        // Consignment
        ViewBag.ProductListConsign= model.ProductList
        .Where(x => x.BussinessType.EnumValue.Equals("ky_gui"))
        .Distinct()
        .ToList();
        ViewBag.ConsignSegment = model.ProductList
        .Where(x => x.BussinessType.EnumValue.Equals("ky_gui"))
        .Select(x => x.ProductSegment)
        .Distinct()
        .ToList();

        return View(model);
    }
    
    [HttpGet]
    [Route("tai-chinh")]
    public async Task<IActionResult>FinancePage(Guid id, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<FinancePage>(id, HttpContext.User, draft);
        Guid guid = Guid.Parse("55183d7b-31b3-40c8-b59e-5ee51c049699");
        var startPageModel = await _loader.GetPageAsync<FinancePage>(guid, HttpContext.User, false);
        ViewBag.StartPage = startPageModel;
        return View(model);
    }
    [HttpGet]
    [Route("pagenotfound")]
    public async Task<IActionResult> PageNotFound(Guid id, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<PageNotFound>(id, HttpContext.User, draft);

        return View(model);
    }

    [HttpGet]
    [Route("lien-he")]
    public async Task<IActionResult> InfomationPage(Guid id, bool draft = false)
    {
        var model = await _loader.GetPageAsync<InfomationPage>(id, HttpContext.User, draft);
        var listJobs = (from pf in _db.PostFields
                        join pf2 in _db.PostFields on pf.PostId equals pf2.PostId
                        join pf3 in _db.PostFields on pf.PostId equals pf3.PostId
                        join pf4 in _db.PostFields on pf.PostId equals pf4.PostId
                        join p in _db.Posts on pf.PostId equals p.Id
                        where pf2.FieldId == "JobType" && pf3.FieldId == "Level" && pf4.FieldId == "Address"
                        select new JobViewModel
                        {
                            postId = pf.PostId,
                            JobType = pf2.Value,
                            Level = pf3.Value,
                            Address = pf4.Value,
                            Slug = p.Slug
						}).Distinct().Where(x => x.JobType != null && x.Level != null && x.Address != null).ToList();

		ViewBag.ListJobs = listJobs;
        return View(model); 
    }


    [HttpGet]
    [Route("du-lich")]
    public async Task<IActionResult> TravelPage(Guid id, bool startpage = false, bool draft = false)
    {
        var model = await _loader.GetPageAsync<TravelPage>(id, HttpContext.User, draft);
        return View(model);
    }

    [Route("post")]
    public async Task<IActionResult> Post(Guid id,bool draft = false)
    {
        var model = await _loader.GetPostAsync<NewsPost>(id, HttpContext.User, draft);
        if (model == null)
        {
            var job = await _loader.GetPostAsync<JobDetailPost>(id, HttpContext.User, draft);
            var listJobs = (from pf in _db.PostFields
                            join pf2 in _db.PostFields on pf.PostId equals pf2.PostId
                            join pf3 in _db.PostFields on pf.PostId equals pf3.PostId
                            join pf4 in _db.PostFields on pf.PostId equals pf4.PostId
                            join p in _db.Posts on pf.PostId equals p.Id
                            where pf2.FieldId == "JobType" && pf3.FieldId == "Level" && pf4.FieldId == "Address"
                            select new JobViewModel
                            {
                                postId = pf.PostId,
                                JobType = pf2.Value,
                                Level = pf3.Value,
                                Address = pf4.Value,
                                Slug = p.Slug
                            })
                            .Distinct()
                            .Where(x => x.JobType != null 
                            && x.Level != null 
                            && x.Address != null 
                            && x.JobType == job.Detail.JobType
                            && x.Level == job.Detail.Level
                            && x.postId != id
                            ).ToList();

            ViewBag.ListJobs = listJobs;
            return View("JobDetailPost", job);
        }
        else
        {
            ViewBag.Host = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
            var listCategories = await _api.Posts.GetAllCategoriesAsync(model.BlogId);
            ViewBag.CategoryList = listCategories;
            return View("Post", model);       
        }
    }
}
