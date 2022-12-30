# ember-show

[Ember modifier](https://github.com/ember-modifier/ember-modifier) to toggle showing/hiding an element.

The difference between this and conditionally rendering content via the `if`/`unless` helpers is that
an element marked with the `show` modifier will always be rendered and remain in the DOM; the `show`
modifier only toggles the display property of the element.

## Compatibility

- Ember.js v3.28 or above
- Ember CLI v3.28 or above
- Node.js v14 or above

## Installation

```
ember install ember-show
```

## Usage

You can use this modifier like you would with any other EmberJS modifier.

```
<div {{show this.shouldShowDiv}}>Hello World!</div>
```

See the [API Docs](https://ember-show.netlify.app) for additional information / demos.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
