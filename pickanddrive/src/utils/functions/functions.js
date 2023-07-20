import Swal from 'sweetalert2';

// SWEET ALERT FUNCTIONS
export const swalQuestion = (title, text) => {
    return Swal.fire({// alerti firlatma 
        title: title,// parametreden gelen baslik ve text 
        text: text,
        icon: 'question',// swall'in kendi sundugu web sitesinden 
        showCancelButton: true,// iptal button'u 
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