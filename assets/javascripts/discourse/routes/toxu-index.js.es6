import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/toxu");
  },

titleToken() {
    return "Почему сайт называется Tоха";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
