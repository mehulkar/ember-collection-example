import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var items = [];
    for (var i = 0; i < 10000; i++) {
      items.push({name: "Item " + i, id: i});
    }
    return items;
  }
})
