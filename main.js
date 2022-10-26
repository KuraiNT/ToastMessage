function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        //auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000)

        //remove toast when click close
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-circle-check',
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);// làm tròn 2 chữ số

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;


        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast( {
        title: 'Success',
        message: 'Khi LCK Mùa Hè 2022 bắt đầu, gần như cộng đồng Liên Minh Huyền Thoại',
        type: 'success',
        duration: 5000
    });
}

function showErrorToast() {
    toast( {
        title: 'Error',
        message: 'Khi LCK Mùa Hè 2022 bắt đầu, gần như cộng đồng Liên Minh Huyền Thoại',
        type: 'error',
        duration: 5000
    });
}