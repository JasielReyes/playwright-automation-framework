# Este es un desarrollo de Playwright + Cucumber Automation Framework 

# Descripcion about this project

Framework de automatización de pruebas usando **Playwright**, **Cucumber (BDD)** y **TypeScript**, enfocado en buenas prácticas como **Page Object Model** y manejo correcto del ciclo de vida del navegador.

Este proyecto automatiza el flujo de **login exitoso** en la aplicación de prueba **SauceDemo** con el fin de mostrar mi forma de trabajo en base a un proyecto.

---

## Tecnologia y metodos usados
## Techology in this project
- Playwright
- Cucumber (BDD)
- TypeScript
- Node.js
- Page Object Model (POM)

---

## Importaciones
## Imports

- generatePdfReport (Generar PDFs)
- winston (Generar Logs)

---

## World Configuration

El framework utiliza un `Custom World` para compartir el estado del navegador
por escenario, permitiendo escalabilidad y ejecución paralela.

- `world.ts` gestiona browser, context y page
- Cada escenario tiene su propia instancia
- Evita el uso de variables globales


##  Estructura del Proyecto
## Project Structure

```txt
playwright-automation-framework/
│
├── features/                # Features Gherkin (.feature)
│   └── auth/
│       └── login.feature
│       └── logout.feature
│
├── steps/                   # Step Definitions
│   └── login.steps.ts
│   └── auth.steps.ts
│
├── pages/                   # Page Objects
│   └── LoginPage.ts
│   └── InventoryPage.ts
│
tests/
├── hooks.ts                # Hooks Before / After / AfterStep
├── world.ts                # Enviromets and this.page
│
├── core/
│   └── Logger.ts
│   └── PdfReport.ts
│
├── reports/
│   └── screenshots/          # Evidencias por escenario
│
├── cucumber.js               # Configuración Cucumber
├── package.json
├── tsconfig.json
└── README.md

