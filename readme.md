# Proyecto Boilerplate Node.js con TypeScript

# Proyecto Boilerplate Node.js con TypeScript

🚀 Este es un proyecto boilerplate para iniciar rápidamente con Node.js y TypeScript. Proporciona una estructura básica y configuración inicial para desarrollar aplicaciones con estas tecnologías.

## ✨ Características

- **Node.js**: Plataforma de ejecución para JavaScript en el servidor.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
- **Biome**: Herramienta para el análisis y formateo de código.
- **Drizzle Kit**: Herramienta para la gestión de bases de datos.
- **TSX**: Herramienta para ejecutar archivos TypeScript.
- **TS-Node**: Ejecución de TypeScript y REPL para Node.js.

## 📂 Estructura del Proyecto

```
src
├── config
│   └── env.ts
├── db
│   ├── schemas
│   │   ├── .gitkeep
│   │   └── index.ts
│   └── index.ts
├── lib
├── migrate
├── services
│   └── main.ts
├── runner.ts
├── .gitignore
├── biome.json
├── drizzle.config.ts
├── package.json
├── pnpm-lock.yaml
├── readme.md
└── tsconfig.json

```

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## ⚙️ Instalación

1. Clona el repositorio:
     ```sh
     git clone https://github.com/tu-usuario/template-node-ts.git
     ```
2. Navega al directorio del proyecto:
     ```sh
     cd template-node-ts
     ```
3. Instala las dependencias:
     ```sh
     npm install
     ```
     o
     ```sh
     yarn install
     ```

## 📜 Scripts Disponibles

- `build`: Compila el proyecto TypeScript a JavaScript.
- `start`: Inicia la aplicación.
- `dev`: Inicia la aplicación en modo desarrollo con recarga automática.
- `lint`: Ejecuta Biome para analizar el código.
- `format`: Ejecuta Biome para formatear el código.
- `test`: Ejecuta las pruebas.

## 🚀 Uso

Para iniciar la aplicación en modo desarrollo, ejecuta:
```sh
npm run dev
```
o
```sh
yarn dev
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📦 Paquetes Utilizados

Este proyecto utiliza los siguientes paquetes:

- [Node.js](https://nodejs.org/): Plataforma de ejecución para JavaScript en el servidor.
- [TypeScript](https://www.typescriptlang.org/): Un superconjunto de JavaScript que añade tipos estáticos.
- [Biome](https://biomejs.dev/): Herramienta para el análisis y formateo de código.
- [Drizzle Kit](https://github.com/drizzle-team/drizzle-kit): Herramienta para la gestión de bases de datos.
- [TSX](https://github.com/esbuild-kit/tsx): Herramienta para ejecutar archivos TypeScript.
- [TS-Node](https://typestrong.org/ts-node/): Ejecución de TypeScript y REPL para Node.js.
- [Clerk](https://clerk.dev/): Autenticación y gestión de usuarios.
- [Hono](https://honojs.dev/): Framework de aplicaciones web para Node.js.
- [Dotenv](https://github.com/motdotla/dotenv): Carga variables de entorno desde un archivo `.env`.
- [Zod](https://zod.dev/): Biblioteca de validación de esquemas.
- [Postgres](https://github.com/porsager/postgres): Cliente PostgreSQL para Node.js.
- [Std-env](https://github.com/unjs/std-env): Detección de entorno estándar.

Para más detalles sobre cada paquete, consulta la documentación enlazada.