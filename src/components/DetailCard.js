import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import strings from '../constants/lang';

import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale } from '../styles/responsiveSize';
import CommonButton from './CommonButton';

const DetailCard = ({
    itemData,
    onPressEdit,
    onPressDelete
}) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.detailView}>
                <Text style={styles.labelText}>{strings.Name}</Text>
                <Text style={styles.valueText}>{itemData.name}</Text>
            </View>

            <View style={styles.detailView}>
                <Text style={styles.labelText}>{strings.Email}</Text>
                <Text style={styles.valueText}>{itemData.email}</Text>
            </View>

            <View style={styles.detailView}>
                <Text style={styles.labelText}>{strings.mobileNumber}</Text>
                <Text style={styles.valueText}>{itemData.mobileNumber}</Text>
            </View>

            <View style={styles.detailView}>
                <Text style={styles.labelText}>{strings.Department}</Text>
                <Text style={styles.valueText}>{itemData.departmentName}</Text>
            </View>

            <View style={styles.buttonView}>
                <CommonButton
                    buttonText={strings.Edit}
                    mainViewStyle={styles.editButtonStyle}
                    buttonTextStyle={styles.buttonText}
                    onPress={onPressEdit}
                />
                <CommonButton
                    buttonText={strings.delete}
                    mainViewStyle={styles.deleteButtonStyle}
                    buttonTextStyle={styles.buttonText}
                    onPress={onPressDelete}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.lightGreen,
        borderRadius: moderateScale(12),
        marginHorizontal: moderateScale(16),
        marginTop: moderateScale(16),
        padding: moderateScale(16),
    },
    detailView: {
        ...commonStyles.flex_between,
        marginTop: moderateScale(12)
    },
    labelText: {
        ...commonStyles.font_14_regular,
        width: "50%"
    },
    valueText: {
        ...commonStyles.font_14_medium,
        width: "50%"
    },
    buttonView: {
        ...commonStyles.flex_between,
        width: "60%",
        alignSelf: "flex-end",
        marginTop: moderateScale(24)
    },
    buttonText: {
        textTransform: "uppercase",
        fontFamily: fontFamily.robotoBold
    },
    editButtonStyle: {
        width: "46%"
    },
    deleteButtonStyle: {
        width: "46%",
        backgroundColor: colors.red
    },
})

export default DetailCard;
