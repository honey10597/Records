import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import fontFamily from "../../styles/fontFamily";
import { moderateScale } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
    SearchView: {
        marginHorizontal: moderateScale(16),
        backgroundColor: colors.whiteColor
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
    clearRecButtonStyle: {
        width: "48%",
        borderRadius: moderateScale(12),
        backgroundColor: colors.red,
        paddingVertical: moderateScale(14)
    },
    saveRecButtonStyle: {
        width: "48%",
        borderRadius: moderateScale(12),
        paddingVertical: moderateScale(14)
    },
    emptyListStyle: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: moderateScale(120)
    },
    twoBtnView: {
        flex: 0.12,
        ...commonStyles.flex_between,
        marginHorizontal: moderateScale(16)
    }
})

export default styles;