import {Injectable} from "@angular/core";
import {ClosedQuestion} from "../questions/model/closed-question.model";
import {OpenQuestion} from "../questions/model/open-question.model";

@Injectable()
export class QuestionsRepositoryMock {

  closedQuestions: ClosedQuestion[] = [
    new ClosedQuestion(`
Wymagania jakich kategorii można wydobyć za pomocą wywiadów?
`,
      [`
-wszystkie za wyjątkiem reguł biznesowych
`, `
-jedynie cele biznesowe i wymagania funkcjonalne
`, `
-praktycznie wszystkich
`, `
-tylko: cele biznesowe, wymagania funkcjonalne i wymagania pozafunkcjonalne
`], 2),
    new ClosedQuestion(`
W zakres projektu systemu (architektury, wysokiego poziomu) NIE wchodzi:
`,
      [`
-identyfikacja współbieżności
`, `
-wybór podejścia do zarządzania pojemnikami danych
`, `
-projekt algorytmów i struktur danych do nich
`, `
-określenie interfejsów podsystemów
`], 2),
    new ClosedQuestion(`
Do której dziedziny/dziedzin przynależy Machine Learning:
`,
      [`
-CS i SE
`, `
-Ani do CS ani do SE
`, `
-Computer Science (CS)
`, `
-Software Engineering (SE)
`], 2),
    new ClosedQuestion(`
Wymaganie pozafunkcjonalne definiujące, na ile i w jakim zakresie system powinien być możliwy do łatwej dalszej rozbudowy, to wymaganie dotyczące:
`,
      [`
-elastyczności
`, `
-konfigurowalności
`, `
-dostępności
`, `
-przenośności
`], 0),
    new ClosedQuestion(`
Do czynności wykonywanych w ramach projektu systemu (p. architektury, p. wysokiego poziomu) należy:
`,
      [`
-projekt realizacji związków
`, `
-wykorzystanie wzorców projektowych
`, `
-projekt schematu bazy danych
`, `
-wybór podejścia do zarządzania pojemnikami danych
`], 3),
    new ClosedQuestion(`
Który z poniższych procesów ma najszerszy zakres:
`,
      [`
-Continuous Delivery
`, `
-Automated Build
`, `
-Continuous Deployment
`, `
-Continuous Integration
`], 2),
    new ClosedQuestion(`
W którym rodzaju testów istotne jest pojęcie liczby cyklomatycznej?
`,
      [`
-testy białej skrzynki
`, `
-testy alfa
`, `
-testy beta
`, `
-testy czarnej skrzynki
`], 0),
    new ClosedQuestion(`
Adaptive Object-Model (AOM) to:
`,
      [`
-metodyka oparta na Rational Unified Process, stanowiąca bardziej zwinną wersję RUP
`, `
-jedna z metryk jakości projektu/kodu obiektowego
`, `
-specyficzny rodzaj wzorca (pattern)
`, `
-przykład modelu spoza notacji UML
`], 2),
    new ClosedQuestion(`
Wymaganie „System musi zostać napisany za pomocą frameworka Django” to:
`,
      [`
-wymaganie pozafunkcjonalne
`, `
-ograniczenie dot. produktu
`, `
-wymaganie pozafunkcjonalne (jakościowe)
`, `
-ograniczenie dot. Procesu
`], 1),
    new ClosedQuestion(`
Które z poniższych NIE jest kategorią wymagań:
`,
      [`
-wymagania użytkowników
`, `
-ograniczenia
`, `
-reguły biznesowe
`, `
-wzorce analityczne
`], 3),
    new ClosedQuestion(`
Przepływ sterowania jest narzucany przez:
`,
      [`
-framework
`, `
-bibliotekę
`, `
-zasady SOLID
`, `
-komponent
`], 0),
    new ClosedQuestion(`
Współczynnik konwersji to pojęcie związane z:
`,
      [`
-testami integracyjnymi
`, `
-testami regresji
`, `
-testami A/B
`, `
-testami penetracyjnymi
`], 2),
    new ClosedQuestion(`
Co to jest „prototyp do wyrzucenia”?
`,
      [`
-prototyp ukierunkowany wyłącznie na kwestie użyteczności
`, `
-jeden z alternatywnych prototypów, który nie został wybrany jako podstawa implementacji produktu
`, `
-nieudany prototyp niezaakceptowany przez klienta
`, `
-prototyp przygotowany tylko z myślą o identyfikacji wymagań, nie budowie docelowego produktu
`], 3),
    new ClosedQuestion(`
Podejście dotyczące projektowania interfejsu użytkownika z myślą o wzbudzaniu u odbiorcy odpowiednich emocji to:
`,
      [`
-persony
`, `
-analiza kontekstu użytkowania
`, `
-user experience
`, `
-usability
`], 2),
    new ClosedQuestion(`
Główne przyczyny porażek projektów IT mają źródło w obszarach:
`,
      [`
-analizy i projektowania
`, `
-zarządzania konfiguracją
`, `
-inżynierii wymagań i zarządzania projektem
`, `
-implementacji i testowania
`], 2),
    new ClosedQuestion(`
Którą ze słabości modelu klasycznego ma w założeniu poprawić model V?
`,
      [`
-duży koszt naprawy przeoczonego defektu
`, `
-założenie o stabilności wymagań
`, `
-oderwanie procesu wytwarzania od użytkowników/interesariuszy
`, `
-mała elastyczność w przypadku wystąpienia zmian
`], 0),
    new ClosedQuestion(`
Do technik analizy statycznej należą:
`,
      [`
-inspekcje
`, `
-wykonywanie skryptów testowych
`, `
-retrospektywy
`, `
-testy użyteczności
`], 0),
    new ClosedQuestion(`
Która cecha NIE musi być prawdziwa dla każdej metodyki zdyscyplinowanej (plan-driven methodology)?
`,
      [`
-ma szczegółowo zdefiniowane procesy opisujące działania i produkty
`, `
-na początku projektu tworzony jest jego plan
`, `
-jest zgodna z kaskadowym modelem wytwarzania
`, `
-najlepiej sprawdza się dla dużych projektów i zespołów
`], 2),
    new ClosedQuestion(`
Które z poniższych NIE należy do założeń modelu kaskadowego:
`,
      [`
-każdy kolejny etap zaczyna się po zamknięciu poprzedniego
`, `
-zabronione jest cofanie się do poprzednich etapów
`, `
-w każdym etapie przedmiotem zainteresowania jest cały wytwarzany system
`, `
-kolejność etapów jest stała, nie podlega zmianom
`], 1),
    new ClosedQuestion(`
Testy sprawdzające, czy to co do tej pory działało, nadal działa to:
`,
      [`
-testy A/B
`, `
-testy akceptacyjne
`, `
-testy mutacyjne
`, `
-testy regresji
`], 3),
    new ClosedQuestion(`
Moment akceptacji systemu przez klienta to:
`,
      [`
-wdrożenie
`, `
-odbiór systemu
`, `
-audyt
`, `
-start produktywny
`], 1),
    new ClosedQuestion(`
Główne przyczyny porażek projektów mają źródło w obszarach:
`,
      [`
-implementacji i testowania
`, `
-wymagań i zarządzania projektem
`, `
-analizy i projektowania
`, `
-zarządzania konfiguracją
`], 1),
    new ClosedQuestion(`
Szczegółowy opis fikcyjnego użytkownika systemu, odpowiadającego określonemu profilowi docelowemu do:
`,
      [`
-user experience
`, `
-interesariusz
`, `
-persona
`, `
-target
`], 2),
    new ClosedQuestion(`
Do metodyk zwinnych zalicza się:
`,
      [`
-team software process
`, `
-extreme programming
`, `
-prince2
`, `
-cowboy coding
`], 1),
    new ClosedQuestion(`
Przy wytwarzaniu według modelu V najpierw wykonywane będą testy:
`,
      [`
-akceptacyjne
`, `
-jednostkowe
`, `
-integracyjne
`, `
-regresji
`], 1),
    new ClosedQuestion(`
Sekwencja przypadków testowych wykonywanych w określonej kolejności to:
`,
      [`
-scenariusz testowy
`, `
-plan testowania
`, `
-skrypt testowy
`, `
-klasa/równoważność
`], 0),
    new ClosedQuestion(`
Zasada „O” w zbiorze dobrych praktyk SOLID mówi o tym, że:
`,
      [`
-obiekty mają mieć określoną przynależność do klas
`, `
-klasa ma być otwarta na rozszerzenia zamknięta na modyfikacje
`, `
-klasa ma mieć pojedynczą odpowiedzialność
`, `
-operacje w klasach nie powinny być przeciążone
`], 1),
    new ClosedQuestion(`
Zasada „I” w zbiorze dobrych praktyk SOLID mówi o tym, że:
`,
      [`
-określenie wspólnych właściwości między klasami powinno skutkować uogólnieniem
`, `
-tworzenie instancji klas powinno odbywać się w trybie runtime
`, `
-interakcje między systemami powinny być minimalne
`, `
-lepiej używać wielu małych interfejsów niż jednego złożonego interfejsu
`], 3),
    new ClosedQuestion(`
Które z poniższych Nie jest wzorcem projektowym:
`,
      [`
-abstract factory
`, `
-software product line
`, `
-composite
`, `
-serialized LOB
`], 1),
    new ClosedQuestion(`
Refaktoryzacja polega na:
`,
      [`
-zmianie technologii wytwarzania systemu
`, `
-przepisaniu części kodu na nowo bez dodawania funkcjonalności
`, `
-wykorzystaniu sprawdzonych komponentów i bibliotek
`, `
-pokryciu kodu przypadkami testowymi
`], 1),
    new ClosedQuestion(`
W zakres projektu systemu (architektury wysokiego poziomu) Nie wchodzi:
`,
      [`
-identyfikacja współbieżności
`, `
-wybór podejścia do zarządzania pojemnikami danych
`, `
-projekt algorytmów i struktur danych do nich
`, `
-określenie interfejsów podsystemów
`], 2),
    new ClosedQuestion(`
Dla typowego systemu informatycznego koszt jego utrzymania:
`,
      [`
-jest stały
`, `
-maleje z upływem czasu
`, `
-wzrasta z upływem czasu
`, `
-jest niezależny od upływu czasu
`], 2),
    new ClosedQuestion(`
Które z poniższych nie jest heurystyką Nielsena:
`,
      [`
-uwzględnianie użytkowników niepełnosprawnych
`, `
-zgodność systemu ze światem rzeczywistym
`, `
-wsparcie w razie błędów
`, `
-wybór zamiast pamiętania informacji
`], 0),
    new ClosedQuestion(`
Która metodyka należy do metodyk zarządczych (Project Management Methodology)
`,
      [`
-scrum
`, `
-microsoft solution framework
`, `
-prince2
`, `
-rational unified process
`], 2),
    new ClosedQuestion(`
Która z następujących Technik wykorzystywana jest do oceny użyteczności oprogramowania:
`,
      [`
-metoda monte carlo
`, `
-testy A/B
`, `
-user stories
`, `
-data flow diagrams
`], 1),
    new ClosedQuestion(`
Metodyki wytwórcze:
`,
      [`
-bazują na określonym modelu wytwarzania
`, `
-są podstawą dla modeli wytwarzania
`, `
-są niezależne od modeli wytwarzania
`, `
-mogą bazować na jednym lub kilku modelach wytwarzania
`], 3),
    new ClosedQuestion(`
Wymagania pozafunkcjonalne określające ile czasu i ewentualnie w jakich okresach system może nie działać to:
`,
      [`
-elastyczność
`, `
-wydajność
`, `
-dostępność
`, `
-niezawodność
`], 2),
    new ClosedQuestion(`
Do czynności wykonywanych w ramach projektu systemu (projektu architektury, projektu wysokiego poziomu) należy:
`,
      [`
-wykorzystanie wzorców projektowych
`, `
-projekt schematu bazy danych
`, `
-projekt realizacji związków
`, `
-określenie topologii systemu
`], 3),
    new ClosedQuestion(`
Jedną z technik wydobywania wymagań jest:
`,
      [`
-clicktracking
`, `
-analiza statyczna
`, `
-macierz śladowości
`, `
-terminowanie
`], 3),
    new ClosedQuestion(`
Które z poniższych narzędzi NIE służy do zarządzania konfiguracją:
`,
      [`
-mercurial
`, `
-selenium
`, `
-git
`, `
-SVN
`], 1),
    new ClosedQuestion(`
Macierz śladowości jest wykorzystywana do:
`,
      [`
-określenia odpowiedzialności członków zespołu
`, `
-szacowania kosztów projektu
`, `
-analizowania zależności między wymaganiami
`, `
-oceny możliwych architektur systemu
`], 2),
    new ClosedQuestion(`
Wymaganie pozafunkcjonalne określające dla jakich urządzeń platform, przeglądarek etc. ma działać system, to:
`,
      [`
-przenośność
`, `
-elastyczność
`, `
-niezawodność
`, `
-konfigurowalność
`], 0),
    new ClosedQuestion(`
Cechą specyficzną oprogramowania w stosunku do innych technologii NIE jest:
`,
      [`
-łatwość wprowadzania zmian
`, `
-brak zużywania się oraz błędów przypadkowych
`, `
-dowolność struktury
`, `
-łatwość szacowania czasochłonności
`], 3),
    new ClosedQuestion(`
W zakres projektu systemu (architektury wysokiego poziomu) NIE wchodzi:
`,
      [`
-optymalizacja struktury klas
`, `
-określanie obsługi stanów przejściowych i awaryjnych systemu
`, `
-decyzje o fizycznym rozmieszczeniu podsystemów
`, `
-wybór podejścia do zarządzania pojemnikami danych
`], 0),
    new ClosedQuestion(`
Metoda ATAM jest wykorzystywana do:
`,
      [`
-działań wchodzących w skład analizy biznesowej
`, `
-oceny możliwych architektur systemu
`, `
-analizowanie zależności między wymaganiami
`, `
-analizy charakterystyk użytkowników
`], 1),
    new ClosedQuestion(`
Które z poniższych NIE jest kategorią wymagań:
`,
      [`
-wymagania użytkowników
`, `
-wzorce analityczne
`, `
-reguły biznesowe
`, `
-ograniczenia
`], 1),
    new ClosedQuestion(`
Nieprawidłowa instrukcja w kodzie programu to:
`,
      [`
-defekt
`, `
-błąd
`, `
-awaria
`, `
-debugging
`], 0),
    new ClosedQuestion(`
Jedna z technik używanych w obszarze walidacji wymagań to:
`,
      [`
-analiza przyczyn źródłowych
`, `
-obserwacje
`, `
-MoSCoW
`, `
-prototypowanie
`], 3),
    new ClosedQuestion(`
Udziałowiec systemu NIE może:
`,
      [`
-być nieożywiony
`, `
-być niechętny do współpracy
`, `
-pochodzić spoza organizacji klienta
`, `
-nie mieć uzasadnionego prawa do wywierania wpływu na system
`], 3),
    new ClosedQuestion(`
Jaka będzie właściwa kolejność warstw systemu?
`,
      [`
-prezentacji, usług, logiki biznesowej, danych
`, `
-prezentacji, logiki biznesowej, usług, danych
`, `
-prezentacji, logiki biznesowej, danych, usług
`, `
-usług, prezentacji, logiki biznesowej, danych
`], 0),
    new ClosedQuestion(`
Który z poniższych wymogów jest niefunkcjonalny (jakościowy)?
`,
      [`
-czas przestoju (niedostępności) systemu nie może przekraczać 0.5%
`, `
-klient otrzymuje kompletny zestaw dokumentacji związanej z testami
`, `
-system zostanie opracowany i wdrożony w ciągu 18 miesięcy
`, `
-zapewnienie jakości w projekcie jest prowadzone przez niezależny, zewnętrzny zespół
`], 0),
    new ClosedQuestion(`
Która z poniższych wartości nie znajduje się wśród 4 wyrażonych w Agile Manifest?
`,
      [`
-współpraca z klientem przy negocjowaniu umowy
`, `
-osoby i interakcje nad procesami i narzędziami
`, `
-oprogramowanie robocze nad kompleksową dokumentacją
`, `
-wolność nad scentralizowanym zarządzaniem
`], 3),
    new ClosedQuestion(`
Wymaganiem określającym platformy sprzętowe i/lub programowe, na których system musi działać jest:
`,
      [`
-wymóg niezawodności
`, `
-wymóg przenośności
`, `
-wymagania dotyczące wydajności
`, `
-wymóg użyteczności
`], 1),
    new ClosedQuestion(`
Wymaganiem wskazującym najbardziej prawdopodobne kierunki dalszych rozszerzeń/modyfikacji systemu jest:
`,
      [`
-wymaganie konfigurowalności
`, `
-wymóg elastyczności
`, `
-wymóg dostępności
`, `
-wymóg przenośności
`], 1),
    new ClosedQuestion(`
Który model cyklu życia oprogramowania wykorzystuje dedykowane funkcjonalności (np. nowych podsystemów)
`,
      [`
-waterfall
`, `
-przyrostowe
`, `
-prototypowanie
`, `
-V
`], 1),
    new ClosedQuestion(`
Efekt Hawthorne’a to:
`,
      [`
-sytuacja, w której uczestnik imprezy staje się zbyt zmęczony, aby zauważyć co się dzieje
`, `
-odchylenie od głównego celu spotkania spowodowane osobistą niechęcią
`, `
-celowo zmienione zachowanie ludzi, którzy wiedzą, że są obserwowani
`, `
-sytuacja, w której rozmówca woli odpowiedź, niż przyznać się do braku wiedzy
`], 2),
    new ClosedQuestion(`
Warstwa logiki biznesowej świadczy swoje usługi na:
`,
      [`
-warstwę danych
`, `
-żadną inną warstwę
`, `
-warstwę sieciowa
`, `
-warstwę prezentacji
`], 3),
    new ClosedQuestion(`
Która z poniższych metod NIE jest zwinna (agile methodology):
`,
      [`
-scrum
`, `
-cowboy coding
`, `
-rozwój oparty na funkcji
`, `
-programowanie extremalne
`], 1),
    new ClosedQuestion(`
Co zasada 1:10 mówi o wadach?
`,
      [`
-1 na 10 wad jest krytyczna, reszta ma niski priorytet
`, `
-koszt wykrywania i korygowania wad może wzrosnąć dziesięciokrotnie w każdej kolejnej fazie rozwoju
`, `
-około 10% wad zwykle nie znajduje się w testowaniu
`, `
-na każde 10 skorygowanych wad wprowadza się jeden dodatkowy efekt uboczny
`], 1),
    new ClosedQuestion(`
Który jest prawidłowym związkiem przyczynowym?
`,
      [`
-rozwiązania projektowe -> cele -> wymagania
`, `
-cele -> wymagania -> rozwiązania projektowe
`, `
-wymagania -> cele -> rozwiązania projektowe
`, `
-cele -> rozwiązania projektowe -> wymagania
`], 1),
    new ClosedQuestion(`
Która z poniższych cech jest wspólną właściwością metod zwinnych (Agile methods)?
`,
      [`
-zmniejszone wymagania działania inżynieryjne
`, `
-praca zespołowa przy intensywnej, bezpośredniej współpracy
`, `
-kompleksowe testowanie każdego modułu oprogramowania
`, `
-retrospektywy utrzymywane po każdej iteracji
`], 1),
    new ClosedQuestion(`
Która z poniższych faz jest fazą modelu V cyklu życia?
`,
      [`
-testowanie czarnej skrzynki
`, `
-debugowanie
`, `
-ocena prototypu
`, `
-testy integracyjne
`], 3),
    new ClosedQuestion(`
Która z poniższych metod NIE jest techniką wydobywania wymagań?
`,
      [`
-obserwacja
`, `
-prototypowanie
`, `
-warsztaty
`, `
-studium wykonalności
`], 3),
    new ClosedQuestion(`
Warstwa logiki biznesowej jest zależna od:
`,
      [`
-żadnej innej warstwy
`, `
-warstwy prezentacji
`, `
-warstwy usługowej
`, `
-warstwy danych
`], 3),
    new ClosedQuestion(`
Czy wymagania niefunkcjonalne mogą wpływać na decyzje dotyczące architektury systemu?
`,
      [`
-nie powinny, ale czasami zdarza się to w praktyce
`, `
-tak, jest to bardzo prawdopodobne
`, `
-nie, architektura zależy tylko od wymagań funkcjonalnych
`, `
-tylko dla systemów o krytycznym znaczeniu dla bezpieczeństwa i krytycznych dla misji
`], 1),
    new ClosedQuestion(`
Które z pojęć NIE jest związane z etapem wdrożenia:
`,
      [`
-migracja danych
`, `
-refaktoryzacja
`, `
-audyt/certyfikacja
`, `
-szkolenia dla użytkowników
`], 1),
    new ClosedQuestion(`
Należy spodziewać się najwyższego kosztu korekcji w przypadku błędów wykrytych podczas etapu:
`,
      [`
-użytkowanie i konserwacja
`, `
-definicja
`, `
-budowa
`, `
-wdrożenie
`], 0),
    new ClosedQuestion(`
Analiza wymagań NIE obejmuje:
`,
      [`
-identyfikowanie konfliktów i niespójności
`, `
-przypisywanie wymagań do kategorii
`, `
-wybór przedstawicieli zainteresowanych stron
`, `
-ustalanie priorytetów
`], 2),

    new ClosedQuestion(`
Które z poniższych NIE jest głównym obszarem inżynierii wymagań:
`,
      [`
-pozyskiwanie wymagań
`, `
-zarządzanie wymaganiami
`, `
-realizacja wymagań
`, `
-walidacja wymagań
`], 2),

    new ClosedQuestion(`
L w zasadach SOLID to:
`,
      [`
-zasada podstawienie Liskova
`, `
-zasada niskiego sprzężenia między klasami
`, `
-zasada lokalnej hermetyzacji
`, `
-zasada ograniczonej odpowiedzialności klasowej
`], 0),

    new ClosedQuestion(`
Która NIE jest metodą synchronizacji dostępu do współdzielonych zasobów globalnych:
`,
      [`
-design pattern
`, `
-guardian object
`, `
-DBMS mechanisms
`, `
-locks
`], 0),
    new ClosedQuestion(`
Który model cyklu życia oprogramowania NIE opiera się na idei iteracyjnego rozwoju:
`,
      [`
-przyrostowe
`, `
-spirala
`, `
-V
`, `
-prototypowanie
`], 2),
    new ClosedQuestion(`
Zmiany wprowadzone we wdrożonym i używanym systemie informatycznym wynikające ze zmian środowiska (DBMS, serwer aplikacji, przeglądarki internetowe itp.) nazywane są … konserwacją.
`,
      [`
-adaptive
`, `
-perfective
`, `
-corrective
`, `
-preventive
`], 0),
    new ClosedQuestion(`
Wymaganie jakościowe o zapewnieniu że system nie będzie zagrażał docelowemu środowisku użytkownia (np. krzywdził ludzi, niszczył mienie) to:
`,
      [`
przenośność
`, `
niezawodność
`, `
bezpieczeństwo
`, `
ochrona
`], 2),
    new ClosedQuestion(`
Które z poniższych NIE jest obszarem zarządzania projektem?
`,
      [`
-zarządzanie zasobami korporacji
`, `
-zarządzanie ryzykiem
`, `
-zarządzanie czasem
`, `
-zarządzanie zakresem/udziałowcami
`], 0),
    new ClosedQuestion(`
Który z podobszarów inżynierii wymagań służy do potwierdzenia wymagań przez udziałowców?
`,
      [`
-wydobycie wymagań
`, `
-zarządzanie wymaganiami
`, `
-walidacja wymagań
`, `
-analiza wymagań
`], 2),
    new ClosedQuestion(`
W zakres projektu klas (projektu niskiego poziomu) wchodzi:
`,
      [`
-synchronizacja dostępu do zasobów globalnych
`, `
-zdefiniowanie podsystemów i ich interfejsów
`, `
-wykorzystanie wzorców projektowych
`, `
-obsługa warunków granicznych
`], 2),
    new ClosedQuestion(`
Wzorzec projektowy to:
`,
      [`
-biblioteka dostarczająca zbiór pewnych konkretnych funkcji
`, `
-algorytm do rozwiązania konkretnego problemu
`, `
-poradnik jak projektować system w danym języku programowania lub frameworku
`, `
-ogólne rozwiązanie często występującego problemu w danym kontekście
`], 3),
    new ClosedQuestion(`
Które z poniższych technik wydobywania wymagań wymaga moderatora?
`,
      [`
-prototypowanie
`, `
-obserwacje
`, `
-wywiady
`, `
-warsztaty
`], 3),
    new ClosedQuestion(`
Które z poniższych należy do projektu architektury (projektu systemu, projektu wysokiego poziomu)?
`,
      [`
-obsługa warunków granicznych
`, `
-optymalizacja struktury klas
`, `
-przyjęcie zasad SOLID
`, `
-projektowanie algorytmów (i struktur danych do nich)
`], 0),
    new ClosedQuestion(`
Jaki jest związek pomiędzy użytkownikami systemu a udziałowcami?
`,
      [`
-każdy użytkownik to udziałowiec
`, `
-niektórzy użytkownicy to udziałowcy
`, `
-użytkownicy i udziałowcy to dwie różne, wzajemnie wykluczające się grupy
`, `
-każdy udziałowiec to użytkownik
`], 0),
    new ClosedQuestion(`
Cechą specyficzną oprogramowania w stosunku do innych technologii NIE jest:
`,
      [`
-dowolność struktury
`, `
-niestabilność wymagań
`, `
-zdominowany przez projektowanie
`, `
-niematerialny produkt
`], 1),
    new ClosedQuestion(`
Scenariusz testowy to:
`,
      [`
-sparametryzowany przypadek testowy
`, `
-specyfikacja warunków testu i czynności przygotowawczych
`, `
-sekwencja przypadków testowych
`, `
-wykonanie skryptu testowego
`], 2),
    new ClosedQuestion(`
Stan lub działanie programu odbiegające od oczekiwań to:
`,
      [`
-przypadek testowy
`, `
-defekt
`, `
-błąd
`, `
-awaria
`], 2),
    new ClosedQuestion(`
Czym są hybrydowe procesy wytwarzania?
`,
      [`
-procesy przystosowane do rozproszonych, międzynarodowych zespołów
`, `
-procesy bazujące na więcej niż jednym cyklu życia oprogramowania
`, `
-procesy łączące elementy agile i innych rodzajów metodyk
`, `
-procesy dedykowane do wytwarzania systemów zawierających moduły nie-softwarowe
`], 2),
    new ClosedQuestion(`
Który z poniższych jest wzorcem projektowym?
`,
      [`
-polimorfizm
`, `
-SOLID
`, `
-optimizer
`, `
-composite
`], 3),
    new ClosedQuestion(`
Które z poniższych NIE jest obszarem wytwarzania oprogramowania?
`,
      [`
-wdrożenie
`, `
-implementacja
`, `
-analiza
`, `
-zarządzanie zespołem
`], 3),
    new ClosedQuestion(`
Projekt sieci firmy i jej elementów takich jak firewall, proxy, itp. są najlepiej zobrazowane przy użyciu:
`,
      [`
-diagramów wdrożenia
`, `
-diagramów podsystemów
`, `
-diagramów komponentów
`, `
-diagramów współpracy
`], 0),
    new ClosedQuestion(`
Który z poniższych jest modelem iteracyjnego cyklu wytwarzania?
`,
      [`
-cowboy coding
`, `
-V
`, `
-prototypowanie
`, `
-waterfall
`], 2),
    new ClosedQuestion(`
Utrzymanie oprogramowania to obszar dedykowany do:
`,
      [`
-debugowania i poprawiania defektów
`, `
-zarządzania konfiguracją
`, `
-wprowadzania zmian w systemie IT po jego wdrożeniu
`, `
-monitorowaniu jakości metryk działającego systemu
`], 2),
    new ClosedQuestion(`
Które z poniższych NIE jest kategorią wzorców projektowych?
`,
      [`
-zachowań (behavioral)
`, `
-funkcjonalne (functional)
`, `
-konstrukcyjne (creational)
`, `
-strukturalne (structural)
`], 1),
    new ClosedQuestion(`
Wymaganie wyrażające oczekiwaną ilość użytkowników jednocześnie korzystających z systemu lub/i oczekiwanej ilości danych to wymaganie:
`,
      [`
-wydajność
`, `
-elastyczność
`, `
-użyteczność
`, `
-dostępność
`], 0),
    new ClosedQuestion(`
Zautomatyzowany przypadek testowy to:
`,
      [`
-plan testowania
`, `
-scenariusz testowy
`, `
-raport testu
`, `
-skrypt testowy
`], 3)
  ];

