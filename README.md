# 🤖 JavaScript i praktiken - Pokémon Search

Felsökning och bugfixande är en stor del av yrket som mjukvaruutvecklare. I den här uppgiften får du öva på att laga en trasig webbapplikation. .js-filen är baserad på en fullständig, fungerande version men det fattas några elementära delar för att appen ska fungera som tänkt. Läs och undersök koden noga, följ eventuella felmeddelanden i webbläsaren, lägg till det som fattas och skriv om koden vid behov. Lösningen kommer inte vara omedelbart uppenbar. Tillåt uppgiften ta den tid den behöver och försök att lära dig så mycket som möjligt av att läsa någon annans kod.

## ⭐️ Beskrivning

Pokemon Search är ett sökgränssnitt som tar emot användarens input, gör ett fetch-anrop till [pokeapi.co](https://pokeapi.co/), hämtar ut relevant data ur responsen och skriver ut den på ett snyggt sätt i webbläsaren.

## 💻 Förväntat resultat

- Fetch-anropet inkluderar användarens input och avisas inte av servern [(HTTP-responskoden ska vara 200 OK)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)
- Responsen innehåller datan tillhörande den Pokémon som användaren har sökt efter
- Datan visas upp nedtill i UI:t under formuläret, inklusive namn, bild, färdigheter m.m.

## 🎁 Bonusuppgifter

- Utforska [pokeapi.co](https://pokeapi.co/) efter andra endpoints eller andra sätt att filtrera sökresultaten.
  - Kanske går det att söka på något annat än bara namn
  - Kanske går det att utöka formuläret med fler sökmöjligheter
- Experimentera med UI:t - andra layouter, färgteman, sätt att visa upp sökresultatet på etc.
