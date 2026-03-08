# Luna

Dieses Projekt ist für ein einfaches und kostenloses Hosting über **Vercel** vorbereitet.

## Lokale Entwicklung

```bash
npm run dev
```

Die Seite ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Deployment auf Vercel (Kostenlos)

Dieses Projekt ist direkt mit GitHub und Vercel kompatibel. Folge diesen einfachen Schritten, um die Seite live zu schalten:

1. **GitHub Repository erstellen**: Erstelle ein neues, leeres Repository auf [GitHub](https://github.com/new).
2. **Code pushen**: Pushe den lokalen Code in dein neues Repository.
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEIN_USERNAME/DEIN_REPO_NAME.git
   git push -u origin main
   ```
3. **Bei Vercel anmelden**: Gehe zu [Vercel](https://vercel.com) und melde dich mit deinem GitHub-Konto an.
4. **Projekt importieren**:
   - Klicke im Vercel-Dashboard auf **"Add New..."** -> **"Project"**.
   - Wähle das gerade erstellte GitHub-Repository aus und klicke auf **"Import"**.
5. **Deployen**:
   - Du musst keine Einstellungen ändern. Vercel erkennt automatisch, dass es sich um ein Next.js Projekt handelt.
   - Klicke einfach auf **"Deploy"**.

Nach wenigen Sekunden ist deine Website online! Vercel weist dir automatisch eine kostenlose `.vercel.app` Domain zu (z.B. `luna.vercel.app`), die du jederzeit durch eine eigene Domain ersetzen kannst.

Sobald du zukünftig Änderungen am Code machst und diese auf GitHub pushst (mit `git push`), aktualisiert Vercel deine Website vollautomatisch.
