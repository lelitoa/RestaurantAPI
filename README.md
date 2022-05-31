# RestaurantAPI

Aplikacja API pozwalająca na zarządzanie restauracją. \
Łączy się ona z bazą danych MongoDB oraz pozwala wysyłać zapytania. \
Aplikacja pozwala utworzyć m.in baze pracowników, menu oraz gendrowanie zamówień, rachunków. \
Dodatkowo aplikacja umożliwia rezerwacje stalików.

### Modele danych:
| Użytkownicy | Pracownicy | MENU        | Zamówienia  | Rachunek   | Rezerwacja |
|-------------|------------|-------------|-------------|------------|------------|
| username    | employeeId | title       | employyeId  | employeeId | table      |
| password    | name       | price       | dishes      | dishes     | startHour  |
| email       | surname    | ingredients | orderStatus | amount     | client     |
| isAdmin     | position   | categories  |             |            |            |




    

