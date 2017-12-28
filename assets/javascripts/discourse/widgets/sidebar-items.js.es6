import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { h } from 'virtual-dom';

export default createWidget('sidebar-items', {
  tagName: 'div.sidebar-items',
  buildKey: () => 'sidebar-items',

  html(attrs, state) {
  	if (!this.siteSettings.sidebar_enable || this.site.mobileView)
  		return;

    var sidebarBlocks = this.siteSettings.sidebar_block_order.split("|");

    const result = [];
    var self = this;

    sidebarBlocks.map(function(item) {
    
    if (item == 'profile') {
      result.push(self.attach('profile-t'));


    } else if (item == 'custom_html') {
        result.push(self.attach('sidebar-custom-content'));
      
    } else if (item == 'cat') {
        result.push(self.attach('sidebar-cat'));
      
      
result.push( new RawHtml({ html: `<div class="soc"> 
<br><br>
<a target="_blank" class="pom" href="https://toxu.ru/help"><font style="color:#f56400;">П</font>омощь по сайту</a>
<br>
<a target="_blank" class="discord" rel="nofollow" title="Discord" href="https://discord.gg/8P3TNjP"><i class="fa fa-comment" aria-hidden="true"></i></a>
<a target="_blank" class="telegram" rel="nofollow" title="Telegram" href="https://telegram.me/toxuru"><i class="fa fa-telegram" aria-hidden="true"></i></a>
<a target="_blank" class="livejournal" title="Livejournal" rel="nofollow" href="https://toxu.livejournal.com"><i class="fa fa-pencil" aria-hidden="true"></i></a>
<a target="_blank" class="facebook" title="Facebook" rel="nofollow" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
<a target="_blank" class="twitter" title="Twitter" rel="nofollow" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
<a target="_blank" class="vk" title="ВКонтакте" rel="nofollow" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
<br><br><br><center><a target="_blank" href="https://toxu.ru/toxu"><img src="https://toxu.ru/uploads/default/original/2X/0/004a38ec35177bb1ad1b42293d6cdf9215c8b347.jpg"></a><br><font style="Color:#888;">:)</font></center>

</div>`}));
      
      
    }

    });

    return result;
  },

});
