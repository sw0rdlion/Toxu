import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('add-t', {
  tagName: 'div.add-t',
  buildKey: (attrs) => 'add-t',

  html(attrs, state) {
  const { currentUser } = this;
  let contents = []
	
if (currentUser) {
   
contents.push(
new RawHtml({ html: `<div>  

<center><button id="create-topic" class="btn btn-default btn btn-icon-text ember-view">  
<span class="d-button-label">Задать вопрос</span></button></center>
 
</div>`})
 
   );
} else {


contents.push(
new RawHtml({ html: `<div>  

<center><a id="create-topic" href="https://toxu.ru/login" class="btn btn-default btn btn-icon-text ember-view" title="Задать вопрос"> 
<span class="d-button-label">Задать вопрос</span></a></center>
  
</div>`}) );


}
return contents;
}});
