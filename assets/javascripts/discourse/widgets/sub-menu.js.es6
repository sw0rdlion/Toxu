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
     
if (trust_level === 0) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <i>посетитель</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<br>
<div class="mn">В стадии разработки...</div>

</div>`}));

}
if (trust_level === 1) { 
contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <i>пользователь</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<div class="mn">В стадии разработки...</div>

</div>`}));

}
if (trust_level === 2) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <i>участник</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<div class="mn">В стадии разработки...</div>

</div>`}));

}
if (trust_level === 3) { 

contents.push(
new RawHtml({ html: `<div>  

<div class="title">Мой профиль<span id="toxu">
<a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i></a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <i>постоялец</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<div class="mn">В стадии разработки...</div>

</div>`}));

}

if (trust_level === 4) { 
contents.push(
new RawHtml({ html: `<div>  
<div class="title">Мой профиль<span id="toxu"><a class="link" target="_blank" href="https://toxu.ru/u/${username}/preferences/account"><i class="fa fa-cog" aria-hidden="true"></i>
</a></span></div>
<div class="mn"> <i class="fa fa-star-o"></i> Ваш уровень доверия - <i>лидер</i>. Узнайте <a class="cvet" href="https://toxu.ru/stats">больше.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-trophy"></i> Посмотреть <a class="cvet" href="https://toxu.ru/u/${username}/badges">мои награды.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас возник вопрос о самом сайте? <a href="https://toxu.ru/c/dev">dev</a> - это место, где можно говорить о таких вещах.</div>

</div>`}));
}   
   
   
} else {

contents.push(
new RawHtml({ html: `<div>
<div class="title">Другое<span id="toxu"></div>

<div class="mn"> <i aria-hidden="true" class="fa fa-trophy"></i> Про уровень доверия - <i>лидер</i>. Узнайте <a class="cvet" href="https://toxu.ru/t/uroven-doveriya-na-sajte-toxu-ru/61">больше.</a></div>
<div class="mn"><i class="fa fa-star-o"></i> Посмотреть <a class="cvet" href="https://toxu.ru/help">раздел помощь.</a></div>
<div class="mn"><i aria-hidden="true" class="fa fa-question-circle-o"></i> У вас есть предложения по сайту? <a href="https://toxu.ru/t/voprosy-k-administraczii-sajta/2016">Напишите</a> про них.</div>

</div>`}) );
  

}
return contents;
}});
