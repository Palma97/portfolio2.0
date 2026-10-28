# Portafolio de Nicolás Palma

Portafolio personal construido con Next.js y exportado como un sitio estático
para publicarlo en GitHub Pages.

## Desarrollo local

Desde esta carpeta (`portafolio2`), instala las dependencias y ejecuta el
servidor de desarrollo:

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Compilación estática

```bash
npm run build
```

Next.js genera el sitio listo para publicar en `out/`. La configuración de
`basePath` está preparada para el repositorio
[`Palma97/portfolio2.0`](https://github.com/Palma97/portfolio2.0), cuyo sitio
se publica en:

<https://palma97.github.io/portfolio2.0/>

## Publicación en GitHub Pages

El workflow [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml)
compila y publica el portafolio cada vez que se actualiza `main` con cambios en
`portafolio2/`. También se puede iniciar manualmente desde la pestaña **Actions**
del repositorio.

Para habilitarlo en GitHub:

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Envía los cambios a `main` o ejecuta **Deploy portfolio to GitHub Pages**
   manualmente desde **Actions**.
4. Cuando el workflow finalice correctamente, visita
   <https://palma97.github.io/portfolio2.0/>.
