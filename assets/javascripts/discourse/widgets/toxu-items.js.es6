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
<p><img src="https://toxu.ru/uploads/default/original/2X/f/fcd2d5da65e0ecb37465724bfe40855872ea0788.jpg" alt="Талисман Toxu.ru" width="75" height="75"></p>
<h1>Вопросы и Ответы</h1>
<p>Toxu — место для обмена знаниями. Это место и для лучшего понимания мира. Мы стремимся к достижению этой цели, путём создания этого сайта вопросов и ответов. Задавайте вопросы, отвечайте, делитесь знаниями. Помогайте другим и присоединяйтесь! </p>
<p><a href="https://toxu.ru/badges"> Награды</a> 
<a href="https://toxu.ru/t/vozmozhnosti-toxu-ru-green-book/611"> Возможности</a> 
<a href="https://toxu.ru/t/kakova-missiya-toxu/1251">Миссия</a></p>
</div>
      </div>

`})
 
   );
   
} 

return contents;

}
});
