import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('page-stats', {
  tagName: 'div.toxu',
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
 if (g_id === 57) { my_gr_ob = ' ';  } else     
 { my_gr_ob = '<hr> <a target="_blank" class="discourse-tag box bar" href="https://toxu.ru/groups/Comm">Группа «Общение»</a> <a target="_blank" href="https://toxu.ru/groups/Comm">- вступайте!</a> Это позволит вам ближе познакомиться с пользователями сайта в неформальной уютной обстановке.';  } 
 
 }
 }
 });

if (trust_level === 0) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 style="font-size: 2.0em;">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #45A163;"><b>Посетитель!</b></span><br><br>

Вы можете публиковать материалы только в разделе: <b>Песочница</b> и в дополнительных категориях, при условии вступления в соответствующие <a target="_blank" href="https://toxu.ru/groups">Группы</a>. 
 Вступайте в них!
 

<p><strong>Миссия Toxu</strong>  — делиться знаниями. Мы очень тщательно относимся к качеству вопросов и ответов. И стремимся к достижению этой цели путем создания лучшего сайта вопросов и ответов в сети.</p>

<span class="excerpt">Администрация приветствует полные и развернутые ответы. Обратите внимание, что необходимо подробно обосновать свою точку зрения.  Прочтите подробно один из главных вопросов: 
<a target="_blank" href="https://toxu.ru/t/pochemu-moj-otvet-udalen-skryt/159">почему мой вопрос/ответ удален/скрыт?</a>
<br>
<i>"Бросание" кратких реплик - недопустимо!</i>
</span>
 
	 <br> 
<br>Ознакомьтесь с часто задаваемыми вопросами  <a target="_blank" href="https://toxu.ru/help"><b>в этом разделе.</b></a> 
	  Это поможет вам приблизиться к следующему уровню доверия и откроет новые возможности на сайте.
	 
   <br><br>Вы можете:
	  
	  <br><ul><il>- Настроить дизайн под себя. У нас несколько вариантов дизайна.</il><br><il>- Выбрать собственную центральную страницу.</il><br>
	  <il>- <a target="_blank" href="https://toxu.ru/u/${username}/preferences/profile">Полностью заполнить свой профиль.</a></il></ul>



</div>`}));
 }

     
if (trust_level === 1) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 style="font-size: 2.0em;">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #335599;"><b>Новичок!</b></span><br><br>
Теперь Вы можете задавать вопросы и отвечать во всех разделах, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!
Ознакомьтесь более подробно с главным нашим документом: <a target="_blank" href="https://toxu.ru/t/poleznye-i-bespoleznye-otvety/202">Политикой полезности.</a> 
Это поможет вам приблизится к следующему уровню доверия и откроет новые возможности на сайте.
<br><br>
Вам доступны <a target="_blank" href="https://toxu.ru/u/'+ username +'/messages">личные сообщения</a>. 
<br>Воспользуйтесь личными сообщениями и <b>получите грамоту</b> <img src="https://toxu.ru/images/emoji/twitter/trophy.png" class="emoji">, 
отправив Боту письмо нажав на <a target="_blank"  href="http://toxu.ru/new-message?username=ToxBot&title=Привет%20Бот!&body=@ToxBot%20справка%20Привет,%20давай%20общаться?">
<b>эту ссылку</b></a>.<br> <br>

<i>Еще Вы можете:</i> <a target="_blank" href="https://toxu.ru/u/${username}/preferences/interface">настроить дизайн</a> 
и выбрать центральную страницу сайта для себя. И <a target="_blank" href="https://toxu.ru/t/sajt-toxu-ru-v-seti/2031">присоединиться</a> к любой группе в социальных сетях, 
где представлен наш сайт.<br>   
<br>
   
Во всплывающем окне: <b>пожаловаться</b> (под вопросом/ответом), появилась возможность обращаться к пользователю напрямую, минуя администрацию.  
Для уточнения вопроса/ответа или продолжение личной беседы в почтовом разделе.<br>
<img class="img" src="https://toxu.ru/uploads/default/optimized/2X/b/be1d524e3ebb32339bb14781c34a5c6eb1679bef_1_690x224.gif" alt="Личные-сообщения" width="590" height="200">
   


</div>`}));
 }
 
 
