const resultContainer = document.querySelector("#result-container");
const loadingSpinner = document.querySelector("#loading-spinner");
const verseInput = document.querySelector("#verse-input");

export function displayVerse(data) {
  resultContainer.innerHTML = `
        <div class="verse">
            <h5 class="fw-bold">${data.reference}</h5>
            <small>${data.text}</small>
        </div>`;
}

export function showError(message) {
  resultContainer.innerHTML = `
        <div class="alert alert-danger"">
            <p>${message}</p>
        </div>`;
}

export function loaderSpinner(isloading) {
  loadingSpinner.style.display = isloading ? "block" : "none";
}


