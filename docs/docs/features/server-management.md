# Server Management

## Server cards

Each server appears as a card with:

- **Status** – running / stopped / starting / stopping
- **Server name** (folder name or custom display name)
- **Port** – the port your server uses
- **Players** – current online count / max players
- **RAM allocation** – how much memory is assigned

## Controls

- **Start** – launches the server with `java -jar server.jar`
- **Stop** – gracefully shuts down the server (sends the `stop` command)
- **Restart** – stops then starts again (useful after config changes)
- **Settings** – opens the settings panel for that server

## RAM allocation

You can set RAM per server from the settings panel. The default is 2GB, but you can adjust it from 512MB up to your system's limit.

## Server properties

Edit any `server.properties` field directly from the UI, port, MOTD, max players, gamemode, difficulty, level name, online mode, and whitelist.
