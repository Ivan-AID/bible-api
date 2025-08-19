import {fetchVerse} from "./api.js";
import { displayVerse, showError, loaderSpinner } from "./ui.js";

let form = document.querySelector("#bible-form");
let verseInput = document.querySelector("#verse-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const inputVerse = verseInput.value.trim();
    if (!inputVerse) {
      showError("Please enter a verse reference.");
      return;
    }
    loaderSpinner(true);
    const data = await fetchVerse(inputVerse);
    displayVerse(data);
  } catch (error) {
    console.error(error);
    showError("An error occurred while fetching the verse. Please try again.");
  } finally {
    loaderSpinner(false);
  }
});
