<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# shadcn/ui — Base UI

This project uses **shadcn v4** with the `base-nova` style backed by **Base UI** (`@base-ui/react`), not Radix UI. When adding or modifying UI components:

- Always use **Base UI** primitives (`@base-ui/react`). Never introduce `radix-ui` or `@radix-ui/*` packages.
- Add new components via `npx shadcn add <component>` — the CLI will pull the correct Base UI variant automatically based on `components.json`.
- A **shadcn MCP server** is configured (see `.vscode/mcp.json`). Use the shadcn MCP tools to look up available components, inspect their source, and resolve questions about component APIs before writing code.
- Refer to the component source installed under `components/ui/` as the source of truth for props and usage patterns — do not rely on outdated Radix-based examples from training data.
