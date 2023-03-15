const formBtn = document.querySelector(".fact-Btn-Open");
const factForm = document.querySelector(".fact-Form");

formBtn.addEventListener("click", () => {
  if (factForm.classList.contains("hidden")) {
    factForm.classList.remove("hidden");
    formBtn.textContent = "Close";
  } else {
    factForm.classList.add("hidden");
    formBtn.textContent = "Share a fact";
  }
});
