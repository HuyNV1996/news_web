$(function () {
    // Lấy ngày hôm nay
    var today = moment();

    $('input[name="daterange"]').daterangepicker(
        {
            startDate: today.clone().add(1, 'days'),  // Sử dụng clone để tạo bản sao
            opens: 'right',  // Hiển thị lịch bên trái
            minDate: today,  // Ngày tối thiểu là ngày hôm nay
        },
        function (start, end, label) {
            console.log(
                "New date range selected: " +
                start.format("YYYY-MM-DD") +
                " to " +
                end.format("YYYY-MM-DD") +
                " (predefined range: " +
                label +
                ")"
            );
        }
    );
});




// --------------------------------



document.getElementById("formTravel").addEventListener("submit", function (event) {

    event.preventDefault();


    var loading = document.getElementById("loading");
    var overlay = document.getElementById("overlay");

    var location = document.getElementById('location').querySelector('.sBtn-text').innerText.trim();
    var error_location = document.getElementById("error_location");
    var name_btn = document.getElementById('name_btn').innerText.trim();
    var destination = document.getElementById('location').innerText.trim();
    var error_customer = document.getElementById("error_customer");




    if (location === 'Bạn muốn đến đâu?') {
        error_location.style.display = "block";

    } else {
        error_location.style.display = "none";
    }

    if (name_btn === 'Họ và tên') {
        error_customer.style.display = "block";
    } else {
        error_customer.style.display = "none";
    }

    if (location === "Bạn muốn đến đâu?" ||
        name_btn === "Họ và tên"
    ) {

    } else {
        submitFormTravel();
    }


})

//---------------------------------

function submitFormTravel() {
    event.preventDefault();
    loading.style.display = "inline-block";
    overlay.style.display = "block";
    var destination = document.querySelector(
        ".select-btn .sBtn-text"
    ).innerText;

    var dateRange = document.querySelector(
        ".range_date_picker .date_picker"
    ).value;

    var info = document.getElementById('name_btn').innerText.trim();
    console.log(info.split("-")[0].trim());
    const formData = [{
        location: destination,
        dateRange: dateRange,
        name: info.split("-")[0].trim(),
        phone: info.split("-")[1].trim(),
        type: "opportunity",
        source_name: 'kinhdoanh.apecgroup.net',
    }];


    $.ajax({
        url: "https://crm.apecgroup.net/crm/create_lead/",
        method: "POST",
        Origin: "http://kinhdoanh.idjf.net/",
        contentType: "application/json",
        data: JSON.stringify({
            data: formData,
        }),
        success: function (res) {
            formReset();
            loading.style.display = "none";
            overlay.style.display = "none";
            if (res.result?.is_success) {
                swal("Thành công", "Đã gửi thông tin thành công", "success");
            } else {
                swal("Lỗi", "Gửi thông tin không thành công", "error");
                document.getElementById("name").value = "";
                document.getElementById("name_btn").value = "";
                document.getElementById("phone").value = "";
            }
        },
        error: function (xhr, status, error) {

            loading.style.display = "none";
            overlay.style.display = "none";
            swal("Đã xảy ra lỗi khi gửi thông tin", "error");
            formReset();
        },
    });
}

function formReset() {
    //document.getElementById("name_btn").innerText = "Họ và tên";
    //document.getElementById("location").innerText = "Bạn muốn đến đâu?";
    //document.querySelector(".range_date_picker .date_picker").value = "";

    document.getElementById("formTravel").reset();
}

