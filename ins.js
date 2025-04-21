document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (
        event.ctrlKey && 
        (event.key === "u" || event.key === "U" || event.key === "i" || event.key === "I") || 
        event.key === "F12"
    ) {
        event.preventDefault();
    }
});

(function detectDevTools() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            window.location.replace("about:blank");
        }
    });
    console.log('%c', element);
})();
    