  openQuestions: OpenQuestion[] = [
    new OpenQuestion(`
Projekt systemu (projekt logiczny, system design):
d) Wyjaśnić pojęcie projektu systemu
e) Wyjaśnić jak ma się projektowanie do analizy systemowej
f) Wymienić i krótko opisać czynności wykonywane w ramach projektu systemu
`, `
d)
Projekt systemu - proces definiowania architektury systemu oraz jej elementów aby zostały spełnione cele i wymagania postawione przed tym systemem.

e)
Analiza systemowa odpowiada na pytanie CO?
Projekt systemu odpowiada na pytanie JAK?

Analiza ukierunkowana jest na maksymalizację korzyści biznesowych klienta, identyfikuje i dokumentuje wymagania względem systemu.
Projekt systemu zawiera decyzje odnośnie docelowej jego architektury, użytych technologii oraz uszczegóławia model logiczny z fazy analizy.

f)
Określenie architektury: Wyodrębnienie warstw systemu, podział na podsystemy, określenie interfejsów między warstwami i podsystemami.

Podział na podsystemy: Podsystem realizuje określony zestaw funkcji, reprezentuje behawioralną jednostkę w fizycznym systemie.

Decyzje o fizycznym rozmieszczeniu systemu: Jak system będzie rozmieszczony na docelowym sprzęcie. Stosuje się do nich diagramy wdrożenia.

Identyfikacja i obsługa dostępu do zasobów globalnych: Zasoby takie jak pliki i dane w bazie danych. Są różne metody synchronizujące do nich dostęp takie jak guardian objects (wolne ale bezpieczne) czy locks (szybkie ale mogą spowodować deadlock).

Obsługa warunków granicznych:
-> Inicjalizacja - Przejście od stanu spoczynku do ustabilizowanego stanu pracy systemu.
-> Zakończenie - Przejście ze stanu pracy do stanu spoczynku. W jego skład wchodzą: zwolnienie zasobów, usunięcie obiektów nietrwałych, systematyczne kończenie zależnych od siebie zadań
-> Upadek - nieoczekiwane zakończenie pracy systemu. W miarę możliwości należy opisać jego przyczyny oraz stan systemu.

Wybranie podejścia do zarządzania pojemnikami danych: Mogą one służyć jako interfejs pomiędzy systemami lub jako zasoby umożliwiające współużytkowanie informacji.

Decyzje co do stylu projektowania i wypracowanie rozwiązań kompromisowych.
`),
    new OpenQuestion(`
Klasyczny model cyklu życia oprogramowania:
a) Przedstawić założenia, ideę i schemat modelu klasycznego.
b) Wymienić zalety modelu klasycznego.
c) Wymienić wady modelu klasycznego i dla każdej wady podać: jakie modele nieklasyczne adresują daną wadę i za pomocą jakich rozwiązań.
`, `
a)
Model klasyczny (kaskadowy) zawiera wyróżnialne, odseparowane od siebie etapy, każdy z nich dotyczy całego systemu. Etapy są ustawione sekwencyjnie, każdy zaczyna się po zamknięciu poprzedniego. Jeżeli we wcześniejszym etapie popełniono błąd, wraca się tam i przechodzi ponownie wszystkie poprzednie etapy.

b)
Zalety:
-prosty do zrozumienia
-obejmuje wszystkie obszary IO i wprowadza systematykę
-pozwala na wyraźne zdefiniowanie etapów
-pozwala na dekompozycję pracy dla poszczególnych ról oraz rozłożenia ich zaangażowania w czasie
-powstały na nim standardy z konkretnymi metodykami

c) *
-zakłada, że od razu będzie możliwe uchwycenie całego problemu i wymagań
-> model przyrostowy: wystarczy zarys wymagań, specyfikowany jest tylko najbliższy przyrost
-> model prototypowy:  wymagania są doprecyzowane w raz z każdym kolejnym prototypem
-zakłada, że pozyskane na początku projektu wymagania będą stabilne i nie będą podlegały zmianom
-> model przyrostowy: stabilizacja wymagań na poziomie realizacji danego przyrostu
-działające oprogramowanie powstaje późno, pod koniec projektu
-> model przyrostowy: w ramach iteracji powstaje tymczasowa wersja produktu, z każdą kolejną iteracją jest udoskonalany/rozbudowywany
-wytwarzanie jest oderwanie od interesariuszy, walidacja projektu następuje dopiero w końcowych krokach
-> model przyrostowy: walidacja projektu następuje pod koniec każdej iteracji
-> model prototypowy: interesariusze oceniają kolejne iteracje prototypu
-> model spiralny: uwzględnia ocenę interesariuszy
-błąd lub żądanie zmiany powoduje konieczność powrotu do odpowiedniego etapu i przejścia procesu jeszcze raz
`),
    new OpenQuestion(`
c) Wyjaśnić pojęcie metodyk zwinnych (lekkich, agile).
d) Porównać metodyki zwinne i metodyki sterowane planem.
`, `
c)
Metodyki zwinne - podejście będące reakcją na mocno sformalizowane, sterowane planem metodyki IO. Wytwarzanie jest iteracyjne, w bardzo małych przyrostach, praca zespołowa z intensywną współpracą. Nastawione są na bliską współpracę z klientem i uwzględnianie na bieżąco jego postulatów. Proces i produkt dostosowywane są do potrzeb (agility, adaptaiblity).

d)
Metodyki zwinne:
-nastawione na zmiany i adaptację do zmian
-przeznaczone dla mniejszych projektów i zespołów
-procesy lekkie, relatywnie mniejsza liczba działań i produktów
-dla projektów, które nie wiążą się z zastosowaniem krytycznym, za to mogą znacznie ewoluować

Metodyki sterowane planem:
-oparte na planowaniu i zarządzaniu
-przeznaczone dla dużych projektów realizowanych przez większe zespoły
-precyzyjnie zdefiniowane procesy z możliwością adaptacji (wykastrowania ich)
-zwiększone gwarancje jakościowe
`),
    new OpenQuestion(`
Modele wytwarzania (modele cyklu życia):
a) Podać główne idee dla modeli: przyrostowego i prototypowego
b) Porównać te 2 modele pod względem różnic w podejściu.
c) Dla każdej z następujących 3 sytuacji uzasadnić, który z tych 2 modeli lepiej zastosować:
  -potrzeba szybkiego wdrożenia pewnego podzbioru kluczowych funkcji
  -udziałowcy nie umieją wyartykułować wymagań
  -prawdopodobna duża zmiana wymagań dla jednego z podsystemów w połowie projektu na skutek zmian w prawie
`, `
a)
Przyrostowy: rodzaj podejścia iteracyjnego w którym celem każdej iteracji jest dodanie nowego podzbioru funkcjonalności. W chwili T x% systemu jest ukończone w 100%.

Prototypowy: rodzaj podejścia iteracyjnego, gdzie bazuje się na prototypie systemu. W każdej iteracji prototyp poddaje się ocenie interesariuszy i uwzględnia się ich uwagi.

b)
Prototypowy:
-dotyczy etapu wytwarzania (implementacji systemu)
-w chwili T x% systemu ukończone jest w 100%
-każdy przyrost dodaje nowe funkcjonalności

Przyrostowy:
-występuje przed implementacją
-implementacja następuje po tym jak zrobimy wystarczająco dobry prototyp
-w każdej iteracji mogą być dodane/zmienione/usunięte funkcjonalności, dostosowując prototyp do uwag interesariuszy

c)
1: Model przyrostowy, gdyż w każdym przyroście wzbogacamy system o nowe funkcjonalności, możemy więc na samym początku zaimplementować podzbiór o którym mowa, a resztą zająć się później
2: Model prototypowy, modyfikując stopniowo prototyp stosując się do uwag w końcu dotrzemy do wymagań systemu którego oczekują interesariusze
3: Model przyrostowy, na początku implementowane będą funkcjonalności, których potencjalna zmiana nie dotyczy
`),
    new OpenQuestion(`
Wdrażanie oprogramowania:
a) Zdefiniować czym jest wdrożenie oprogramowania.
b) Jakie elementy (czynności) potencjalnie wchodzą w zakres wdrożenia?
c) Jakie są najczęstsze problemy związane z wdrożeniem?
d) Jakie istnieją strategie wprowadzenia (wdrożenia systemu)? Wymienić i krótko przedstawić.
`, `
a)
Wdrażanie oprogramowania - działania mające na celu doprowadzenie systemu do rzeczywistego zastosowania w środowisku docelowym

b)
-przygotowanie wdrożenia
-instalacja systemu
-konfiguracja
-kastomizacja
-szkolenia
-wprowadzanie/migracja danych
-reorganizacja organizacji klienta
-audyt/certyfikacja/formalne zatwierdzenie
-gotowość do startu produktywnego

c)
Podczas wdrażania ujawniają się różne błędy popełnione we wcześniejszych etapach:
-dotyczące wymagań, np.: nieuwzględnienie jakiegoś interesariusza; luki/błędy w wymaganiach; nieuwzględnienie zmian w wymaganiach
-dotyczące konstrukcji systemu, np.: nieoptymalna architektura; słaba niezawodność; niedostosowanie do docelowej infrastruktury

d)
Stary system niekoniecznie jest informatyczny, przykładowo uczelnia zamienia dziennik papierowy (stary system) na system dziennika elektronicznego!

Bezpośrednie:
Stary system wychodzi z użytku i od razu używany jest nowy system.

Równoległe:
Stary system wyłączany jest kiedy istnieje pewien stopień pewności iż nowy system działa poprawnie.

Pilotowane:
Jeżeli mamy jakąś grupę ludzi na określonym stanowisku (np obsługa klienta w banku) to w co najmniej jednym przechodzimy na nowy system. Jeżeli wystąpi jakiś poważny błąd w systemie, to pracownik odeśle klienta do kolegi obok, który używa starego systemu.

Strategia fazowa:
Wdrażanie kolejnych modułów systemu po kolei zastępując moduły starego systemu.
`),
    new OpenQuestion(`
Wymienić i krótko opisać specyficzne techniki i narzędzia do analizy kontekstu użytkowania (AKU) i analizy/projektowania interfejsu użytkownika.
`, `
Sortowanie kart: luźne karteczki zawierające poszczególne elementy interfejsu/kompozycji serwisu. Uczestnicy badania grupują je według swojego przekonania o ich wzajemnym powiązaniu tematycznym. Układ treści na stronie projektowany jest za pomocą rozmieszczania karteczek.

Persona: fikcyjna osoba posiadająca imię i nazwisko, a czasami nawet głębsze szczegóły życia, fikcyjny użytkownik systemu. Dzięki personie projektanci mogą lepiej wczuć się w rolę i potrzeby użytkownika.

Testy użyteczności:
-> testy eksperckie: ukierunkowane na typowo popełniane błędy, dokonywane na podstawie zasad projektowania UI (np. heurystyk Nielsena)
-> obserwacja pracy użytkowników: zdefiniowanie zadań, poziomy osiągnięć, zbieranie opinii, bezpośrednia obserwacja

Scenariusze użycia: stosowane przy testach użyteczności z kontrolowaną pracą użytkowników. Scenariusze definiują zadania, które powinni wykonać w ramach sesji pracy użytkownicy. Powinny obejmować typowe czynności wykonywane przy pracy z systemem uzasadnione z biznesowego punktu widzenia.

Rejestracja wideo: użytkownik jest nagrywany podczas pracy z systemem (np. równocześnie ekran i kamerka skierowana na użytkownika). Pozwala to na poźniejsze przeanalizowanie interakcji i napotkanych problemów.

Clicktracking: mapa cieplna (heat map). Kod skryptowy dodawany do źródeł stron pozwalający na obserwacje tego ile gdzie było kliknięć.

Eyetracking: obserwacja wzroku użytkownika systemu (gdzie patrzył podczas korzystania z systemu). Metoda ta wymaga specjalnego sprzętu.

Testy A/B: porównanie 2 (lub więcej) wersji produktu pod względem określonych metryk, na przykład uśredniona ocena użytkownika. Szczególnie popularne dla serwisów internetowych.
-> faktyczni użytkownicy przekierowywani do różnych wersji systemu
-> mierzony jest współczynnik konwersji, czyli ile % użytkowników zrobiło to, czego chciał właściciel serwisu (np.: kupienie produktu, przeczytanie postów, … )

`),
    new OpenQuestion(`
Wymienić i krótko opisać obszary zarządzania projektem. [wystarczy 7]
`, `
-zarządzanie zakresem: ustalanie i weryfikacja zakresu; przełożenie zakresu na bardziej szczegółowe zadania i produkty; reagowanie na zmiany zakresu zapobieganie “rozpełzaniu zakresu”

-zarządzanie udziałowcami: identyfikacja udziałowców; utrzymanie zaangażowania udziałowców i komunikacja z nimi;

-zarządzanie czasem: identyfikacja zadań i powiązań między nimi; oszacowanie czasu dla poszczególnych zadań; przygotowanie harmonogramu (milestones; diagram obrazujący zależności); nadzór nad realizacją harmonogramu; reakcja na zmiany/problemy

-zarządzanie kosztami: identyfikacja zasobów; oszacowanie kosztów na zadania, etapy projektu, harmonogram; nadzorowanie budżetu; kontrola wydatków;

-zarządzanie zespołem: organizacja zespołu(struktura, role i odpowiedzialności, sposoby komunikacji); dobór ludzi do zespołu; budowa zespołu; motywowanie; ocena;

-zarządzanie komunikacją: przygotowanie kanałów komunikacyjnych; zapewnienie dostępu do informacji, dystrybucja; raportowanie; zgłaszanie problemów;

-zarządzanie konfiguracją: nadzór nad wszystkimi produktami i zasobami (np.: kod źródłowy, przypadki testowe, wymagania, umowy, narzędzia)

-zarządzanie zmianą: zgłaszanie, rozpatrywanie i śledzenie zmian występujących w trakcie projektu (np.: nowe wymaganie, zgłoszenie defektu)

-zarządzanie jakością: planowanie jakości (określenie standardów, określenie celów i miar ich osiągnięcia); zapewnienie jakości (plan zapewniania jakości i jego realizacja, audyty); kontrola jakości (przeglądy i inspekcje, próbkowanie, analiza przyczyn, zmiany w procesach)

-zarządzanie ryzykiem: działanie proaktywne zapobiegające lub ograniczające konsekwencje
`),
    new OpenQuestion(`
Metodyki:
a) Wyjaśnić pojęcie metodyki i jej relację do cyklu wytwarzanie.
b) Jakie elementy procesów powinny być sprecyzowane w ramach metodyki?
c) Wyjaśnić rozróżnienie na metodyki wytwórcze i zarządcze. Jakie zagadnienia wchodzą w zakres tych kategorii metodyk a jakie na pewno nie?
d) Wymienić po 3 konkretne metodyki spośród wytwórczych i zarządczych.
`, `
a)
Metodyka - konkretna metoda bazująca na jednym lub kombinacji kilku modeli wytwarzania. Definiuje ona szczegółowe etapy, praktyki, produkty itp., zwykle firmowana przez określonego autora/gremium.

b)
Elementy procesów:
-> CO - czynności
-> KTO - role w projekcie
-> KIEDY - wskazania kolejności, następstw przyczynowo-skutkowych dla czynności
-> JAK	- towarzyszące im praktyki
-> PRODUKTY - artefakty

c)
Metodyki wytwórcze:
-zwykle bazują na określonym modelu/modelach wytwarzania
-konkretyzują zadania, produkty, role, praktyki
-koncentrują się na działaniach deweloperskich
-zawierają też w pewnym zakresie zagadnienia menedżersko-zarządcze
Metodyki zarządcze:
-punkt widzenia menedżerski, zarządzanie przedsięwzięciem
-w znacznej mierze oderwane są od konkretnych praktyk deweloperskich
-często metodyka uniwersalna, tzn. nie dotyczy tylko projektów informatycznych albo adaptowana do dziedziny oprogramowania

d)
Wytwórcze:
MSF, RUP, PSP, TSP

Zarządcze:
PRINCE2, PMBOK, ITIL
`),
    new OpenQuestion(`
Specyfika oprogramowania:
a) Jakie analogie można wskazać między różnymi dziedzinami inżynierskimi, w tym software’ową?
b) A jakie różnice? Wymienić i opisać 5 czynników specyfiki oprogramowania odróżniających inżynierię oprogramowania od innych dziedzin inżynierskich.
`, `
a)
-negocjacje z klientem, komunikacja
-planowanie przedsięwzięcia, przydział zasobów
-pozyskanie wymagań
-plany, modele, obliczenia
-zarządzanie przedsięwzięciem
-zapewnienie jakości
-kwalifikacje pracowników
-narzędzia i technologie

b)
1. Niematerialny produkt - oprogramowanie jest niematerialnym wytworem intelektu
2. Zdominowane przez projektowanie - nakłady na produkcję są pomijalne (kopiowanie), większość wysiłku skierowana na projektowanie
3. Nie zużywa się - wadliwe działanie wynika z błędów projektowych czy też z niedopasowania do środowiska
4. Duża złożoność - trudno prześledzić wszystkie możliwości, wypuścić produkt pozbawiony błędów
5. Dowolność struktury - brak ograniczeń typowych dla świata fizycznego
6. Zależność elementów - niejawne zależności między elementami prowadzą do trudności konstrukcyjnych, błędów, problemów z wprowadzaniem modyfikacji
7. Brak ograniczeń - nieznaczna zmiana może prowadzić do znacznych efektów
8. Łatwość modyfikacji - bardzo pożądane, ale może prowadzić do wprowadzania zmian w nieprzemyślany sposób, błędów i bylejakości
`),
    new OpenQuestion(`
a) Wyjaśnić pojęcie zarządzania konfiguracją i podać 5 przykładów co podlega zarządzaniu konfiguracją.
b) Uzasadnić potrzebę zarządzania konfiguracją w większym przedsięwzięciu informatycznym (potrzeby, występujące problemy)
c) Jakie istnieją narzędzia wspomagające zarządzanie konfiguracją i jaka jest ich podstawowa funkcjonalność?
`, `
a)
Zarządzanie konfiguracją - nadzór nad rozwojem wszelkich elementów składowych projektu informatycznego powstałych zarówno na etapie wytwarzania jak i jego późniejszej eksploatacji.
Co może jej przykładowo podlegać: kod źródłowy, testy, dokumenty, wymagania, zgłoszenia błędów/zmian.

b)
Potrzeby:
-zapewnienie pracowania na aktualnej wersji kodu
-zapobieganie zniszczeniu dokonanych zmian
-ustalenie, czy zaimplementowano wszystkie wymagania
-testowane właściwej wersji
-uniknięcie ponownego wystąpienia poprawionych już wcześniej defektów
-powrót do poprzedniej wersji kodu
-informacja na temat tego, jakie moduły znajdują się w konkretnej wersji

c)
GIT, SVN, Mercurial
-dostęp do aktualnych i poprzednich wersji
-historia zmian i ich autorzy
-możliwość cofnięcia zmian
-porównywanie wersji
-identyfikacja konfliktów i ich rozstrzyganie
-tworzenie branchów
-mergowanie, zamrażanie branchów
`),
    new OpenQuestion(`
Wyjaśnić pojęcia:
paradygmat; framework reuse; wdrożenie pilotowane; wymaganie; IDE; przypadek testowy; udziałowiec; clicktracking; zarządzanie konfiguracją; testy regresji/regresywne;
`, `
paradygmat - zbiór pojęć i teorii tworzących podstawy danej nauki
framework reuse - wykorzystanie szkieletu aplikacji, wypełnianego, dostosowanego do rozwiązania konkretnego problemu
wdrożenie pilotowane - wdrożenie z pilotem. Jeżeli mamy do czynienia z wieloma osobami na tym samym stanowisku, to jedna osoba dostaje jako pierwsza nowy system, pozostałe przez pewien czas pracują jeszcze na starszym.
wymaganie - warunek/zdolność jaką musi spełnić system, aby zostać zaakceptowanym przez klienta; warunek/zdolność systemu potrzebna udziałowcowi do rozwiązania problemu lub osiągnięcia celu; musi być udokumentowne
IDE - zintegrowane środowisko deweloperskie, dedykowane narzędzie do pisania kodu
przypadek testowy - obserwacja działania programu, związana z interpretacją interesującego nas zdarzenia, danymi, funkcjami
udziałowiec - każdy podmiot, niekoniecznie ożywiony, mający uzasadnione prawo do wywarcia wpływu na projektowany system
clicktracking - “mapa cieplna”, skrypt dołączany do strony ukazujący gdzie ile było kliknięć
zarządzanie konfiguracją - nadzór nad wszystkimi produktami oraz zasobami
testy regresji/regresywne - testy mające na celu sprawdzić czy to co działało do tej pory, nadal działa
`),
    new OpenQuestion(`
Wymienić cykle (modele) wytwarzania oprogramowania (wystarczy 5) inne niż cykl klasyczny. Każdy z nich krótko opisać, wyjaśniając w ramach opisu co jest podstawowym pomysłem lub rozwiązaniem stosowanym w ramach tego cyklu odróżniającym go od innych cykli.
`, `
1. Model V:
model wywodzi się z modelu klasycznego. Kładzie on silny nacisk na testowanie, każdy poziom testów odpowiada poziomowi danej dziedziny IO. Przykładowo jeśli wyjdzie jakiś błąd na poziomie testów jednostkowych, powinniśmy wrócić się do projektu szczegółowego.

2. Model przyrostowy:
podejście iteracyjne. W każdej iteracji dodawany jest kolejny podzbiór funkcjonalności systemu. W chwili T x% systemu ukończone jest w 100%.

3. Model prototypowy:
podejście iteracyjne. W każdej iteracji powstaje coraz dokładniejsze przybliżenie docelowego systemu, na podstawie uwag otrzymanych od interesariuszy.

4. Model spiralny:
strategia zmniejszająca ryzyko. Cykliczność faz wytwarzania, uwzględnianie oceny interesariuszy w dalszych planach. Najogólniejszy model wytwarzania mieści w sobie pozostałe modele jako specjalne przypadki.

5. Re - engineering:
ponowna inżynieria. Model wytwarzania dla sytuacji gdzie istnieje już jakiś system, który ma zostać zastąpiony nowym. Dla starego systemu może nie być dokumentacji ani kodu źródłowego, więc trzeba je pozyskać (reverse engineering) przez zdekompilowanie kodu oraz odtworzenie dokumentacji na podstawie kodu i działania.

6. Model oparty o przekształcenia formalne:
budowa najpierw innej reprezentacji systemu opartej o formalną norację matematyczną i potem przekształcanie tego do kolejnych reprezentacji i finalnie do postaci kodu. Stosowane jest w wąskich dziedzinach zastosowań.

7. Komponentowy model wytwarzania (CBD, Component Based Development):
dla systemów opartych głównie o gotowe komponenty. Zamiast tworzyć wszystko od podstaw, zawiera dużo więcej analizy istniejących komponentów, ich wyboru, dostosowywania do potrzeb i integracji.
`),
    new OpenQuestion(`
Wymienić i krótko opisać metody pozyskiwania wymagań systemowych. (wystarczy 6)
`, `
1. Wywiady - przeprowadzanie wywiadu z interesariuszami, może być strukturalny (przygotowana lista pytań) lub niestrukturalny (bez wcześniej przygotowanej listy pytań)

2. Warsztaty - spotkanie grupy udziałowców w celu wspólnej dyskusji na temat wymagań widzianych z ich punktu widzenia i uzgodnienia wspólnego stanowiska. Często bazują na różnych scenariuszach. Uczestnicy, przez wykonanie pewnych zadań mają lepiej zrozumieć i wrazić wymagania.

3. Burze mózgów - spotkanie grupy interesariuszy według określonego scenariusza ukierunkowane na generowanie nowych, nieszablonowych pomysłów z odroczoną krytyką/oceną tych propozycji.

4. Kwestionariusze - kwestionariusze skierowane do udziałowców; mogą zawierać pytania otwarte jak i zamknięte.

5. Prototypowanie - tworzenie prototypu (najczęściej do wyrzucenia) i ocena jego przez udziałowców.

6. Analiza dokumentów - analiza informacji o danej dziedzinie, organizacji dla której tworzymy system.

7. Analiza istniejącego systemu - nowy system ma zastąpić stary, a więc analizujemy go, w celu zrozumienia co było w nim dobrze zrealizowane a co należy zrobić inaczej

8. Obserwacje - analityk spędza czas obserwują przyszłych użytkowników w ich środowisku pracy i na podstawie tego zbiera wymagania. Może jednak wystąpić efekt Hawthorne, czyli pracownicy wiedząc o tym że są obserwowani będą zachowywać się inaczej.

9. Terminowanie - metoda bardzo czasochłonna, analityk uczy się od eksperta pracy i obowiązków w danej dziedzinie.
`),
    new OpenQuestion(`
Opisać ideę i typową funkcjonalność systemów kontroli wersji takich jak CVS czy SVN.
`, `
Tego typu systemy wykorzystuje się do zarządzania konfiguracją. W skład typowych funkcjonalności wchodzą:
-dostęp do aktualnych i poprzednich wersji
-historia zmian i ich autorów
-cofanie zmian
-porównywanie wersji
-identyfikacja i rozstrzyganie konfliktów
-tworzenie branchów (linii rozwojowych)
-mergowanie i zamrażanie branchów
`),
    new OpenQuestion(`
Defekty oprogramowania:
a) Ustawić następujące pojęcia w kolejności przyczynowo-skutkowej: błąd, pomyłka człowieka, awaria, defekt
b) Wyjaśnić zależności, między ww. pojęciami (w jaki sposób jedno może prowadzić do drugiego)
c) Wyjaśnić na czym polega reguła “1:10” związana z defektami oprogramowania
d) Wyjaśnić na czym polega zjawisko “maskowania defektów”
`, `
a) pomyłka człowieka -> defekt -> błąd -> awaria
b) człowiek myli się i pisze w kodzie nie to co trzeba, w wyniku czego powstaje defekt. defekt może prowadzić (ale nie musi) do zachowania systemu odbiegającego od oczekiwań, jeżeli nie jest one obsłużonym wyjątkiem, może doprowadzić do awarii, czyli niemożności wykonania jakiejś funkcji przez program
c) koszt naprawy błędu rośnie 10-krotnie na każdym kolejnym etapie projektu
d) maskowanie defektów - poważniejsze defekty maskowane są przez mniej poważne defekty. Np. mamy jakiś przycisk, który nie działa a powinien. Jak poprawimy to i będziemy mogli w niego kliknąć to przy kliknięciu cały system się wywala, czyli brak możliwości wciśnięcia przycisku zamaskował poważniejszy defekt.
`),
    new OpenQuestion(`
Wyjaśnić pojęcia: udziałowiec systemu, issue tracking, walidacja, refaktoryzacja, klasa równoważności (w testowanie), testy integracyjne, inspekcje oprogramowania, warstwa (architektury systemów)
`, `
udziałowiec systemu - każdy podmiot, niekoniecznie ożywiony, który ma uzasadnione prawo do wywarcia wpływu na powstający system

issue tracking - śledzenie sytuacji wyjątkowych, możliwych błędów

walidacja - proces mający na celu weryfikację, czy budowany system robi to, co powinien

refaktoryzacja - zmiana struktury kodu bez dodawania nowej funkcjonalności

klasa równoważności - różne wykonania programu można pogrupować tak, że poprawne działanie dla reprezentanta grupy oznacza poprawne działanie dla całej grupy. Grupy te nazywamy klasami równoważności.

testy integracyjne - testy mające na celu sprawdzić poprawność współpracy komponentów systemu.
`),
    new OpenQuestion(`
Wymienić najczęstsze problemy związane z pozyskiwaniem i analizą wymagań. Dla każdego problemu podać istniejące sposoby radzenia sobie z nim (np. odpowiednie techniki pozyskiwania, sposób specyfikowania, przyjęcie specyficznego modelu wytwarzania).
`, `
1. Udziałowiec może nie wiedzieć czego chce - można temu zapobiec stosując prototypowanie aby zapewnić mu coś bardziej “namacalnego”.

2. Wiedza dziedzinowa - rzeczy oczywiste dla interesariusza niekoniecznie są oczywiste dla kogoś z zewnątrz i może je na przykład pomijać. Rozwiązaniem tego problemu może być stosowanie technik wydobywania wymagań takich jak obserwacje czy terminowanie.

3. Wymagania nie są dostępne w gotowej postaci - udziałowiec nie poda gotowej listy tego co oczekuje od systemu. Użyteczne mogą okazać się techniki wydobywania wymagań, takie jak wywiady.

4. Spójność - wymagania mogą być niespójne, nawet jeśli pochodzą od jednego interesariusza. Można tu wykorzystać modelowanie, gdyż przy przełożeniu wymagań na model ujawniają się niespójności.

5.  Kompletność - czy aby na pewno nie będzie niczego brakować w naszym systemie. Mogą nam w tym pomóc macierze śladowości, gdzie przyporządkowujemy konkretny feature do konkretnego use case’a. Bądź też sprawdzanie wystąpienia operacji CRUD dla danych obiektów.
6. Priorytetyzacja - różni udziałowcy mogą mieć różne potrzeby; mogą wystąpić też zależności między konkretnymi funkcjonalnościami. Do ustalania priorytetów może posłużyć MoSCoW (Must, Could, Should, Won’t), lub Timeboxing/budgeting, czyli oszacowanie czasochłonności i kosztów poszczególnych wymagań i dobór podzbioru możliwego do realizacji np. w kolejnej iteracji.
`),
    new OpenQuestion(`
Wyjaśnić z czym polega idea iteracyjnego modelu wytwarzania i jakie są spodziewane korzyści takiego podejścia. Wymienić i krótko (max. 4 zdania każdy) scharakteryzować 3 bardziej specyficzne modele wytwarzania oparte na podejściu iteracyjnym.
`, `
Iteracyjny model wytwarzania - zamiast jednego przebiegu, wykonywanych jest kilka iteracji.
Umożliwia to między innymi:
	-poprawianie błędów w kolejnej iteracji
	-uczenie się deweloperów w trakcie przedsięwzięcia
	-feedback od interesariuszy
	-dostosowanie produktu do potrzeb

1. Model przyrostowy - w każdej iteracji do systemu dodajemy nowy podzbiór funkcjonalności. W w chwili T x% systemu ukończone jest w 100%.

2. Model Prototypowy - zaczynamy z bazowym prototypem. Wraz z każdą iteracją otrzymujemy coraz bardziej przybliżony do docelowego systemu prototyp, na podstawie uwzględnionych uwag od udziałowców.

3. Model spiralny - trudny do zrozumienia. Strategia zmniejszająca ryzyko. Cykliczność wytwarzania uwzględniająca oceny użytkownika i walidację. Najogólniejszy model wytwarzania mieści w sobie pozostałe modele jako przypadki szczególne.
`),
    new OpenQuestion(`
Wzorce projektowe:
a) Wyjaśnić pojęcie wzorca projektowego.
b) Jakie podstawowe elementy należy opisać definiując wzorzec projektowy?
c) Wymienić i krótko opisać inne znane rodzaje wzorców (poza projektowymi).
`, `
a) wzorzec projektowy - opisuje problem, jego rozwiązanie, kiedy zastosować te rozwiązanie i jakie będą tego konsekwencje. Rozwiązaniem jest ogólny model elementów, klas i obiektów, ich związki, odpowiedzialności i współpracę. Rozwiązanie to powinno następnie zostać przystosowane i zaimplementowane tak aby rozwiązywało problem w jego szczególnym kontekście (odpowiednie klasy ze wzorca będą odpowiadać odpowiednim klasom z systemu)

b)
Nazwa - nic dodać nic ująć

Problem - kiedy zastosować dany wzorzec. Co rozwiązuje? Jak rozpoznać że mamy do czynienia akurat z tymże problemem? Jaki jest wymagany kontekst i warunki, które trzeba spełnić aby go zastosować?

Rozwiązanie - jak powinien wyglądać projekt. Struktura i jej elementy: klasy i związki, obiekty i powiązania; dynamiczna współpraca elementów; wskazówki implementacyjne dla różnych technologii;

Konsekwencje - świadome przedstawienie za i przeciw. Jakie są potencjalne braki wzorca? Tradeoffs. Utrzymanie i rozszerzanie systemu budowanego z użyciem wzorca.

c)
Wzorce analityczne - odzwierciedlają strukturę konceptualną procesów biznesowych i bytów świata rzeczywistego.

Wzorce architektoniczne - opisują wysokopoziomowy podział systemu na główne podsystemy i zależności między tymi podsystemami, np. MVC

Wzorce dziedzinowe - w sumie to wzorce projektowe, ale dotyczące specyficznych dziedzin informatyki, np.: wzorce bezpieczeństwa

Wzorce Adaptive Object-Model AOM - podejście do budowy systemów, w którym klasy, struktury i związki są sprecyzowane jako metadane
`),
    new OpenQuestion(`
Inżynieria wymagań:
a) Na czym polega pozyskiwanie wymagań?
b) Na czym polega analizowanie (analiza) wymagań po ich pozyskanie? Wymienić i krótko opisać 3 poziomy analizowania wymagań.
c) Na czym polega zarządzanie wymaganiami i w jaki sposób wspiera procesy pozyskiwania i analizy wymagań?
`, `
a) Identyfikacja źródeł wymagań (udziałowców), określenie przedstawicieli udziałowców, od których będą wydobywane wymagania, dotarcie do tych przedstawicieli i pozyskanie od nich wymagań za pomocą konkretnych technik wydobywania wymagań.

b) Wymagania analizowane są pod kątem luk, sprzeczności i braków.
1. Przetworzenie uprzednio wydobytych wymagań - wymagania nie są w gotowej postaci.
2. Uporządkowanie
	-przypisanie do kategorii (cele, wymagania użytkowników, wymagania funkcjonalne)
	-zdekomponowanie ogólniejszych wymagań na właściwy poziom abstrakcji
	-określenie zależności między wymaganiami
3. Priorytetyzacja wymagań - ustalenie priorytetów dla poszczególnych wymagań, np metodą MoSCoW (Must, Should, Could, Won’t)

c) zarządzanie wymaganiami - utrzymanie wymagań w trakcie całego projektu i wprowadzanie do nich zmian
-wymagania nie istnieją każde osobno, lecz występują między nimi zależności
-wymagania są pewną wczesną reprezentacją systemu, elementy kolejnych reprezentacji będą wynikały z wymagań
-dobra inżynieria wymagań ograniczy liczbę błędów w wymaganiach, ale raczej nie zmniejszy jej do zera - trzeba się liczyć z koniecznością poprawek
-wymagania mogą podlegać zmianom w dalszych fazach trwania przedsięwzięcia
`),
    new OpenQuestion(`
Wyjaśnić pojęcia oraz w ramach danej grupy wskazać jakie istnieją pomiędzy nimi zależności:
a) skrypt testowy; scenariusz testowy; przypadek testowy;
b) analiza statyczna; przegląd; analiza dynamiczna; inspekcja;
`, `
a)
scenariusz testowy - najczęściej składa się z przypadków testowych. Systematyczna obserwacja oczekiwanego działania programu.

przypadek testowy - obserwacja działania oprogramowania związana z interpretacją interesującego nas zdarzenia, danymi, funkcjami

skrypt testowy - implementacja przypadku testowego w kodzie

b)
analiza dynamiczna - testowanie oprogramowania wymagające eksperymentowania z działającym (wykonywalnym) kodem

analiza statyczna - poszukiwanie defektów metodami innymi niż analiza dynamiczna (nie wymagającymi uruchamiania tego wykonywalnego kodu)

przegląd - metoda analizy statycznej, działanie zespołowe ukierunkowane na wykrycie defektów w dokumencie, którego autor jest członkiem zespołu oraz potwierdzenie dobrej jakości dokumentu w zakresie niewymagającym poprawy.

inspekcja - najbardziej sformalizowany rodzaj przeglądu. Posiada zdefiniowane mechanizmy detekcji, sformalizowany proces, ustalone parametry (np.: tempo kontroli) oraz statyczną kontrolę procesu.
`),
    new OpenQuestion(`
Inżynieria wymagań:
a) Na czym polega pozyskiwanie wymagań?
b) Na czym polega analizowanie (analiza) wymagań po ich pozyskanie? Wymienić i krótko opisać 3 poziomy analizowania wymagań.
c) Na czym polega zarządzanie wymaganiami i w jaki sposób wspiera procesy pozyskiwania i analizy wymagań?
`, `
a) Identyfikacja źródeł wymagań (udziałowców); określenie przedstawicieli tych udziałowców; dotarcie do tych przedstawicieli i wydobycie od nich wymagań konkretnymi technikami

b)
1. Przetworzenie - wymagania nie występują w gotowej postaci i trzeba je przetworzyć
2. Uporządkowanie
	-przypisanie do grupy (wymagania użytkowników, wymagania funkcjonalne, cele)
	-zdekomponowanie ogólniejszych wymagań na właściwy poziom abstrakcji
	-określenie zależności między wymaganiami
3. Priorytetyzacja - określenie priorytetów wymagań

c) zarządzanie wymaganiami - utrzymywanie wymagań w trakcie całego projektu i wprowadzanie do nich zmian
-wymagania nie istnieją każde z osobna, lecz występują między nimi zależności
-wymagania są pewną wczesną reprezentacją systemu, elementy kolejnych reprezentacji będą z nich wynikały
-wymagania mogą podlegać zmianom w danych etapach przedsięwzięcia
`),
    new OpenQuestion(`
Model V:
a) narysować schemat modelu V
b) wskazać na czym polegają różnice procesu w stosunku do modelu klasycznego.
c) Jeżeli projekt byłby zrealizowany wg modelu V i podejścia Test Driven Design:
	-dla którego poziomu testowania najpierw rozpisano by przypadki testowe?
	-dla którego poziomu testowania najpierw przeprowadzono by przypadki testowe?
	-co sprawdzano by w ramach najwyższego poziomu testowania?
d) Zaznaczyć na narysowanym schemacie:
1: W którym miejscu sprawdzano by poprawność i jakość Projektu Systemu?
2: W którym miejscu sprawdzano by czy zaimplementowany system spełnia założenia określone w projekcie systemu?
`, `
b) model V kładzie silny nacisk na testowanie, każdy test odpowiada pewnemu poziomowi abstrakcji związanemu z etapami przed implementacją systemu. Jeżeli wykryty zostanie błąd na przykład na poziomie testów systemowych, to wracamy się do etapu analizy.

c)
-dla testów akceptacyjnych
-testy jednostkowe
-testy akceptacyjne

d) 1: testy systemowe; 2: testy akceptacyjne
`),
    new OpenQuestion(`
Testowanie:
a) Co to jest testowanie?
b) W jaki sposób poprzez testowanie można wykazać poprawność programu?
c) Podać minimalny zbiór warunków pozwalających uznać eksperymentowanie z programem za testowanie.
`, `
a) testowanie - analiza zachowania produktu w celu pomiaru (oceny) jego jakości
b) Nie da się. Można jedynie wykryć określone błędy, czyli wykazać wystąpienie defektów.
c)
-środowisko musi umożliwiać wykonanie kodu w sposób:
nadzorowany:
-rejestrowanie warunków i przebiegu testu
-wykonywanie “kroków testowych” w określonej, zaplanowanej kolejności
kontrolowany:
-możliwość inicjowanie i wymuszania zdarzeń
-dane wejściowe reprezentujące wszystkie istotne dla działania systemu zakresy wartości
-dla każdego wybranego zestawu danych wejściowych powinny (przed wykonaniem testu) zostać określone oczekiwane wyniki
-na koniec testu przeprowadzana jest analiza otrzymanych wyników pod kątem ich zgodności z oczekiwanymi wynikami
`),
    new OpenQuestion(`
Klasyczny model cyklu życia oprogramowania:
a) Przedstawić założenia, ideę i schemat modelu klasycznego.
b) Wymienić zalety modelu klasycznego.
c) Wymienić wady modelu klasycznego i dla każdej wady podać: jakie modele nieklasyczne adresują daną wadę i za pomocą jakich rozwiązań.
`, `
a)
Model klasyczny (kaskadowy) zawiera wyróżnialne etapy, odseparowane od siebie. Każdy etap rozpoczyna się po zakończeniu poprzedniego, każdy etap dotyczy całości systemu. Jeżeli popełnimy błąd na jakimś etapie, powinniśmy wrócić się do tego etapu i przejść ponownie przez wszystkie pośrednie etapy.

b)
-prosty do zrozumienia
-obejmuje wszystkie obszary IO i wprowadza systematykę
-pozwala na wyraźne zdefiniowanie etapów
-pozwala dekompozycję pracy dla poszczególnych ról oraz rozłożenia ich w czasie
-powstały z nim standardy z konkretnymi metodykami

c)
1. zakłada, że od razu możliwe będzie uchwycenie całego problemu i wymagań
2. zakłada, że pozyskane wymagania nie będą się zmieniać
3. działające oprogramowanie powstaje dopiero pod koniec projektu
4. wytwarzanie oderwane od udziałowców, walidacja projektu dopiero w końcowych etapach
5. błąd lub żądanie zmiany powoduje konieczność powrotu do odpowiedniego etapu i przejścia procesu jeszcze raz
`),
    new OpenQuestion(`
Wzorce projektowe:
a) Wyjaśnić pojęcie wzorca projektowego.
b) Czym wzorce projektowe różnią się od innych form Software Reuse?
c) Jakie podstawowe elementy należy opisać definiując wzorzec projektowy?
d) Wyjaśnić cele zastosowania wzorców: Abstract Factory, Composite, Observer, DataMapper. [Chodzi jedynie o informację do czego służy dany wzorzec, bez przedstawiania na czym polega rozwiązanie, opisywania elementów składowych itp.]
`, `
a) Wzorzec projektowy - opisuje problem, jego rozwiązanie, kiedy je zastosować oraz jakie będą tego konsekwencje. Rozwiązaniem jest ogólny model elementów, klas i obiektów, ich związki, odpowiedzialności i współprace. Powinno zostać przystosowane i implementowane tak, aby rozwiązywało problem w jego szczególnym kontekście.
b) wzorzec projektowy nie jest: algorytmem, komponentem, biblioteką klas/funkcji/innych elementów kodu

c)
Nazwa - nazwa wzorca projektowego

Problem - jaki jest problem? jak rozpoznać że mamy z nim doczynienia? jaki jest wymagany kontekst i warunki aby zastosować wzorzec?

Rozwiązanie - jak powinien wyglądać projekt. Struktura i jej elementy: klasy i związki, obiekty i powiązania; dynamiczna współpraca elementów; wskazówki implementacyjne

Konsekwencje - świadome przedstawienie wszystkich za i przeciw. Jakie są potencjalne braki wzorca? Utrzymanie i rozwój systemu wykorzystującego wzorzec.

d)
Abstract factory - dostarczyć interfejs do tworzenia grup powiązanych ze sobą obiektów bez specyfikowania ich konkretnych klas.

Composite - pogrupowanie obiektów w struktury drzewiaste obrazujące zależność całość - część i umożliwienie klientowi traktowania zarówno pojedynczych elementów jak i całych struktur w ten sam sposób

Observer - ustanowienie między obiektami relacji 1:many w której kiedy jeden kluczowy obiekt zmieni swój stan, wszystkie zależne od niego są automatycznie powiadamiane i aktualizowane

DataMapper - dwustronny transfer danych między pojemnikiem danych a reprezentacją danych w pamięci
`),
    new OpenQuestion(`
Wymienić i krótko opisać formy reprezentowania wymagań.
`, `
User stories - “jako [rola] chciałbym [usługa systemu] w celu [powód]”

Feature list - krótkie określenie funkcjonalnych i pozafunkcjonalnych cech systemu

Use case briefs - diagram przypadków użycia + krótkie jednozdaniowe opisy poszczególnych przypadków

Tekst naturalny - opis słowny, może to nawet być 1:1 wypowiedź udziałowca

Tekst ustrukturalizowany - wykorzystanie pewnej predefiniowanej struktury pozwalającej na wyróżnienie określonych zagadnień

Specyfikacje formalne - specyfikacja za pomocą konkretnego aparatu matematycznego. Raczej nie stosowana w praktyce.

Model - zamodelowanie wymagań przy użyciu diagramów, np. UML.
`),
    new OpenQuestion(`
Testowanie:
a) Co może oznaczać sytuacja, że testujemy dany program/system i nie wykrywamy żadnych błędów?
1. … albo 2. …
b) Kiedy zakończyć testowanie w projekcie informatycznym? Podać 5 kryteriów/odpowiedzi na to pytanie.
`, `
a)
1. nasz program działa tak jak powinien
2. zrobiliśmy chujowe testy (np. nie pokryliśmy wszystkich ważnych przypadków)

b)
-koniec zasobów (deadline, zmęczenie)
-szacowanie przez analogie
-wykonanie planu testowego
-dostateczne pokrycie przypadkami testowymi
-dynamika zgłoszeń znalezionych błędów
`),
    new OpenQuestion(`
Wymienić i opisać podstawową funkcjonalność głównych rodzajów narzędzi (oprogramowania) wykorzystywanych w inżynierii oprogramowania.
`, `
Narzędzia do modelowania: przestrzeń do rysowania diagramów; tworzenie modelu i sprawdzanie jego spójności; przełączanie pomiędzy diagramami; dostęp do repozytorium; generowanie dokumentacji; pewna forma generowania kodu; import/export projektu; możliwość rozszerzania narzędzia;

Narzędzia do zarządzania wymaganiami: współdzielony dokument wymagań; elementy graficzne, diagramy, tabele, wykresy - jako wymagania opisywane atrybutami; śladowość wymagań; szablony i standardy definiowania wymagań; widoki; odwołania do dokumentów źródłowych; integracja z innymi narzędziami;

Narzędzia do zarządzania konfiguracją: zapamiętywanie zmian i kolejnych wersji artefaktów; możliwość cofania zmian; tworzenie branchów; zarządzanie branchami; synchronizacja; centralne repozytorium (klient serwer) lub zarządzanie rozproszone (peer-to-peer)

Narzędzia do zarządzania zmianą: element zgłaszania i rozpatrywania propozycji zmiany oraz śledzenia i uaktualniania jej

Narzędzia do testowania: określenie założeń i warunków testu; opracowanie przypadku testowego; budowa skryptu  testowego; wykonanie skryptu testowego
Narzędzia wspomagające szybką refaktoryzację: identyfikacja martwego kodu; automatyczne zmiany powiązanych elementów; wykrywanie brzydkich zapachów;

Narzędzia Build Automation: automatyzacja przekształcania kodu źródłowego w binarny; podział na pakiety, pilnowanie zależności; uruchamianie testów automatycznych;

Narzędzia Continuous Integration: za każdym razem gdy dev przesyła kod do repo, odbywa się automatyczne budowanie, uruchomienie, testy (jednostkowe ale mogą być też integracyjne), możliwe też zabiegi QA (np. pomiary wydajności)

IDE: (Zintegrowane Środowisko Deweloperskie) kompleksowe podstawowe wsparcie dewelopera: edytor kodu, kompilator, debugger, profiler, analiza statyczna, generator dokumentacji, wsparcie przy testowaniu, możliwość tworzenia modeli, zarządzanie konfiguracją poprzez kontrolę wersji, projektowanie GUI
`),
    new OpenQuestion(`
Wymień i krótko opisz 7 wybranych heurystyk Nielsena.
`, `
1. Widoczny status systemu - w każdym momencie system powinien informować użytkownika o tym co się dzieje i co może/powinien zrobić za pomocą sensownych komunikatów. Przykładowo: wyposażenie systemu w paski postępu (lub chociaż listy zadań aktualnie wykonywanych i tych wymagających ukończenia).

2. Zgodność systemu ze światem rzeczywistym - stosowanie odpowiednich metafor i odniesień do świata rzeczywistego. Antyprzykład: wrzucanie dyskietki do kosza w celu jej wysunięcia (użytkownik może pomyśleć że w ten sposób skasuje dane)

3. Kontrola i wybór po stronie użytkownika - użytkownik musi mieć możliwość świadomego dokonania wyboru. Wsparcie dla akcji typu undo i redo, w razie pomyłki zapewnienie wyjścia awaryjnego. Antyprzykład: nie dało się kiedyś zapisać pustego pliku w notatniku.

4.  Spójność i zgodność ze standardami - zgodność ze standardami związanymi z wykorzystaną technologią, spójność pod względem wizualnym, kolorystyki, wyglądu apki/serwisu

5. Zapobieganie błędom - zamiast reagować na błędy, lepiej jest im zapobiegać na przykład blokując niedostępne opcje (tak żeby użytkownik ich w ogóle nie mógł wybrać)

6. Wybór zamiast pamiętania informacji - ograniczenie do minimum informacji które trzeba pamiętać, jak największa ilość obiektów, opcji, poleceń: ikony, podręczne menu, menu kontekstowe

7. Elastyczność i możliwość optymalizacji - rozróżnienie n00ba i pr0, zapewnienie skrótów przyspieszających pracę dla ekspertów, ukrycie ich przed nowicjuszami. Możliwość dostosowania interfejsu do własnych potrzeb.

8. Estetyka i umiar - w skrócie: nasranie pierdyliardem rzeczy na jednym ekranie nie jest dobrą praktyką. Nie powinno się prezentować nadmiarowych, niepotrzebnych i bardzo rzadko wykorzystywanych informacji. Komunikaty powinny być czytelne.

9. Wsparcie w razie błędów - opisowe komunikaty o błędach (a nie kody błędu albo wykorzystywanie programistycznego słownictwa) takie żeby użytkownik je zrozumiał, oraz sugestia rozwiązania problemu.

10. Pomoc i dokumentacja - informacja w niej zawarta powinna być łatwa do wyszukania, związana z bieżącym/określonym zadaniem, zawierać listy kroków do wykonania w określonych sytuacjach.
`),
    new OpenQuestion(`
Wydobywanie wymagań.

Jakie działania poprzedzające samą pracę z udziałowcami należy wykonać w ramach wydobywania wymagań?
Dla każdego z poniższych problemów zaproponuj technikę wydobywania wymagań, którą Twoim zdaniem najlepiej zastosować w takiej sytuacji i przekonująco uzasadnij swoje propozycje.

A - Różni udziałowcy zgłaszają wzajemne sprzeczne wymagania i każdy zostaje przy swoim zdaniu.

B - Zespół realizujący projekt kompletnie nie ma wiedzy o dziedzinie biznesowej klienta, a reprezentanci klienta nie są w stanie przekazać im tych informacji.

C - Udziałowcy nie są w stanie skonkretyzować swoich wymagań dotyczących funkcjonalności systemu i swojej interakcji z nim.

D - Organizacja klienta określiła cele biznesowe, ale brakuje pomysłów na to, jakie nowe procesy biznesowe i usługi systemu pozwoliłyby na osiągnięcie tych celów.
`, `
Działania poprzedzające pracę z udziałowcami:
-identyfikacja udziałowców
-określenie reprezentantów udziałowców od których będziemy wydobywać te wymagania
-dotarcie do wybranych reprezentantów

A: Obserwacje - dzięki obserwowaniu pracy przyszłych użytkowników będziemy w stanie dotrzeć do tego które zgłaszane wymagania są tymi właściwymi

B: Studia dziedzinowe - pozyskiwanie wiedzy na temat danej dziedziny biznesowej z dostępnych źródeł, np. dokumentów

C: Prototypowanie - udziałowcy dostaną coś bardziej namacalnego i dadzą feedback co im się podoba a co nie.

D: Burze mózgów - są to spotkania grupy interesariuszy wg określonego scenariusza ukierunkowane właśnie na generowanie nowych pomysłów.
`),
    new OpenQuestion(`
Wizja systemu.

Wymienić zagadnienia (7), które powinny zostać opisane w Wizji Systemu. Scharakteryzować każde z tych zagadnień, podając jakie informacje należałoby dla nich określić i zawrzeć w dokumencie Wizji.
`, `
1. Opis organizacji - opis organizacji/działu/otoczenia, dla którego ma być tworzony system. Zakładamy, że chodzi o konkretną organizację a nie zbiór organizacji (np. politechnika gdańska zamiast uczelnia wyższa)
-opis zawierający konkretne dane, również liczbowe, powiązania z innymi organizacjami, główne procesy, profil działalności
-perspektywy dalszej działalności, rozwoju
-struktura organizacyjna, podział obowiązków i odpowiedzialności
-identyfikacja problemów w aktualnym funkcjonowaniu, które można wyeliminować lub ograniczyć wprowadzając system
-ogólna koncepcja systemu IT

2. Cele systemu - jakie korzyści oczekuje odbiorca systemu po jego wdrożeniu?

3. Interesariusze systemu - i ich punkty widzenia, do interesariuszy zalicza się każdy podmiot niekoniecznie ożywiony, mający uzasadnione prawo do wywarcia wpływu na powstający system. Wymieniamy interesariusza oraz opisujemy czego oczekuje od systemu.

4. Kontekst systemu - użytkownicy i systemy zewnętrzne - użytkownicy i ich specyfikacja: kto będzie korzystał z systemu, w jakich warunkach na co należy mu zapewnić w systemie. Inne systemy współpracujące: zakres współpracy, funkcje udostępniane lub wywoływane (API), interfejsy, formaty danych, współdzielone dane.

5. Zakres funkcjonalności - ogólne wymienienie poszczególnych funkcji dostępnych dla użytkowników.

6. Wymagania jakościowe - wymagania formułowane w sposób konkretny, mierzalny ale bez narzucania określonych rozwiązań.

7. Ograniczenia - dot. projektu i zasobów, np.: pełny system musi być dostarczony i wdrożony do dnia 02.04.2005.
dot. produktu np.: w celu spójności z polityką technologiczną klienta, warstwa danych systemu musi być oparta o MS SQL.
`)
  ];

  constructor() {
    let json1 = JSON.stringify(this.openQuestions);
    let json2 = JSON.stringify(this.closedQuestions);
    //this.download('open_questions.json', json1);
    //this.download('closed_questions.json', json2);
  }

  private download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  public getRandomClosedQuestions(amount: number): ClosedQuestion[] {
    let ret: ClosedQuestion[] = [];
    let tmp: ClosedQuestion[] = [];
    for (let q of this.closedQuestions) {
      tmp.push(q);
    }
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

  public getRandomOpenQuestions(amount: number): OpenQuestion[] {
    let ret: OpenQuestion[] = [];
    let tmp: OpenQuestion[] = [];
    this.openQuestions.forEach(q => tmp.push(q));
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

}
