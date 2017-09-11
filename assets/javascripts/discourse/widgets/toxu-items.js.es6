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

<div id="banner">
<div id="banner-content"><h1>Toxu — место для обмена знаниями</h1>
<p> Мы стремимся к достижению этой цели, путём создания этого сайта <strong>вопросов и ответов</strong>.</p>
<p><strong>Toxu</strong> позиционирует себя как экспертные ответы, где можно получить ответ профессионала на любой вопрос.</p>
<p>Сейчас сайт находится в стадии активного <em>beta-</em> тестирования.<br>
Мы быстро развиваемся и у нас есть уже <a href="//toxu.ru/t/vozmozhnosti-toxu-ru/611">огромные возможности</a>.</p>
<p>Задавайте вопросы, отвечайте, делитесь знаниями, <a href="//toxu.ru/badges">получайте награды.</a>  <img src="//toxu.ru/images/emoji/twitter/trophy.png?v=5" title=":trophy:" class="emoji" alt=":trophy:"> </p>
<p>Помогайте другим и присоединяйтесь! <img src="//toxu.ru/images/emoji/twitter/dizzy.png?v=5" title=":dizzy:" class="emoji" alt=":dizzy:"></p>
 </div>
      </div>

`})
 
   );
   
} 

return contents;

}
});
