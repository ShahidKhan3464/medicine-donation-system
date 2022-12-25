import Swal from 'sweetalert2';
import { PrimaryColor } from '../../globalStyle';

const sweetalert = (icon = null, title = null, message = 'Error occured') => {
    return (
        Swal.fire({
            icon: icon,
            title: title,
            text: message,
            allowOutsideClick: false,
            confirmButtonColor: PrimaryColor,
        })
    )
};

export default sweetalert;