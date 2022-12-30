import Modifier, { PositionalArgs } from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

interface ShowModifierSignature {
  Args: {
    Positional: [shouldShow: boolean];
  };
  Element: HTMLElement;
}

export default class ShowModifier extends Modifier<ShowModifierSignature> {
  originalDisplay = '';

  get visibleDisplayType() {
    return this.originalDisplay === 'none' ? '' : this.originalDisplay;
  }

  modify(el: HTMLElement, [shouldShow]: PositionalArgs<ShowModifierSignature>) {
    if (!this.originalDisplay) {
      this.originalDisplay = el.style.display;
    }

    el.style.display = shouldShow ? this.visibleDisplayType : 'none';

    registerDestructor(this, () => {
      el.style.display = this.originalDisplay;
    });
  }
}
