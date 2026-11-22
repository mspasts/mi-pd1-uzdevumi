# PD1: Pirmā strādājošā lietotne ar MI — Darba lapa

**Students:** ____________________  
**Datums:** 2026-11-22  
**Repozitorija saite:** https://github.com/____________________/mi-pd1-uzdevumi  

---

## T1. MI darba žurnāls

| Nr. | Rīks un modelis | Uzvednes mērķis | Rezultāts | Ko mainīju pats | Commit ID |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **1** | ChatGPT, bezmaksas plāns *(vai cits)* | Pirmā versija | Kods ģenerēts (3 faili) | Nekas | `0b25ef4` |
| **2** | ChatGPT / cits | Kļūdas labošana un pārbaudes | Pārbaudes pabeigtas | Fiksēti rezultāti | `84d0059` |
| **3** | ChatGPT / cits | Papildfunkcija A (rediģēšana) | Pievienota rediģēšana ar Enter un Escape | Labota integrācija (div nevis label) | `6ee2d1b` |

---

## T2. Pieņemšanas testu pārbaude (10 pārbaudes)

| Nr. | Pārbaudes nosaukums | Gaidītais rezultāts | Faktiskais rezultāts | Statuss |
| :---: | :--- | :--- | :--- | :---: |
| **1** | 1. Pievienošana ar pogu | Uzdevums parādās sarakstā, lauks ir tukšs | Uzdevums parādījās, lauks notīrīts | ✅ Izpildīts |
| **2** | 2. Pievienošana ar Enter | Nospiežot Enter, uzdevums pievienojas | Pievienojas korekti | ✅ Izpildīts |
| **3** | 3. Tukša ievade un atstarpes | Nepievieno tukšas rindas / atstarpes | Pievieno tukšu rindu (kļūda pirms labošanas) | ❌ Neizdevās |
| **4** | 4. Garumzīmes un mīkstinājumi | Latviešu burti (ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž) | Attēlojas korekti | ✅ Izpildīts |
| **5** | 5. HTML ievade kā teksts | Ievadīts `<b>teksts</b>` attēlojas kā teksts | Drošs teksts (textContent) | ✅ Izpildīts |
| **6** | 6. Uzdevuma izpilde | Teksts pārsvītrots, skaitītājs samazinās | Pārsvītrojas, skaitītājs samazinās par 1 | ✅ Izpildīts |
| **7** | 7. Viena uzdevuma dzēšana | Pazūd tikai izvēlētais uzdevums | Pazūd tikai izvēlētais | ✅ Izpildīts |
| **8** | 8. Filtri (Visi, Aktīvie, Izpildītie) | Rāda atbilstošos, poga ir izcelta | Filtrēšana strādā pareizi | ✅ Izpildīts |
| **9** | 9. LocalStorage saglabāšana (F5) | Pārlādējot lapu ar F5, uzdevumi saglabājas | Visi uzdevumi saglabājas | ✅ Izpildīts |
| **10** | 10. Konsoles pārbaude (F12) | Konsolē nav nevienas kļūdas | Kļūdu nav | ✅ Izpildīts |

---

## T3. Kļūdu reģistrs

| Kur radās kļūda | Kļūdas apraksts | Kā tika labots | Labojuma Commit ID |
| :--- | :--- | :--- | :---: |
| `addTask` funkcija (`app.js`) | Ievadot tikai atstarpes, sarakstā tika pievienota tukša rinda un skaitītājs palielinājās. | Funkcijā ievades tekstam pievienota `.trim()` metode un pārbaude `if (!text) return;`. | `84d0059` |

---

## T4. Salīdzinājums un pašvērtējums

| Nr. | Aspekts | Pedagoga demo | Mans rezultāts un komentārs |
| :---: | :--- | :--- | :--- |
| **1** | Failu skaits un tehnoloģijas | 3 faili (`index.html`, `style.css`, `app.js`) | 3 tīri faili bez servera un ārējām bibliotēkām. |
| **2** | Pārbaužu rezultāti pirms labošanas | 9/10 izturēja, 1 kļūda | Identiski: 3. pārbaudē atstarpju apstrāde tika noķerta. |
| **3** | Izvēlētā papildfunkcija | Variants A (rediģēšana) | Variants A: dubultklikšķis atver rediģēšanu, Enter saglabā, Escape atceļ. |

---

## Atbildes uz papildu jautājumiem

**1. Kā MI palīdzēja uzdevuma izstrādē un kur tas kļūdījās?**  
*Atbilde:* MI ļoti ātri ģenerēja sākotnējo koda karkasu (HTML semantiku, CSS stilus un pamata JS loģiku). Tomēr MI nepievērsa uzmanību ievades robežgadījumam (tikai atstarpju ievade), radot loģisku kļūdu datu validācijā.

**2. Kādas prasmes bija nepieciešamas, lai verificētu un izlabotu MI radīto kodu?**  
*Atbilde:* Bija nepieciešamas prasmes lasīt JavaScript kodu, saprast pārlūkprogrammas izstrādātāja rīku (Console/Elements) darbību, formulēt precīzu defekta aprakstu modelim un integrēt atgriezto labojumu esošajā failā.

**3. Kā Git komitu vēsture palīdzēja izstrādes procesā?**  
*Atbilde:* Katrs solis (sākotnējais kods, testēšana, kļūdas labojums, papildfunkcija) tika fiksēts atsevišķā komitā, kas ļāva skaidri sekot līdzi izmaiņām, izmantot `git diff` un nepieciešamības gadījumā droši atgriezties pie strādājošas versijas.
