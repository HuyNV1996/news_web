function validatePhoneNumber(phoneNumber) {
    return phoneNumber !== "" && phoneNumber.length === 10 && !isNaN(phoneNumber) && phoneNumber.charAt(0) === '0';
}

function submitFormContact() {
    event.preventDefault();
    var currentDate = new Date();

    var loading = document.getElementById("loading");
    var overlay = document.getElementById("overlay");
   

    var hoTenValue = document.getElementById("hoTen").value;
    var soDienThoaiValue = document.getElementById("soDienThoai").value;
    var emailValue = document.getElementById("email").value;
    let ToMail = $("#mailReceiver").text();
    var fieldValue = document.getElementById("fieldRegister").value;
    //var dateTimePickerValue = document.getElementById("dateTimePicker").value;
    var dongYValue = document.getElementById("dongY").checked;
    var congTacVienChecked = document.getElementById("type1").checked;
    var daiLyChecked = document.getElementById("type2").checked;
    var ageRadioButtons = document.getElementsByName("age");
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    var currentHour = currentDate.getHours();


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

    if (congTacVienChecked === true || daiLyChecked === true) {
        error1.style.display = "none";
    } else {
        error1.style.display = "block";
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
    var fieldRegister = document.getElementById('fieldRegister').querySelector('.sBtn-text').innerText.trim();
    var error_fieldRegister = document.getElementById("error_fieldRegister");

    if (fieldRegister === 'Chọn lĩnh vực đăng ký') {
        error_fieldRegister.style.display = "block";
    } else {
        error_fieldRegister.style.display = "none";
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
        fieldValue === "Chọn lĩnh vực đăng ký" ||
        //dateTimePickerValue === "" ||
        dongYValue === false ||
        (!congTacVienChecked && !daiLyChecked) ||
        !ageSelected ||
        !validatePhoneNumber(soDienThoaiValue) ||
        error_fieldRegister.style.display === "block"
    ) {

    } else {
        loading.style.display = "inline-block";
        overlay.style.display = "block";
        var formData = {
            To: ToMail,
            Subject: `[TUYỂN DỤNG TTKD] ĐĂNG KÝ ${congTacVienChecked ? "CỘNG TÁC VIÊN" : (daiLyChecked ? "ĐẠI LÝ" : "")}`,
            Body: `
        <p>Thông tin đăng ký Tuyển dụng được cập nhật từ website Apec Trung tâm Kinh doanh vào lúc ${currentHour} giờ ngày ${currentDay} tháng ${currentMonth} năm ${currentYear} </p><br>
        Họ và tên: ${hoTenValue} <br>
        Số điện thoại: ${soDienThoaiValue} <br>
        Email: ${emailValue} <br>
        Lĩnh vực đăng ký: ${fieldRegister}
        `
        };

        var info = JSON.stringify(formData);

        $.ajax({
            url: "api/sendmail",
            data: info,
            dataType: "json",
            type: "POST",
            contentType: "application/json",
            success: function (response) {
                loading.style.display = "none";
                overlay.style.display = "none";
                if (response.status == "Success") {
                    var myForm = document.getElementById("myFormContact");
                    if (myForm) {
                        swal("Thành công", "Gửi thông tin thành công!", "success");
                        myForm.reset();
                    }
                } else {
                    swal("Lỗi", "Gửi thông tin không thành công, vui lòng kiểm tra lại thông tin","error");
                    myForm.reset();
                }
            },  
            error: function () {
                loading.style.display = "none";
                overlay.style.display = "none";
                swal("Đã xảy ra lỗi khi gửi thông tin", "error");
                myForm.reset();
            }
        });
    }
}

function addErrorMessage(errorId, message) {
    var errorElement = document.getElementById(errorId);

    if (!errorElement) {
        errorElement = document.createElement("p");
        errorElement.id = errorId;
        errorElement.className = "error-message color-red text-error mt-2";
        errorElement.innerText = message;
    }
}

function removeErrorMessage(inputId) {
    var errorMessageId = inputId + "-error-message";
    var errorMessage = document.getElementById(errorMessageId);

    if (errorMessage) {
        errorMessage.remove();
    }
}

document
    .getElementById("myFormContact")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        submitFormContact();
    });



//$.ajax({
//    url: "https://crm.apecgroup.net/crm/create_lead/",
//    method: "POST",
//    contentType: "application/json",
//    data: JSON.stringify({
//        data: formData,
//    }),
//    success: function (res) {
//        if (res.result?.is_success) {
//            console.log(formData);
//            window.alert(
//                "Thông tin của quý khách đã được gửi tới hệ thống thành công, quý khách sẽ nhận được liên hệ từ bộ phận tư vấn trong vòng 24 giờ tới..."
//            );
//        } else {
//            window.alert(
//                "Hệ thống đang trong quá trình bảo trì, vui lòng quay lại..."
//            );
//            console.log(formData);
//        }
//    },
//    error: function (xhr, status, error) {
//        window.alert(
//            "Hệ thống đang trong quá trình phát triển, vui lòng quay lại sau...",
//            status
//        );
//    },
//});