# Qwik issue

`pnpm run build.client` bundles pg into the dist client bundle.

### Already built files

There are 2 directories `dist_with_x_called` contains `process` checks. Search for `process.platform` or `win32`.

But when we remove the `x()` call from `./src/routes/index.tsx` in line 19: 
```ts
await x(); // THIS LINE BUNDLED pg INTO THE BUILD, but why?
```
pg is not bundled.


## Warnings when x is called

```
[plugin:vite:resolve] [plugin vite:resolve] Module "node:async_hooks" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/@builder.io+qwik-city@1.9.1_@types+node@20.12.8_typescript@5.3.3/node_modules/@builder.io/qwik-city/lib/middleware/request-handler/index.mjs". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "net" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg@8.11.5/node_modules/pg/lib/connection.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "path" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/index.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "fs" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/index.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "net" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg@8.11.5/node_modules/pg/lib/stream.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "tls" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg@8.11.5/node_modules/pg/lib/stream.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "dns" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg@8.11.5/node_modules/pg/lib/connection-parameters.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "crypto" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg@8.11.5/node_modules/pg/lib/crypto/utils-legacy.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "crypto" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg@8.11.5/node_modules/pg/lib/crypto/utils-webcrypto.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "fs" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pg-connection-string@2.6.4/node_modules/pg-connection-string/index.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "path" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/helper.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "stream" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/helper.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] [plugin vite:resolve] Module "stream" has been externalized for browser compatibility, imported by "C:/windows-path/qwik-bug/node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js". See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
```