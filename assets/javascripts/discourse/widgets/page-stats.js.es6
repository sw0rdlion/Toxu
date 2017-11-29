import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('page-stats', {
  tagName: 'div.stats',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
      const username = currentUser.get('username');
      const name = currentUser.get('name');
      const trust_level = currentUser.get('trust_level');
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0'; var dov = 'Вы пожете писать только в категории: Песочница и в категории Групп'; }
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1'; var dov = ''; }
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2'; var dov = ''; }
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3'; var dov = ''; }
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you"); var coll = 'col4'; var dov = ''; }
  
  var g_id;
  var my_gr_ob;    
  $.ajax({
  url: "/u/"+ username +".json" ,
  dataType: 'json',
  async: false,
  success: function(data) {

 var groups = data.user.groups;  
 for (var t = 0; t < groups.length; t++) { 
 g_id = groups[t].id;
 if (g_id === 57) { my_gr_ob = ' ';  }   

 else     
 { my_gr_ob = '<hr> <a class="discourse-tag box bar" href="https://toxu.ru/groups/Comm">Группа</a> - общение. Вступайте!';  } 
   
  }
      
  }
  });
      
     
contents.push(
new RawHtml({ html: `
<div class="id">
<h1 style="font-size: 2.0em;">${username} - <span class="${coll}"> ${doverie}</span></h1>
<div class="topic-list"> 
<div class="main-link clearfix"> 
<br><br>${dov}<br><br>
<i>В стадии разработки...</i>
 ${my_gr_ob}

</div></div>`}));
   
} else { 

    contents.push(
    new RawHtml({ html: `<div class="id"><br><br><center>Cтраница доступна только после авторизации</center><br><br></div>`}));

        }

return contents;

}
});
