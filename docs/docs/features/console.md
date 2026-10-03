# Console

The Console page streams live output from any of your servers and lets you send commands directly to it.

## Selecting a server

Use the dropdown at the top to pick which server you want to view. If a new server is created while you're on this page, it will show up in the dropdown within a few seconds — no need to switch tabs.

## Live output

Everything the selected server prints is shown in real time. Startup logs, player joins, chat messages, warnings, and errors all appear as they happen.

The console reads from `falkmc_console.log` inside the server's folder. When a server is restarted, the console detects the log reset and picks up the new output cleanly.

## Sending commands

Type a command into the input field at the bottom and press **Enter** (or click **Send**). The command is sent straight to the running server's console, exactly as if you'd typed it into the server itself.

Common examples:

- `list` — show currently online players
- `say Hello everyone!` — broadcast a message to the server
- `op PlayerName` — give a player operator status
- `whitelist add PlayerName` — add someone to the whitelist
- `stop` — gracefully shut down the server

Your typed command appears in the console with a `>` prefix so you can see what you sent.

## Offline behaviour

When the selected server isn't running, the **Send** button greys out and the input is disabled. As soon as the server starts, it enables again automatically.

## Controls

- **Auto-scroll** — when enabled, the console follows new output as it arrives. Turn this off to scroll back and read older entries without being jumped to the bottom.
- **Clear** — wipes the current console text. The log file on disk is unaffected.

## Where output is stored

Each server keeps its own log inside its server folder, named `falkmc_console.log`. The full path is:
Documents/FalkMC/servers/SERVER_NAME/falkmc_console.log

Replace `SERVER_NAME` with the folder name of your server.
The file is overwritten each time the server is started, so it only contains the current session.
