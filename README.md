# ClientUserDB in progress

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
graph TD

## Architecture: copy and paste to https://www.mermaidchart.com/

<img src="/Architecture.svg" title="Architecture" />&nbsp;

### copy the entire code &#8595;

    A[Angular Application] --> B[Core Layer]
    A --> C[Feature Layer]
    A --> D[Shared Layer]
    A --> E[Assets]
    A --> F[Configuration Files]

    %% Core Layer
    B --> B1[Core Module]
    B1 --> B11[Auth Service]
    B1 --> B12[HTTP Interceptors]
    B1 --> B13[Guards]
    B1 --> B14[Global Error Handler]
    B1 --> B15[Store/State Management]
    
    %% API Connection
    B1 --> API[API Service Layer]
    API --> API1[HTTP Client]
    API --> API2[API Endpoints]
    API --> API3[Data Models/Interfaces]
    
    %% Feature Layer
    C --> C1[Feature Modules]
    C1 --> C11[Pages/Views]
    C11 --> C111[Page Components]
    C111 --> C1111[Templates]
    C111 --> C1112[Component Logic]
    C111 --> C1113[Component CSS]
    
    C1 --> C12[UI Components]
    C12 --> C121[Smart Components]
    C12 --> C122[Presentational Components]
    
    C1 --> C13[Feature Services]
    C1 --> C14[Feature Routing]
    
    %% Shared Layer
    D --> D1[Shared Module]
    D1 --> D11[Common Components]
    D1 --> D12[Directives]
    D1 --> D13[Pipes]
    D1 --> D14[Utils/Helpers]
    D1 --> D15[Models/Interfaces]
    
    %% Assets
    E --> E1[Images]
    E --> E2[Fonts]
    E --> E3[Global Styles]
    E --> E4[Environment Variables]
    
    %% Configuration Files
    F --> F1[package.json]
    F --> F2[angular.json]
    F --> F3[tsconfig.json]
    F --> F4[environment.ts]
    
    %% Global TypeScript Files
    A --> G[Global TypeScript Files]
    G --> G1[main.ts]
    G --> G2[app.module.ts]
    G --> G3[app-routing.module.ts]
    G --> G4[global.d.ts]
    
    %% Main Router
    A --> H[App Router]
    H --> H1[Route Guards]
    H --> H2[Lazy Loading]
    H --> H3[Route Resolvers]
