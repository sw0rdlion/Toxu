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
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0'; 
      var dov = 'Поздравляем, ваш уровень: <b>Посетитель</b>!<br><br>Вы пожете писать только в категории: <b>Песочница</b> и в дополнительных категориях, при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>. Вступайте в них!<br>Вам <a target="_blank" href="https://toxu.ru/u/conter/messages">пришло письмо</a> от нашего <b>ToxBot</b>-а, прочитайте его получите награду после прохождения обучения.<br>';
      var dov_2 = '<a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Ознакомьтесь</a> более подробно, что такое <a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Уровень доверие</a> на сайте, и с главным нашим документом: <a target="_blank" href="https://toxu.ru/t/poleznye-i-bespoleznye-otvety/202">Политикой полезности.</a><br><br>Вы можете:<br><br><ul><il>- Настроить дизайн для себя. У нас несколько вариантов дизайна.</il><br><il>- Выбрать свою центральную страницу.</il><br><il>- Полностью заполнить свой профиль.</il></ul>';}
      
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1'; 
      var dov = 'Поздравляем, ваш уровень: <b>Новичок</b>!<br><br>Теперь Вы можете писать во все категории, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные категории!';
      var dov_2 = '<a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Ознакомьтесь</a> более подробно, что такое <a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Уровень доверие</a> на сайте, и с главным нашим документом: <a target="_blank" href="https://toxu.ru/t/poleznye-i-bespoleznye-otvety/202">Политикой полезности.</a><br><br>Вы можете:<br><br><ul><il>- Настроить дизайн для себя. У нас несколько вариантов дизайна.</il><br><il>- Выбрать свою центральную страницу.</il><br><il>- Полностью заполнить свой профиль.</il></ul>';}
      
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2'; 
      var dov = 'Поздравляем, ваш уровень: <b>Участник</b>!<br><br>Теперь Вы можете писать во все категории, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные категории!';
      var dov_2 = 'Вам стали доступны личные сообщения, инвайт система и множество других функций.';}
      
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3'; 
      var dov = 'Поздравляем, ваш уровень: <b>Постоялец</b>!<br><br>Теперь Вы можете писать во все категории, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные категории!';
      var dov_2 = 'Теперь вам доступны практически все возможности системы и вы можете принимать активное участие в развитие сайта.<br><br><b>Смелее предлагайте</b> свои идеи, и мы сделаем ресурс лучше!';}
      
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you");
      var dov = 'Поздравляем, ваш уровень: <b>Лидер</b>!<br><br>Теперь Вы можете писать во все категории, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные категории!';
      var dov_2 = 'Теперь вам доступны практически все возможности системы и вы можете принимать активное участие в развитие сайта.<br><br><b>Смелее предлагайте</b> свои идеи, и мы сделаем ресурс лучше!';}
  
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
<br>${dov}<br><br>
${dov_2}

${my_gr_ob}
</div></div>`}));
   
} else { 

    contents.push(
    new RawHtml({ html: `<div class="id"><br><br><center>Cтраница доступна только после авторизации</center><br><br></div>`}));

        }

return contents;

}
});
