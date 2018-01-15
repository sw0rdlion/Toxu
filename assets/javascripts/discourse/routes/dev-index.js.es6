import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/dev");
  },

      titleToken() {
    return "Для разработчиков";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
