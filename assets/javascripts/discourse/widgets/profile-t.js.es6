import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('profile-t', {
  tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const trust_level = currentUser.get('trust_level');
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0'; var dopp = '<hr><a href="https://toxu.ru/stats"><span style="font-size: 14px;color:red;"><b>Прочтите</b> - рекомендации!</span></a><br><br>';}
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1'; var dopp = '<hr><a href="https://toxu.ru/stats"><span style="font-size: 14px;color:red;">У вас <b>новый уровень доверия</b>, прочтите рекомендации!</span></a><br><br>';}
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2'; var dopp = '';}
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3'; var dopp = '';}
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var coll = 'col4'; var dopp = '';}
      
contents.push(
new RawHtml({ html: `<div>  
<div class="id"><a class="nastr" title="Настройка профиля"  href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-gear d-icon d-icon-gear" aria-hidden="true"></i></a></div>
<a class="menu-profile" href="https://toxu.ru/u/${username}">@${username}</a> 
<span class="${coll}"><a class="col5" title="Посмотрите вашу статистику"  href="https://toxu.ru/stats"> - ${doverie}</a></span><br>
${dopp}
<a class="menu-prof menu" href="https://toxu.ru/posted">${I18n.t('main.qa-you')}</a> -  
<a class="menu-prof menu" href="https://toxu.ru/bookmarks">${I18n.t('main.bookmark-you')}</a> - 
<a class="menu-prof menu" href="https://toxu.ru/u/${username}/messages">${I18n.t('main.mail-you')}</a>
<hr></div>`})
 
   );
} 
return contents;
}});
