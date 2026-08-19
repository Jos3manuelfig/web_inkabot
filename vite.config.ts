import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Las páginas legales viven en public/ como HTML estático (sin React), para que
// el rastreador de Meta pueda leerlas sin ejecutar JavaScript. En producción,
// vercel.json reescribe /privacidad -> /privacidad/index.html; el dev server de
// Vite no lee ese archivo, así que replicamos la reescritura aquí para que los
// enlaces funcionen igual en local que en producción.
const PAGINAS_ESTATICAS = [
  "/privacidad",
  "/terminos",
  "/eliminacion-de-datos",
  "/informacion-legal",
];

const servirPaginasLegales = (): Plugin => ({
  name: "servir-paginas-legales",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const ruta = req.url?.split("?")[0].replace(/\/$/, "");
      if (ruta && PAGINAS_ESTATICAS.includes(ruta)) {
        req.url = `${ruta}/index.html`;
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), servirPaginasLegales(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
