import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import type { TestContext } from '@ember/test-helpers';

interface ShowTestContext extends TestContext {
  shouldShow: boolean;
}

interface CustomDisplayShowTestContext extends ShowTestContext {
  customDisplay: string;
}

module('Integration | Modifier | show', function (hooks) {
  setupRenderingTest(hooks);

  test('it displays the div when shouldShow is truthy', async function (assert) {
    await render(hbs`<div data-test-show {{show true}} />`);

    assert.dom('[data-test-show]').hasStyle({
      display: 'block',
    });
  });

  test('it does not display the div when shouldShow is falsy', async function (assert) {
    await render(hbs`<div data-test-show {{show false}} />`);

    assert.dom('[data-test-show]').hasStyle({
      display: 'none',
    });
  });

  test('it updates the display state when shouldShow is changed', async function (this: ShowTestContext, assert) {
    this.set('shouldShow', false);

    await render<ShowTestContext>(
      hbs`<div data-test-show {{show this.shouldShow}} />`
    );

    assert.dom('[data-test-show]').hasStyle({
      display: 'none',
    });

    this.set('shouldShow', true);
    await settled();

    assert.dom('[data-test-show]').hasStyle({
      display: 'block',
    });

    this.set('shouldShow', false);
    await settled();

    assert.dom('[data-test-show]').hasStyle({
      display: 'none',
    });
  });

  test('it respects custom display value in style attribute', async function (this: CustomDisplayShowTestContext, assert) {
    this.setProperties({
      customDisplay: 'display: inline-block;',
      shouldShow: true,
    });

    await render<CustomDisplayShowTestContext>(
      hbs`<div data-test-show {{show this.shouldShow}} style={{this.customDisplay}}/>`
    );

    assert.dom('[data-test-show]').hasStyle({
      display: 'inline-block',
    });

    this.set('shouldShow', false);
    await settled();

    assert.dom('[data-test-show]').hasStyle({
      display: 'none',
    });

    this.set('shouldShow', true);
    await settled();

    assert.dom('[data-test-show]').hasStyle({
      display: 'inline-block',
    });
  });

  test('it overrides hidden elements display type when shouldShow is truthy', async function (this: CustomDisplayShowTestContext, assert) {
    this.setProperties({
      customDisplay: 'display: none;',
      shouldShow: false,
    });

    await render<CustomDisplayShowTestContext>(
      hbs`<div data-test-show {{show this.shouldShow}} style={{this.customDisplay}}/>`
    );

    assert.dom('[data-test-show]').hasStyle({
      display: 'none',
    });

    this.set('shouldShow', true);
    await settled();

    assert.dom('[data-test-show]').hasStyle({
      display: 'block',
    });
  });
});
