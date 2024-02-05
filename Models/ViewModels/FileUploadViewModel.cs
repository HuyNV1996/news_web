using Microsoft.AspNetCore.Http;

namespace web_ttkd.Models.ViewModels
{
    public class FileUploadViewModel
    {
        public IFormFile File { get; set; }
    }
}
