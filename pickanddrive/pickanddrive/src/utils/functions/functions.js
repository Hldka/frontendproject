import Swal from 'sweetalert2';

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