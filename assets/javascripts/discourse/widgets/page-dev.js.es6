import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('page-dev', {
  buildKey: (attrs) => 'home-toxu',

  html(attrs, state) {
  
  let contents = []
    
  var title;
  var slug;
  var id;
  var detal;
  var like_count;
  var views;
  var posts_count;
  
  $.ajax({
  url: "/top/monthly.json" ,
  dataType: 'json',
  async: false,
  success: function(data) {
  
 var topics = data.topic_list.topics;
 
 for (var t = 0; t < topics.length; t++) {
 title = topics[t].title;
 slug = topics[t].slug; 
 id = topics[t].id; 
 detal = topics[t].excerpt;  
 like_count = topics[t].like_count;
 views = topics[t].views;
 posts_count = topics[t].posts_count;

   contents.push( new RawHtml({ html: `

<div class="topic-list"> <div class="telohome">


<div class="title-t"><a href="/t/${slug}/${id}" class="title">${title}</a></div>
<div class="topic-excerpt">${detal} <br>
<i class="fa fa-heart-o d-icon d-icon-heart" aria-hidden="true"></i> ${like_count} &nbsp; &nbsp; 
<i class="fa fa-eye" aria-hidden="true"></i> ${views} &nbsp; &nbsp; 
<i class="fa fa-comments-o d-icon d-icon-reply" aria-hidden="true"></i> ${posts_count}

<br><br>
</div>
</div></div> `})
 
 ); 
   

  }
  

  }
  });
    
    
    
 return contents;

}
});
