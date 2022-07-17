import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import AddRecordModal from '../../components/AddRecordModal';

import CommonButton from '../../components/CommonButton';
import DetailCard from '../../components/DetailCard';
import RecordScreenHeader from '../../components/RecordScreenHeader';
import WrapperContainer from "../../components/WrapperContainer"
import { clearRecordData, saveRecordData } from '../../redux/actions/recordActions';
import actionTypes from '../../redux/actionTypes';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale } from '../../styles/responsiveSize';
import { getItem } from '../../utils/utils';
import { ApplyEaseOutAnimation, InitAnimation, showError, showSuccess } from "../../utils/helperFunctions"
import strings from '../../constants/lang';
import CommonTextInput from '../../components/CommonTextInput';
import styles from './styles';

InitAnimation()

const RecordScreen = (props) => {

    const [showAddRecordModal, setShowAddRecordModal] = useState(false)
    const [allRecords, setAllRecords] = useState([])
    const [handleDataForSearch, setHandleDataForSearch] = useState([])
    const [holdDataForEdit, setHoldDataForEdit] = useState("")

    useEffect(() => {
        _getDataFromAsyncStorage()
    }, [])

    useEffect(() => {
        if (holdDataForEdit != "") {
            setShowAddRecordModal(true)
        }
    }, [holdDataForEdit])

    const _getDataFromAsyncStorage = () => {
        getItem(actionTypes.SAVE_RECORD).then((res) => {
            if (res) {
                ApplyEaseOutAnimation()
                setAllRecords(res)
                setHandleDataForSearch(res)
            }
        })
    }

    const _handleRecord = (data) => {
        if (holdDataForEdit != "") {
            _updateRecord(data)
        } else {
            _saveRecord(data)
        }
    }

    const _updateRecord = (data) => {
        setShowAddRecordModal(false)
        const _currentAllRecords = allRecords.map((item) => {
            if (item._id == data._id) {
                item = data
            }
            return item;
        })
        setHoldDataForEdit("")
        setAllRecords(_currentAllRecords)
        setHandleDataForSearch(_currentAllRecords)
    }

    const _saveRecord = (data) => {
        setShowAddRecordModal(false)
        const _currentAllRecords = allRecords.map((item) => {
            return item;
        })
        _currentAllRecords.push(data)
        setAllRecords(_currentAllRecords)
        setHandleDataForSearch(_currentAllRecords)
        ApplyEaseOutAnimation()
    }

    const _deleteRecord = (selectedItem) => {
        const _currentAllRecords = allRecords.filter((item) => item._id != selectedItem._id)
        setAllRecords(_currentAllRecords)
        setHandleDataForSearch(_currentAllRecords)
        ApplyEaseOutAnimation()
    }

    const _editRecord = (selectedItem) => {
        setHoldDataForEdit(selectedItem)
    }

    const _saveRecordToStore = () => {
        if (!allRecords?.length) {
            return showError(strings.noDataAvailable)
        }
        saveRecordData(allRecords)
        showSuccess(strings.recordSavedSuccessfully)
    }

    const _clearRecordFromStore = () => {
        if (!allRecords?.length) {
            return showError(strings.noDataAvailable)
        }
        clearRecordData()
        setAllRecords([])
        setHandleDataForSearch([])
        showSuccess(strings.recordCleared)
        ApplyEaseOutAnimation()
    }

    const _renderRecords = ({ item, index }) => {
        return (
            <DetailCard
                itemData={item}
                onPressDelete={() => _deleteRecord(item)}
                onPressEdit={() => _editRecord(item)}
            />
        )
    }

    const _renderEmptyList = () => {
        return (
            <View style={styles.emptyListStyle}>
                <Text style={commonStyles.font_16_medium}>{strings.noDataAvailable}</Text>
            </View>
        )
    }

    const _searchFilterFunction = (text) => {
        const _getDataForSearch = handleDataForSearch
        if (text) {
            const newData = _getDataForSearch.filter((item) => {
                const textData = text.toUpperCase();

                const nameData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const emailData = item.email ? item.email.toUpperCase() : ''.toUpperCase();

                return nameData.indexOf(textData) > -1 || emailData.indexOf(textData) > -1;
            });
            setAllRecords(newData);
        } else {
            setAllRecords(handleDataForSearch);
        }
    };

    const _openAddModal = () => {
        setHoldDataForEdit("")
        setShowAddRecordModal(true)
    }

    return (
        <WrapperContainer paddingAvailable={false}>
            <RecordScreenHeader
                onPressAdd={_openAddModal}
            />

            <View style={{ flex: 0.88 }}>
                <FlatList
                    data={allRecords}
                    extraData={allRecords}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={
                        <View style={styles.SearchView}>
                            <CommonTextInput
                                label={strings.Search}
                                placeholder={strings.enterNameOrEmail}
                                onChangeText={(val) => _searchFilterFunction(val)}
                            />
                        </View>
                    }
                    contentContainerStyle={{ paddingBottom: moderateScale(80) }}
                    renderItem={_renderRecords}
                    ListEmptyComponent={_renderEmptyList}
                />
            </View>

            <View style={styles.twoBtnView}>
                <CommonButton
                    buttonText={strings.clearRecord}
                    buttonTextStyle={styles.buttonText}
                    mainViewStyle={styles.clearRecButtonStyle}
                    onPress={_clearRecordFromStore}
                />
                <CommonButton
                    buttonText={strings.saveRecord}
                    buttonTextStyle={styles.buttonText}
                    mainViewStyle={styles.saveRecButtonStyle}
                    onPress={_saveRecordToStore}
                />
            </View>

            <AddRecordModal
                isVisible={showAddRecordModal}
                editData={holdDataForEdit}
                isEditRecord={holdDataForEdit != "" ? true : false}
                closeModal={() => {
                    setHoldDataForEdit("")
                    setShowAddRecordModal(false)
                }}
                getData={_handleRecord}
            />
        </WrapperContainer>
    )
}

export default RecordScreen;
