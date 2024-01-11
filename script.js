document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
    });
});
