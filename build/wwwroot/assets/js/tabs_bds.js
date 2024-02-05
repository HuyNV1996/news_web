document.addEventListener("DOMContentLoaded", function () {
    var TabLinks = document.querySelectorAll(".tablinks");
    var TabContent = document.querySelectorAll(".tabcontent");

    TabLinks.forEach(function (el) {
        el.addEventListener("click", openTabs);
    });

    // Check the URL hash on page load
    var initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showTab(initialHash);
    }

    function openTabs(el) {
        var btn = el.currentTarget;
        var electronic = btn.dataset.electronic;

        // Hide all tabs before showing the selected one
        TabContent.forEach(function (el) {
            el.style.display = "none";
        });

        TabLinks.forEach(function (el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + electronic).style.display = "block";
        document.querySelector("#" + electronic).classList.add("active");

        btn.classList.add("active");

        // Update the URL hash
        window.location.hash = electronic;
    }

    function showTab(tabId) {
        // Hide all tabs before showing the selected one
        TabContent.forEach(function (el) {
            el.style.display = "none";
        });

        TabLinks.forEach(function (el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + tabId).style.display = "block";
        document.querySelector("#" + tabId).classList.add("active");

        // Find the tab link with the corresponding data attribute
        var correspondingTabLink = document.querySelector('[data-electronic="' + tabId + '"]');
        if (correspondingTabLink) {
            correspondingTabLink.classList.add("active");
        }
    }
});
