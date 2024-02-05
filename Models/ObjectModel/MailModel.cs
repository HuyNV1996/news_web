namespace web_ttkd.Models.ObjectModel
{
    public class MailModel
    {
        public string phone { get; set; }
        public string email { get; set; }
        public string username { get; set; }
        public string user_type { get; set; }
        public string fields { get; set; }
        
        public string To { get; set; }
        public string From { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}
