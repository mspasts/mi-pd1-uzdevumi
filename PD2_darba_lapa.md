# PD2: Lietotnes paplašināšana ar MI — Darba lapa

**Students:** ____________________  
**Datums:** 2026-11-22  
**Repozitorija saite:** https://github.com/mspasts/mi-pd1-uzdevumi  

---

## T1. Projekta konteksta fails PROJECT.md un tokenu skaitīšana

| Fails | Tokenu skaits | Apraksts | Ietaupījums (%) | Commit ID |
| :--- | :---: | :--- | :---: | :---: |
| `app.js` | ~1132 | Pilns JavaScript pirmkods | — | — |
| `PROJECT.md` | ~468 | Strukturēts konteksta fails (mērķis, faili, datu struktūra, funkcijas, konvencijas) | **58.7%** | *(komita ID)* |

*Secinājums par U1:* `PROJECT.md` nodrošina modelim visu nepieciešamo arhitektūras kontekstu, patērējot par gandrīz 60% mazāk tokenu nekā visa pirmkoda nodošana.

---

## T2. Minimāls konteksts – Termiņa funkcija

| Nr. | Pārbaudes scenārijs | Gaidītais rezultāts | Faktiskais rezultāts | Statuss |
| :---: | :--- | :--- | :--- | :---: |
| **1** | Uzdevums bez termiņa | Pievienots bez datuma norādes | Attēlojas bez datuma | ✅ Izpildīts |
| **2** | Nākotnes termiņš (piem., rītdiena) | Datums formātā `DD.MM.YYYY`, rinda nav iezīmēta | Korekts formāts, standarta izskats | ✅ Izpildīts |
| **3** | Pagātnes termiņš (vakardiena) | Rinda kļūst sarkana ar norādi "nokavēts" | Rinda sarkana, norāde "nokavēts" | ✅ Izpildīts |
| **4** | Nokavēta uzdevuma izpilde | Atzīmējot checkbox, sarkanais marķējums pazūd | Marķējums noņemts | ✅ Izpildīts |
| **5** | Atpakaļejoša saderība | Vecie PD1 uzdevumi bez `dueDate` lauka ielādējas korekti bez kļūdām | Dati ielādēti, konsolē nav kļūdu | ✅ Izpildīts |

**U2 Commit ID:** *(ierakstiet komita ID: "PD2 termiņš")*

---

## T3. Statistikas panelis no papīra skices

| Nr. | Prasība no skices | Pārbaude | Rezultāts |
| :---: | :--- | :--- | :--- |
| **1** | Virsraksts un 3 rādītāji | Virsraksts "Statistika", rādītāji: Kopā, Izpildīti, Nokavēti | ✅ Atbilst skicei |
| **2** | Progresa josla ar % | Zaļa josla un procentuālais attēlojums | ✅ Atbilst skicei |
| **3** | Nulles stāvoklis (tukšs saraksts) | Rāda 0%, nav `NaN` | ✅ 0% bez NaN |
| **4** | Dinamiskā atjaunošana | Pievienojot/atzīmējot/dzēšot uzdevumu, rādītāji un josla atjaunojas uzreiz | ✅ Atjaunojas uzreiz |
| **5** | Vizuālā atbilstība skicei | Izkārtojums un kartīšu dizains salīdzinājumā ar `skice.jpg` | 4 / 5 (kartītes nedaudz spilgtākas) |

**U3 Commit ID:** *(ierakstiet komita ID: "PD2 statistikas panelis")*

---

## T4. Modeļu salīdzinājums: Kārtošana A–Z (Claude vs ChatGPT)

| Modelis / Zars | Testa dati | Sākotnējais rezultāts | Kļūdas labošana | Galīgais statuss | Zara Commit ID |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **Claude**<br>`kartosana-claude` | Zemene, ābols, čipsi, cukurs, šķiņķis, siers | Pareiza secība ar `localeCompare('lv')`: Ābols, cukurs, čipsi, siers, šķiņķis, zemene | Kļūdu nebija, strādāja ar 1. mēģinājumu | ✅ Veiksmīgs | *(ID)* |
| **ChatGPT**<br>`kartosana-chatgpt` | Tie paši testa dati | Vārdi ar garumzīmēm/mīkstinājumiem nonāca saraksta beigās (ASCII kārtošana) | Labots ar promptu pēc šablona, ieviešot `localeCompare('lv')` | ✅ Labots | *(ID)* |

*Lēmums par sapludināšanu (Merge):* Tika izvēlēta Claude versija (`kartosana-claude`), jo tā uzreiz korekti apstrādāja latviešu alfabēta kārtošanu.  
**Merge Commit ID:** *(ierakstiet sapludināšanas komita ID `main` zarā)*

---

## T5. Kopsavilkums un funkcija "Dzēst izpildītos"

| Aspekts | Apraksts un pārbaudes rezultāts | Statuss |
| :--- | :--- | :---: |
| **Kopsavilkuma analīze** | Modeļa kopsavilkumā pamanīta nosaukuma kļūda (`sortList` vietā jāsauc `sortTasks`). Kļūda izlabota un iekļauta `PROJECT.md`. | ✅ Pārbaudīts |
| **Konteksts jaunajai funkcijai** | Funkcijas "Dzēst izpildītos" uzvednei tika nodots TIKAI `PROJECT.md` bez koda fragmentiem. | ✅ Izpildīts |
| **Funkcijas pārbaude** | Dzēš visus izpildītos uzdevumus, saglabā `LocalStorage`, atjauno skaitītāju un statistikas paneli. | ✅ Izpildīts |

**U5 Commit ID:** *(ierakstiet komita ID: "PD2 dzēst izpildītos un noslēgums")*

---

## Secinājumi un atbildes uz 3 jautājumiem

**1. Kā projekta konteksta fails (`PROJECT.md`) maina mijiedarbību ar MI, salīdzinot ar pilna koda nodošanu?**  
*Atbilde:* `PROJECT.md` nodrošina modelim skaidru arhitektūras un datu modeļa izpratni, patērējot par ~58% mazāk tokenu. Tas samazina konteksta loga piesārņojumu, izmaksas un novērš risku, ka modelis nejauši pārrakstīs vai sabojās nesaistītas lietotnes daļas.

**2. Kādos gadījumos skice (attēls) kā ievade ir efektīvāka par tekstuālu aprakstu?**  
*Atbilde:* Skice vienā mirklī nodod telpisko izkārtojumu, elementu hierarhiju, proporcijas un krāsu akcentus. Tekstuālā formā šāda izkārtojuma detalizēts apraksts prasītu daudz laika un bieži radītu pārpratumus starp izstrādātāju un MI.

**3. Kāpēc ir lietderīgi salīdzināt vairākus modeļus Git zaros un kā tas palīdz izvēlēties labāko risinājumu?**  
*Atbilde:* Dažādi modeļi var atšķirīgi interpretēt prasības (piemēram, lokalizēto šķirošanu ar `localeCompare`). Izstrāde atsevišķos zaros ļauj neatkarīgi testēt abu modeļu kodu ar reāliem testa datiem, novērtēt to kvalitāti un tīri sapludināt (`merge`) tikai to risinājumu, kurš pierādījis savu pareizību.
