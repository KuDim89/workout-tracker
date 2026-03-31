## Summary

- Describe the purpose of this PR.
- List the key architectural or behavior changes.

## Test plan

- [ ] `pnpm lint:root`
- [ ] `pnpm typecheck:root`
- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm build`
- [ ] `pnpm test`

## Checklist

- [ ] Changes follow workspace dependency rules (`apps -> packages`).
- [ ] No app imports from another app.
- [ ] Shared contracts are added to `packages/types` when needed.
