import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html'; 
 
function attachComm(api) {
 api.addPostClassesCallback((attrs) => {
 return attrs.reply_to_post_number ? ["comment"] : ["answer"];
});
       
}
  
export default {
  name: 'alert',
  initialize(container) {
      withPluginApi('0.1', attachComm);
             }
};
