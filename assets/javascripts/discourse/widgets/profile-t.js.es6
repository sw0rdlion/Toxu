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
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0';}
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1';}
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2';}
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3';}
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var coll = 'col4';}
      
contents.push(
new RawHtml({ html: `<div>  
<div class="id"><a class="nastr ${coll}" alt="${I18n.t('main.acc')}" href="https://toxu.ru/stats">${doverie}</a></div>
<a class="menu-profile" href="https://toxu.ru/u/${username}">@${username}</a> 
<a class="menu-prof menu" href="https://toxu.ru/posted"><i class="fa fa-commenting d-icon d-icon-dot-circle-o" aria-hidden="true"></i></a> &nbsp; &nbsp; 
<a class="menu-prof menu" href="https://toxu.ru/bookmarks"><i class="fa fa-bookmark d-icon d-icon-bookmark" aria-hidden="true"></i></a> &nbsp; &nbsp; 
<a class="menu-prof menu" href="https://toxu.ru/u/${username}/messages"><i class="fa fa-envelope d-icon d-icon-envelope" aria-hidden="true"></i></a>
<hr></div>`})
 
   );
} 
return contents;
}});
