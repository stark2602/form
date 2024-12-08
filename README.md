**React Authentication App**

**Table of Contents**
How to Run the Project
Design Choices Made
Assumptions and Limitations
Future Improvements
License

**How to Run the Project**
**Prerequisites**
Make sure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js) or yarn (optional)
**Steps to Run**
1>Clone the repository:

First, clone the repository to your local machine:

git clone https://github.com/stark2602/react-auth-app.git

2>Navigate to the project directory
3>Change your working directory to the project folder:

cd react-auth-app

4>Install dependencies

5>Run the following command to install the required dependencies:

npm install

Or, if you're using yarn:

yarn install

6>Start the development server
Run the development server with:

npm start

Or, if you're using yarn:

yarn start

The application will be available at http://localhost:3000 in your browser.

**Design Choices Made**
Formik for Form Management:

The application uses Formik to handle form state, validation, and error messages. Formik simplifies the process of handling user input and form submission.
Yup for Validation:

Yup is used for form validation to ensure the correctness of user inputs, such as ensuring the email is in the correct format and the password meets the minimum security requirements.
Modals for Login and Signup:

Both login and signup forms are presented in modals. This keeps the homepage clean, allowing users to interact with the app without navigating away from the page.
"Remember Me" Functionality:

For the LoginForm, a "Remember Me" checkbox is implemented, allowing the user’s email to be saved in localStorage for convenience on future visits.
Password Strength Indicator:

A simple password strength indicator is implemented in the SignupForm. It evaluates the password strength based on length and complexity.
Responsive and Accessible UI:

The design is responsive, ensuring that the app is usable on both mobile and desktop screens.
Accessibility features include proper ARIA roles for buttons and form inputs to support users with disabilities.
Assumptions and Limitations
Assumptions:
No Backend:

This application is a frontend-only prototype. It does not include backend authentication or user management. To implement this in a real-world scenario, you would need to connect the forms to a backend system (e.g., with JWT for authentication).
Basic Validation:

The form validation is basic, checking for required fields and valid email formats. More advanced validation, like confirming the uniqueness of the email address, can be added after connecting the app to a backend.
Password Strength:

The password strength is evaluated based on simple rules (length and character types). A more robust evaluation can be implemented with additional libraries or custom logic.
No Session Management:

Once a user logs in, no session management or authentication flow is implemented. For a complete solution, session management should be added with token-based authentication.
Limitations:
No Server Integration:

Currently, the form submissions just display success messages and do not send data to a server. You can integrate a backend to store user data and handle authentication.
No Error Handling:

Error handling for login failures or backend errors is not implemented. This can be added when the app is connected to an authentication API.
Basic Styling:

The app uses minimal styling to keep it simple. You can enhance the UI with additional CSS or integrate a CSS framework like Tailwind CSS for a better visual experience.
Limited Browser Support:

The app has been tested on modern browsers (Chrome, Firefox, Safari). If you intend to support older browsers, you may need to add polyfills.
Future Improvements
Backend Integration:

Connect the app to a backend API for authentication (e.g., JWT authentication).
Error Handling:

Add error handling for form submissions, such as displaying messages for invalid credentials.
Password Reset:

Implement a "Forgot Password" feature for password recovery.
Enhanced UI:

Improve the UI with a more polished design, add animations, and enhance responsiveness.
Multi-Step Form:

Make the signup process a multi-step form to improve UX.
