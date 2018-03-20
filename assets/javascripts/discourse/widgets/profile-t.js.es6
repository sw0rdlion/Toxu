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
      
if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var dopp = '<div class="werng-mob"><div class="werng"><i class="fa fa-gift" aria-hidden="true"></i> У вас есть <a class="cvet" href="https://toxu.ru/stats">эти возможности!</a></div></div>';}
if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var dopp = '<div class="werng"><i class="fa fa-gift" aria-hidden="true"></i> У вас появились <a class="cvet" href="https://toxu.ru/stats">новые возможности.</a> Поздравляем!</div>';}
if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var dopp = '<div class="werng"><i class="fa fa-gift" aria-hidden="true"></i> Ваш уровень доверия - <a class="cvet" href="https://toxu.ru/stats"><i>участник</i></a>, поздравляем!</div>';}
if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var dopp = '<div class="werng"><i class="fa fa-gift" aria-hidden="true"></i> Ваш уровень доверия - <a class="cvet" href="https://toxu.ru/stats"><i>постоялец</i></a>.</div>';}
if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var dopp = '<div class="werng"><i class="fa fa-gift" aria-hidden="true"></i> О уровне доверия - <a class="cvet" href="https://toxu.ru/stats"><i>лидер</i></a>.</div>';}
      
contents.push(
new RawHtml({ html: `<div>  

${dopp}

</div>`})
 
   );
} 
return contents;
}});
