import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/help");
  },

    titleToken() {
    return "Помощь по сайту";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
