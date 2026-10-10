// Function required by your lab task
function greet(name) {
  return `Hello, ${name}!`;
}

// Only run browser code if 'document' actually exists (prevents Node.js from crashing)
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("greeting");
    heading.textContent = greet("Student");
  });
}

// Allow Node.js to export the function for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}
