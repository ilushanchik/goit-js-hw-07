const input = document.getElementById("name-input")
const output = document.getElementById("name-output")
input.addEventListener("input", function() {
    const trimInput = input.value.trim();
    if (trimInput === "") {
        output.textContent = "Anonymous";
    }
    else {
           output.textContent = trimInput; 
        }
});




