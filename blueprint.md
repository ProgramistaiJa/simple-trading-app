
# Blueprint: Simple Trading App

## Overview

This document outlines the design, features, and development plan for the Simple Trading App. The application is a web-based platform built with Next.js and Firebase, providing users with basic trading functionalities.

## Implemented Features & Design

### Core Functionality
-   **User Authentication:** Users can sign up and log in to the application.
-   **Theme Switching:** A theme switcher allows users to toggle between light and dark modes. The selected theme is persisted across sessions using `localStorage`.

### Design & Styling
-   **Framework:** The application uses Tailwind CSS for styling.
-   **Dark Mode:** Dark mode is implemented using Tailwind's `dark` variant, controlled by a class on the `html` element.
-   **Home Page:** A welcoming home page with links to log in, sign up, and access settings.
-   **Settings Page:** A dedicated page for application settings, currently featuring the theme switcher.
-   **Responsive Design:** The layout is designed to be responsive and work on different screen sizes.

### Project Structure
-   **`/app`:** App Router for file-based routing.
-   **`/components`:** Reusable UI components.
-   **`/lib`:** Utility functions and libraries.
-   **`ThemeContext.tsx`:** React context for managing the application's theme.
-   **`AuthProvider.tsx`:** React context for managing user authentication.

## Current Task: Fix Theme Switcher

### Plan
1.  **Diagnose the issue:** The theme switcher on the `/settings` page does not affect the entire application.
2.  **Update `tailwind.config.js`:** Add `darkMode: 'class'` to enable class-based dark mode in Tailwind CSS. This was the missing piece.
3.  **Verify Implementation:** Ensure `ThemeProvider` correctly wraps the application in `layout.tsx` and that `ThemeContext` properly uses `localStorage` to persist the theme.
4.  **Create `blueprint.md`:** Document the project's current state, implemented features, and the plan for the fix.
