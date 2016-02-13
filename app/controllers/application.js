import Ember from 'ember';

export default Ember.Controller.extend({
  filteredData: Ember.computed('model', 'appliedFilter', function() {
    let model = this.get('model');

    if (this.get('appliedFilter')) {
      return model.filter((item) => {
        return item.id % 2 === 0;
      });
    } else {
      return model;
    }
  }),

  actions: {
    applyFilter(filter) {
      if (!filter) { filter = null; }
      this.toggleProperty('appliedFilter', filter)
    }
  }

})
