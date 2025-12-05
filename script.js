document.getElementById("phone").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("country").addEventListener("change", validatePhone);
document.getElementById("phone").addEventListener("input", validatePhone);

function validatePhone() {
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone");
    const number = phone.value;

    let min = 0, max = 0;

    if (country === "ind") { 
        min = max = 10;
    } else if (country === "usa") { 
        min = max = 10;
    } else if (country === "kor") { 
        min = 10;  
        max = 11;
    } else if (country === "chin"){
        min=max=10;
    } else { 
        min = 6;
        max = 15;
    }

    phone.setAttribute("minlength", min);
    phone.setAttribute("maxlength", max);
}

const menuToggleIcon = document.getElementById('menu-toggle-icon');
const iconSubmenu = document.getElementById('icon-submenu');

function toggleIconMenu() {
    iconSubmenu.classList.toggle('open');
    if (iconSubmenu.classList.contains('open')) {
        menuToggleIcon.classList.remove('fa-bars');
        menuToggleIcon.classList.add('fa-xmark'); 
    } else {
        menuToggleIcon.classList.remove('fa-xmark');
        menuToggleIcon.classList.add('fa-bars');
    }
}

menuToggleIcon.addEventListener('click', toggleIconMenu);