import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';

const RecordScreenHeader = ({
    onPressAdd,
}) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={styles.touchableView}
                onPress={onPressAdd}
                activeOpacity={0.9}
                hitSlop={hitSlopProp}
            >
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.green,
        flex: 0.14,
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30),
        justifyContent: "flex-end",
    },
    touchableView: {
        borderRadius: moderateScale(20),
        borderWidth: 1,
        borderColor: colors.whiteColor,
        height: moderateScale(40),
        width: moderateScale(40),
        justifyContent: "center",
        alignItems: "center",
        margin: moderateScale(24),
        alignSelf: "flex-end"
    },
    plusText: {
        ...commonStyles.font_24_bold,
        color: colors.whiteColor,
    }
})

export default RecordScreenHeader;
