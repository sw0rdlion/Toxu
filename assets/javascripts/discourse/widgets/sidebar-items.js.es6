import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sidebar-items', {
  tagName: 'div.sidebar-items',
  buildKey: () => 'sidebar-items',

  html(attrs, state) {
  	if (!this.siteSettings.sidebar_enable || this.site.mobileView)
  	return;
	
	const result = [];
        var self = this;
     
	const { currentUser } = this; 
	if (currentUser) {
	
  const username = currentUser.get('username');		
		
  const UserbarProfile = currentUser.custom_fields.userbar_profile;
  if (UserbarProfile) { result.push( new RawHtml({ html: `<div class="soc"> <br></div>`})); } 
	else 
	{ result.push(self.attach('profile-t')); }
	
		
	 result.push( new RawHtml({ html: `<div> 
 
<a class="nast-cat" title="Настройка категорий" href="https://toxu.ru/u/${username}/preferences/categories"><i class="fa fa-gear d-icon d-icon-gear" aria-hidden="true"></i></a>
 
        </div>`}))   	
		
		
	result.push(self.attach('sidebar-cat'));
		
	} else {
	
result.push( new RawHtml({ html: `<div class="soc"><br> </div>`}));
result.push(self.attach('sidebar-cat'));

result.push( new RawHtml({ html: `<div class="soc"><noindex>
<br><br><a rel="nofollow"  href="https://toxu.ru/tags" class="discourse-tag box bar">Теги</a> <span class="vid">- по темам</span>
<br><br><span class="socv ">Мы в социальных сетях</span><br>
<a target="_blank" class="discord" rel="nofollow" title="Discord" href="https://discord.gg/8P3TNjP"><i class="fa fa-comment" aria-hidden="true"></i></a>
<a target="_blank" class="telegram" rel="nofollow" title="Telegram" href="https://telegram.me/toxuru"><i class="fa fa-telegram" aria-hidden="true"></i></a>
<a target="_blank" class="livejournal" title="Livejournal" rel="nofollow" href="https://toxu.livejournal.com"><i class="fa fa-pencil" aria-hidden="true"></i></a>
<a target="_blank" class="facebook" title="Facebook" rel="nofollow" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
<a target="_blank" class="twitter" title="Twitter" rel="nofollow" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
<a target="_blank" class="vk" title="ВКонтакте" rel="nofollow" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
<br></noindex></div>`}));

	}

    return result;
  },

});
