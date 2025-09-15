# Project Blueprint

## Overview

This is a Next.js application with Firebase authentication. It provides user signup and login functionality.

## Implemented Features

*   **Firebase Authentication:** User signup and login with email and password.
*   **Protected Routes:** A dashboard page accessible only to authenticated users.
*   **Styling:** Basic styling with Tailwind CSS.

## Current Plan: Refactor Home Page to Login

1.  **Create `blueprint.md`:** Document the plan.
2.  **Move Home Page:** Move the current home page to a new `/dashboard` route.
3.  **Update Home Page:** Make the home page (`/`) the login page.
4.  **Update `PrivateRoute`:** Update the private route component to redirect to the new login page.
5.  **Update Signup Page:** Update the signup page to redirect to the new `/dashboard` page after successful signup.
6.  **Delete Old Login Page:** Remove the old login page file.