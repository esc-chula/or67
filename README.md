# ESC Core Website

This is a monorepo for every front-end project in the ESC Core Website.

## Getting Started

### Local Development

`node v18 w/ pnpm v8`

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start specific project
pnpm dev --filter <project-name>
```

### Projects List

| Project Name | Description                                                                | Network Port |
| ------------ | -------------------------------------------------------------------------- | ------------ |
| `web`        | Main website [intania.org](https://intania.org)                            | 3000         |
| `tech`       | Tech department website [tech.intania.org](https://tech.intania.org)       | 3001         |
| `link`       | Link shortener [intania.link](https://intania.link)                        | 3002         |
| `account`    | OIDC account management [account.intania.org](https://account.intania.org) | 3003         |
| `election`   | Election system [election.intania.org](https://election.intania.org)       | 3004         |
| `or67`       | Orientation website 2567                                                   | 3005         |

## Turbo

### Package Installation

```bash
# Install a package in a workspace
pnpm add <package> --filter <workspace>

# Remove a package from a workspace
pnpm uninstall <package> --filter <workspace>

# Upgrade a package in a workspace
pnpm update <package> --filter <workspace>
```

### Add ui components

Use the pre-made script:

```sh
pnpm ui:add <component-name>
```

> This works just like the add command in the `shadcn/ui` CLI.

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
pnpm turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `pnpm install` after copying an app.

## Deployments

Deployment ID: `yn6xapqByIKpwM7h`
