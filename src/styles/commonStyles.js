import { StyleSheet } from 'react-native';

import colors from './colors';
import fontFamily from './fontFamily';
import {
    textScale,
    moderateScale,
    moderateScaleVertical,
} from './responsiveSize';

export const hitSlopProp = {
    top: moderateScale(12),
    right: moderateScale(12),
    left: moderateScale(12),
    bottom: moderateScale(12),
}

export default StyleSheet.create({
    flex_between: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },


    font_14_regular: {
        fontSize: textScale(14),
        fontFamily: fontFamily.robotoRegular,
        color: colors.blackColor,
    },
    font_14_medium: {
        fontSize: textScale(14),
        fontFamily: fontFamily.robotoMedium,
        color: colors.blackColor,
    },
    font_16_regular: {
        fontSize: textScale(16),
        fontFamily: fontFamily.robotoRegular,
        color: colors.blackColor,
    },
    font_16_medium: {
        fontSize: textScale(16),
        fontFamily: fontFamily.robotoMedium,
        color: colors.blackColor,
    },
    font_16_bold: {
        fontSize: textScale(16),
        fontFamily: fontFamily.robotoBold,
        color: colors.blackColor,
    },
    font_18_medium: {
        color: colors.blackColor,
        fontFamily: fontFamily.robotoMedium,
        fontSize: textScale(18)
    },
    font_24_bold: {
        color: colors.blackColor,
        fontFamily: fontFamily.robotoBold,
        fontSize: textScale(18)
    },
})