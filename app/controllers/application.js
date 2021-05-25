import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @tracked categories;
  @service store;

  @action getCategories() {
    this.categories = this.store.findAll('category');
  }
  @action async getSkills(category) {
    let skills = await category.skills;
    console.log(skills);
    // let newSkill = this.store.createRecord('skill', { name: 'new skill name' });
    // category.skills.pushObject(newSkill);
    // this.categories = this.store.findAll('skill');
  }
}
