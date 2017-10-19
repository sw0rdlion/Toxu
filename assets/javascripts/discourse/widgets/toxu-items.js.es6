import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('toxu-items', {
  buildKey: (attrs) => 'home-toxu',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) { } else { 
 
contents.push(
new RawHtml({ html: `<div>

<div id="banner-content">
<p><img src="https://toxu.ru/uploads/default/original/2X/f/f8927774785cc502811a9ce4b5cdca0dcf2472db.jpg" alt="Талисман Toxu.ru" width="75" height="75"></p>
<h1>Toxu — место для обмена знаниями</h1>
<p class="obyav">Это место для лучшего понимания мира. Мы стремимся к достижению этой цели путём создания лучшего сайта вопросов и ответов. 
Задавайте вопросы, отвечайте, делитесь знаниями.<br> Присоединяйтесь сами и вместе с нами помогайте другим! </p>
<p><a href="https://toxu.ru/t/kakova-missiya-toxu/1251">Миссия</a> 
<a href="https://toxu.ru/t/vozmozhnosti-toxu-ru-green-book/611"> Возможности</a> 
<a href="https://toxu.ru/badges"> Награды</a>  </p>
</div>
      </div>

`})
 
   );
   
} 

return contents;

}
});
