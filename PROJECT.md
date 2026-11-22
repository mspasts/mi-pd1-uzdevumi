# Projekta konteksts: Mani uzdevumi

## 1. Mērķis
Vienkārša, moderna un responsīva uzdevumu saraksta (To-Do) tīmekļa lietotne latviešu valodā. Lietotne darbojas pārlūkprogrammā lokāli bez servera un bez interneta savienojuma, izmantojot klienta puses tehnoloģijas.

## 2. Failu struktūra
- `index.html` — semantiska HTML5 struktūra (ievades lauks, termiņa izvēle, statistikas panelis, pogas, filtri, uzdevumu saraksts).
- `style.css` — vizuālais noformējums (CSS mainīgie, Flexbox izkārtojums, termiņu un statistikas paneļa stili).
- `app.js` — lietotnes biznesa loģika, DOM manipulācijas un stāvokļa pārvaldība.
- `PROJECT.md` — šis projekta konteksta un arhitektūras apraksts.
- `skice.jpg` — papīra skices fotoattēls statistikas panelim (U3).
- `uzvednes.txt` — MI izstrādē izmantoto uzvedņu un šablonu žurnāls.

## 3. Datu struktūra
Uzdevumi tiek glabāti masīvā `tasks`, kas tiek serializēts JSON formātā `LocalStorage` ar atslēgu `mani_uzdevumi_tasks`.

Objekta `task` struktūra:
```javascript
{
  id: string,               // Unikāls identifikators (laika zīmogs)
  text: string,             // Uzdevuma nosaukums/teksts
  completed: boolean,        // Izpildes statuss (true / false)
  dueDate: string | null    // Izpildes termiņš formātā YYYY-MM-DD vai null
}
```

## 4. Funkcijas (app.js)
1. `loadTasks()` — ielādē un parsē uzdevumus no `LocalStorage`; kļūdas gadījumā atgriež tukšu masīvu.
2. `saveTasks()` — serializē un saglabā pašreizējo `tasks` masīvu `LocalStorage`.
3. `formatDate(dateStr)` — palīgfunkcija: pārveido `YYYY-MM-DD` uz lietotājam draudzīgu `DD.MM.YYYY`.
4. `isOverdue(dueDate, completed)` — palīgfunkcija: salīdzina termiņu ar šodienas datumu un atgriež true, ja uzdevums ir nokavēts un nav pabeigts.
5. `createDateBadge(dueDate, completed)` — palīgfunkcija: izveido termiņa birku ar ikonu un norādi "(nokavēts)", ja termiņš pagājis.
6. `renderStats()` — aprēķina un atjauno statistikas rādītājus (Kopā, Izpildīti, Nokavēti) un progresa joslu (0–100%, bez NaN).
7. `addTask()` — nolasa tekstu un termiņu, apgriež atstarpes (`trim`), izveido jaunu uzdevumu un izsauc `render`.
8. `toggleTask(id)` — pārslēdz uzdevuma `completed` statusu un saglabā izmaiņas.
9. `deleteTask(id)` — izdzēš uzdevumu pēc tā `id` un atjaunina sarakstu.
10. `startEdit(id, textSpan, container)` — aizstāj uzdevuma tekstu ar ievades lauku rediģēšanai (Enter saglabā, Escape atceļ).
11. `finishEdit(id, newText)` — validē un saglabā rediģēto tekstu `tasks` masīvā.
12. `createTaskElement(task)` — izveido un atgriež saraksta elementa (`li`) DOM koku ar piesaistītiem notikumiem, termiņu un nokavējuma vizuālo statusu.
13. `getFilteredTasks()` — atgriež uzdevumu sarakstu atbilstoši aktīvajam filtram (`all`, `active`, `completed`).
14. `updateCounter()` — aprēķina un attēlo atlikušo aktīvo uzdevumu skaitu.
15. `render()` — pilnībā pārzīmē uzdevumu sarakstu, atjauno skaitītāju un izsauc `renderStats()`.

## 5. Konvencijas un ierobežojumi
- **Tīrs JS:** Netiek izmantotas ārējas bibliotēkas vai ietvari (nav React, jQuery u.tml.).
- **Drošība (XSS aizsardzība):** Lietotāja ievadītais teksts tiek ievietots tikai ar `textContent`, nekad ar `innerHTML`.
- **Datu integritāte:** Ievades vienmēr tiek apgrieztas ar `.trim()`. Tukši uzdevumi netiek pievienoti.
- **Drošs dalījums:** Statistikas procenti nekad nerada `NaN` (tukšā sarakstā rāda 0%).
- **Lokalizācija:** Lietotāja saskarne ir latviešu valodā.
