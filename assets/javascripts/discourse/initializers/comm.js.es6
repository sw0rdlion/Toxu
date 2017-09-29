import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html'; 
 
function attachComm(api) {
 api.addPostClassesCallback((attrs) => {
 return attrs.reply_to_post_number ? ["comment"] : ["answer"];
});
       
api.decorateWidget('post-menu:before', dec => {

const attrs = dec.attrs;
if (attrs.post_number != 1) { return; }

 const link = window.location.href;
 const urlfb = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(link);
 const urltw = "http://twitter.com/share?url=" + encodeURIComponent(link);
 const urlok = "http://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl=" + encodeURIComponent(link);
 const urlvk = "https://vk.com/share.php?url=" + encodeURIComponent(link);

 return new RawHtml({html: `<div class='share2'>
   
 <a class="facebook" href="${urlfb}" target="_blank"><i class="fa fa-facebook-square fa-lg" aria-hidden="true"></i></a>
<a class="twitter" href="${urltw}" target="_blank"><i class="fa fa-twitter-square fa-lg" aria-hidden="true"></i></a>
<a class="ok" href="${urlok}" target="_blank"><i class="fa fa-odnoklassniki-square fa-lg" aria-hidden="true"></i></a>
<a class="vk" href="${urlvk}" target="_blank"><i class="fa fa-vk fa-lg" aria-hidden="true"></i></a>
   
   </div> `});
  
});   
       
  }
  
export default {
  name: 'alert',
  initialize(container) {
      withPluginApi('0.1', attachComm);
             }
};
