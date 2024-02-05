using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
    public class Social
    {
        [Field(Title = "Facebook")]
        public StringField FaceBook { get; set; }
        [Field(Title = "Zalo")]
        public StringField Zalo { get; set; }
        [Field(Title = "Messager")]
        public StringField Messager { get; set; }
         [Field(Title = "Hotline")]
        public StringField Hotline { get; set; }
    }
}
