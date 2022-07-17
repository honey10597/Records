import React, { useState } from "react";

export const isValidEmail = (email) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (emailRegex.test(email) == false) {
        return false;
    } else {
        return true;
    }
};

export const checkIsEmpty = (inputValue) => {
    if (inputValue == undefined) {
        return true
    } else if (inputValue == null) {
        return true
    } else if (inputValue.trim() == "") {
        return true
    } else {
        return false
    }
}

export const checkLength = (value, expectedLength = 8) => {
    if (!checkIsEmpty(value)) {
        if (value.length >= expectedLength) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const checkAddRecordsValidations = (
    name,
    email,
    departmentName,
    mobileNumber
) => {
    if (checkIsEmpty(name)) {
        alert("Please enter name.");
        return false;
    } else if (checkLength(name, 3) == false) {
        alert("Please enter valid name.");
        return false;
    } else if (checkIsEmpty(email)) {
        alert("Please enter your email.");
        return false;
    } else if (isValidEmail(email) == false) {
        alert("Please enter correct email.");
        return false;
    } else if (checkIsEmpty(departmentName)) {
        alert("Please enter Department name.");
        return false;
    } else if (checkLength(departmentName, 4) == false) {
        alert("Please enter valid Department name.");
        return false;
    } else if (checkIsEmpty(mobileNumber)) {
        alert("Please enter Mobile number.");
        return false;
    } else if (checkLength(mobileNumber, 9) == false) {
        alert("Please enter valid Mobile number.");
        return false;
    } else {
        return true
    }
}