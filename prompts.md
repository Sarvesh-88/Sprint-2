# Prompts Log - Sprint 2: Cash-Flow Tracker

To accelerate the development process, resolve specific styling blockers, and ensure my logic met the engineering requirements, I utilized AI (Gemini) during this sprint. Below is the log of the prompts used:

### Prompt 1

**Tool Used:** Gemini  
**Prompt:** "How do I implement the working logic for the delete button? When a user clicks delete, how do I remove the specific item from the list and update the calculations?"  
**Help Received:** Understood how to attach event listeners to dynamically created DOM elements (`<li>` and `<button>`). Learned the reversible mathematical logic required to subtract the deleted expense amount from the "Total Expenses" and recalculate the "Remaining Balance" correctly before removing the element from the screen using `.remove()`.

### Prompt 2

**Tool Used:** Gemini  
**Prompt:** "How do I show a warning or error message if the user leaves the input fields empty or enters a negative number?"  
**Help Received:** Learned how to implement data validation logic using `if` statements to check for empty strings and negative values. Understood how to manipulate the DOM to display a dynamic, red warning message directly on the screen without reloading the page or breaking the application.
