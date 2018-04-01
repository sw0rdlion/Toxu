import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('profile-t', {
  tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
    const trust_level = currentUser.get('trust_level');
      
if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var dopp = '<div class="werng-menu"> У вас есть <a class="cvet" href="https://toxu.ru/stats">эти возможности!</a></div>';}
if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var dopp = '<div class="werng-menu"> У вас появились <a class="cvet" href="https://toxu.ru/stats">новые возможности.</a> Поздравляем!</div>';}
if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var dopp = '<div class="werng-menu"> Ваш уровень доверия - <a class="cvet" href="https://toxu.ru/stats"><i>участник</i></a>, поздравляем!</div>';}
if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var dopp = '<div class="werng-menu">Ваш уровень доверия - <a class="cvet" href="https://toxu.ru/stats"><i>постоялец</i></a>.</div>';}
if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var dopp = '<div class="werng-menu"> Об уровне доверия - <a class="cvet" href="https://toxu.ru/stats"><i>лидер</i></a>.</div>';}
      
contents.push(
new RawHtml({ html: `<div>  
${dopp}
<br><center>В стадии разработки... Будет персональная информация...</center>
<ul id="sub-menu" style="color: #919191;">
<li><a rel="nofollow" href="https://toxu.ru/u" class="sub-menu" id="library">Участники</a> </li>
<li><a rel="nofollow" href="https://toxu.ru/groups" class="sub-menu" id="library">Группы</a></li>
<li><a rel="nofollow" href="https://toxu.ru/help" class="sub-menu" id="library">Помощь</a></li></ul> 
 
</div>`})
 
   );
} else { }
return contents;
}});
