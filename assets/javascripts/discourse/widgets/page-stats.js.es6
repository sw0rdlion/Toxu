import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('page-dev', {
  buildKey: (attrs) => 'home-toxu',

  html(attrs, state) {
  
  let contents = []
    
//  var title;
  
  $.ajax({
  url: "/top/monthly.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
  
 var topics = data.topic_list.topics;
 
 for (var t = 0; t < topics.length; t++) {
// title = topics[t].title;


   contents.push( new RawHtml({ html: `
<div class="topic-list"> работает .... </div> `})
 
 ); 
   

  }
  

  }
  });
    
    
    
 return contents;

}
});
