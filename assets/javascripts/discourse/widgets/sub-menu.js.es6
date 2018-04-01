import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sub-menu', {
 // tagName: 'div.user-profile.widget-container',
  buildKey: (attrs) => 'user-profile',

  html(attrs, state) {
    const { currentUser } = this;
    let contents = []
    if (currentUser) {
    const trust_level = currentUser.get('trust_level');
      
if (trust_level === 0) { var dopp = '<div class="werng-menu"> У вас есть <a class="cvet" href="https://toxu.ru/stats">эти возможности!</a></div>';}
if (trust_level === 1) { var dopp = '<div class="werng-menu"> У вас появились <a class="cvet" href="https://toxu.ru/stats">новые возможности.</a> Поздравляем!</div>';}
if (trust_level === 2) { var dopp = '<div class="werng-menu"> Ваш уровень доверия - <a class="cvet" href="https://toxu.ru/stats"><i>участник</i></a>, поздравляем!</div>';}
if (trust_level === 3) { var dopp = '<div class="werng-menu">Ваш уровень доверия - <a class="cvet" href="https://toxu.ru/stats"><i>постоялец</i></a>.</div>';}
if (trust_level === 4) { var dopp = '<div class="werng-menu"> Об уровне доверия - <a class="cvet" href="https://toxu.ru/stats"><i>лидер</i></a>.</div>';}
      
contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu"><a class="link" href="#">ред</a></span></div>


<div class="mn"><i class="fa fa-gear d-icon d-icon-gear" aria-hidden="true"></i> <a class="my-link cvet" href="#">Тестирование</a></div>
<div class="mn"><i class="fa fa-gear d-icon d-icon-gear" aria-hidden="true"></i> <a class="my-link cvet" href="#">Тестирование</a></div>
<div class="mn"><i class="fa fa-gear d-icon d-icon-gear" aria-hidden="true"></i> <a class="my-link cvet" href="#">Тестирование</a></div>

<br>
${dopp}

<br><center>В стадии разработки... Будет персональная информация...</center>
<ul id="sub-menu" style="color: #919191;">
<li><a rel="nofollow" href="https://toxu.ru/u" class="sub-menu">Участники</a> </li>
<li><a rel="nofollow" href="https://toxu.ru/groups" class="sub-menu">Группы</a></li>
<li><a rel="nofollow" href="https://toxu.ru/help" class="sub-menu">Помощь</a></li>
</ul> 

<div class="blog-container"><center> 
<a class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/latest?ascending=true&amp;order=posts">Вопросы без ответа</a>
<br><br>
<a href="#hone" class="soc-link"><i style="font-size:24px" class="fa fa-arrow-up"></i></a></center> </div>

</div>`})
 
   );
} else {

  contents.push(
new RawHtml({ html: `

<div class="blog-container"><center> 
<a class="btn-primary create btn btn-icon-text ember-view" href="https://toxu.ru/latest?ascending=true&amp;order=posts">Вопросы без ответа</a>
<br><br><a href="#hone" class="soc-link"><i style="font-size:24px" class="fa fa-arrow-up"></i></a></center> </div>

`}) );
  

}
return contents;
}});
