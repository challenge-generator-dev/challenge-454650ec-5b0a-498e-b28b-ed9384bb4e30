# Desarrollo de una API REST para Catálogo de Productos

La empresa PragmaFintech necesita exponer un catálogo de productos a través de una API REST. La API debe manejar la validación de entradas y el manejo centralizado de errores. El catálogo incluye productos con nombre, precio, stock y categoría. Los precios no pueden ser negativos y los nombres no pueden duplicarse. Cuando una validación falla, el sistema debe responder con un mensaje claro indicando el error.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construcción de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Implementación de Endpoints Básicos

**Objetivo:** Crear endpoints para listar y crear productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementa los endpoints GET /products para listar todos los productos y POST /products para crear un nuevo producto.
- Asegúrate de que los endpoints manejen la validación básica de entradas (nombre, precio, stock, categoría).
- El endpoint POST debe retornar un código de estado 201 y el producto creado si la validación es exitosa.

**Entregable:** Endpoints GET /products y POST /products funcionales con validación básica de entradas.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo estructurar la información de los productos.
- Considera cómo manejar los errores de validación.

</details>

### Fase 2: Implementación de Validaciones y Manejo de Errores

**Objetivo:** Agregar validaciones avanzadas y manejo centralizado de errores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa validaciones para asegurar que los precios no sean negativos y los nombres no se dupliquen.
- Crea un middleware para manejar errores de validación y retornar mensajes de error claros.
- Asegúrate de que los endpoints retornen el código de estado correcto en caso de errores de validación.

**Entregable:** Endpoints GET /products y POST /products con validaciones avanzadas y manejo centralizado de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo implementar un middleware para centralizar el manejo de errores.
- Piensa en cómo comunicar los errores de validación al usuario.

</details>

### Fase 3: Optimización y Refactorización

**Objetivo:** Optimizar y refactorizar el código para mejorar la legibilidad y mantenibilidad.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Revisa el código implementado y busca oportunidades para optimizar y refactorizar.
- Aplica principios de diseño limpio y asegura que el código sea legible y mantenible.
- Documenta el código con comentarios claros y descriptivos.

**Entregable:** Código refactorizado y optimizado para los endpoints GET /products y POST /products.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo aplicar principios de diseño limpio en tu código.
- Piensa en cómo hacer que tu código sea más legible y mantenible.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints REST y cuál es su propósito en una API?
- **paraQueSirve**: ¿Para qué sirven las validaciones en los endpoints REST?
- **comoSeUsa**: ¿Cómo se implementa el manejo centralizado de errores en una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones en endpoints REST y cómo se pueden evitar?

## Criterios de Evaluacion

- Implementación de endpoints GET /products y POST /products.
- Validación de entradas para los campos de los productos.
- Manejo centralizado de errores con mensajes claros.
- Refactorización y optimización del código.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
