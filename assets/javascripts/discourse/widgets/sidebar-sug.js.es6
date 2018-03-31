import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sidebar-sug', {
  tagName: 'div.sidebar-sug',
  buildKey: () => 'sidebar-sug',

  html(attrs, state) {
  	if (!this.siteSettings.sidebar_enable || this.site.mobileView)
  	return;
	
	const result = [];
  var self = this;
     
	const { currentUser } = this; 
	if (currentUser) {
	
  result.push( new RawHtml({ html: `<div> 
 
<noindex>
<a class="cvet" href="https://toxu.ru{{unbound model.url}}" id="scroll-top" style="display: inline;"><i class="fa fa-arrow-up"></i></a>
<a class="cvet" href="https://toxu.ru{{unbound model.url}}/500" id="scroll-bottom" style="display: inline;"><i class="fa fa-arrow-down"></i></a>
<div class="sidebar-top">
     {{#if model.suggestedTopics.length}}
     {{suggested-topics-sug topic=model}}
     {{/if}}
<hr class="shar">     
<div class="share2">
<a rel="nofollow" class="soc-link" href="http://www.facebook.com/sharer.php?u=https://toxu.ru{{unbound model.url}}" target="_blank">
<i class="fa fa-facebook" aria-hidden="true"></i></a>
<a rel="nofollow" class="soc-link" href="http://twitter.com/share?url=https://toxu.ru{{unbound model.url}}" target="_blank">
<i class="fa fa-twitter" aria-hidden="true"></i></a>
<a rel="nofollow" class="soc-link" href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=https://toxu.ru{{unbound model.url}}" target="_blank">
<i class="fa fa-odnoklassniki" aria-hidden="true"></i></a>
<a rel="nofollow" class="soc-link" href="https://vk.com/share.php?url=https://toxu.ru{{unbound model.url}}" target="_blank">
<i class="fa fa-vk" aria-hidden="true"></i></a>
</div></div></noindex>

  </div>`}))   	
		
		
	}

    return result;
  },

});
