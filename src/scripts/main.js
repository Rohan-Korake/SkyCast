import { createHighlights } from "./createHighlights.js";
import { createMetrics } from "./createMetrics.js";
import { fetchData } from "./fetchData.js";

// Entry point of application
document.addEventListener("DOMContentLoaded", async () => {
  await createMetrics();
  await createHighlights();
  fetchData();
});

// handle error pages visibility
export function togglePageVisibility(pageName, removeClass, addClass) {
  pageName = document.getElementById(pageName);
  pageName.classList.remove(removeClass);
  pageName.classList.add(addClass);
}
