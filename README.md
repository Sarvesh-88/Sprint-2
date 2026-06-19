# Prodesk IT - Sprint 2: Cash-Flow Tracker

A dynamic, high-performance Expense Tracker web application built for the Sprint 2 engineering requirements. This project features real-time mathematical calculations, dynamic DOM manipulation, and a sleek dark-mode aesthetic without using external frontend frameworks.

##  Important Links
- **Live Website:** https://sprint2-project.netlify.app/
- **Demo Video:** https://drive.google.com/file/d/15_zAbGgH3HndfEwjyj58PiT08bC5AzXZ/view?usp=drivesdk
##  Screenshot
[Project Overview](Sprint2-img.png)

##  Tech Stack
- HTML5
- Vanilla CSS3 (Grid Architecture & Custom Styling)
- Vanilla JavaScript (ES6)

##  Features Completed (Phase 1: Base MVP)
The following mandatory Phase 1 requirements have been successfully completed:

- **Input Architecture:** Implemented an HTML form that accurately captures "Total Salary" (Number), "Expense Name" (Text), and "Expense Amount" (Number) using correct HTML5 type attributes.
- **State Logic & DOM Manipulation:** JavaScript functions instantly capture inputs upon form submission. The app dynamically renders the "Total Salary" and creates new HTML elements (`<li>`) for every new expense added.
- **Mathematical Logic:** Calculates and updates the "Remaining Balance" in real-time by subtracting the total expenses from the total salary.
- **Data Validation:** Prevents form execution if the user submits empty fields or negative values, and safely displays a clear UI error message without breaking the application.
- **Architecture Constraint:** The entire logic is built strictly using Vanilla JavaScript (No React, Vue, or external JS frameworks used).
