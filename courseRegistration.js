function addStyle() {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.runtime.getURL('courseRegistration.css');
    (document.head || document.documentElement).appendChild(style);
}

function defaultDepartmentAsAll() {
    const element = document.querySelector("#sel_dept");
    if (element) { element.value = "%"; }
}

function easyFocusOnSubjectTitle() {
    const element = document.querySelector("#txt_sub_title");
    document.body.addEventListener("dblclick", (event) => {
        element?.focus();
    });
}

window.onload = () => {
    addStyle();
    defaultDepartmentAsAll();
    easyFocusOnSubjectTitle();
};