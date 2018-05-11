import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('link-top', {
  buildKey: (attrs) => 'link-top',

  html(attrs, state) {

  let contents = []
    
  var title;
  var slug;

  
  $.ajax({
  url: "/top/daily.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    
 var topics = data.topic_list.topics;
 
 for (var t = 0; t < topics.length; t++) {
 title = topics[t].title;
 slug = topics[t].slug; 

 contents.push( new RawHtml({ html: ` </div> ${title}

</div> `})
 
 ); 
   
 }
 }
 });
    
 return contents;

}
});
