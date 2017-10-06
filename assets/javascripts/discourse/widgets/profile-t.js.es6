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
  
    var likes;
    var topic_count;
    var time_read;
    var bookmark_count;    
  $.ajax({
  url: "/users/"+ username +"/summary.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
    likes = data.user_summary.likes_received;	
    topic_count = data.user_summary.topic_count;	
    time_read  = data.user_summary.time_read;
    bookmark_count  = data.user_summary.bookmark_count;
  }
  });
    
        var view;
  $.ajax({
  url: "/u/"+ username +".json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
    
  return view = data.user.profile_view_count;

  }
  });
      
      $.ajax({
  url: "/u/"+ username +"/notifications.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
    
  }
  });  
      
      
      
contents.push(
new RawHtml({ html: `<div> ${view}

<div class="id"><a class="nastr" alt="${I18n.t('main.acc')}" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></div>
<a class="menu-profile" href="https://toxu.ru/u/${username}">@${username}</a> <sup class="pr-views">${I18n.t('main.my-d')} - 
<a class="${coll}" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">${doverie}</a></sup><br>
<sup class="pr-views">${I18n.t('main.time-you')}: <span class="vid">${time_read}</span> - лайков: <span class="vid">${likes}</span></sup>
<ul class="menu">
<li class="menu"><a class="menu-prof menu" href="https://toxu.ru/posted">${I18n.t('main.qa-you')}</a> <span class="numer">${topic_count}</span></li>
<li class="menu"><a class="menu-prof menu" href="https://toxu.ru/bookmarks">${I18n.t('main.bookmark-you')}</a> <span class="numer">${bookmark_count}</span></li>
<li class="menu"><a class="menu-prof menu" href="https://toxu.ru/u/${username}/messages">${I18n.t('main.mail-you')}</a></li>
<li class="menu ots"><a class="menu-prof menu" href="https://toxu.ru/latest?max_posts=1">${I18n.t('main.no-otv')}</a></li>
</ul>
<hr></div>`})
 
   );
   
} 

return contents;

}
});
