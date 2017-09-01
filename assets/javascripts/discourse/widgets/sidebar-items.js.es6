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
<a class="vk" href="https://toxu.ru/groups">Группы</a>
<a class="vk" rel="nofollow" href="https://toxu.ru/badges">Награды</a>
<br>
<a class="discord" rel="nofollow" href="https://discord.gg/8P3TNjP"><i class="fa fa-comment" aria-hidden="true"></i></a>
<a class="facebook" rel="nofollow" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
<a class="twitter" rel="nofollow" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
<a class="vk" rel="nofollow" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
</div>`}));
      
      
    }

    });

    return result;
  },

});
