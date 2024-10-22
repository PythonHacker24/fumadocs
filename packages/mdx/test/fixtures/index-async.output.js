import { toRuntime, toRuntimeAsync } from "fumadocs-mdx"
export const docs = [toRuntimeAsync({}, () => import("./index.mdx?hash=hash&collection=docs"), {"path":"index.mdx","absolutePath":"$cwd/packages/mdx/test/fixtures/index.mdx"}), toRuntimeAsync({}, () => import("./folder/test.mdx?hash=hash&collection=docs"), {"path":"folder/test.mdx","absolutePath":"$cwd/packages/mdx/test/fixtures/folder/test.mdx"})];