import { ajax } from 'discourse/lib/ajax';
export default Discourse.Route.extend({
  model(opts) {
  	return ajax("/chess");
  },

  titleToken() {
    return "Шахматы на сайте";
},
  
  setupController(controller, model) {
    controller.setProperties({ model });
  }
});