if (trust_level === 2) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 style="font-size: 2.0em;">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #4dc1c0;"><b>Участник!</b></span><br><br>
Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!
Вам стали доступны групповые и <a target="_blank" href="https://toxu.ru/u/${username}/messages">личные сообщения</a>, 
<a target="_blank" href="https://toxu.ru/u/${username}/invited/pending">инвайт система</a>, приглашение пользователей в вопросы и некоторые другие возможности.
<br><br>
Во всплывающем окне: <b>пожаловаться</b> (под вопросом/ответом), появилась возможность обращаться к пользователю напрямую, минуя администрацию.  
Для уточнения вопроса/ответа или продолжения личной беседы в почтовом разделе.<br>
<img class="img" src="https://toxu.ru/uploads/default/optimized/2X/b/be1d524e3ebb32339bb14781c34a5c6eb1679bef_1_690x224.gif" alt="Личные-сообщения" width="590" height="200">
<br>
В вопросах и ответах появилась кнопка: <b>Пригласить</b><br>
<img class="img" src="https://toxu.ru/uploads/default/original/2X/e/ebaabc2e2a3092fd609c886b3b9beb221da11cb5.gif" alt="Пригласить" width="590" height="100">
<br>До уровня: <b>Постоялец (3)</b> 
<div class="wrapper-stats"><div class="progress-bar"><span class="progress-bar-fill" style="width:'${days_visited}%"></span></div>
      
</div>`}));
 }


if (trust_level === 3) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 style="font-size: 2.0em;">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #f38844;"><b>Постоялец!</b></span><br><br>
Теперь Вы можете писать во все разделы, а при условии вступления в <a target="_blank" href="https://toxu.ru/groups">Группы</a>, и в дополнительные!
Вам  стала доступна возможность <b>редактировать</b> вопросы, вносить и добавлять различные теги, менять категорию.<br>

<img class="img" src="/uploads/default/original/2X/9/9f1380a89edd873b73fe8d7f4032151e27e93eb1.gif" alt="Редактирование-вопроса" width="650" height="100"><br>
Создавать вопросы/темы для коллективной работы в режиме Wiki.<br>
<img class="img" src="/uploads/default/original/2X/c/c9e035ffdf1a64efb60d38aa7a372086c28295e7.gif" alt="Add-Wiki" width="383" height="146"><br>
Писать в раздел <a href="https://toxu.ru/c/toxu/blog" target="_blank">блог</a><br><b>Обязательно ознакомьтесь</b> со следующими материалами: 
<br> - <a target="_blank" href="https://toxu.ru/t/vojna-pravok-na-toxu/1281">война правок</a> на сайте; 
<br> - <a target="_blank" href="https://toxu.ru/t/kakovy-rekomendaczii-i-politika-dlya-redaktirovaniya-voprosa-na-toxu-ru/934">каковы рекомендации и политика для 
 редактирования вопроса</a>.

</div>`}));
 }



if (trust_level === 4) { 
contents.push(
new RawHtml({ html: `<div class="id">
<h1 style="font-size: 2.0em;">${username}</h1>
Поздравляем, ваш уровень: <span style="color: #f56400;"><b>Лидер!</b></span><br><br>
Вам стал доступен раздел: <a target="_blank" href="https://toxu.ru/c/moder">Модераторский</a>. Ознакомьтесь с материалом в нем.
Теперь вам доступны практически все возможности системы и вы можете принимать активное участие в развитие сайта.<br><br>
<b>Смелее предлагайте</b> свои идеи, и мы сделаем ресурс лучше!<br>
<img class="img" src="https://toxu.ru/uploads/default/original/2X/6/6d31dd3cefe0a112c68dfbf60c6a66bd827df2f2.jpg" alt="Toxu" width="455" height="324"><br>

<b>Вносите предложения:</b> <a href="" target="_blank">переводы</a>, дизайн - 
<a href="https://toxu.ru/t/mobilnyj-dizajn-i-vse-chto-s-nim-svyazano/1635" target="_blank">мобильный</a> и 
<a href="https://toxu.ru/t/oshibki-v-dizajne-pk-publikuem-tut/1862" target="_blank">ПК</a>, 
<a href="https://toxu.ru/t/kategorii-udobstvo-dostup/1090" target="_blank">категории/удобство/доступ</a> или юзабилити и т.д. <br> <br> 
А еще, <a target="_blank"  href="https://toxu.ru/chess"><b>играйте в шахматы!</b></a><br>  

</div>`}));
 }


   
} else { 

    contents.push(
    new RawHtml({ html: `<div class="id"><br><br><center>Содержание страницы доступно только после авторизации</center><br><br></div>`}));

        }

return contents;

}
});
