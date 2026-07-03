# 🎩 Dokumenten-Butler

Dein persönlicher Butler für Verträge, Rechnungen und Fristen — eine schlanke PWA (Smartphone + Desktop).

**Was er kann:**
- 📄 Dokumente hochladen oder Briefe fotografieren — die KI liest Laufzeit, Kündigungsfrist, Preise, Kundennummern automatisch aus
- ⏰ Fristen-Ampel: sieht auf einen Blick, was bald gekündigt werden muss (inkl. Gesetz für faire Verbraucherverträge ab 3/2022)
- 📅 Kündigungsfristen per Klick in den Kalender übernehmen (.ics)
- 📁 Privates Dokumentenarchiv je Haushalt (RLS-geschützt in Supabase)
- 👥 Haushalt teilbar per Einladungs-Code

**Technik:** eine einzige `index.html` (kein Build-Step), Supabase (Auth, Postgres, Storage, Edge Function mit Claude-KI), GitHub Pages Hosting. In diesem Repo liegen nur Code und der öffentliche (RLS-geschützte) API-Schlüssel — niemals Dokumente oder persönliche Daten.
