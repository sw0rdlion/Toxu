import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { ajax } from 'discourse/lib/ajax';
import { popupAjaxError } from 'discourse/lib/ajax-error';


export default createWidget('profile-t', {
  tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const name = currentUser.get('name');
      const trust_level = currentUser.get('trust_level');
      
      if (trust_level === 0) { var doverie = "0"; var coll = 'col0';}
      if (trust_level === 1) { var doverie = "1"; var coll = 'col1';}
      if (trust_level === 2) { var doverie = "2"; var coll = 'col2';}
      if (trust_level === 3) { var doverie = "3"; var coll = 'col3';}
      if (trust_level === 4) { var doverie = "4"; var coll = 'col4';}
   
contents.push(
new RawHtml({ html: `<div>

<a class="dov-prof ${coll}" href="http://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">${doverie}</a> 
<a class="menu-profile" href="http://toxu.ru/u/${username}">@${username}</a> 
<ul class="menu">
<li class="menu"><a class="menu-prof menu" href="http://toxu.ru/posted">${I18n.t('main.qa-you')}</a></li>
<li class="menu"><a class="menu-prof menu" href="http://toxu.ru/bookmarks">${I18n.t('main.bookmark-you')}</a></li>
<li class="menu"><a class="menu-prof menu" href="http://toxu.ru/u/${username}/messages">${I18n.t('main.mail-you')}</a></li>
<li class="menu"><a class="menu-prof menu" href="http://toxu.ru/u/${username}/preferences/account">${I18n.t('main.acc')}</a></li>
</ul>
<hr></div>`})
 
   );
   
} 

return contents;

}
});
