# Flying Bisons Zadanie

## Uruchomienie projektu

```bash
  yarn
  yarn start
```

Live demo: [https://flying-bisons-modal.vercel.app](https://flying-bisons-modal.vercel.app)

## Wykorzystane biblioteki

### react-collapsed

Bardzo prosta biblioteka do obsługi rozwijania i zwijania elementów.

## Kolejne elementy do rozbudowy

### Dodanie logiki wyświetlania odpowiedniego widoku

W aplikacji występują dwa widoki: edycji oraz podglądu. Powinien zostać stworzony state (np. isEditMode), który wyświetlałby odpowiedni widok.

Wybrane preferencje powinny być zliczane i na ich podstawie powienien wyświetlać się odpwiedni tekst w buttonie oraz w podsumowaniu.

### Dodanie renderowania zapisanych preferencji

![Zapisane preferencje](https://patrocreations.com/assets/modal_base.png)

Należy stworzyć komponent, w którym preferencje renderowane są w formie listy. Implementacja powinna być podobna do tej z pliku PreferencesList.tsx. Można także wykorzystać rekurencyjne renderowanie komponentów w przypadku, gdyby preferencje miały bardziej zagnieżdżone podkategorie.

### Dodanie UI do przełączania między widokami

![Zapisane preferencje](https://patrocreations.com/assets/modal_edit.png)

Po kliknięciu w krzyżyk lub button "Remove access" state isEditMode powinien być zmieniany na false. W przypadku kliknięcia w button "Remove access" preferences state może być resetowany na początkowe wartości, które znajdują się w pliku Preferences.data.ts.

Podczas edycji tego komponentu zmienia się także tło, więc należy dodać dodatkowy background wrapper, który będzie mógł zmieniać kolor tła, a po jego kliknięciu modal powinien się zamknąć/wrócić do widoku podglądu.

## Elementy do poprawy

### Poprawa react collapse

W trakcie rozwijania pojawia się lag w animacji. Można to poprawić poprzez usunięcie paddingu/marginesu w dziecku i dodanie go głębiej.

### Poprawa pozycjonowania

Modal znajduje się na środku ekranu. Można go umieścić tylko według właściwości top (bez transformów). Dzięki temu po rozwijaniu elementów, cały modal nie będzie się przesuwał, co polepszy UX.

### Przepisać funkcję na declarative style

Funkcje calculateChecked i calculateTotalOptions są imperative. Można je napisać przy pomocy reduce, wtedy kod będzie bardziej czytelny i krótszy.

### Poprawa funkcji podmieniających dzieci

Można pomyśleć o użyciu immer.js, aby nie pisać tak skomplikowanych funkcji do zmiany stanu. Dzięki temu nie mutujemy stanu, a zwracamy nowy obiekt przy pomocy biblioteki.

Dodatkowo reducer możnaby zamienić na zwykły useState i dodać 2 akcje zmieniające dzieci lub subdzieci.

### Poprawa wyglądu

Style nie są jeszcze w pełni dopracowane. Poprawić można szczególnie marginesy i paddingi.

### Poprawa komponentu PreferencesList

Nie jest on bardzo czytelny. Poprawić można nazwy zmiennych i w inny sposób mapować dzieci.

