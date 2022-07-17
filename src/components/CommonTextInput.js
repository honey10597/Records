import React, { useState, forwardRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';


import { moderateScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const CustomInputWithBorder = ({
    label,
    secureTextEntry,
    onChangeText,
    onFocus,
    value,
    keyboardType,
    inputStyle,
    placeholder,
    onBlur,
    onSubmitEditing,
    returnKeyType,
    editable,
    maxLength,
    multiline,
}, ref) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={ref}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                onFocus={onFocus}
                keyboardType={keyboardType}
                style={{ ...styles.input, ...inputStyle }}
                placeholder={placeholder}
                placeholderTextColor={colors.textColor}
                onBlur={onBlur}
                autoCapitalize={"none"}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                editable={editable}
                maxLength={maxLength}
                multiline={multiline}
                textAlign={"left"}
            />
        </View>
    )
}

export default CommonTextInput = forwardRef(CustomInputWithBorder)

const styles = StyleSheet.create({
    mainView: {
        marginTop: moderateScale(12)
    },
    label: {
        ...commonStyles.font_16_regular,
        color: colors.textColor,
        marginVertical: moderateScale(8)
    },
    input: {
        width: "100%",
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: colors.textColor,
        borderRadius: moderateScale(32),
        padding: moderateScale(12),
        ...commonStyles.font_14_regular
    },
});