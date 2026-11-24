# Mani uzdevumi (PD1) un (PD2)

Vienkārša un moderna uzdevumu saraksta (To-Do) tīmekļa lietotne, kas izstrādāta kursa "Programmatūras izstrāde ar MI" praktiskā darba **PD1 "Pirmā strādājošā lietotne ar MI"** un **PD2: Lietotnes paplašināšana ar MI – konteksts, skice un Claude pret ChatGPT** ietvaros.

Lietotne pilnībā darbojas klienta pārlūkprogrammā bez servera un bez interneta pieslēguma, izmantojot tikai HTML5, CSS3, JavaScript (ES6+) un pārlūka `LocalStorage`.

PD1 video https://youtu.be/k70oa9Ivii0?si=sMRufhNL5UkGryOR

PD2 video https://youtu.be/kpzUgmUr1YE?si=1Zgt4CrZwp6KpP0K

---

## 🚀 Galvenās funkcijas
1. **Uzdevumu pārvaldība:**
   - Jaunu uzdevumu pievienošana, nospiežot pogu vai taustiņu `Enter`.
   - Ievades validācija (tiek noņemtas liekās atstarpes ar `trim()`, neļaujot pievienot tukšus uzdevumus).
   - Uzdevumu atzīmēšana kā izpildītus (pārsvītrots teksts).
   - Konkrēta uzdevuma dzēšana.
2. **Filtri un skaitītājs:**
   - Filtri: *Visi*, *Aktīvie*, *Izpildītie* (`data-filter` atribūti).
   - Neizpildīto uzdevumu dinamiskais skaitītājs.
3. **Papildfunkcija A — Rediģēšana:**
   - Veicot **dubultklikšķi** uz uzdevuma teksta, tiek atvērts ievades lauks.
   - Nospiežot `Enter` vai noklikšķinot ārpus lauka (`blur`), izmaiņas tiek saglabātas.
   - Nospiežot `Escape`, izmaiņas tiek atceltas.
4. **Datu noturība un drošība:**
   - Dati tiek saglabāti pārlūka `LocalStorage` un atjaunoti pie lapas atsvaidzināšanas (`F5`).
   - XSS aizsardzība: lietotāja ievadītais teksts tiek renderēts ar `textContent`.

---

## 🛠 Tehnoloģijas un rīki
- **HTML5** — semantiska struktūra.
- **CSS3** — Flexbox izkārtojums, mainīgie, pielāgots dizains.
- **JavaScript (ES6+)** — notikumu apstrāde, DOM manipulācijas un LocalStorage loģika.
- **MI rīks:** ChatGPT / Gemini koda karkasa un papildfunkcijas ģenerēšanai.
- **Git & GitHub** — versiju kontrole un komitu vēsture.

---

## 💻 Palaišanas instrukcija
1. Klonējiet šo repozitoriju:
   ```bash
   git clone https://github.com/<jusu-lietotajvards>/mi-pd1-uzdevumi.git
   cd mi-pd1-uzdevumi
   ```
2. Atveriet failu `index.html` jebkurā modernā tīmekļa pārlūkprogrammā (Chrome, Edge, Firefox, Safari) ar parastu dubultklikšķi (izmantojot `file://` protokolu). Nav nepieciešams serveris vai papildu spraudņi.

---

## 📂 Repozitorija failu struktūra
```text
mi-pd1-uzdevumi/
├── index.html       # Lietotnes struktūra
├── style.css        # Vizuālais noformējums
├── app.js           # Lietotnes un papildfunkcijas loģika
├── uzvednes.txt     # MI modeļa uzvedņu (prompt) dokumentācija
└── README.md        # Projekta dokumentācija
```
