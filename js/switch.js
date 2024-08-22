var check = document.querySelector(".check");
check.addEventListener('click', language);

function language() {
    let isChecked = check.checked;
    if (isChecked) {
        location.href = "español/indexEs.html";
    } else {
        location.href = "../index.html";
    }
}