using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using Piranha.AspNetCore.Services;
using Piranha;
using System.Net;
using System.Net.Mail;
using web_ttkd.Models.ObjectModel;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting;
using web_ttkd.Models.ViewModels;
using System.IO;

namespace web_ttkd.Controllers
{
    [Route("api")]
    [ApiController]
    public class APIController : Controller
    {
        private readonly IApi _api;
        private readonly IDb _db;
        private readonly IModelLoader _loader;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public APIController(IApi api, IDb db, IModelLoader loader, IWebHostEnvironment webHostEnvironment)
        {
            _api = api;
            _db = db;
            _loader = loader;
            _webHostEnvironment = webHostEnvironment;
        }
        [HttpPost]
        [Route("sendmail")]

        public JsonResult SendMail(MailModel info)
        {
            try
            {
                using (SmtpClient smtp = new SmtpClient("smtp.gmail.com"))
                {
                    smtp.Port = 587;
                    smtp.Credentials = new NetworkCredential("huyyy250901@gmail.com", "zbsb vmsb uqgl sfrq");
                    smtp.EnableSsl = true;

					// Split the email addresses
					string[] toAddresses = info.To.Split(',');

					using (MailMessage mm = new MailMessage())
					{
						// Add each recipient to the MailMessage
						foreach (string toAddress in toAddresses)
						{
							mm.To.Add(toAddress.Trim());
						}

						mm.Subject = info.Subject;
						mm.Body = info.Body;
						mm.IsBodyHtml = true;
						mm.From = new MailAddress("huybka1996@gmail.com");

						smtp.Send(mm);
					}
				}
            }
            catch (Exception e)
            {
                return Json(new { status = "error", message = e.Message });
            }
            return Json(new { status = "Success", message = "Gửi email thành công" });
        }
        [HttpPost]
        [Route("uploadfile")]
        public IActionResult Upload([FromForm] FileUploadViewModel model)
        {
            if (model.File != null && model.File.Length > 0)
            {
                var uploadPath = Path.Combine(_webHostEnvironment.WebRootPath, "uploadscv");
                Directory.CreateDirectory(uploadPath);
                var filePath = Path.Combine(uploadPath, model.File.FileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    model.File.CopyTo(stream);
                }

                // Generate the URL based on your server's configuration
                var baseUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
                var fileUrl = $"{baseUrl}/uploadscv/{model.File.FileName}";

                return Ok(new { Message = "OK", FileUrl = fileUrl });
            }

            return BadRequest(new { Message = "No file uploaded" });
        }
    }
}
