
document.addEventListener("DOMContentLoaded", () => {
    
    const user = localStorage.getItem("user");

    if (user) {
        // TODO: obtener usuario
    } else {
        window.location = "/login.html"
    }

});
