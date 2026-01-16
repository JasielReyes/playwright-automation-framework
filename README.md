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

##  Estructura del Proyecto
## Project Structure

```txt
PLAYWRIGHT-AUTOMATION-FRAMEWORK/
│
├─ core/                # Utilidades y clases compartidas
│   ├─ Logger.ts        # Manejo de logs de ejecución
│   └─ PdfReport.ts     # Generación de reportes PDF
│  
│
├─ features/            # Archivos .feature de Cucumber
│   └─ login.feature
│
├─ pages/               # Páginas de la aplicación (Page Object Model)
│   └─ LoginPage.ts
│
├─ reports/             # Reportes de ejecución
│   ├─ logs/            # Archivos de log
│   │   └─ execution.log
│   ├─ pdf/             # Reportes PDF
│   │   └─ Login_con_credenciales.pdf
│   └─ screenshots/     # Capturas de pantalla de pruebas
│
├─ steps/               # Definición de pasos de Cucumber
│   └─ login.steps.ts
│
├─ tests/               # Hooks y configuraciones globales
│   └─ hooks.ts
│
├─ cucumber.js          # Configuración de Cucumber
├─ package.json         # Dependencias y scripts
├─ tsconfig.json        # Configuración de TypeScript
└─ README.md            # Este archivo
