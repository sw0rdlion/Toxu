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
      const id = currentUser.get('id');
      
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0';}
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1';}
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2';}
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3';}
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var coll = 'col4';}
   
contents.push(
new RawHtml({ html: `<div>

<div class="id">id:${id}</div>
<a class="menu-profile" href="http://toxu.ru/u/${username}">@${username}</a> <sup class="pr-views">${I18n.t('main.my-d')} - 
<a class="${coll}" href="http://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">${doverie}</a></sup>
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
