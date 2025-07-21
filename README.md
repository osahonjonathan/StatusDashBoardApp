

                             Status Dashboard

This project is a frontend dashboard built with React and TypeScript and Vite designed to provide internal visibility into project delivery status for different user types: Developers, Project Managers (PMs), and Executives. It uses static JSON data stored in memory and simulates dynamic behavior by allowing users to add and update tasks and milestones during the session.

Table of Contents

1: Setup Instructions

2: Design Decisions and Assumptions

3: AI Prompts Used

4: Reflection Questions


1. Setup Instructions
    To run this project locally, follow these steps:

⦁	Clone the repository:
            git clone https://github.com/osahonjonathan/RoleDashBoardApp.git
            cd role-dashboard-app

⦁	Install dependencies:
            npm install
           
⦁	 Start the development server:
             npm run dev
           This will open the application in your default browser at http://localhost:5173/

2. Design Decisions and Assumptions
      Frontend Architecture and State Management

⦁	React with TypeScript: Chosen for its component-based architecture, static typing, and mature ecosystem—enhancing maintainability, scalability, and developer experience for building complex user interfaces.

⦁	Modular Component Structure: This app follows a real-world project structure. Components, context,custom hooks, types, and mock data are organized into well-defined directories such as src/components, src/context, src/types, and src/data. This improves code readability, maintainability, and scalability as the application grows.

⦁	React Context API: Used for global state management via ProjectContext. This enables centralized access to shared project data across the Developer, Project Manager, and Executive views—avoiding prop-drilling and making it easy to update state from any role-based view.

⦁	In-Memory Static Data: The app simulates backend behavior using an in-memory data source (initialProjectsData). Users can update task progress, add tasks, and manage milestones—all changes reflect immediately within the session without requiring a backend.

⦁	Immutable State Updates: All state updates (e.g., via setProjects) are performed immutably by generating new references for arrays and objects. This ensures React can properly detect changes, triggering necessary re-renders while supporting optimization hooks like React.memo and useMemo.
   
     
      UI/UX Design and Responsiveness

⦁	Tailwind CSS: Used for styling due to its utility-first approach, which enables rapid UI development and consistent design without writing custom CSS. It's highly customizable and inherently responsive.

⦁	Responsive Layout: The dashboard is designed to be responsive, adapting to various screen sizes (mobile, tablet, desktop) using Tailwind's responsive utility classes (e.g., grid-cols-1 md:grid-cols-2 lg:grid-cols-3).

⦁	Intuitive Interactions:The app provides a seamless experience tailored to each role. Developers can easily update their task progress directly from their dashboard. Project Managers interact through focused modals to assign tasks and update milestone progress without clutter. Executives are presented with a clear, high-level view of all projects, highlighting progress and milestone achievements—ensuring quick insights with minimal effort.
                                           

⦁	Dynamic Milestone Labels: Milestone progress is dynamically translated into human-readable labels ("Not Started," "In Progress," "Delivered"), improving clarity.

⦁	Progress Bars: Visual indicators for progress are used to quickly convey status.



      Performance Optimizations

⦁	React.memo: Used to wrap ProjectCard and ProgressBar components. This prevents unnecessary re-renders by ensuring they only re-render when their props change shallowly.

⦁	useMemo: Applied inside the ProjectCard to memoize the getProjectHealth logic. This avoids recalculating the project’s health status on every render if the project prop hasn’t changed.

⦁	useCallback: Wrapped modal handler functions to avoid re-creating them unnecessarily when passed to memoized components.


⦁	React.lazy + Suspense: Views for Developer, Project Manager, and Executive roles were lazy-loaded using React.lazy and wrapped in Suspense with a fallback Spinner component. This reduces the initial load bundle and improves perceived performance.

 

      Assumptions

⦁	No Backend: The assessment explicitly states no backend is required, hence all data is static and managed in-memory.

⦁	No User Authentication/Authorization: The user role is selected via a dropdown, and there's no actual authentication or authorization logic implemented. It's assumed the dashboard is for internal use where role switching is permissible for demonstration.

⦁	Basic Form Validation:Form validation for adding tasks is basic (checking for non-empty fields). In a production app, more robust validation would be needed                             

⦁	Data Structure Stability: The structure of Project, Milestone, and Task objects is assumed to be stable throughout the session.

⦁	Alerts for Simplicity: alert() is used for simple user feedback in modals. In a production environment, custom modal dialogs or toast notifications would be preferred for better UI/UX.




      AI Prompts Used

⦁	Initial Setup & Core Structure: Create a React TypeScript application for a project dashboard. It needs three main views: Developer, Project Manager, and Executive. Use React Context for global state management. Provide initial static data for projects, milestones, and tasks.

⦁	Developer View Implementation: Develop the DeveloperView component in React TypeScript. It should display tasks assigned to a specific developer. Include a button to update task progress in 25% increments up to 100%. Ensure the UI is responsive using Tailwind CSS.

⦁	PM View & Modals:Design the PMView component for a project dashboard. It should list all projects with their milestones and tasks. Implement functionality to add new tasks and update milestone progress via modal forms. Use Tailwind CSS for styling and ensure type safety with TypeScript


      Failed Prompts

⦁	Generate a full working project dashboard in React with tasks and milestone editing for 3 user roles.: The generated solution was too generic, lacked modularity, and didn’t reflect real-world logic like dynamic progress calculation or scoped updates by user role. I had to split the requirements and build components incrementally with clearer prompts to get accurate guidance.



      Reflection Question


             UI Design Approach

⦁	Developer View: Simple and focused on updating assigned tasks.

⦁	PM View: Shows full project details with modals for task/milestone management.

⦁	Executive View: High-level overview with progress summaries.


             State Management (React Context)

⦁	Developer View: Lightweight, avoids prop-drilling, perfect for static data.

⦁	Why Not Redux/Zustand: Overkill for this scale; no need for async flows or persistence

⦁	Strategy: Global project state shared via ProjectContext.



             Simulating Dynamic Behavior

⦁	How: Used useState to simulate adding/updating tasks and milestones..

⦁	Limitation: No persistence, multi-user sync, or backend logic. Changes are lost on refresh



             Challenges & Solutions

⦁	Immutable State Updates: Used map() and spread syntax carefully.

⦁	Typing with TypeScript: Defined and reused clear interfaces throughout.
