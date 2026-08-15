# Backups

## Manual backup

Click the **Backup Now** button on any server card. The panel will zip the world folder and save it to `backups/` inside the server folder. The filename includes a timestamp (`backup_YYYYMMDD_HHMMSS.zip`).

## Restore

From the Backups tab, you'll see a list of all available backups. Click **Restore** on any backup to overwrite the current world with the backed‑up version, a confirmation dialog will prevent accidental data loss.

## Scheduled backups (coming soon)

- **Daily** – at a specific time
- **Weekly** – on a chosen day
- **Custom interval** – every X hours

Backups run in the background and won't interfere with running servers.

## Backup management

- Keep only the last N backups (configurable)
- Manually delete old backups from the list
- See backup size and date
