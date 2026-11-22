# Praktiskie darbi PD1 un PD2: Lietotnes izstrāde un paplašināšana ar MI
## Soli pa solim rokasgrāmata (Apvienotais ceļvedis)

Šajā rokasgrāmatā apvienoti divi secīgi praktiskie darbi:
1. **PD1: Pirmā strādājošā lietotne ar MI** – bāzes lietotnes "Mani uzdevumi" izveide, testēšana, kļūdu labošana, rediģēšanas funkcija un publicēšana GitHub.
2. **PD2: Lietotnes paplašināšana ar MI** – lietotnes papildināšana ar 4 jaunām funkcijām (termiņš, statistika, kārtošana A–Z, dzēst izpildītos), izmantojot konteksta failu `PROJECT.md`, papīra skici, divu modeļu (Claude vs ChatGPT) salīdzinājumu atsevišķos Git zaros un kopsavilkumu jaunai sarunai.

---

# I DAĻA: PD1 – Pirmā strādājošā lietotne ar MI

## 1. Prasības un sagatavošanās videi

| Prasība | Kā sagatavot / Pārbaudīt |
|---|---|
| **Git** | Lejupielādējiet [Git for Windows](https://git-scm.com/download/win). Terminālī: `git --version`. |
| **GitHub konts** | Reģistrējieties [GitHub](https://github.com). Iestatiet autentifikāciju (SSH atslēgu vai Personālo piekļuves marķieri). |
| **VS Code** | Koda redaktors failu labošanai un pārvaldībai. |
| **MI čats** | Bezmaksas čats (ChatGPT, Claude vai Gemini) uzvedņu nosūtīšanai. |
| **Pārlūkprogramma** | Chrome, Edge vai Firefox (ar izstrādātāja rīkiem F12). |

### Komandas projekta sākšanai
```bash
# Izveido mapi un pāriet uz to
mkdir "c:\VS Code Projects\mi-pd1-uzdevumi"
cd "c:\VS Code Projects\mi-pd1-uzdevumi"

# Inicializē Git
git init
```

---

## 2. PD1 projekta failu struktūra
```
mi-pd1-uzdevumi/
├── index.html       # Lietotnes HTML struktūra
├── style.css        # Vizuālais noformējums (CSS)
├── app.js           # Biznesa loģika un LocalStorage (JavaScript)
└── README.md        # Projekta dokumentācija
```

---

## 3. Uzvednes (prompt) izveide – 6 daļu struktūra

Lai MI ģenerētu kvalitatīvu kodu bez liekiem papildinājumiem, uzvedne jāsadala 6 skaidrās daļās:

1. **Loma / Konteksts**: "Tu esi pieredzējis front-end tīmekļa izstrādātājs."
2. **Mērķis**: "Izveido vienkāršu, funkcionālu uzdevumu pārvaldības tīmekļa lietotni 'Mani uzdevumi'."
3. **Tehnoloģijas**: "Tikai HTML5, CSS3 un tīrs JavaScript (ES6+). Dati jāglabā pārlūka LocalStorage."
4. **Funkcionalitāte**:
   - Ievades lauks un poga jauna uzdevuma pievienošanai.
   - Uzdevumu saraksts ar statusa atzīmēšanu (checkbox / nosvītrošana).
   - Dzēšanas poga katram uzdevumam.
   - Filtru pogas: "Visi", "Aktīvie", "Izpildītie".
   - Atlikušo uzdevumu skaitītājs.
   - Pievienošana, nospiežot taustiņu `Enter`.
   - Latviešu valodas diakritikas (garumzīmju, mīkstinājuma zīmju) atbalsts.
5. **Ierobežojumi**: "Nedrīkst izmantot ārējas bibliotēkas (Bootstrap, React, Tailwind, jQuery vai CDN). Viss kods tikai 3 failos: `index.html`, `style.css`, `app.js`."
6. **Izvades formāts**: "Sniedz pilnu, gatavu kodu katram failam atsevišķos koda blokos ar komentāriem."

---

## 4. Koda ģenerēšana un pirmais Git komits

1. Ievadiet 6 daļu uzvedni MI rīkā.
2. Nokopējiet iegūto kodu atbilstošajos failos: `index.html`, `style.css` un `app.js`.
3. Atveriet `index.html` pārlūkā (dubultklikšķis uz faila vai ar Live Server).
4. Atveriet pārlūka konsoli (**F12 → Console**) un pārliecinieties, ka nav sarkanu kļūdu paziņojumu.

### Pirmais Git komits
```bash
git add index.html style.css app.js
git commit -m "PD1 inicialais kods no MI"
git log -1 --format=%h   # Pieraksta īso komita ID darba lapas tabulai T1
```

---

## 5. PD1 testēšana – 13 pārbaudes (T2)

| Nr. | Testa nosaukums | Pārbaudes veids | Gaidāmais rezultāts |
|:---:|---|---|---|
| **1** | HTML struktūra | Pārlūkā apskata cilnes nosaukumu | Lapas `<title>` ir "Mani uzdevumi" |
| **2** | Responsivitāte | Maina pārlūka loga platumu (<768px) | Izkārtojums pielāgojas, neparādās horizontāla ritjosla |
| **3** | Pievienošana | Ievada tekstu un spiež "Pievienot" | Uzdevums parādās sarakstā |
| **4** | Tukšas ievades pārbaude | Spiež pogu ar tukšu ievades lauku | Tukšs uzdevums netiek pievienots |
| **5** | LocalStorage saglabāšana | Pārlādē lapu ar F5 | Visi pievienotie uzdevumi saglabājas |
| **6** | Statusa maiņa | Noklikšķina uz uzdevuma checkbox | Uzdevuma teksts tiek nosvītrots (strikethrough) |
| **7** | Dzēšana | Noklikšķina uz "Dzēst" pogas | Uzdevums pazūd no saraksta un LocalStorage |
| **8** | Filtri | Pārslēdz filtru "Aktīvie" un "Izpildītie" | Sarakstā redzami tikai atbilstošie uzdevumi |
| **9** | Skaitītājs | Pievieno un izpilda uzdevumus | Rādītājs "Atlikuši: X" precīzi rāda neizpildītos |
| **10** | Semantiskie tagi | Pārlūka koda skatā (Elements) | Izmantoti `<main>`, `<header>`, `<section>`, `<ul>`, `<li>` |
| **11** | Enter taustiņš | Ievades laukā nospiež `Enter` | Uzdevums pievienojas bez pogas spiešanas |
| **12** | Latviešu valodas burti | Ievada "Glāžšķūņa rūķīši čunčina" | Visi burti attēlojas korekti bez kropļojumiem |
| **13** | XSS drošība | Ievada `<b>testa uzdevums</b>` | Teksts attēlojas burtiski kā tags, netiek interpretēts kā HTML |

---

## 6. Kļūdu labošana pēc šablona

Ja kāds tests neizdodas, MI tiek iesniegta strukturēta labošanas uzvedne:
```
KĻŪDA: Pievienojot uzdevumu un nospiežot Enter, pārlūka lapa pārlādējas un uzdevums pazūd.
SAGAIDĀMAIS REZULTĀTS: Nospiežot Enter, uzdevums tiek pievienots sarakstam un saglabāts LocalStorage bez lapas pārlādes.
FAKTISKAIS REZULTĀTS: Lapa atsvaidzinās, jo forma izsauc noklusēto submit notikumu.
KODA FRAGMENTS: [Iekopē addTask un notikumu klausītāja kodu no app.js]
UZDEVUMS: Izlabo tikai šo kļūdu, pievienojot event.preventDefault(), un saglabā esošo funkciju nosaukumus.
```

Pēc koda ievietošanas veic komitu:
```bash
git add app.js
git commit -m "PD1 kludas labojums - noversta lapas parlade"
```

---

## 7. PD1 papildfunkcija: Uzdevumu rediģēšana (In-place rediģēšana)

Lai uzlabotu lietojamību, tiek ieviesta teksta rediģēšana ar dubultklikšķi:
1. Dubultklikšķis uz uzdevuma teksta pārvērš to par ievades lauku (`<input type="text">`).
2. Nospiežot `Enter` vai noņemot fokusu (`blur`), izmaiņas tiek saglabātas.
3. Nospiežot `Escape`, rediģēšana tiek atcelta bez saglabāšanas.

```bash
git add index.html style.css app.js
git commit -m "PD1 uzdevumu redigesana ar dubultklikski"
```

---

## 8. PD1 publicēšana GitHub

```bash
# Pārdēvē pamatzaru par main (ja vēl nav)
git branch -M main

# Pievieno attālināto GitHub repozitoriju
git remote add origin https://github.com/<lietotajvards>/mi-pd1-uzdevumi.git

# Nosūta datus uz GitHub
git push -u origin main
```

---
---

# II DAĻA: PD2 – Lietotnes paplašināšana ar MI

PD2 turpina to pašu repozitoriju un lietotni, ieviešot 4 jaunas funkcijas ar dažādām MI izmantošanas tehnikām.

## 1. PD2 pārskats un 5 uzdevumi

| Uzdevums | Funkcija | MI paņēmiens / Metode | Galvenais ieguvums |
|---|---|---|---|
| **U1** | Projekta konteksta fails | `PROJECT.md` izveide un tokenu skaitīšana | ~58.7% mazāks tokenu patēriņš nekā visam `app.js` |
| **U2** | Izpildes termiņš | Minimāls konteksts (`PROJECT.md` + konkrētas funkcijas) | Nav konteksta piesārņošanas, precīzas izmaiņas |
| **U3** | Statistikas panelis | Papīra skice (`skice.jpg`) kā multimodāla ievade | Ātrs izkārtojuma un krāsu skaidrojums bez gara teksta |
| **U4** | Kārtošana A–Z | Divu modeļu (Claude vs ChatGPT) salīdzinājums zaros | Kļūdu atklāšana latviešu alfabēta kārtošanā, labākā sapludināšana |
| **U5** | Dzēst izpildītos | Kopsavilkums un jauna saruna bez pirmkoda | Funkcijas radīšana, balstoties tikai uz `PROJECT.md` specifikāciju |

---

## 2. U1: Projekta konteksta fails PROJECT.md un tokenu skaitīšana

### Soļi:
1. Repozitorija saknē izveido failu `PROJECT.md`.
2. Struktūra ietver:
   - **Mērķis**: Lietotnes galvenais uzdevums.
   - **Failu struktūra**: Esošie un plānotie faili ar to nozīmi.
   - **Datu struktūra**: Objekta `task` definīcija (`id`, `text`, `completed`, `dueDate`).
   - **Funkciju saraksts**: Visas lietotnes funkcijas (katra vienā rindā ar 1 teikuma aprakstu).
   - **Konvencijas**: Koda stils (semantisks HTML, CSS mainīgie, ES6 JavaScript, `localeCompare('lv')`).
3. **Tokenu salīdzinājums**:
   - `app.js`: ~1132 tokeni.
   - `PROJECT.md`: ~468 tokeni.
   - **Ietaupījums: ~58.7%**.

### Git komits:
```bash
git add PROJECT.md
git commit -m "PD2 konteksta fails"
```

---

## 3. U2: Termiņa funkcionalitāte ar minimālu kontekstu

Modelim jaunā sarunā nodod **TIKAI** `PROJECT.md` un tās funkcijas, kuras jāmaina (`createTaskElement`, `addTask`), nevis visu `app.js`.

### Pievienotais kods:
1. **HTML**: `<input type="date" id="due-date-input" aria-label="Izpildes termiņš">` ievades sekcijā.
2. **JavaScript**:
   - `formatDate(dateStr)` – pārveido `YYYY-MM-DD` par `DD.MM.YYYY`.
   - `isOverdue(dueDate, completed)` – pārbauda, vai datums ir pagātnē un uzdevums nav izpildīts.
   - `createDateBadge(dueDate, completed)` – izveido birku `📅 DD.MM.YYYY (nokavēts)`.
   - Sarkanā vizuālā marķēšana nokavētiem uzdevumiem klasē `.overdue`.
3. **Pārbaudes**:
   - Uzdevums bez termiņa darbojas kā parasti.
   - Nākotnes termiņš rāda datumu, rinda paliek standarta krāsā.
   - Pagātnes termiņš iekrāso rindu sarkanā krāsā un pieliek tekstu "(nokavēts)".
   - Izpildot nokavētu uzdevumu, sarkanais marķējums pazūd.
   - Vecie PD1 uzdevumi bez `dueDate` ielādējas bez kļūdām.

### Git komits:
```bash
git add index.html style.css app.js PROJECT.md
git commit -m "PD2 termins"
```

---

## 4. U3: Statistikas panelis no papīra skices

Uz papīra tiek uzzīmēta skice ar:
- Virsrakstu "Statistika".
- Trīs krāsainām kartītēm: "Kopā" (neitrāls), "Izpildīti" (zaļš), "Nokavēti" (sarkans).
- Zaļu progresa joslu un procentuālo rādītāju `X%`.

### Izpilde:
1. Skice nofotografēta un saglabāta repozitorijā kā `skice.jpg`.
2. MI sarunā iesniegts `skice.jpg` + `PROJECT.md` + `render` funkcija.
3. MI izveido:
   - HTML bloku `<section class="stats-section">...`.
   - CSS stilus kartītēm un progresa joslai ar animāciju.
   - Funkciju `renderStats()`, kas aprēķina vērtības un aizsargā pret dalīšanu ar nulli (`percentage = total === 0 ? 0 : Math.round((completed / total) * 100)`).
   - Izsaukumu `renderStats()` iekš galvenās `render()` funkcijas.

### Git komits:
```bash
git add index.html style.css app.js skice.jpg PROJECT.md
git commit -m "PD2 statistikas panelis"
```

---

## 5. U4: Kārtošana A–Z ar diviem modeļiem (Claude un ChatGPT)

### Solis 1: Claude zars
```bash
git checkout -b kartosana-claude
```
- Uzvedne Claude modelim: nodots `PROJECT.md`, funkcijas `render`, `saveTasks` un prasība sakārtot alfabētiski latviešu valodā.
- Claude izmanto `localeCompare('lv', { sensitivity: 'base' })`.
- Pārbaude ar testa vārdiem: `["Zemene", "Ābols", "čipsi", "Cukurs", "Šķiņķis", "Siers"]`.
- Rezultāts: `Ābols → Cukurs → čipsi → Siers → Šķiņķis → Zemene` (pareizs latviešu alfabēts).
```bash
git add index.html app.js
git commit -m "PD2 sort A-Z - Claude variants ar localeCompare"
```

### Solis 2: ChatGPT zars
```bash
git checkout main
git checkout -b kartosana-chatgpt
```
- Identiska uzvedne nodota ChatGPT.
- Sākotnējā kļūda: ChatGPT izmanto vienkāršo `.sort()` vai ASCII kārtošanu, kā rezultātā vārdi ar mīkstinājumiem un garumzīmēm (`Ābols`, `čipsi`, `Šķiņķis`) nonāk saraksta beigās.
- Kļūdas nodošana pēc PD1 šablona.
- Otrajā solī ChatGPT izlabo kodu uz `localeCompare('lv')`.
```bash
git add app.js
git commit -m "PD2 sort A-Z - ChatGPT labots variants"
```

### Solis 3: Rezultātu salīdzināšana un Merge
Tā kā Claude atrisināja uzdevumu ar 1. mēģinājumu, par pamatu tiek izvēlēts `kartosana-claude`:
```bash
git checkout main
git merge kartosana-claude --no-ff -m "Merge Claude A-Z sorting into main"
```

---

## 6. U5: Kopsavilkums, jauna saruna un "Dzēst izpildītos"

### Solis 1: Kopsavilkuma analīze
1. MI sarunā lūdz īsu kopsavilkumu par visām izmaiņām (<100 vārdu).
2. Salīdzinot ar kodu, tiek pārbaudīti funkciju nosaukumi (novērsta halucinācija, ja MI nosauc funkciju citādi, piem., `sortList` vietā `sortTasksAtoZ`).
3. Izlabotais apraksts tiek iekļauts `PROJECT.md`.

### Solis 2: Jauna saruna "Dzēst izpildītos"
1. Pilnīgi jaunā čata sesijā tiek nodots **TIKAI `PROJECT.md`** un uzdevuma formulējums (bez jebkāda esošā koda).
2. MI uzģenerē:
   - Pogas HTML: `<button type="button" id="clear-btn">Dzēst izpildītos</button>`.
   - Funkciju:
     ```javascript
     function clearCompleted() {
       tasks = tasks.filter(t => !t.completed);
       saveTasks();
       render();
     }
     ```
   - Notikumu klausītāju `#clear-btn`.
3. Pārbaude:
   - Sarakstā ar 2 izpildītiem un 2 aktīviem uzdevumiem nospiež pogu.
   - Paliek tikai 2 aktīvie uzdevumi.
   - Pēc lapas pārlādes dati saglabājas, statistikas rādītāji un skaitītājs atjaunojas korekti.

### Git komits:
```bash
git add index.html app.js PROJECT.md PD2_darba_lapa.md
git commit -m "PD2 dzest izpilditos un noslegums"
```

---

## 7. PD2 noslēgums un visu zaru nosūtīšana uz GitHub

Lai pasniedzējs GitHub repozitorijā redzētu visus izveidotos zarus un izmaiņas:
```bash
# Nosūta visus lokālos zarus uz GitHub
git push --all origin
```

---

# III DAĻA: Darba lapas atskaites tabulas (T1–T5)

Aizpildāms dokuments `PD2_darba_lapa.md`:

### T1: Konteksta fails un tokenu skaitīšana
| Fails | Tokenu skaits | Apraksts | Ietaupījums |
|---|:---:|---|:---:|
| `app.js` | ~1132 | Pilns JavaScript pirmkods | — |
| `PROJECT.md` | ~468 | Strukturēts konteksta apraksts | **58.7%** |

### T2: Termiņa funkcijas pārbaudes
| Nr. | Scenārijs | Gaidītais rezultāts | Faktiskais rezultāts | Statuss |
|:---:|---|---|---|:---:|
| 1 | Bez termiņa | Parādās bez datuma | Attēlojas korekti | ✅ |
| 2 | Termiņš rīt | Rāda `DD.MM.YYYY`, nav marķēts | Korekts datums, balts fons | ✅ |
| 3 | Termiņš vakar | Rinda sarkana, `📅 DD.MM.YYYY (nokavēts)` | Rinda nokavēta un sarkana | ✅ |
| 4 | Nokavēta izpilde | Checkbox atzīmēts, sarkanais pazūd | Marķējums noņemts | ✅ |
| 5 | Saderība ar PD1 | Vecie dati bez `dueDate` ielādējas | Nav kļūdu konsolē | ✅ |

### T3: Statistikas paneļa pārbaudes
| Nr. | Prasība | Pārbaude | Rezultāts |
|:---:|---|---|:---:|
| 1 | Virsraksts un 3 kartītes | Kopā, Izpildīti, Nokavēti | ✅ Atbilst skicei |
| 2 | Progresa josla | Zaļa fona josla ar procentiem `X%` | ✅ Atbilst skicei |
| 3 | Tukšs stāvoklis | 0 uzdevumu: rāda 0%, nav `NaN` | ✅ Aizsardzība strādā |
| 4 | Dinamiskums | Mainot uzdevumus, skaitļi atjaunojas uzreiz | ✅ Sinhroni ar render |
| 5 | Vizuālā atbilstība | Salīdzinājums ar `skice.jpg` | 4 / 5 (skaidrs, košs dizains) |

### T4: Modeļu salīdzinājums (Kārtošana A–Z)
| Modelis / Zars | Testa dati | Sākotnējais rezultāts | Labojums | Statuss |
|---|---|---|---|:---:|
| **Claude** (`kartosana-claude`) | Zemene, Ābols, čipsi, Cukurs, Šķiņķis, Siers | Ābols, Cukurs, čipsi, Siers, Šķiņķis, Zemene (`localeCompare`) | Nebija vajadzīgs | ✅ 1. mēģinājums |
| **ChatGPT** (`kartosana-chatgpt`) | Tie paši dati | Garumzīmes beigās (ASCII kārtošana) | Labots ar šablonu uz `localeCompare` | ✅ Labots ar 2. mēģinājumu |

### T5: Kopsavilkums un "Dzēst izpildītos"
| Aspekts | Apraksts un rezultāts | Statuss |
|---|---|:---:|
| **Kopsavilkuma pārbaude** | Pamanīta un novērsta funkcijas nosaukuma neatbilstība kopsavilkumā pirms ievietošanas `PROJECT.md` | ✅ Pārbaudīts |
| **Jauns konteksts** | Poga un loģika uzrakstīta, nododot tikai `PROJECT.md` bez jebkāda JS koda | ✅ Izpildīts |
| **Darbības pārbaude** | Dzēš tikai izpildītos, atjauno skaitītāju, saglabā LocalStorage | ✅ Izpildīts |

---

# IV DAĻA: Secinājumi un atbildes aizstāvēšanai

1. **Kā projekta konteksta fails (`PROJECT.md`) maina mijiedarbību ar MI?**  
   *Atbilde:* Tas samazina tokenu patēriņu par gandrīz 60%, novērš modeļa halucinācijas par esošo arhitektūru un neļauj modelim nejauši pārrakstīt vai sabojāt citas sistēmas daļas, jo modelis redz tikai saskarnes un datu struktūru, nevis visu pirmkodu.

2. **Kādos gadījumos skice (attēls) kā ievade ir efektīvāka par tekstuālu aprakstu?**  
   *Atbilde:* Vizuālā izkārtojuma, elementu savstarpējā novietojuma un krāsu akcentu aprakstīšana tekstā ir laikietilpīga un rada pārpratumus. Attēls nodod telpisko hierarhiju vienā uzvednē bez interpretācijas kļūdām.

3. **Kāpēc ir lietderīgi salīdzināt vairākus modeļus Git zaros?**  
   *Atbilde:* Dažādi modeļi atšķirīgi risina valodu specifiku (piemēram, latviešu alfabēta kārtošanu ar `localeCompare`). Izstrāde atsevišķos zaros ļauj neatkarīgi testēt risinājumus ar kontrolētiem testa datiem un apvienot pamatkodā tikai to variantu, kas darbojas pareizi ar pirmo mēģinājumu.

---

# V DAĻA: Iesniegšanas kontrolsaraksts pirms aizstāvēšanas

- [x] Repozitorijā ir visi faili: `index.html`, `style.css`, `app.js`, `PROJECT.md`, `skice.jpg`, `README.md`, `PD2_darba_lapa.md`.
- [x] Git repozitorijā ir vismaz 3 zari: `main`, `kartosana-claude`, `kartosana-chatgpt`.
- [x] `main` zarā ir veikts `merge` ar izvēlēto kārtošanas risinājumu.
- [x] Visi zari nosūtīti uz GitHub ar `git push --all origin`.
- [x] Darba lapā aizpildītas visas tabulas T1–T5 un atbildēti 3 secinājumu jautājumi.
- [x] Repozitorija saite iekopēta RTU Moodle sistēmā.
