# Is Empty (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/is-empty-es)
[JSR](https://jsr.io/@hugoalh/is-empty)
[NPM](https://www.npmjs.com/package/@hugoalh/is-empty)

An ECMAScript module to determine whether the item is empty.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-empty-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-empty[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-empty[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

## 🧩 APIs

- ```ts
  function isEmpty(item: unknown): boolean;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/is-empty)

## ✍️ Examples

- ```ts
  isEmpty(true);
  //=> false
  ```
- ```ts
  isEmpty([{}]);
  //=> false
  ```
- ```ts
  isEmpty([]);
  //=> true
  ```
- ```ts
  isEmpty({});
  //=> true
  ```
