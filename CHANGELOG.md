# Changelog

All notable changes to PHARMORIS.

## [0.3.0] - 2026-03-18

### Features

- Implement initial page layout with Header, Grid, Table, and Card components, while removing unused SVG assets and global CSS resets.
- Implement pagination for the supply table, including page navigation, record count, and resetting the page on sort.
- Implement dynamic Chart component with dedicated skeleton loading and remove the Table component's dynamic loading setup.
- Introduce dynamically loaded Table component with skeleton loader to the dashboard page.
- Implement a dynamically loaded Header component with a skeleton loader.
- Migrate theme management from custom implementation to `next-themes` library.
- Add new dashboard UI, refactor table components, and update data structures and types.
- Implement advanced analytics dashboard UI.
- Implement comprehensive dashboard UI with new insights, hero, and footer components, alongside updates to existing dashboard elements.

### Maintenance

- Rename CI workflow to "Lint + Format Check"

### Refactoring

- Relocate Header component and restructure global CSS variables.
- Modularize header component into Navbar, Profile, and Notifications, and standardize text color utility classes across components.
- Standardize typography by switching to Plus Jakarta Sans and removing explicit monospace styles from components.
- Update styling classes for borders and backgrounds across various UI components.
- Reorganize dashboard and header components into feature-based modules and add `x.html` for prototyping.

## [0.2.0] - 2026-03-17

### Features

- Implement global styling with custom fonts and Tailwind CSS utility functions.
- Initialize application layout with custom fonts, updated metadata, dark mode styling, and a placeholder dashboard page.
- Introduce core data types and mock data for dashboard KPIs, charts, and drug supply.
- Introduce mock data and types for KPIs, cost savings, and drug supply.

## [0.1.0] - 2026-03-17

### Documentation

- Add project governance files and update README with project-specific details for assessment.

### Features

- Migrate to pnpm, update project metadata, add new dependencies, and introduce comprehensive build, install, and cleanup scripts.
- Initialize repository with Dependabot, issue, and pull request templates
- Set up Husky pre-commit hook with lint-staged for automated code formatting and linting.
- Implement automated release management with changelog generation and update project documentation.
- Configure CI workflow with linting and Prettier for code formatting.

### Refactoring

- Simplify git-cliff command execution by removing `pnpm exec`


