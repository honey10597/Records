import {
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import { showMessage } from 'react-native-flash-message';

import strings from "../constants/lang"
import { moderateScale } from '../styles/responsiveSize';
import commonStyles from "../styles/commonStyles"
import colors from '../styles/colors';

export const showError = (message) => {
    showMessage({
        message: strings.error,
        description: String(message),
        icon: "danger",
        type: "danger",
        floating: true,
        duration: 4000,
        style: { marginTop: moderateScale(32) },
        textStyle: {
            ...commonStyles.font_14_medium,
            color: colors.whiteColor
        },
        titleStyle: {
            ...commonStyles.font_14_medium,
            color: colors.whiteColor
        },
    })
}

export const showSuccess = (message) => {
    showMessage({
        message: strings.SUCCESS,
        description: String(message),
        type: 'success',
        icon: "success",
        floating: true,
        duration: 4000,
        style: { marginTop: moderateScale(32) },
        textStyle: {
            ...commonStyles.font_14_medium,
            color: colors.whiteColor
        },
        titleStyle: {
            ...commonStyles.font_14_medium,
            color: colors.whiteColor
        },
    })
}

export function InitAnimation() {
    if (
        UIManager.setLayoutAnimationEnabledExperimental
    ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export function ApplyEaseOutAnimation() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}