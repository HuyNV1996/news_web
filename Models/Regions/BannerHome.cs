﻿using Piranha.Extend.Fields;
using Piranha.Extend;

namespace web_ttkd.Models.Regions
{
    public class BannerHome
    {
        [Field]
        public ImageField ImageBanner { get; set; }

        [Field]
        public StringField Link { get; set; }
    }
}
