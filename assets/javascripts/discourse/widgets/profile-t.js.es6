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
      const name = currentUser.get('name');
      const trust_level = currentUser.get('trust_level');
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0';}
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1';}
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2';}
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3';}
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var coll = 'col4';}
  
  var badge_count;
  var view;
  var post_count;
  $.ajax({
  url: "/u/"+ username +".json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
  badge_count = data.user.badge_count;  
  view = data.user.profile_view_count;
  post_count = data.user.post_count;
  }
  });
      
      
      
contents.push(
new RawHtml({ html: `<div> ${view}

<div class="id"><a class="nastr" alt="${I18n.t('main.acc')}" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></div>
<a class="menu-profile" href="https://toxu.ru/u/${username}">@${username}</a> <sup class="pr-views">${I18n.t('main.my-d')} - 
<a class="${coll}" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">${doverie}</a></sup><br>
<sup class="pr-views"> <i class="fa fa-eye" aria-hidden="true"></i> <span class="vid">${view}</span> &nbsp; &nbsp; <i class="fa fa-trophy" aria-hidden="true"></i> <span class="vid">${badge_count}</span> </sup>
<ul class="menu">
<li class="menu"><a class="menu-prof menu" href="https://toxu.ru/posted">${I18n.t('main.qa-you')}</a> <span class="numer"></span></li>
<li class="menu"><a class="menu-prof menu" href="https://toxu.ru/bookmarks">${I18n.t('main.bookmark-you')}</a> <span class="numer"></span></li>
<li class="menu"><a class="menu-prof menu" href="https://toxu.ru/u/${username}/messages">${I18n.t('main.mail-you')}</a></li>
<li class="menu ots"><a class="menu-prof menu" href="https://toxu.ru/latest?max_posts=1">${I18n.t('main.no-otv')}</a></li>
</ul>
<hr></div>`})
 
   );
   
} 

return contents;

}
});
