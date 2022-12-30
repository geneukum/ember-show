import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShowComponent extends Component {
  @tracked
  shouldShow = true;

  @action
  toggleShow() {
    this.shouldShow = !this.shouldShow;
  }
}
