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
	
		
	result.push(self.attach('sidebar-cat'));
	
		
result.push( new RawHtml({ html: `<div class="blog-container"><center> 
<a class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/latest?ascending=true&order=posts&status=open">Вопросы без ответа</a>
<br><br>
<a href="#hone" class="soc-link"><i style="font-size:24px" class="fa fa-arrow-up"></i></a></center> </div>`}));
		
		
	} else {
	
result.push( new RawHtml({ html: `<div class="soc"><br> </div>`}));
result.push(self.attach('sidebar-cat'));

result.push( new RawHtml({ html: `<div class="soc"><noindex>
<br><br><a rel="nofollow"  href="https://toxu.ru/tags" class="discourse-tag box bar">Теги</a> <span class="vid">- по темам</span>
<div class="socv">Мы в социальных сетях</div>
<a target="_blank" class="discord cvet" rel="nofollow" title="Discord" href="https://discord.gg/8P3TNjP"><i class="fa fa-comment" aria-hidden="true"></i></a>
<a target="_blank" class="telegram cvet" rel="nofollow" title="Telegram" href="https://telegram.me/toxuru"><i class="fa fa-telegram" aria-hidden="true"></i></a>
<a target="_blank" class="livejournal cvet" title="Livejournal" rel="nofollow" href="https://toxu.livejournal.com"><i class="fa fa-pencil" aria-hidden="true"></i></a>
<a target="_blank" class="facebook cvet" title="Facebook" rel="nofollow" href="https://www.facebook.com/toxu.ru"><i class="fa fa-facebook" aria-hidden="true"></i></a>
<a target="_blank" class="twitter cvet" title="Twitter" rel="nofollow" href="https://twitter.com/toxu_russian"><i class="fa fa-twitter" aria-hidden="true"></i></a>
<a target="_blank" class="vk cvet" title="ВКонтакте" rel="nofollow" href="https://vk.com/toxu_ru"><i class="fa fa-vk" aria-hidden="true"></i></a>
<br></noindex><br><center><a class="cvet" href="https://toxu.ru/privacy">Политика конфидициальности</a></center></div> <div class="blog-container"><a class="pmenu" href="https://toxu.ru/latest?ascending=true&amp;order=posts"><i class="fa fa-question-circle-o" aria-hidden="true"></i>
 Вопросы без ответа</a></div>`}));

	}

    return result;
  },

});
