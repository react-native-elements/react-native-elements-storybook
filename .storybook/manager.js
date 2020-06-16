import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
});

import loadFont from 'services/loadFont'
import path from 'path'

// path.resolve(__dirname, p)

import CabinRegular from 'assets/Fonts/Cabin/Cabin-Bold.ttf'
import CabinRegular2 from 'assets/Fonts/Cabin/Cabin-BoldItalic.ttf'
import CabinRegular3 from 'assets/Fonts/Cabin/Cabin-Italic.ttf'
import CabinRegular4 from 'assets/Fonts/Cabin/Cabin-Medium.ttf'
import CabinRegular5 from 'assets/Fonts/Cabin/Cabin-MediumItalic.ttf'
import CabinRegular6 from 'assets/Fonts/Cabin/Cabin-Regular.ttf'
import CabinRegular7 from 'assets/Fonts/Cabin/Cabin-SemiBold.ttf'
import CabinRegular8 from 'assets/Fonts/Cabin/Cabin-SemiBoldItalic.ttf'


loadFont(CabinRegular, "Cabin-Bold")
loadFont(CabinRegular2, "Cabin-BoldItalic")
loadFont(CabinRegular3, "Cabin-Italic")
loadFont(CabinRegular4, "Cabin-Medium")
loadFont(CabinRegular5, "Cabin-MediumItalic")
loadFont(CabinRegular6, "Cabin-Regular")
loadFont(CabinRegular7, "Cabin-SemiBold")
loadFont(CabinRegular8, "Cabin-SemiBoldItalic")