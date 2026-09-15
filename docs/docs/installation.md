# Installation

## Download

1. Go to the [releases page](https://github.com/FalkMC/panel/releases) and download the latest `FalkMC_v0.1.exe`.

## Run

2. Double-click the `.exe`, no installation required. On first launch, the panel creates a `FalkMC` folder inside your Documents, which holds your settings and servers.

## First launch

3. On first run, FalkMC Panel will:
   - Create `Documents\FalkMC\settings.json`
   - Create `Documents\FalkMC\servers\` for your server files
   - Show you an empty server list

## Need Java?

FalkMC Panel requires **Java 21 or higher** to run Minecraft servers. If you don't have it, download [Adoptium Temurin 21](https://adoptium.net/temurin/releases/?version=21).

The panel detects Java automatically and will show a download link if it's missing.

## Windows SmartScreen

On first launch, Windows may show a warning because FalkMC isn't code-signed yet. Click **More info** > **Run anyway** to continue.

## Troubleshooting

- **"Java not found"** – install Java 21+ from Adoptium. The panel will detect it on the next launch.
- **Port already in use** – change the server port in the server's **Settings** dialog.
- **Server won't start** – check the `falkmc_console.log` file inside the server folder for error details.
