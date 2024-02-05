function openMenuMobile() {
    const listMenu = document.querySelector(
        ".menu_mobile"
    );
    const closeIcon = document.querySelector(
        ".close_icon"
    );

    const menuIcon =
        document.querySelector(".menu_icon");
    listMenu.classList.contains("open");
    listMenu.classList.add("open");
    listMenu.style.top = "48px";
    closeIcon.classList.toggle("active", true);
    menuIcon.classList.toggle("active", true);
}

function closeMenu() {
    const listMenu = document.querySelector(
        ".menu_mobile"
    );

    const closeIcon = document.querySelector(
        ".close_icon"
    );
    const menuIcon =
        document.querySelector(".menu_icon");
    listMenu.classList.remove("open");
    menuIcon.classList.toggle("active", false);
    closeIcon.classList.toggle("active", false);
}

function openPage(pageType) {
    const mainPage =
        document.querySelector("#main_page");

    const allPages =
        document.querySelectorAll(".page");

    console.log(allPages)
    allPages.forEach((page) => {
        page.style.display = "none";
    });

    const currentPage = document.querySelector(
        `.page_${pageType}`
    );
    if (currentPage) {
        currentPage.style.display = "block";
        mainPage.style.display = "none";
    }
}
function goBack() {
    const page_bds =
        document.querySelector(".page_bds");
    const mainPage =
        document.querySelector("#main_page");
    page_bds.style.display = "none";
    mainPage.style.display = "block";
}

function goBackTravel() {
    const page_travel =
        document.querySelector(".page_travel");
    const mainPage =
        document.querySelector("#main_page");
    page_travel.style.display = "none";
    mainPage.style.display = "block";
}

function goBackFinance() {
    const page_finance =
        document.querySelector(".page_finance");
    const mainPage =
        document.querySelector("#main_page");
    page_finance.style.display = "none";
    mainPage.style.display = "block";
}



function scrollToTop() {
    const btn_up = document.getElementById("");
    window.scrollTo({
        top: 0,
        behavior: `smooth`,
    });
}

window.addEventListener("scroll", function () {
    const btn_up = document.querySelector(
        "#icon_scroll"
    );
    var threshold = 50;
    if (window.scrollY > threshold) {
        btn_up.style.display = "flex";
    } else {
        btn_up.style.display = "none";
    }
});

function searchPosition() {
    console.log("click");

    const heading = document.querySelector(
        ".news_title_page"
    );
    const iconClose = document.querySelector(
        ".close_searchPosition"
    );

    const inputSeach = document.querySelector(
        "#input_search_work"
    );

    const boxInputSearch = document.querySelector(
        ".input_search"
    );

    boxInputSearch.style.borderBottom =
        "2px solid #FB7D54";
    inputSeach.style.display = "block";
    heading.style.display = "none";
    iconClose.style.display = "block";
}

function closeSearchPosition() {
    console.log("hello");
    const heading = document.querySelector(
        ".news_title_page"
    );
    const iconClose = document.querySelector(
        ".close_searchPosition"
    );

    const inputSeach = document.querySelector(
        "#input_search_work"
    );

    const boxInputSearch = document.querySelector(
        ".input_search"
    );

    boxInputSearch.style.border = "none";
    inputSeach.style.display = "none";
    heading.style.display = "flex";
    iconClose.style.display = "none";
}


// Button copy

function Copy() {
    const copyButton = document.getElementById("btn_copy_link");
    const copyButtonText = document.querySelector(".text_icon_recruitment.primary");

    if (copyButton) {
        copyButton.addEventListener("click", function () {
            const currentURL = window.location.href;
            copyToClipboard(currentURL);

            copyButtonText.innerText = "Copied";

            setTimeout(function () {
                copyButtonText.innerText = "Copy Link";
            }, 2000);
        });
    }
}


function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);
}

$(".searchIcon").click(function () {
    if ($(".searchInputText").css("display") == "none") {
        $(".searchInputText").css({ "display": "block" });
    }
    else {
        $(".searchInputText").css({ "display": "none" });
    }
});

$("#searchContent").on('keypress', function (e) {
    if (e.which == 13) {
        let inputText = $("#searchContent").val();
        window.location.href = "/tim-kiem/" + inputText;
    }
});
$("#search_icon").on('click', function (e) {
    let inputText = $("#search_mbc").val();
    window.location.href = "/tim-kiem/" + inputText;
});
$("#search_mbc").on('keypress', function (e) {
    if (e.which == 13) {
        let inputText = $("#search_mbc").val();
        window.location.href = "/tim-kiem/" + inputText;
    }
});
function formatPrice(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


$("#search_icon_td").on('click', function (e) {
    let inputText = $("#search_mbc_td").val();
    window.location.href = "/tim-kiem-tuyen-dung/" + inputText;
});
$("#search_mbc_td").on('keypress', function (e) {
    if (e.which == 13) {
        let inputText = $("#search_mbc_td").val();
        window.location.href = "/tim-kiem-tuyen-dung/" + inputText;
    }
});

function validateFileSize(input) {
    const maxSizeMB = 5;
    const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes

    if (input.files.length > 0) {
        const fileSize = input.files[0].size;

        if (fileSize > maxSizeBytes) {
            alert('File size exceeds the maximum limit of 5MB. Please choose a smaller file.');
            input.value = ''; // Clear the selected file
        }
    }
}
function testFunc(event) {
    event.preventDefault();
    
    var targetId = event.currentTarget.querySelector('a').getAttribute('href').substring(1);
    
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        console.log('scroll');
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        
     
    }
}

