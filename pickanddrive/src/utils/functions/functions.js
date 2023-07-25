import moment from 'moment';
import Swal from 'sweetalert2';

// FORM CHECK FUNCTIONS
export const validCheck = (field, obj) => {
    const myObject = {
        isValid: obj.touched[field] && !obj.errors[field],
        isInvalid: obj.touched[field] && obj.errors[field]
    }
    return myObject;
};

// SWEET ALERT FUNCTIONS
export const swalQuestion = (title, text) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'question',
        showCancelButton: true,
    });
};

export const swalToast = (title, icon = "info", timer = 4000) => {
    // icon: 'success', 'error', 'warning', 'info', 'question'
    Swal.fire({
        title: title,
        icon: icon,
        timer: timer,
        showConfirmButton: true,
    })
};

// COMBINE DATE AND TIME FUNCTIONS
export const combineDateAndTime = (date, time) => {
    return moment(`${date} ${time}`).format("MM/DD/YYYY HH:mm:ss");
}

export const getCurrentDate = () => {
    return moment().format("YYYY-MM-DD");
}

export const checkDates = (dates) => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = dates;

    const pickUpDateTime = moment(`${pickUpDate} ${pickUpTime}`);
    const dropOffDateTime = moment(`${dropOffDate} ${dropOffTime}`);

    return dropOffDateTime > pickUpDateTime.add(1, "h");
}

export const checkExpireDate = (date) => {
    if (!date) return false;
    if (date.includes("_")) return false;

    const expireDate = moment(date, "MM/YY").add(1, "month").add(-1, "day");

    if (!expireDate.isValid()) return false;
    if (expireDate < moment()) return false;

    return true;
}

export const formatDateTime = (dateTime) => {
    return moment(dateTime).format("lll");
}

export const getDate = (dateTime) => {
    return moment(dateTime).format("YYYY-MM-DD")
}

export const getTime = (dateTime) => {
    return moment(dateTime).format("HH:mm")
} 