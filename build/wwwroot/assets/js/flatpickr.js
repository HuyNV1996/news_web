//function initializeDateTimePicker() {
//    var dateTimePicker = document.getElementById(
//        "dateTimePicker"
//    );
//    var calendarIcon = document.getElementById(
//        "calendarIcon"
//    );

//    flatpickr(dateTimePicker, {
//        enableTime: true,
//        dateFormat: "H:i, d/m/Y", // Set the desired format
//    });

//    calendarIcon.addEventListener(
//        "click",
//        function () {
//            dateTimePicker._flatpickr.open();
//        }
//    );
//}

// Call the function to initialize the date-time picker
//initializeDateTimePicker();
/*
function submitForm() {
    event.preventDefault();
    var hoTenValue =
        document.getElementById("hoTen").value;
    var soDienThoaiValue = document.getElementById(
        "soDienThoai"
    ).value;
    var emailValue =
        document.getElementById("email").value;
    var dateTimePickerValue =
        document.getElementById(
            "dateTimePicker"
        ).value;
    var dongYValue =
        document.getElementById("dongY").checked;

    if (
        hoTenValue === "" ||
        soDienThoaiValue === "" ||
        emailValue === "" ||
        dateTimePickerValue === "" ||
        dongYValue === false
    ) {
        alert("Vui lòng điền đầy đủ thông tin.");
    } else {
        var formData = {
            hoTen: hoTenValue,
            soDienThoai: soDienThoaiValue,
            email: emailValue,
            dateTimePicker: dateTimePickerValue,
            dongY: dongYValue,
        };


 $.ajax({
            url: "https://crm.apecgroup.net/crm/create_lead/",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                data: formData,
            }),
            success: function (res) {
                if (res.result?.is_success) {
              
                    window.alert(
                        "Thông tin của quý khách đã được gửi tới hệ thống thành công, quý khách sẽ nhận được liên hệ từ bộ phận tư vấn trong vòng 24 giờ tới..."
                    );
                } else {
  
                    window.alert(
                        "Hệ thống đang trong quá trình bảo trì, vui lòng quay lại sau..."
                    );
                }
            },
            error: function (xhr, status, error) {
                window.alert(
                    "Hệ thống đang trong quá trình phát triển, vui lòng quay lại sau...",
                    status
                );
            },
        });
    }
}





document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();
    });

    */