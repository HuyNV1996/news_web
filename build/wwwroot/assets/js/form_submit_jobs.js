function validatePhoneNumber(phoneNumber) {
    return phoneNumber !== "" && phoneNumber.length === 10 && !isNaN(phoneNumber) && phoneNumber.charAt(0) === '0';
}


$(document).ready(function () {
    var uploadedFileUrl; // Variable to store the uploaded file URL

    function validateFileSize(input) {
        var maxSize = 5 * 1024 * 1024; // 5MB in bytes

        if (input.files.length > 0) {
            var fileSize = input.files[0].size;

            if (fileSize > maxSize) {
                console.error("File size exceeds the maximum limit (5MB). Please choose a smaller file.");

                $(input).val('');
            }
        }
    }

    // Function to handle file upload
    function uploadFile(file) {
        var formData = new FormData();
        formData.append('file', file);
        const urlStr = `${window.location.origin}/api/uploadfile`
        // Make Ajax request to upload the file
        console.log(urlStr);
        $.ajax({
            url: urlStr,
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (apiResponse) {
                if (apiResponse.message == "OK") {
                    uploadedFileUrl = apiResponse.fileUrl;
                }
            },
            error: function (error) {
                console.error("Error uploading file", error);
            }
        });
    }

    function submitForm() {

        var loading = document.getElementById("loading");
        var overlay = document.getElementById("overlay");
        var hoTenValue = $("#fullName").val();
        var phoneNumber = $("#phoneNumber").val();
        var emailValue = $("#email").val();
        var jobTitleValue = $("#jobTitle").val();
        let ToMail = $("#mailReceiver").text();

        var error1 = document.getElementById("error1");
        var error2 = document.getElementById("error2");
        var error3 = document.getElementById("error3");
        var error_form = document.getElementById("error_form");

        // Kiểm tra dữ liệu trước khi gọi API
        if (hoTenValue.trim() === "") {
            error1.style.display = "block";
        } else {
            error1.style.display = "none";
        }

        var phoneNumber = phoneNumber.trim();

        if (!validatePhoneNumber(phoneNumber)) {
            error2.style.display = "block";
            addErrorMessage("soDienThoai", "Vui lòng nhập SĐT hợp lệ");
        } else {
            error2.style.display = "none";
            removeErrorMessage("soDienThoai");
        }


        if (emailValue.trim() == "" && !/^\S+@\S+\.\S+$/.test(emailValue)) {
            console.log("check email")
            error3.style.display = "block";
            document.getElementById("email").classList.add("error-input");

        } else {
            error3.style.display = "none";
            document.getElementById("email").classList.remove("error-input");
        }

        let SubjectMail = `[TUYỂN DỤNG TTKD] - ${jobTitleValue}`;
        let BodyMail = "Họ tên: " + hoTenValue + "<br> ";
        BodyMail += "Email: " + emailValue + "<br> ";
        BodyMail += "Số điện thoại: " + phoneNumber + "<br>";
        if (uploadedFileUrl) {
            BodyMail += "File CV đính kèm: " + '<a href="' + uploadedFileUrl + '">Link đính kèm</a><br>';
        }

        if (error1.style.display === "none" && error2.style.display === "none" && error3.style.display === "none") {
            loading.style.display = "inline-block";
            overlay.style.display = "block";
            var info = {
                To: ToMail,
                Subject: SubjectMail,
                Body: BodyMail
            };

            // Make Ajax request for form submission
            $.ajax({
                url: `${window.location.origin}/api/sendmail`,
                type: "POST",
                data: JSON.stringify(info),
                contentType: 'application/json',
                success: function (response) {

                    loading.style.display = "none";
                    overlay.style.display = "none";
                    var myForm = document.getElementById("form_submit_recruit");
                    swal("Thành công", "Đã gửi thông tin thành công", "success");
                    myForm.reset();
                },
                error: function (error) {

                    loading.style.display = "none";
                    overlay.style.display = "none";
                    swal("Lỗi", "Đã xảy ra lỗi khi gửi thông tin", "error");
                    myForm.reset();
                }
            });
        }
    }

    $("#files").change(function () {
        var fileInput = this;
        console.log('onchange');
        validateFileSize(fileInput);
        uploadFile(fileInput.files[0]);
    });

    $(".btn_register_recruitment").click(function () {
        event.preventDefault();
        if (uploadedFileUrl) {
            error_form.style.display = "none";
            submitForm();
        } else {
            error_form.style.display = "block";
            console.error("File URL not available. Please upload a file first.");
        }
    });
});
