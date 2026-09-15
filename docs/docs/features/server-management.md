# Server Management

## Server cards

Each server appears as a card with:
- **Status dot** – green when running, grey when stopped
- **Server name** – the folder name you chose when creating it
- **Port and MOTD** – pulled live from `server.properties`
- **Player count** – current online / max players (updates every 5 seconds)
- **RAM allocation** – read from the server's `falkmc.json`

## Controls

- **Start** – launches the server via `java -jar server.jar -nogui`
- **Stop** – sends the `stop` command, then terminates if needed
- **Restart** – stops then starts again
- **⚙ Settings** – opens the per-server settings dialog

## IP display

Every server card shows both your **local** and **public IP** with the server's port. Both have a **Copy** button for sharing with friends and an **eye icon** to hide them when you don't want them visible on the screen.

## RAM allocation

Set per server in **Settings → RAM Allocation** (1G, 2G, 4G, 6G, 8G, 12G, 16G). The panel passes this to Java as `-Xmx` and `-Xms` when starting the server.

## Server properties

Everything in `server.properties` can be edited from the **Settings** dialog:
- Server Port
- MOTD
- Max Players
- Level Name
- Gamemode
- Difficulty
- Online Mode
- Whitelist

Changes save immediately when you click **Save**.

## Where files live

All server folders live in `Documents\FalkMC\servers`, each one contains:
- `server.jar` – the Minecraft server
- `server.properties` – server configuration
- `eula.txt` – Mojang EULA acceptance
- `falkmc.json` – FalkMC-specific settings (display name, RAM, etc.)
- `falkmc_console.log` – server output log
- `world/` – your world save (created after first start)
- `libraries/`, `versions/` – extracted by the server on first launch

## Logs

Server output is written to `falkmc_console.log` in the server folder. If a server crashes on startup, this file contains the full error output.
