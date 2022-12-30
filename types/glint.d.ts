import '@glint/environment-ember-loose';
import type ShowModifier from 'ember-show/modifiers/show';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    show: typeof ShowModifier;
  }
}
