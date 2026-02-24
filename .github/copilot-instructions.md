<!-- This file is generated automatically. Do not modify. Any manual changes may be overwritten. --->

The key words **"MUST"**, **"MUST NOT"**, **"REQUIRED"**, **"SHALL"**, **"SHALL NOT"**, **"SHOULD"**, **"SHOULD NOT"**, **"RECOMMENDED"**, **"MAY"**, and **"OPTIONAL"** in this document are to be interpreted as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

---

## Project guidelines

- This project is a React-based project and uses automatic JSX runtime. `import React from "react";` is not required in each file.
- The web application can be accessed by starting the development server through the modmesh editor extension and opening the provided URL in a web browser — served at [http://localhost:8423](http://localhost:8423).  
  You **MAY** elicit the user to open the URL at the specified address.  
  You **MUST NOT** use dependencies or libraries to try to access this URL programmatically.
- The modmesh editor extension is a Visual Studio Code extension that facilitates development by providing a Vite dev server and preloaded dependencies. As a result, Node and npm are not required to be installed.
- Node, npm, and any other JavaScript dependencies are managed by the modmesh editor extension.
- React, ReactDOM, and tailwindcss are the only dependencies included in the environment. No other libraries are preloaded and no other dependencies are available.
  - tailwindcss uses the browser build. So some features may be limited. Prefer to use vanilla CSS where possible.
- Additional dependencies **MUST NOT** be added; they are managed through the modmesh editor extension.
- Elicit the user to contact the GBSG Design Technology Team for support and guidance on any issues related to the development environment that cannot be resolved through documentation. For example, if the user cannot access the project through the provided URL and resolving this issue is beyond the available context, you **MUST** instruct them to reach out to the team for assistance.
- Project structure and file organization **MUST** follow the established conventions to ensure maintainability and scalability. Missing directories **SHOULD** be created as needed.
  - The `views` directory contains all the view components, each representing a distinct screen, page, route, or flow in the application. Some views may compose with each other, such as the `views/root/root.tsx`, which may expect a top level shell view that configures a shell layout with an outlet for nested views.
  - The `components` directory contains reusable UI components that can be shared across different views.
  - The `assets` directory contains static assets such as images, fonts, and stylesheets. These assets and assets outside of the `public` directory are processed and hashed by Vite.
  - The `public` directory contains static files that are served directly by the web server. Note that you **MUST** reference public assets using root absolute path — for example, `public/icon.png` should be referenced in source code as `/icon.png`. You **MAY** use either `assets` or `public` to store assets. Reference the [Vite static asset handling documentation](https://vitejs.dev/guide/assets.html) for more information.
  - The `index.html` file is the main entry point for the web application. The modmesh editor extension expects this file to be present and correctly configured. The `views/root/root.tsx` file is the main entry point for the React application and is responsible for rendering the root component.
  - Other files and folders in the project root are for configuration and tooling purposes. They **SHOULD NOT** be modified without understanding their impact on the development environment.
  - Modifications to top level files or folders **MAY** cause the development environment to become unstable.
  - `node_modules`, `package.json`, `package-lock.json` and other configuration files are not present in the project as they are managed by the modmesh editor extension.
  - Each component and view **MUST** have a dedicated directory inside views or components. Subcomponents that are tightly coupled **MAY** share a directory, but the project structure SHOULD always emphasize separation of concerns and readability.
- All designs **MUST** be built in a **responsive manner**.

## Figma Dev Mode MCP server guidelines

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets.
- If the Figma Dev Mode MCP Server returns a **localhost source** (e.g. `http://localhost:PORT/...`), that source **MUST** be used directly in the React component without modification.
- If the Figma Dev Mode MCP Server returns a **filesystem path** (e.g. `/Users/.../file.svg`), the asset **MUST** be rebased for use in the project:
  - The asset **MAY** be copied into the `public/` directory and referenced with a root-absolute path (e.g. `/file.svg`).
  - Alternatively, the asset **MAY** be copied into the `assets/` directory and imported using Vite’s static asset syntax (e.g. `import imgUrl from '../../assets/figma/file.svg'; <img src={imgUrl} />`).
  - Use the `public/` approach with root-absolute paths (`/filename.svg`) unless Vite imports are specifically needed.
- Direct absolute filesystem paths (e.g. `/Users/...`) **MUST NOT** be used in source code.
- When calling the Figma Dev Mode MCP server, set `dirForAssetWrites` to the final intended directory:
  - For public assets: `/path/to/project/public/`
  - For imported assets: `/path/to/project/assets/`
- Placeholder assets **MUST NOT** be used if a valid localhost or copied asset path is available. If no valid path exists, placeholders **MAY** be used as temporary stand-ins.
- Icon packages **MUST NOT** be used; all icons **MUST** come from the Figma payload.
- Figma fidelity **MUST** be prioritized to match designs exactly.
- Hardcoded values **MUST NOT** be used; Design tokens **SHOULD** be used from Figma where available.
- All code **MUST** follow WCAG accessibility requirements.
