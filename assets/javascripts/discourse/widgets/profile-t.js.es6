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
      var str = currentUser.get('avatar_template');
      const ava = str.replace('{size}', '25');
      
if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var dopp = '<div class="werng"><i class="fa fa-info" aria-hidden="true"></i> Прочитайте, проваши возможности <a class="und" href="https://toxu.ru/stats">нажав на эту ссылку</a>.</div>';}
if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var dopp = '<div class="werng"><i class="fa fa-gift" aria-hidden="true"></i> У вас появились новые возможности. Прочитайте про них <a class="und" href="https://toxu.ru/stats">нажав на эту ссылку</a>.</div>';}
if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var dopp = '';}
if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var dopp = '';}
if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var dopp = '';}
      
contents.push(
new RawHtml({ html: `<div>  
<div class="id"><a class="nastr" title="Настройка профиля"  href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-gear d-icon d-icon-gear" aria-hidden="true"></i></a></div>

<a class="menu-profile" href="https://toxu.ru/u/${username}/summary"><img width="25" src="${ava}" alt="${username}" class="avatar"></a> - 
<a class="pmenu" title="Посмотрить мои возможности"  href="https://toxu.ru/stats">${doverie}</a><br>
${dopp}
<a class="pmenu" title="Мои вопросы и ответы" href="https://toxu.ru/posted">${I18n.t('main.qa-you')}</a> -  
<a class="pmenu" title="Мои закладки" href="https://toxu.ru/bookmarks">${I18n.t('main.bookmark-you')}</a> - 
<a class="pmenu" title="Моя почта" href="https://toxu.ru/u/${username}/messages">${I18n.t('main.mail-you')}</a>
<hr></div>`})
 
   );
} 
return contents;
}});
