import React from "react";
import {
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from "react-native";

import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';

export default WrapperContainer = ({
    children,
    isSafeAreaAvailable = true,
    paddingAvailable = true,
    mainViewStyle,
}) => {

    return (
        <View style={{
            ...styles.container,
            paddingHorizontal: paddingAvailable ? moderateScale(20) : 0,
            ...mainViewStyle
        }}>
            <View style={[StatusBar.currentHeight, { backgroundColor: colors.green }]}>
                <SafeAreaView>
                    <StatusBar
                        translucent
                        backgroundColor={colors.green}
                        barStyle={"light-content"}
                    />
                </SafeAreaView>
            </View>
            {isSafeAreaAvailable ? <SafeAreaView /> : <></>}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
});
