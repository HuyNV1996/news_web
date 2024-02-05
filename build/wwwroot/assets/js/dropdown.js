function validatePhoneNumber(phoneNumber) {
    return phoneNumber !== "" && phoneNumber.length === 10 && !isNaN(phoneNumber) && phoneNumber.charAt(0) === '0';
}

const optionMenu = document.querySelector(
    ".select-menu"
),
    selectBtn = optionMenu.querySelector(
        ".select-btn"
    ),
    options =
        optionMenu.querySelectorAll(".option"),
    sBtn_text =
        optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")

);

options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(
            ".option-text"
        ).innerText;
        sBtn_text.innerText = selectedOption;

        // Ẩn các thông báo lỗi khi chọn một nội dung trong dropdown
        error_location.style.display = "none";
   
        optionMenu.classList.remove("active");

    });
});

document.addEventListener("click", (event) => {
    const targetElement = event.target;

    const isClickInside = optionMenu.contains(
        targetElement
    );

    if (!isClickInside) {
        optionMenu.classList.remove("active");
    }
});


function toggleDropdown() {
    var dropdownForm = document.getElementById(
        "dropdownForm"
    );
    dropdownForm.classList.toggle("active");

}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function confirmForm() {

    var customerName = document.getElementById('name').value.trim();
    var error_name4 = document.getElementById("error_name4");
    var customerPhone = document.getElementById("phone").value;
    var error_phone4 = document.getElementById("error_phone4");
    var error_customer = document.getElementById("error_customer");

    var nameBtn = document.getElementById(
        "name_btn")

    if (!customerName) {
        error_name4.style.display = "block";
    } else {
        error_name4.style.display = "none";
    }


    var phoneNumber = customerPhone.trim();
    if (!validatePhoneNumber(phoneNumber)) {
        error_phone4.style.display = "block";
    } else {
        error_phone4.style.display = "none";
    }

    if (error_name4.style.display == "none" && error_phone4.style.display == "none") {
        nameBtn.innerText = customerName + " - " + phoneNumber;
        error_customer.style.display = "none";
        clearForm();
    } 

   
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    toggleDropdown();
}
