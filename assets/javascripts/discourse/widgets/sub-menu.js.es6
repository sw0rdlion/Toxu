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
    const username = currentUser.get('username');
     
if (trust_level === 0) { var dopp = '<i class="fa fa-address-card-o"></i> Ваш уровень доверия - <i>посетитель</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a>';}
if (trust_level === 1) { var dopp = '<i class="fa fa-address-card-o"></i> Ваш уровень доверия - <i>пользователь</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a>';}
if (trust_level === 2) { var dopp = '<i class="fa fa-address-card-o"></i> Ваш уровень доверия - <i>участник</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a>';}
if (trust_level === 3) { var dopp = '<i class="fa fa-address-card-o"></i> Ваш уровень доверия - <i>постоялец</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a>';}
if (trust_level === 4) { var dopp = '<i class="fa fa-address-card-o"></i> Ваш уровень доверия - <i>лидер</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a>';}
      
contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu"><a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account">Ред.</a></span></div>
<div class="mn"> ${dopp} <br><br></div>

<div class="mn"><i class="fa fa-gear d-icon d-icon-gear"></i> <a class="my-link cvet" href="#">Тестирование</a></div>
<div class="mn"><i class="fa fa-gear d-icon d-icon-gear"></i> <a class="my-link cvet" href="#">Тестирование</a></div>
<div class="mn"><i class="fa fa-gear d-icon d-icon-gear"></i> <a class="my-link cvet" href="#">Тестирование</a></div>

<br><br><center>В стадии разработки... Будет персональная информация...</center>
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
