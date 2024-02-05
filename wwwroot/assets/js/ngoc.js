//alert("Hello! I am Ngoc!!");

//slide cho PC
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".mySwiper-img-pc", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

});


//swiper mobile
var swiper = new Swiper(".mySwiper_mobile", {
    slidesPerView: 1.1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiper = new Swiper(".mySwiper_mobile_auto", {
    slidesPerView: 1.2,
    spaceBetween: 20,
   
    freeMode: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper_mobile_menu", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    freeMode: true,
   
});

var swiper = new Swiper(".mySwiper_pc_menu", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// slide ảnh banner
var swiper = new Swiper(".mySwiper_thumb", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper_current", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});





//xử lí nút bấm slide
document.addEventListener('DOMContentLoaded', function () {
    let btn_odd = 1;
    let btn_even = 2;
    let swiper_count = 1;
    let string_id = 'btn_'
    let string_swiper_class = '#swiper_position_'
    while (btn_odd <= 1000) {
        let string_left_btn = string_id + btn_odd.toString()
        let string_right_btn = string_id + btn_even.toString()
        let string_swiper_id = string_swiper_class + swiper_count.toString()


        btn_odd += 2
        btn_even += 2
        let mySwiperxyz = null;
        if (swiper_count == 8) {
            mySwiperxyz = new Swiper(string_swiper_id, {
                slidesPerView: 4,
                spaceBetween: 30,
                
                freeMode: true,
            });
        }
        else if (swiper_count == 9 || swiper_count == 10 || swiper_count == 11 || swiper_count == 12 || swiper_count == 13 || swiper_count == 15) {
            mySwiperxyz = new Swiper(string_swiper_id, {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,              
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            });
        }
        else if (swiper_count == 14) {
            mySwiperxyz = new Swiper(string_swiper_id, {
                slidesPerView: 1,
                spaceBetween: 30,

                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            });
        }

        else if (swiper_count == 49) {
            mySwiperxyz = new Swiper(string_swiper_id, {
                slidesPerView: 2.2,
                spaceBetween: 30, 
                
                freeMode: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            });
        }
        
        else {
            mySwiperxyz = new Swiper(string_swiper_id, {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            });         
        }

        swiper_count += 1;


        if (document.getElementById(string_right_btn) != null) {
            document.getElementById(string_right_btn).addEventListener('click', function (event) {
                mySwiperxyz.slideNext();
            });
            document.getElementById(string_left_btn).addEventListener('click', function (event) {
                mySwiperxyz.slidePrev();
            });
        }

    }
})

/*disable nút bấm
var currentImageIndex = 0;
var maxImageIndex =5 /* Set the maximum index based on your total number of images ;

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateButtons();
  }
}

function nextImage() {
  if (currentImageIndex < maxImageIndex) {
    currentImageIndex++;
    updateButtons();
  }
}

function updateButtons() {
  var btnLeft = document.getElementById('btn_3');
  var btnRight = document.getElementById('btn_4');

  // Enable or disable buttons based on the current image index
  btnLeft.classList.toggle('disabled', currentImageIndex === 0);
  btnRight.classList.toggle('disabled', currentImageIndex === maxImageIndex);
}


*/





//scroll animation
document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.scroll-reveal', {

        delay: 100,
        duration: 1000,
        origin: 'bottom',
        distance: '50%',
        easing: 'ease-in-out',
        reset: true, // Reset the animation after each scroll
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.scroll-left', {
        delay: 100,
        duration: 500,
        origin: 'left', // Thay đổi origin thành 'left' để tạo hiệu ứng trượt sang trái
        distance: '50%',
        easing: 'ease-in-out',
        reset: true,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.scroll-right', {
        delay: 100,
        duration: 1000,
        origin: 'right', // Thay đổi origin thành 'right' để tạo hiệu ứng trượt sang phải
        distance: '50%',
        easing: 'ease-in-out',
        reset: true,
    });
});


document.getElementById("sendEmailBtn").addEventListener("click", function () {
    // Gọi hàm gửi email khi nút được bấm
    sendEmail();
});

function sendEmail() {
    // Gửi yêu cầu đến server (PHP) để xử lý gửi email
    fetch('send_email.php', {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Email đã được gửi thành công!');
            } else {
                alert('Có lỗi xảy ra khi gửi email.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}