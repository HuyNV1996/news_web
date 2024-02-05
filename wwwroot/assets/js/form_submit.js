function validatePhoneNumber(phoneNumber) {
    return phoneNumber !== "" && phoneNumber.length === 10 && !isNaN(phoneNumber) && phoneNumber.charAt(0) === '0';

}

function submitForm() {
    event.preventDefault();

    var loading = document.getElementById("loading");
    var overlay = document.getElementById("overlay");
    var hoTenValue = document.getElementById("hoTen").value;
    var soDienThoaiValue = document.getElementById("soDienThoai").value;
    var emailValue = document.getElementById("email").value;
    var dongYValue = document.getElementById("dongY").checked;
    var ageRadioButtons = document.getElementsByName("age");
    var ageSelected = false;
    for (var i = 0; i < ageRadioButtons.length; i++) {
        if (ageRadioButtons[i].checked) {
            ageSelected = true;
            break;
        }
    }
    var error1 = document.getElementById("error1");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var errorEmail2 = document.getElementById("errorEmail2");



    //Kiểm tra họ và tên
    if (hoTenValue.trim() === "") {
        error4.style.display = "block";
        document.getElementById("hoTen").classList.add("error-input");
        addErrorMessage("hoTen", "Vui lòng nhập TÊN để nhận tư vấn");
    } else {
        error4.style.display = "none";
        document.getElementById("hoTen").classList.remove("error-input");
        removeErrorMessage("hoTen");
    }



    // Kiểm tra số điện thoại
    var phoneNumber = soDienThoaiValue.trim();
    if (!validatePhoneNumber(phoneNumber)) {
        error5.style.display = "block";
        document.getElementById("soDienThoai").classList.add("error-input");
        addErrorMessage("soDienThoai", "Vui lòng nhập SĐT hợp lệ");
    } else {
        error5.style.display = "none";
        document.getElementById("soDienThoai").classList.remove("error-input");
        removeErrorMessage("soDienThoai");
    }

    // Kiểm tra email
    if (emailValue.trim() == "" && !/^\S+@\S+\.\S+$/.test(emailValue)) {
        errorEmail2.style.display = "block";
        document.getElementById("email").classList.add("error-input");
        addErrorMessage("email", "Vui lòng nhập EMAIL hợp lệ");

    } else {
        errorEmail2.style.display = "none";
        document.getElementById("email").classList.remove("error-input");
        removeErrorMessage("email");

    }

    // Kiểm tra checkbox "Đồng ý"
    if (!dongYValue) {
        error6.style.display = "block";
        document.getElementById("dongY").classList.add("error-input");
        addErrorMessage("dongY", "Vui lòng đồng ý nhận thông tin từ TTKD Apec group");
    } else {
        error6.style.display = "none";
        document.getElementById("dongY").classList.remove("error-input");
        removeErrorMessage("dongY");
    }



    if (
        hoTenValue === "" ||
        soDienThoaiValue === "" ||
        emailValue === "" ||
        dongYValue === false ||

        !validatePhoneNumber(soDienThoaiValue)
    ) {

    } else {
        loading.style.display = "inline-block";
        overlay.style.display = "block";
        var formData = [{
            name: hoTenValue,
            phone: soDienThoaiValue,
            email_from: emailValue,          
            type: "opportunity",
            source_name: 'kinhdoanh.apecgroup.net',
            extra_data: {
                dongY: dongYValue
            }
        }];



       


        $.ajax({
            url: "https://crm.apecgroup.net/crm/create_lead/",
            method: "POST",
            contentType: "application/json",
            Origin: "http://kinhdoanh.idjf.net/",
            data: JSON.stringify({
                data: formData,
            }),
            success: function (res) {

                loading.style.display = "none";
                overlay.style.display = "none";
                if (res.result?.is_success) {
                    swal("Thành công", "Thông tin của quý khách đã được gửi tới hệ thống thành công, quý khách sẽ nhận được liên hệ từ bộ phận tư vấn trong vòng 24 giờ tới...", "success");
                } else {
                    swal("Lỗi", "Hệ thống đang trong quá trình bảo trì, vui lòng quay lại sau...", "error");
                }
            },
            error: function (xhr, status, error) {

                loading.style.display = "none";
                overlay.style.display = "none";
                swal("Lỗi", "Hệ thống đang trong quá trình phát triển, vui lòng quay lại sau...", "error");
            },
        });
    }
}

// Hàm thêm thông báo lỗi bên dưới input
function addErrorMessage(errorId, message) {
    var errorElement = document.getElementById(errorId);

    if (!errorElement) {
        errorElement = document.createElement("p");
        errorElement.id = errorId;
        errorElement.className = "error-message color-red text-error mt-2";
        errorElement.innerText = message;
    }
}

// Hàm xóa thông báo lỗi nếu có
function removeErrorMessage(inputId) {
    var errorMessageId = inputId + "-error-message";
    var errorMessage = document.getElementById(errorMessageId);

    if (errorMessage) {
        errorMessage.remove();
    }
}

document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();

        if (error4.style.display === "none" && error5.style.display === "none" && errorEmail2.style.display == "none" && error6.style.display == "none") {
            //submitFormNews();
            document.getElementById("myForm").reset();

        }
    });