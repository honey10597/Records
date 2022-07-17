import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';

const CommonButton = ({
    mainViewStyle,
    buttonText,
    onPress,
    buttonTextStyle
}) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.mainViewStyle,
                ...mainViewStyle
            }}
            hitSlop={hitSlopProp}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Text style={{
                ...styles.btnTextStyle,
                ...buttonTextStyle
            }}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainViewStyle: {
        backgroundColor: colors.green,
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(24),
    },
    btnTextStyle: {
        ...commonStyles.font_16_medium,
        color: colors.whiteColor,
        textAlign: "center",
    }
})

export default CommonButton;
