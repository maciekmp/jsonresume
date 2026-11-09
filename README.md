# JSON Resume — Maciej Płusa

My résumé maintained as structured JSON, with theme customization and PDF export through JSON Resume.

## Files

- `resume.json`: résumé content.
- `resume.pdf`: exported document; regenerate it after changing the content.
- `jsonresume-theme-blank/`: local theme used by the alternative preview script.
- `jsonresume-theme-overwrite/`: additional local theme customizations.
- `package.json`: preview and export commands.

## Install

Requires Node.js and npm. From the repository root:

```sh
git clone https://github.com/maciekmp/jsonresume.git
cd jsonresume
npm ci
```

## Preview and export

| Command | Result |
| --- | --- |
| `npm run serve` | Start the local preview using the installed `actual` theme. Follow the URL printed by the CLI. |
| `npm run serve-blank` | Preview using `./jsonresume-theme-blank`. |
| `npm run export` | Generate `resume.pdf` using the `actual` theme. |

The default preview and export use `jsonresume-theme-actual`, not the local theme directories.

## Update the résumé

1. Edit `resume.json`.
2. Preview the result with `npm run serve`.
3. Run `npm run export` to regenerate the PDF.
4. Open the PDF and check page breaks, links and typography before sharing or committing it.

This repository contains a personal résumé. Replace the content with your own information before reusing the setup.
