# Skills de diseño/frontend para este proyecto

Colección de Claude Code Skills instaladas a nivel de proyecto para usarse
siempre que se pida construir o mejorar una app o página web en este
repositorio: Apple HIG / Liquid Glass, animación, sistemas de diseño,
accesibilidad, revisión de frontend, etc.

## Origen

Curadas a partir de la lista pedida por el usuario. Se excluyeron
deliberadamente:

- Repos "marketplace" masivos y ajenos al tema (p. ej. un scrape de ~2100
  skills de seguridad/infra/ciencia de datos, o catálogos genéricos de
  cientos de skills de negocio/agentes) — se tomó solo el subconjunto de
  diseño/frontend de esos catálogos, no el catálogo completo.
- Repos duplicados/forks de otro ya incluido.
- Paquetes sin formato de skill (sin `SKILL.md`) o que ejecutan scripts de
  instalación arbitrarios (`install.js`/`postinstall`).

Se incluyen también varias skills oficiales de
[`anthropics/skills`](https://github.com/anthropics/skills) (theme-factory,
canvas-design, brand-guidelines, webapp-testing, algorithmic-art) que no
venían ya sincronizadas en la cuenta.

Cada carpeta conserva su propio `LICENSE`/`LICENSE.txt` cuando el repo de
origen lo incluía. Revisa la licencia de cada skill si vas a redistribuir
este repositorio.

Contenido revisado con un escaneo de patrones sospechosos (inyección de
prompts, exfiltración, pipe-to-shell) antes de incluirlo: no se encontró
nada malicioso.
