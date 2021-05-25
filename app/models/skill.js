import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class SkillModel extends Model {
  @attr name;
  @belongsTo('category') category;
}
