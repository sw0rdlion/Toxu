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
      
      
      
      
    var likes;
    var topic_count;
    var time_read;
    var bookmark_count;  
    var days_visited;
  
    $.ajax({
    url: "/users/"+ username +"/summary.json" ,
    dataType: 'json',
    async: false,
    success: function(data) {
    likes = data.user_summary.likes_received;	
    topic_count = data.user_summary.topic_count;	
    time_read  = data.user_summary.time_read;
    bookmark_count  = data.user_summary.bookmark_count;
    days_visited = data.user_summary.days_visited;

   }
   }); 
      
   if (trust_level === 0) { var graff =  '';}
   if (trust_level === 1) { var graff =  '';}   
   if (trust_level === 2) { 
   var graff =  'Во всплывающем окне: <b>пожаловаться</b> (под вопросом/ответом), появилась возможность обращаться к пользователю напрямую, минуя администрацию. <br><br>Для уточнения вопроса/ответа или продолжение личной беседы в почтовом разделе.<br><br><img style="border: 1px solid #e9e9e9;" src="https://toxu.ru/uploads/default/optimized/2X/b/be1d524e3ebb32339bb14781c34a5c6eb1679bef_1_690x224.gif" alt="Личные-сообщения" width="590" height="200"><br><br>В вопросах и ответах появилась кнопка: <b>Пригласить</b><br><br><img style="border: 1px solid #e9e9e9;" src="https://toxu.ru/uploads/default/original/2X/e/ebaabc2e2a3092fd609c886b3b9beb221da11cb5.gif" alt="Пригласить" width="590" height="100"><br><br>До уровня: <b>Постоялец (3)</b> <div class="wrapper-stats"><div class="progress-bar"><span class="progress-bar-fill" style="width:' + days_visited + '%"></span></div>';}
   if (trust_level === 3) { 
   var graff =  '<img src="/uploads/default/original/2X/9/9f1380a89edd873b73fe8d7f4032151e27e93eb1.gif" alt="Редактирование-вопроса" width="650" height="100"><br><br>Создавать вопросы/темы для коллективной работы в режиме Wiki.<br><br><img src="/uploads/default/original/2X/c/c9e035ffdf1a64efb60d38aa7a372086c28295e7.gif" alt="Add-Wiki" width="383" height="146"><br><br>Писать в раздел <a href="https://toxu.ru/c/toxu/blog" target="_blank">блог</a><br><br><b>Обязательно ознакомьтесь</b> со следующими материалами: <br><br> - <a target="_blank" href="https://toxu.ru/t/vojna-pravok-na-toxu/1281">война правок</a> на сайте; <br> - <a target="_blank" href="https://toxu.ru/t/kakovy-rekomendaczii-i-politika-dlya-redaktirovaniya-voprosa-na-toxu-ru/934">каковы рекомендации и политика для редактирования вопроса</a>.';}
   if (trust_level === 4) { var graff =  '<br><br><img src="https://toxu.ru/uploads/default/original/2X/6/6d31dd3cefe0a112c68dfbf60c6a66bd827df2f2.jpg" alt="Toxu" width="455" height="324"><br><br> <b>Вносите предложения:</b> <a href="" target="_blank">переводы</a>, дизайн - <a href="https://toxu.ru/t/mobilnyj-dizajn-i-vse-chto-s-nim-svyazano/1635" target="_blank">мобильный</a> и <a href="https://toxu.ru/t/oshibki-v-dizajne-pk-publikuem-tut/1862" target="_blank">ПК</a>, <a href="https://toxu.ru/t/kategorii-udobstvo-dostup/1090" target="_blank">категории/удобство/доступ</a> или юзабилити и т.д.';}   
      
      if (trust_level === 0) { var doverie = I18n.t("main.d0-you"); var coll = 'col0'; 
      var dov = 'Поздравляем, ваш уровень: <b>Посетитель</b>!<br><br>Вы можете писать только в раздел: <b>Песочница</b> и в дополнительных категориях, при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>. Вступайте в них!<br><br>Вам <a target="_blank" href="https://toxu.ru/u/conter/messages">пришло письмо</a> от нашего <b>ToxBot</b>-а, прочитайте его и получите награду <img src="https://toxu.ru/images/emoji/twitter/trophy.png?v=5" class="emoji"> после прохождения ознакомительной экскурсии. Это поможет вам приблизится к следующему уровню доверия и откроет новые возможности на сайте.';
      var dov_2 = '<a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Ознакомьтесь</a> более подробно, что такое <a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Уровень доверие</a> на сайте, и с главным нашим документом: <a target="_blank" href="https://toxu.ru/t/poleznye-i-bespoleznye-otvety/202">Политикой полезности.</a><br><br>Вы можете:<br><br><ul><il>- <a target="_blank" href="https://toxu.ru/u/'+ username +'/preferences/interface">Настроить дизайн</a> для себя. У нас несколько вариантов дизайна.</il><br><il>- Выбрать свою центральную страницу.</il><br><il>- Полностью заполнить свой профиль.</il></ul>';}
      
      if (trust_level === 1) { var doverie = I18n.t("main.d1-you"); var coll = 'col1'; 
      var dov = 'Поздравляем, ваш уровень: <b>Новичок</b>!<br><br>Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!';
      var dov_2 = 'Ознакомьтесь более подробно, что такое <a target="_blank" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">Уровень доверие</a> на сайте, и с главным нашим документом: <a target="_blank" href="https://toxu.ru/t/poleznye-i-bespoleznye-otvety/202">Политикой полезности.</a><br><br>Теперь вам доступны личные сообщения. А при жалобе, вы можете написать непосредственно автору, избегая отсылку жалобы администрации.<br><br>Еще Вы можете:<br><br><ul><il>- <a target="_blank" href="https://toxu.ru/u/'+ username +'/preferences/interface">Настроить дизайн</a>, и выбрать центральную страницу сайта для себя.</il><br><il>- <a target="_blank" href="https://toxu.ru/t/sajt-toxu-ru-v-seti/2031">Присоединиться</a> к любой группе в социальных сетях, где представлен наш сайт.</il></ul>';}
     
      if (trust_level === 2) { var doverie = I18n.t("main.d2-you"); var coll = 'col2'; 
      var dov = 'Поздравляем, ваш уровень: <b>Участник</b>!<br><br>Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!';
      var dov_2 = 'Вам стали доступны групповые и <a target="_blank" href="https://toxu.ru/u/'+ username +'/messages">личные сообщения</a>, <a target="_blank" href="https://toxu.ru/u/'+ username +'/invited/pending">инвайт система</a>, приглашение пользователей в вопросы и некоторые другие возможности.<br><br>';}
    
      if (trust_level === 3) { var doverie = I18n.t("main.d3-you"); var coll = 'col3'; 
      var dov = 'Поздравляем, ваш уровень: <b>Постоялец</b>!<br><br>Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!';
      var dov_2 = 'Вам  стала доступна возможность <b>редактировать</b> вопросы, вносить и добавлять различные теги, менять категорию.<br><br>';}
      
      if (trust_level === 4) { var doverie = I18n.t("main.d4-you");
      var dov = 'Поздравляем, ваш уровень: <span style="color: #f56400;"><b>Лидер</b></span>!<br><br>Вам стал доступен раздел: <a target="_blank" href="https://toxu.ru/c/moder">Модераторский</a>. Ознакомьтесь с материалом в нем.';
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
 { my_gr_ob = '<hr> <a target="_blank" class="discourse-tag box bar" href="https://toxu.ru/groups/Comm">Группа «Общение»</a> <a target="_blank" href="https://toxu.ru/groups/Comm">- вступайте!</a> Это позволит вам ближе познакомиться с пользователями сайта в неформальной уютной обстановке.';  } 
   
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

${graff}

${my_gr_ob}
</div></div>`}));
   
} else { 

    contents.push(
    new RawHtml({ html: `<div class="id"><br><br><center>Cтраница доступна только после авторизации</center><br><br></div>`}));

        }

return contents;

}
});
