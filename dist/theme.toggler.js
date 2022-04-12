const themeToggler = document.getElementById("theme-toggler");
const togglerIcon = document.getElementById("toggler-icon");
themeToggler === null || themeToggler === void 0 ? void 0 : themeToggler.addEventListener("click", (event) => {
    event.preventDefault();
    let newSVGPathDContent = document.createAttribute('d');
    if (togglerIcon.children.item('path').attributes.getNamedItem('d').value == lightSVGPathDContent) {
        togglerIcon.children.item('path').attributes.removeNamedItem('d');
        newSVGPathDContent.value = darkSVGPathDContent;
        togglerIcon.children.item('path').setAttribute('d', newSVGPathDContent.value);
        setUserTheme('dark');
    }
    else if (togglerIcon.children.item('path').attributes.getNamedItem('d').value == darkSVGPathDContent) {
        togglerIcon.children.item('path').attributes.removeNamedItem('d');
        newSVGPathDContent.value = lightSVGPathDContent;
        togglerIcon.children.item('path').setAttribute('d', newSVGPathDContent.value);
        setUserTheme('light');
    }
    ;
});
