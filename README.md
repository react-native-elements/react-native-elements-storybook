<p align="center">
  <a href="http://rne-storybook.surge.sh/">
    <img alt="react-native-elements-storybook" src="https://user-images.githubusercontent.com/17120764/56100603-19199580-5f45-11e9-96a6-dd80f61b4932.png" width="450">
  </a>
</p>

<p align="center">
  A <a href="https://storybook.js.org/">Storybook</a> for <a href="https://react-native-training.github.io/react-native-elements/">React Native Elements</a> UI Library
</p>

<img src='https://user-images.githubusercontent.com/17120764/55798647-af8b2880-5af9-11e9-81d9-98d21fbe5250.png' />

## Get Started

### Development

1. Install package dependencies

```
➜  react-native-elements-storybook git:(master) ✗ yarn
```

2. Start Storybook

```
➜  react-native-elements-storybook git:(master) ✗ yarn storybook
```

It will start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) at port 6006 and opens the browser automagically.

```          
╭────────────────────────────────────────────────────╮
│                                                    │
│   Storybook 5.0.6 started                          │
│   20 s for manager and 22 s for preview            │
│                                                    │
│   Local:            http://localhost:6006/         │
│                                                    │
╰────────────────────────────────────────────────────╯
```

### Deployment

1. Export storybook as a static web app and place it inside the `.out` directory

```
✗ yarn build-storybook
```

2. Now you can deploy the content in the `.out` directory wherever you want.

To test it locally, using [serve](https://www.npmjs.com/package/serve) for example:

```
✗ npx serve .out
```

### Start Storybook in iOS Simulator

```
✗ yarn ios
```

<img src='https://user-images.githubusercontent.com/17120764/56459287-a2085500-63bb-11e9-94d3-e650b2151a63.png' width=300 />

## Components included:

- [x] [Avatar](http://rne-storybook.surge.sh/?path=/story/avatar-icons--default-size)
- [x] [Badge](http://rne-storybook.surge.sh/?path=/story/badge-badge--standard-badge)
- [x] [Button](http://rne-storybook.surge.sh/?path=/story/button-button--with-title)
- [x] [ButtonGroup](http://rne-storybook.surge.sh/?path=/story/button-buttongroup--using-strings)
- [x] [Card](http://rne-storybook.surge.sh/?path=/story/card-card--implemented-with-header)
- [x] [CheckBox](http://rne-storybook.surge.sh/?path=/story/checkbox-checkbox--default)
- [x] [Divider](http://rne-storybook.surge.sh/?path=/story/divider-divider--usage)
- [x] [Header](http://rne-storybook.surge.sh/?path=/story/header-header--with-default-components)
- [x] [Icon](http://rne-storybook.surge.sh/?path=/story/icon-icon--basic-usage)
- [x] [Image](http://rne-storybook.surge.sh/?path=/story/image-image--standard-image)
- [x] [Input](http://rne-storybook.surge.sh/?path=/story/input-input--basic-input)
- [x] [ListItem](http://rne-storybook.surge.sh/?path=/story/listitem-using-rn-flatlist--implemented-with-link-and-avatar)
- [ ] Overlay
- [x] [Pricing](http://rne-storybook.surge.sh/?path=/story/pricing-pricingcard--basic-usage)
- [ ] Rating
- [ ] SearchBar
- [ ] Slider
- [x] [SocialIcon](http://rne-storybook.surge.sh/?path=/story/socialicon-button--facebook-type)
- [x] [Text](http://rne-storybook.surge.sh/?path=/story/text-text--heading-usage)
- [x] [Tile](http://rne-storybook.surge.sh/?path=/story/tile-tile--featured-tile)
- [ ] Tooltip

## Contributing

Interested in contributing to this repo? Submit a PR for a new feature/bug fix.

### First Contributors

We encourage everyone to contribute & submit PR's especially first-time
contributors. Look for the label `Good First Issue` on the issues. Click
[here](https://github.com/haruelrovix/react-native-elements-storybook/labels/Good%20First%20Issue)
to see them.

If there is something you's like to see or request a new feature, please submit
an
[issue](https://github.com/haruelrovix/react-native-elements-storybook/issues/new)
or a
[pull request](https://github.com/haruelrovix/react-native-elements-storybook/pulls).
