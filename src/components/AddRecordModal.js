import React, { useEffect, useRef, useState } from 'react';
import {
    Keyboard,
    ScrollView,
    View,
    StyleSheet
} from 'react-native';
import ReactNativeModal from 'react-native-modal';

import strings from '../constants/lang';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';
import { checkAddRecordsValidations } from '../utils/validations';
import CommonButton from './CommonButton';
import CommonTextInput from './CommonTextInput';

const AddRecordModal = ({
    isVisible,
    editData,
    isEditRecord,
    getData,
    closeModal,
}) => {

    const nameRef = useRef("")
    const emailRef = useRef("")
    const departmentNameRef = useRef("")
    const mobileNumberRef = useRef("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [departmentName, setDepartmentName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    useEffect(() => {
        if (isEditRecord == true) {
            _setData()
        }
    }, [isEditRecord])

    const _setData = () => {
        setName(editData?.name)
        setEmail(editData?.email)
        setDepartmentName(editData?.departmentName)
        setMobileNumber(editData?.mobileNumber)
    }

    const _checkValidations = () => {
        const isValidData = checkAddRecordsValidations(name, email, departmentName, mobileNumber)
        if (!isValidData) return;

        let _holdData = {
            _id: isEditRecord == true ? editData?._id : Math.random() + new Date(),
            name: name,
            email: email,
            departmentName: departmentName,
            mobileNumber: mobileNumber,
        }
        getData(_holdData)
        _resetState()
    }

    const _resetState = () => {
        setName("")
        setEmail("")
        setDepartmentName("")
        setMobileNumber("")
    }

    const _closeModal = () => {
        _resetState()
        closeModal()
    }

    return (
        <ReactNativeModal
            isVisible={isVisible}
            avoidKeyboard
            onBackButtonPress={_closeModal}
            onBackdropPress={_closeModal}
        >
            <View style={styles.mainView}>
                <ScrollView
                    keyboardShouldPersistTaps={"always"}
                    showsVerticalScrollIndicator={false}
                >
                    <CommonTextInput
                        ref={nameRef}
                        label={strings.Name}
                        placeholder={strings.pleaseEnterName}
                        value={name}
                        onChangeText={(val) => setName(val)}
                        returnKeyType={"next"}
                        onSubmitEditing={() => emailRef.current.focus()}
                    />

                    <CommonTextInput
                        ref={emailRef}
                        label={strings.Email}
                        placeholder={strings.pleaseEnterEmail}
                        keyboardType={"email-address"}
                        maxLength={60}
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                        returnKeyType={"next"}
                        onSubmitEditing={() => departmentNameRef.current.focus()}
                    />

                    <CommonTextInput
                        ref={departmentNameRef}
                        label={strings.Department}
                        placeholder={strings.pleaseEnterDepartmentName}
                        maxLength={60}
                        value={departmentName}
                        onChangeText={(val) => setDepartmentName(val)}
                        returnKeyType={"next"}
                        onSubmitEditing={() => mobileNumberRef.current.focus()}
                    />

                    <CommonTextInput
                        ref={mobileNumberRef}
                        label={strings.mobileNumber}
                        placeholder={strings.pleaseEnterMobileNumber}
                        keyboardType={"numeric"}
                        returnKeyType={"done"}
                        maxLength={12}
                        value={mobileNumber}
                        onChangeText={(event) => {
                            let num = event.replace(".", "");
                            if (!isNaN(num)) {
                                setMobileNumber(num)
                            }
                        }}
                        onSubmitEditing={() => Keyboard.dismiss()}
                    />
                </ScrollView>
                <CommonButton
                    mainViewStyle={styles.buttonView}
                    buttonText={isEditRecord ? strings.Update : strings.Submit}
                    onPress={_checkValidations}
                />
            </View>
        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 0.66,
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(16),
        padding: moderateScale(16)
    },
    buttonView: {
        marginTop: moderateScale(48),
        paddingVertical: moderateScale(14)
    }
})

export default AddRecordModal;
