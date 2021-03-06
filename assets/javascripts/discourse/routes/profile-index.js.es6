import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/profile");
  },

titleToken() {
    return "Профиль на сайте Tохu";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
