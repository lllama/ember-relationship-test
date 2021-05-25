import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr name;
  @hasMany('skill') skills;
}
