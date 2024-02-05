document.getElementById("form_newpages").addEventListener("submit", function (event) {
    event.preventDefault();

    // Kiểm tra họ và tên
    var hoTen3 = document.getElementById("ho_ten");
    var error_name = document.getElementById("error_name");
    if (hoTen3.value.trim() === "") {
        error_name.style.display = "block";
        hoTen3.classList.add("error-input");
    } else {
        error_name.style.display = "none";
        hoTen3.classList.remove("error-input");
    }

    // Kiểm tra email
    if (!validateForm()) {
        return;
    }

    // Nếu không có lỗi, có thể gửi form thành công
    if (error_name.style.display === "none" && error_emailnewpages.style.display === "none") {
        submitFormNews();
        document.getElementById("form_newpages").reset();
   
    }
});

// Hàm kiểm tra email và họ tên
function validateForm() {
    var hoTen3 = document.getElementById("ho_ten");
    var error_name = document.getElementById("error_name");
    var email3 = document.getElementById("email_newpages");
    var error_email3 = document.getElementById("error_emailnewpages");
    var emailRegex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra họ và tên
    if (hoTen3.value.trim() === "") {
        error_name.style.display = "block";
        console.log('hi')
        hoTen3.classList.add("error-input");
    } else {
        error_name.style.display = "none";
        hoTen3.classList.remove("error-input");
    }

    // Kiểm tra email
    if (!emailRegex3.test(email3.value)) {
        error_email3.style.display = "block";
        email3.classList.add("error-input");
        return false;
    } else {
        error_email3.style.display = "none";
        email3.classList.remove("error-input");
        return true;
    }
}

function submitFormNews() {


    var loading = document.getElementById("loading");
    var overlay = document.getElementById("overlay");

    var hoTenValue = document.getElementById("ho_ten").value;
    var emailValue = document.getElementById("email_newpages").value;
    let ToMail = $("#mailReceiver").text();
    let SubjectMail = `Người dùng ${hoTenValue} - Nhận thông tin mới nhất từ Apec Trung tâm Kinh doanh`;
    let BodyMail = "Họ tên: " + hoTenValue + "<br> ";
    BodyMail += "Email: " + emailValue;


    loading.style.display = "inline-block";
    overlay.style.display = "block";
    let info = JSON.stringify({
        To: ToMail,
        Subject: SubjectMail,
        Body: BodyMail
    });

    $.ajax({
        url: "api/sendmail",
        data: info,
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        success: function (response) {

            loading.style.display = "none";
            overlay.style.display = "none";
            console.log(response)
            if (response.status == "Success") {
                swal("Thành công", "Đã gửi thông tin thành công", "success");
            } else {
                swal("Lỗi", "Hệ thống đang trong quá trình bảo trì, vui lòng quay lại sau...", "error");
            }
        },
        error: function () {

            loading.style.display = "none";
            overlay.style.display = "none";
            swal("Lỗi", "Hệ thống đang trong quá trình phát triển, vui lòng quay lại sau...", "error");
        }
    });
}
