import type ShowModifier from 'ember-show/modifiers/show';

export default interface Registry {
  show: typeof ShowModifier;
}
