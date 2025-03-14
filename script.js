document.addEventListener("DOMContentLoaded", function () {
    let tabLinks = document.querySelectorAll(".tab-links");
    let tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(link => {
        link.addEventListener("click", function () {
            let tabName = this.getAttribute("data-tab");

            // Remove active classes from all tabs
            tabLinks.forEach(tab => tab.classList.remove("active-link"));
            tabContents.forEach(content => {
                content.classList.remove("active-tab");
                content.style.display = "none"; // Hide all tabs
            });

            // Add active class to the selected tab and show the content
            this.classList.add("active-link");
            let activeContent = document.getElementById(tabName);
            activeContent.classList.add("active-tab");
            activeContent.style.display = "block"; // Show selected tab content
        });
    });
});