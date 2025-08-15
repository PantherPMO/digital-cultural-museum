# Project Overview: Digital Cultural Heritage Museum

This project is a modern, voice-controlled digital museum designed to make cultural heritage accessible to everyone. It leverages cutting-edge web technologies to provide an immersive and inclusive experience for exploring artifacts and exhibitions.

## Technologies Used

*   **Frontend Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **UI Library:** shadcn-ui (built on Radix UI)
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **State Management/Data Fetching:** React Query (for server state)
*   **Icons:** Lucide React, React Icons
*   **Form Management:** React Hook Form
*   **Schema Validation:** Zod
*   **Carousel:** Embla Carousel React

## Key Features

*   **Voice Control:** Advanced voice navigation and command system for hands-free exploration.
*   **Explore Collection:** Browse and filter thousands of digitized artifacts.
*   **Curated Exhibitions:** Immersive digital exhibitions with detailed narratives and rich media.
*   **Accessibility Focus:** Designed with universal access in mind, including WCAG 2.2 compliance.
*   **Ethics & Privacy:** Dedicated sections outlining data handling, cultural sensitivity, and user control.
*   **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.

## Project Structure

The project follows a component-based architecture, primarily organized within the `src` directory:

*   `src/App.tsx`: Main application entry point, setting up routing and global providers.
*   `src/main.tsx`: Renders the React application.
*   `src/index.css`: Global styles, including Tailwind CSS directives and custom theme variables.
*   `src/components/`: Contains reusable UI components, including `Header`, `Footer`, `VoiceControl`, and a `ui` subdirectory for shadcn-ui components.
*   `src/pages/`: Houses the main views/pages of the application (e.g., `Home`, `Explore`, `Exhibitions`, `About`, `Ethics`, `NotFound`).
*   `src/hooks/`: Custom React hooks for shared logic (e.g., `use-mobile`, `use-toast`).
*   `src/lib/`: Utility functions (e.g., `utils.ts` for `clsx` and `tailwind-merge`).

## Development and Deployment

The project uses `npm` for package management and `vite` for development and building.

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the project for production.
*   `npm run lint`: Runs ESLint for code quality checks.

### Committing Changes

After completing a task, ensure all relevant files are staged and committed with clear, concise messages. Use `git status` to check for uncommitted changes and `git add <file>...` to stage them. Each commit should represent a single logical change.