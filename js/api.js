const API_BASE = "https://bible-api.com/";

export async function fetchVerse(textVerse) {
  try {
   const response = await fetch(`${API_BASE}${encodeURIComponent(textVerse)}`);
    if (!response.ok)
      throw new Error("Verse not found...Kindly check your input");
    const data = await response.json();
    if (!data.text)
      throw new Error("Verse not found...Kindly check your input");
    return data;
  } catch (error) {
    console.error("Error fetching verse:", error);
    throw error;
  }
}


