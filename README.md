# MARVEL App with Next.js

This README provides an overview of the MARVEL app built using Next.js 14
framework, following a specific architecture.

## Architecture Overview

The MARVEL app follows a modular architecture to ensure scalability,
maintainability, and organization of code. Here's a breakdown of the main
directories and their purposes:

#### `src`

- **app**: Contains modules related to the main functionalities of the app.
  - **characters**: Module for managing characters-related functionalities.
- **components**: Reusable UI components used across the app.
- **context**: Context providers for managing global state.
- **models**: Data models and types used within the application.
- **services**: API services for fetching data from external sources.
- **styles**: Stylesheets and styling utilities.
- **utils**: Utility functions used throughout the app.

## Directory Structure

```
src/
-- app/
 -- (characters)
    -- /favorites
    -- /search
    -- /styles
    layout.tsx
    page.tsx
 -- characters/[id]
    -- page.tsx
 error.tsx
 layout.tsx
 not-found.tsx

components/
context/
models/
services/
styles/
utils/

```

## Detailed Description

- **app/characters**: This module handles functionalities related to characters
  such character data, displaying character details, etc.
- **components**: This directory contains reusable UI components used throughout
  the application.
- **context**: Context providers are stored here to manage global state such as
  fetching characters data and storing characters as favorites.
- **models**: Data models and types used across the app are defined in this
  directory for type safety and consistency.
- **services**: API service files reside here, responsible for fetching data
  from external sources like the MARVEL API.
- **styles**: Stylesheets and styling utilities including global styles.
- **utils**: Utility functions that are used across multiple modules within the
  app.

## Getting Started

To set up the MARVEL app locally, follow these steps:

1. Clone the repository:
   `git clone https://github.com/francislagares/marvel-app`
2. Navigate to the project directory: `cd marvel-app`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm dev`
5. Access the app in your browser at `http://localhost:3000`

## Contribution Guidelines

Contributions to the MARVEL app are more than welcome! If you'd like to
contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request.

## Acknowledgments

- The MARVEL API for providing access to a vast repository of MARVEL universe
  data.
- Next.js for enabling efficient and scalable React applications.

## Author

Feel free to reach me out. Happy coding! 🚀

- [Francis Lagares](https://www.linkedin.com/in/francislagares)

<br />
