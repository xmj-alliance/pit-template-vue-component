# pit-template-vue-component

Template for Vue component library

Featuring Vite, Vue, Jest, TypeScript.

## Use the template

Follow the `_Dummy` example to create your component library.

Add import and export in `index.ts`

Replace `dummy-component` with your component names in these locations:
- package.json
- vite.config.ts

## Build

``` shell
pnpm install
npm run build
```

## Import this module

Import the esm (by referencing this module should be enough),
- **and** the `style.css`

``` typescript
import { Dummy } from "pit-template-vue-component";
```

``` scss
// usually the global style.scss
@import "~pit-template-vue-component/style.css";
// => or alternatively import in the JS way in main.ts
```

## Vite readmes

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
