function switchLanguageTo(lang) {

    if (lang === 'DE') {
        $('body').empty();
        $('body').append($bodyContentDe);
    } else if (lang === 'EN'){
        $('body').empty();
        $('body').append($bodyContentEn);
    }
}

const $bodyContentDe = $(`
<header class="header">
<div class="content-container">
    <div class="header__logo header__logo--backend">
        <img src="./assets/icons/noun_back end_133744.svg" alt="back-end-icon">
        <div class="header__logo-lang-bar header__logo-lang-bar--backend">FR</div>
    </div>
    <nav class="nav">
        <ul class="nav__list row row--right-aligned">
            <li class="nav__list-item"><a href="#" class="nav__list-link">About</a></li>
            <li class="nav__list-item"><a href="#" class="nav__list-link">Kurse</a></li>
            <li class="nav__list-item"><a href="#" class="nav__list-link">Erfahrung</a></li>
            <li class="nav__list-item"><a href="#" class="nav__list-link">Projekte</a></li>
        </ul>
    </nav>
    <div class="header__logo header__logo--frontend">
        <img src="./assets/icons/noun_front end_133743.svg" alt="front-end-icon">
        <div class="header__logo-lang-bar header__logo-lang-bar--frontend">FR</div>
    </div>
</div>
</header>

<main class="main">
<section class="main__about" id="about">
    <div class="content-container">
        <h2 class="main__about-title">About</h2>

        <div class="main__about-highlights highlighted">
            Mit 8 Jahren Berufserfahrung im Bereich der Planung, Projektmanagement und Bauleitung bin ich in der
            Lage, komplexe technische Herausforderungen anzugehen und zu lösen. Meine neu entdeckte Leidenschaft
            für Softwareentwicklung hat mich dazu veranlasst, nach einem Team zu suchen, um meine Fähigkeiten zu
            erweitern und eine expert Frontend-Entwicklerin zu werden.
        </div>

        <address class="main__about-address column column--left-aligned">
            <a href="#"><i class="fas fa-map-marker-alt"></i> Hamburg, Germany</a>
            <a href="mailto:chavdarova.e@gmail.com"><i class="fas fa-envelope"></i>
                chavdarova.e@gmail.com</a>
            <a href="https://www.linkedin.com/in/emiliya-chavdarova"><i class="fab fa-linkedin"></i>
                https://www.linkedin.com/in/emiliya-chavdarova/</a>
            <a href="https://github.com/chavdarovae"><i class="fab fa-github-square"></i>
                https://github.com/chavdarovae</a>
        </address>

        <div class="main__about-journey column column--centered">
            <h2>Auf der Suche nach neuen Herausforderungen</h2>

            <div class="main__about-journey-icon">
                <img src="./assets/icons/crossroad.svg" alt="Crossroads icon">
            </div>

            <p class="main__about-journey-item">
                Während meiner 8-jährigen Karriere als Bauingenieur war ich immer fasziniert von der
                Digitalisierung und wie Webanwendungen die Kernaktivitäten in meinem Fachgebiet und alle
                Bereiche darum herum verändert haben.
            </p>

            <p class="main__about-journey-item">
                Im Laufe der Zeit und mit zunehmender Neugier wuchs auch mein Interesse, eigene Anwendungen zu
                entwickeln und Bereiche meines Fachgebiets und Alltagslebens abzudecken, die meiner Meinung nach
                mit digitalen Lösungen verbessert werden könnten.
            </p>

            <p class="main__about-journey-item">
                In den letzten 2 Jahren habe ich mich entschieden, dieses Streben voll und ganz zu verfolgen,
                indem ich ein Entwicklerprogramm in SoftUni Software-Akademie aufnahm und meine erste
                Webanwendung komplett von Grund auf neu entwickelte.
            </p>

            <p class="main__about-journey-item">
                Ich bin gespannt darauf, diese aufregende Reise fortzusetzen und meine Fähigkeiten beruflich
                weiterzuentwickeln. Ich suche nun nach einer Umgebung gleichgesinnter Entwickler, die meine
                Leidenschaft für das Erforschen, Lernen und Erstellen von Anwendungen teilen, die unsere
                Lebensqualität verbessern.
            </p>
        </div>

        <div class="main__about-skills  column column--centered">
            <div class="main__about-skills-entry skill-set">
                <h3 class="skill-set__title">Kernkompetenzen</h3>
                <ul class="skill-set__list">
                    <li class="skill-set__list-item">JavaScript & jQuery</li>
                    <li class="skill-set__list-item">AJAX, REST & JSON</li>
                    <li class="skill-set__list-item">Handlebars & Sammy.js</li>
                    <li class="skill-set__list-item">Angular & TypeScript</li>
                    <li class="skill-set__list-item">CSS & SASS</li>
                    <li class="skill-set__list-item">HTML</li>
                </ul>
            </div>

            <div class="main__about-skills-entry skill-set">
                <h3 class="skill-set__title">Zusätzliche Fähigkeiten</h3>
                <ul class="skill-set__list">
                    <li class="skill-set__list-item">Analytischer Problemlöser</li>
                    <li class="skill-set__list-item">Technische Designlösungen und Implementierung</li>
                    <li class="skill-set__list-item">Führungserfahrung</li>
                    <li class="skill-set__list-item">Projektleitungerfahrung</li>
                </ul>
            </div>

            <div class="main__about-skills-entry skill-set">
                <h3 class="skill-set__title">Bauwesenkompetenzen</h3>
                <ul class="skill-set__list">
                    <li class="skill-set__list-item">AutoCAD</li>
                    <li class="skill-set__list-item">Autodesk Revit</li>
                    <li class="skill-set__list-item">SAP 2000 & Midas Civil</li>
                    <li class="skill-set__list-item">SketchUp & Aztec</li>
                </ul>
            </div>

            <div class="main__about-skills-entry skill-set">
                <h3 class="skill-set__title">Sprachkenntnisse</h3>
                <ul class="skill-set__list">
                    <li class="skill-set__list-item">Bulgarisch – Muttersprache</li>
                    <li class="skill-set__list-item">Deutsch – sehr gut</li>
                    <li class="skill-set__list-item">Englisch – verhandlungssicher</li>
                    <li class="skill-set__list-item">Italienisch – fließend </li>
                </ul>
            </div>
        </div>

        <div class="main__about-education column column--centered">
            <h2>Ausbildung</h2>

            <div class="main__about-education-icon">
                <img src="./assets/icons/education.svg" alt="Brain icon">
            </div>

            <div class="main__about-education-entry">
                <h2>SoftUni Educational Center - Sofia, Bulgarien</h2>
                <p>
                    Software-Engineering-Programm - JavaScript-Web-Entwickler
                </p>
                <h4 id="certificateTrigger" data-collaps="►">Zeugnisse</h4>
                <ul class="text-like-list hidden" id="certificateList">
                    <li>JavaScript Applications</li>
                    <li>JavaScript Advanced</li>
                    <li>JavaScript Fundamentals</li>
                    <li>Technology Fundamentals JavaScript</li>
                    <li>Programming basics with C#</li>
                </ul>
            </div>
            <div class="main__about-education-entry">
                <h3>University of Architecture, Civil Engineering and Geodesy - Sofia, Bulgarien</h3>
                <p>
                    MSc Bauingenieurwesen
                </p>
            </div>
        </div>
    </div>
</section>

<section class="main__courses hidden" id="kurse">
    <div class="content-container">
        <h2 class="main__title">Kurse</h2>

        <div class="main__info">
            <p>
                SoftUnis Software-Engineering-Curriculum ist eine Kombination von Programmierkursen je nach
                Spezialisierung. Der Schwerpunkt liegt auf dem Erwerb von grundlegendem Wissen, praktischen
                Fertigkeiten und einem ausreichenden technischen Überblick über die neuesten
                Software-Technologien - ein Muss für jeden "Software-Ingenieur".
            </p>
            <p>
                Das JavaScript-Web-Entwickler-Programm besteht aus drei Modulen, die jeweils eine methodisch
                ausgewählte Abfolge von Kursen haben, die die IT-Kompetenzen in einem wohl durchdachten Tempo
                erweitern, wie folgt:
            </p>
            <ul class="text-like-list">
                <li>Entry Module - Kurse: Programming basics with C#</li>
                <li>Fundamental Module - Kurse: Technology Fundamentals JavaScript</li>
                <li>Professional Module - Kurse: JS Essentials, JS Advanced, JS Applications, JS Back-End,
                    ReactJS, HTML & CSS and Front-End Frameworks.</li>
            </ul>
        </div>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">Angular</h3>
                <div class="course__header-img">
                    <img src="./assets/images/angular.jpg" alt="Angular book">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> Praktische Kenntnisse für die Erstellung von Einzelseitenanwendungen und TypeScript Basis
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/2760/angular-january-2020">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>Introduction to Angular and TypeScript</li>
                        <li>Components and Data binding</li>
                        <li>Dependency injection, Introduction to RxJS and Services</li>
                        <li>Modules and Routing</li>
                        <li>Forms, Directives and Data retrieval from REST, </li>
                        <li>Pipes,Interceptors and Subjects</li>
                        <li>State management and others</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="#">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    14 Jan 2020
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    6 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">CSS Advanced</h3>
                <div class="course__header-img">
                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> modernes Multi-Plattform-Anwendungsdesign und Entwicklung mit Animationen und Ikonen.
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/3042/css-advanced-july-2020">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>CSS architecture - IT CSS</li>
                        <li>CSS architecture - BEM</li>
                        <li>SASS</li>
                        <li>CSS transitions, animations and transformations</li>
                        <li>CSS grid</li>
                        <li>Building layouts</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="https://github.com/chavdarovae/07.CSS-Advanced-June-2019">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    13 Jul 2020
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    4 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">HTML & CSS</h3>
                <div class="course__header-img">
                    <img src="./assets/images/HTML&CSS.jpg" alt="Photo by Greg Rakozy on Unsplash">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> praktische Kenntnisse in der Web-Entwicklung mit den neuesten Innovationen des HTML5- und CSS3-Standards.
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/2375/html-and-css-may-2019">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>Introduction to html & CSS</li>
                        <li>HTML structure</li>
                        <li>CSS & typography</li>
                        <li>CSS box model</li>
                        <li>Position & float</li>
                        <li>Flexbox</li>
                        <li>Working with forms</li>
                        <li>Media queries</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="https://github.com/chavdarovae/06.HTML-CSS-May2019">hier</a>
                </div>
            </div>

            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    14 May 2019
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    7 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">JS Applications</h3>
                <div class="course__header-img">
                    <img src="./assets/images/JS-applications.jpg"
                        alt="Photo by 🇨🇭 Claudio Schwarz | @purzlb">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> praktische Kenntnisse zur Erstellung gut strukturierter Einzelseitenanwendungen.
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/2249/js-applications-march-2019">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>REST services</li>
                        <li>AJAX and jquery AJAX</li>
                        <li>Asynchronous programming</li>
                        <li>JS for front-end</li>
                        <li>Templating</li>
                        <li>Routing and architecture</li>
                        <li>Single page application</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="https://github.com/chavdarovae/05.JavaScript-Applications-March2019">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    19 Mar 2019
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    4 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">JS Advanced</h3>
                <div class="course__header-img">
                    <img src="./assets/images/JS-advanced.jpg" alt="Photo by Jesus Hilario H. on Unsplash">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> algorithmisches Denken und praktische Kenntnisse für DOM-Baummanipulation und Unit-Tests.
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/2248/js-advanced-february-2019">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>Advanced functions</li>
                        <li>Unit testing</li>
                        <li>JS classes</li>
                        <li>Object composition</li>
                        <li>jQuery</li>
                        <li>Dom manipulations</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="https://github.com/chavdarovae/04.JavaScript-Advanced-February2019">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    12 Feb 2019
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    4 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">JS Fundamentals</h3>
                <div class="course__header-img">
                    <img src="./assets/images/JS-essentials.jpg" alt="Photo by Mark Finn on Unsplash">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurse:</span> JS-Syntax und praktische Kenntnisse in der Manipulation mit Datentypen, Operatoren, Expressions, Konditionskonstruktionen, Loops und Funktionen.
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>JS syntax and operators</li>
                        <li>Document object model</li>
                        <li>Functions and logic flow</li>
                        <li>Arrays and matrices</li>
                        <li>Strings and regexp</li>
                        <li>Objects and JSON</li>
                        <li>Dom events</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="https://github.com/chavdarovae/03.JavaScript-Fundamentals-January2019">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    15 Jan 2019
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    4 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">Technology Fundamentals - JavaScript</h3>
                <div class="course__header-img">
                    <img src="./assets/images/JS-fundamentals.jpg" alt="Photo by Konrad Szerszen on Unsplash">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> Basis Techniken und Instrumente für die praktische Programmierung
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>Basic syntax, conditional statements and loops</li>
                        <li>Basic HTML</li>
                        <li>Data types and variables</li>
                        <li>Basic CSS</li>
                        <li>Arrays</li>
                        <li>Http basics</li>
                        <li>Methods / functions</li>
                        <li>Problem solving</li>
                        <li>Lists / arrays advanced</li>
                        <li>Bitwise operations</li>
                        <li>Associative arrays</li>
                        <li>Intro to computer science</li>
                        <li>Objects and classes</li>
                        <li>Database basics</li>
                        <li>String and text processing</li>
                        <li>Regular expressions</li>
                        <li>Basic web</li>
                        <li>Git and GitHub</li>
                        <li>Basic CRUD</li>
                        <li>QA fundamentals</li>
                        <li>Web project</li>
                        <li>Open-source introduction</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="https://github.com/chavdarovae/02.JavaScript-Essentials-September2018">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    26 Sep 2018
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    12 weeks
                </span>
            </div>
        </article>

        <article class="course">
            <div class="course__header">
                <h3 class="course__header-title">Programming Basics with C#</h3>
                <div class="course__header-img">
                    <img src="./assets/images/csharp.jpg" alt="csharp">
                </div>
            </div>
            <div class="course__info">
                <div class="course__info-focus">
                    <span class="h4-like-title">Fokus des Kurses:</span> Grundlegende Programmierkenntnisse.
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>Kursinstanz-Link </span>
                    <a href="https://softuni.bg/trainings/1962/programming-basics-with-csharp-may-2018">hier</a>
                </div>
                <div class="course__info-scope hidden">
                    <h4>Umfang des Kurses:</h4>
                    <ul class="text-like-list animations-fancy-list">
                        <li>IDE</li>
                        <li>Simple operations and calculations</li>
                        <li>Conditional statements</li>
                        <li>Loops</li>
                        <li>Nested loops</li>
                    </ul>
                </div>
                <div class="course__info-link hidden animations-delayed-appaerance">
                    <span>GitHub Repo mit eigenen Lösungen von Hausaufgaben und Prüfungsaufgaben </span>
                    <a href="#">hier</a>
                </div>
            </div>
            <div class="course__footer row row--space-btw">
                <span>
                    <i class="fas fa-rocket"></i>
                    12 May 2018
                </span>
                <span>
                    <i class="fas fa-stopwatch"></i>
                    4 weeks
                </span>
            </div>
        </article>
    </div>
</section>

<section class="main__experience hidden" id="erfahrung">
    <div class="content-container">
        <h2 class="main__title">Berufliche Erfahrung</h2>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/freelance/ferenc-almasi-VPmMy8YA_cU-unsplash.jpg" alt="IT image">
                </div>
            </div>
            <h3 class="work__position">Freiberuflicher Software-Ingenieurin </h3>
            <h4 class="work__employer">Freiberuflerin – Hamburg, Germany</h4>
            <span class="work__period h4-like">2018 - bis heute</span>
            <div class="work__description">
                Design, Entwickelung und Implementation von MVP Performance-Management-Tool. PMT ist eine
                Single-Page-Webanwendung, die von Six-Sigma-Techniken zur Leistungsverbesserung inspiriert ist.
                Single Page Applications mit Ausbildungszweck - Plattformen zum Austausch und zur Bewertung
                inspirierender Film- und Songtitel.
                Für weitere Informationen siehen Sie bitte Kapitel <a href="#" class="work__description-link">Projekte</a>.
            </div>
        </article>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/Pohnpei/1.jpg" alt="Pohnpei Solar Farm">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/Pohnpei/2.jpg" alt="Pohnpei Solar Farm">
                </div>
            </div>

            <h3 class="work__position">Bauleiterin</h3>
            <h4 class="work__employer">STENLI - 03 LTD – Lom, Bulgarien</h4>
            <span class="work__period h4-like">2016 - 2017</span>
            <p class="work__description">
                Bauleitung- und Koordinierungsrolle für den Solarpark Pohnpei, Föderierte Staaten von
                Mikronesien, 640kW installierte Solarkapazität.
            </p>
        </article>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/PDV/1.jpg" alt="Pedemontana Veneta">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/PDV/2.jpg" alt="Pedemontana Veneta">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/PDV/3.jpg" alt="Pedemontana Veneta">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/PDV/4.jpg" alt="Pedemontana Veneta">
                </div>
            </div>
            <h3 class="work__position">Planungskoordinatorin</h3>
            <h4 class="work__employer">SIPAL S.p.a. – Turin, Italy</h4>
            <span class="work__period h4-like">2013 - 2015</span>
            <p class="work__description">
                Planungskoordination, Strukturdesign und Designüberwachung für die Pedemontana Veneta
                Expressway, 95 km, Baukosten 2,4 Milliarden €.
            </p>
        </article>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/Way/SS640-1.jpg" alt="SS640 State Road">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/Way/SS640-2.jpg" alt="SS640 State Road">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/Way/saida-tiaret-1.jpg" alt="Saida-Tiaret Railway">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/Way/saida-tiaret-2.jpg" alt="Saida-Tiaret Railway">
                </div>
            </div>
            <h3 class="work__position">Leiterin der Abteilung Strukturdesign</h3>
            <h4 class="work__employer">WAY ENGINEERING AD – Sofia, Bulgarien</h4>
            <span class="work__period h4-like">2009 - 2013</span>
            <p class="work__description">
                Teamrekrutierung, Personalmanagement, Leitung der Planungsarbeiten, Projektkoordination für drei
                bedeutende Infrastrukturprojekte und verschiedene Ausschreibungsverfahren.
            </p>
        </article>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/Akropolis/1.jpg" alt="Akropolis">
                </div>
            </div>
            <h3 class="work__position">Assistentin des Leiters der Entwicklungsabteilung</h3>
            <h4 class="work__employer">AKROPOLIS BG LTD – Sofia, Bulgarien</h4>
            <span class="work__period h4-like">2007 - 2008</span>
            <p class="work__description">
                Koordinierungsrolle für das Akropolis Einkaufs- und Entertainment-Zentrum - 524.000 m 2
                multifunktionaler Geschäftskomplex in Sofia
            </p>
        </article>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/NY-Street/1.jpg" alt="New York Street Set">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/NY-Street/2.jpg" alt="New York Street Set">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/NY-Street/3.jpg" alt="New York Street Set">
                </div>
            </div>
            <h3 class="work__position">Design Koordinatorin</h3>
            <h4 class="work__employer">NU BOYANA FILM STUDIO – Sofia, Bulgarien</h4>
            <span class="work__period h4-like">2006 - 2007</span>
            <p class="work__description">
                Design-Koordinationsrolle für die groß angelegte Filmset "New York Street", Sofia, Bulgarien -
                8000m 2 mit Baukosten von € 3,5 Millionen.
            </p>
        </article>

        <article class="work">
            <div class="work__media">
                <div class="work__media-img">
                    <img src="./assets/images/Sofia-Airport/1.jpg" alt="Sofia Airport">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/Sofia-Airport/2.jpg" alt="Sofia Airport">
                </div>
                <div class="hidden work__media-img">
                    <img src="./assets/images/Sofia-Airport/3.jpg" alt="Sofia Airport">
                </div>
            </div>
            <h3 class="work__position">Praktikantin</h3>
            <h4 class="work__employer">STRABAG EAD – Sofia, Bulgarien</h4>
            <span class="work__period h4-like">2005 - 2006</span>
            <p class="work__description">
                Auszubildender Bauingenieurin während der As-Built-Planungsphase des Flughafens Sofia - Terminal
                2, Bulgarien, Baukosten € 120 Millionen.
            </p>
        </article>
    </div>
</section>

<section class="main__projects hidden" id="projekte">
    <div class="content-container">
        <h2 class="main__title">Persönliche Projekte</h2>
        <div class="project">
            <h3 class="project__title">Performance Management Tool - PMT SPA</h3>
            <div class="project__icon">
                <img src="./assets/icons/star.svg" alt="Star icon">
            </div>
            <p class="project__highlights">
                Design, Entwickelung und Implementation von MVP Performance-Management-Tool. PMT ist eine
                Single-Page-Webanwendung, die von Six-Sigma-Techniken zur Leistungsverbesserung inspiriert ist.
                Es bietet eine Plattform für mehrere Interessenten zum schnellen Austausch hochkomplexer
                technischer Gutachten von Anlagen und Leistungsindikatoren, während es gleichzeitig einen
                high-level Überblick für C-Level Stakeholder generiert.
            </p>
            <p class="project__info">
                Gut strukturierte Webanwendung mit einem Cloud-basierten Backend (BaaS), geschrieben in
                JavaScript unter Verwendung von AJAX, REST und JSON. Für effizientes Routing und Templating
                wurden Handlebars und Sammy.js verwendet.
            </p>
            <p class="project__info">
                Erstellung einer individuellen UI, die explizit den Bedürfnissen der Endbenutzer entspricht,
                deren Anforderungen in Zusammenarbeit mit Projektmanagern und Analysten detailliert wurden.
            </p>
            <p class="project__info">
                Ein modernes Multi-Plattform-Anwendungsdesign nach den neuesten Standarten von HTML5 und CSS3.
            </p>
            <div class="project__media">
                <div class="project__media-title">PMT-Desktop - Galerie</div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/1.png" alt="Login-first step view">
                </div>
                <!-- <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/2.png" alt="Login-second step view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/3.png" alt="Register view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/4.png" alt="Home view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/5.png" alt="New project view">
                </div> -->
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/6.png" alt="Random project view">
                </div>
                <!-- <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/7.png" alt="Random project view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/8.png" alt="Random project view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/9.png" alt="Random project view">
                </div> -->
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/10.png" alt="Project result view">
                </div>
                <!-- <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/11.png" alt="Templates view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/12.png" alt="Project template view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/13.png" alt="Activity log">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/14.png" alt="Activity log - conversation">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/15.png" alt="Column modification">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/16.png" alt="Column photo modification">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/17.png" alt="User details update">
                </div> -->
            </div>
            <div class="project__media">
                <div class="project__media-title">PMT-Mobile - Galerie</div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/1.png" alt="Login-first step view">
                </div>
                <!-- <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/2.png" alt="Login-second step view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/3.png" alt="Register view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/4.png" alt="Home view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/5.png" alt="Home-menu view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/6.png" alt="New project view">
                </div> -->
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/7.png" alt="Random project view">
                </div>
                <!-- <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/8.png" alt="Random project view">
                </div> -->
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/9.png" alt="Project results view">
                </div>
                <!-- <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/10.png" alt="Templates view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/11.png" alt="Random template view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/PermatoSPA/mobile/12.png" alt="User modification view">
                </div> -->
            </div>
        </div>

        <h2 class="main__title">Projekte mit Ausbildungszweck</h2>
        <div class="project">
            <h3 class="project__title">Movie platform SPA</h3>
            <div class="project__icon">
                <img src="./assets/icons/star.svg" alt="Star icon">
            </div>
            <p class="project__highlights">
                Implementierung der Movie platform Single Page Application - Plattform für Austausch und
                Bewertung inspirierender Filmtitel. Die Webanwendung hält Benutzer und andere relevante Daten in
                einem Could-basierten Backend (Backendless), ermöglicht Registrierung und Login für Gastnutzer.
                Und ermöglicht verschiedene Manipulationen mit Instanzen, wie: Überprüfung, Erstellung,
                Bearbeitung, Löschen und Simulation des Kaufs von Kinokarten.
            </p>
            <div class="project__media">
                <div class="project__media-title">Movie platform - Galerie</div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/1.png" alt="Home view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/2.png" alt="Login view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/3.png" alt="Register view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/4.png" alt="Randome view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/5.png" alt="Create instance view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/6.png" alt="User home view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/7.png" alt="Search results view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/8.png" alt="Instance detailed view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MoviesSPA/9.png" alt="Edit instance view">
                </div>
            </div>
        </div>
        <div class="project">
            <h3 class="project__title">Music platform SPA</h3>
            <div class="project__icon">
                <img src="./assets/icons/star.svg" alt="Star icon">
            </div>
            <p class="project__highlights">
                Implementierung der Music platform Single Page Application - Plattform für Austausch und
                Bewertung inspirierender Songtitel.Die Webanwendung hält Benutzer und andere relevante Daten in
                einem kartenbasierten Backend (Backendless), bietet Registrierungs- und Anmeldefunktionen für
                Gastbenutzer. Und erlaubt verschiedene Manipulationen mit Instanzen, wie z.B.: Überprüfen,
                Erstellen, Löschen und Favorisieren von Liedern.
            </p>
            <div class="project__media">
                <div class="project__media-title">Music platform - Galerie</div>
                <div class="project__media-img">
                    <img src="./assets/images/MusicSPA/1.png" alt="Home view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MusicSPA/2.png" alt="Login view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MusicSPA/3.png" alt="Random view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MusicSPA/4.png" alt="Random view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MusicSPA/5.png" alt="User home view">
                </div>
                <div class="project__media-img">
                    <img src="./assets/images/MusicSPA/6.png" alt="Create instance view">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- auxiliary elements for pictures preview-->
<div class="preview">
    <div class="preview__backdrop"></div>
    <div class="preview__control preview__control--backwards">
        <i class="fas fa-caret-left"></i>
    </div>
    <div class="preview__box">
        <div class="preview__box-description">Description</div>
        <div class="preview__box-close">X</div>
        <img class="preview__box-img" src="https://picsum.photos/200/300">
    </div>
    <div class="preview__control preview__control--forwards">
        <i class="fas fa-caret-right"></i>
    </div>
    <div class="preview__indicator row row--centered">

    </div>
</div>
</main>
`)

const $bodyContentEn = $(`
<header class="header">
        <div class="content-container">
            <div class="header__logo header__logo--backend">
                <img src="./assets/icons/noun_back end_133744.svg" alt="back-end-icon">
                <div class="header__logo-lang-bar header__logo-lang-bar--backend">EN</div>
            </div>
            <nav class="nav">
                <ul class="nav__list row row--right-aligned">
                    <li class="nav__list-item"><a href="#" class="nav__list-link">About</a></li>
                    <li class="nav__list-item"><a href="#" class="nav__list-link">Courses</a></li>
                    <li class="nav__list-item"><a href="#" class="nav__list-link">Experience</a></li>
                    <li class="nav__list-item"><a href="#" class="nav__list-link">Projects</a></li>
                </ul>
            </nav>
            <div class="header__logo header__logo--frontend">
                <img src="./assets/icons/noun_front end_133743.svg" alt="front-end-icon">
                <div class="header__logo-lang-bar header__logo-lang-bar--frontend">EN</div>
            </div>
        </div>
    </header>

    <main class="main">
        <section class="main__about" id="about">
            <div class="content-container">
                <h2 class="main__about-title">About me</h2>

                <div class="main__about-highlights highlighted">
                    With 8 years of practice in engineering design, project management and site management I am
                    confident in approaching and solving complex engineering challenges. My newfound passion for
                    software development has led me to look for a team to expand my skillset and become a full proof
                    frontend developer.
                </div>

                <address class="main__about-address column column--left-aligned">
                    <a href="#"><i class="fas fa-map-marker-alt"></i> Hamburg, Germany</a>
                    <a href="mailto:chavdarova.e@gmail.com"><i class="fas fa-envelope"></i>
                        chavdarova.e@gmail.com</a>
                    <a href="https://www.linkedin.com/in/emiliya-chavdarova"><i class="fab fa-linkedin"></i>
                        https://www.linkedin.com/in/emiliya-chavdarova/</a>
                    <a href="https://github.com/chavdarovae"><i class="fab fa-github-square"></i>
                        https://github.com/chavdarovae</a>
                </address>

                <div class="main__about-journey column column--centered">
                    <h2>On a journey to new frontiers</h2>

                    <div class="main__about-journey-icon">
                        <img src="./assets/icons/crossroad.svg" alt="Crossroads icon">
                    </div>

                    <p class="main__about-journey-item">
                        Throughout my 8-year carrier as a civil engineer I was always fascinated by the impact of
                        digitalization and how web applications changed the core activities within my field and
                        everything
                        around it.
                    </p>

                    <p class="main__about-journey-item">
                        Looking to optimize processes and increase the effectiveness of my team’s efforts, I
                        searched
                        for ways to extract the maximum of every application by exploring different scripts and
                        APIs.
                    </p>

                    <p class="main__about-journey-item">
                        As time progressed and my curiosity increased, so did my desire to create applications of my
                        own
                        and cover areas of my field and everyday life which I felt could be improved with digital
                        solutions.
                    </p>

                    <p class="main__about-journey-item">
                        In the past 2 years I have decided to pursue this desire fully by enlisting a developer program
                        in a software academy and creating my first web application from the ground up.
                    </p>

                    <p class="main__about-journey-item">
                        Eager to continue this exciting journey and grow my skillset professionally, I am now
                        looking
                        for an environment of likeminded developers who share my passion of exploring, learning and
                        creating
                        applications that improve our quality of life.
                    </p>

                </div>

                <div class="main__about-skills  column column--centered">
                    <div class="main__about-skills-entry skill-set">
                        <h3 class="skill-set__title">Core skills</h3>
                        <ul class="skill-set__list">
                            <li class="skill-set__list-item">JavaScript & jQuery</li>
                            <li class="skill-set__list-item">AJAX, REST & JSON</li>
                            <li class="skill-set__list-item">Handlebars & Sammy.js</li>
                            <li class="skill-set__list-item">Angular & TypeScript</li>
                            <li class="skill-set__list-item">CSS & SASS</li>
                            <li class="skill-set__list-item">HTML</li>
                        </ul>
                    </div>

                    <div class="main__about-skills-entry skill-set">
                        <h3 class="skill-set__title">Additional skills</h3>
                        <ul class="skill-set__list">
                            <li class="skill-set__list-item">Analytical problem-solver</li>
                            <li class="skill-set__list-item">Engineering Solutions Design and Implementation</li>
                            <li class="skill-set__list-item">Leadership Experience</li>
                            <li class="skill-set__list-item">Project management</li>
                        </ul>
                    </div>

                    <div class="main__about-skills-entry skill-set">
                        <h3 class="skill-set__title">Civil engineering skills</h3>
                        <ul class="skill-set__list">
                            <li class="skill-set__list-item">AutoCAD</li>
                            <li class="skill-set__list-item">Autodesk Revit</li>
                            <li class="skill-set__list-item">SAP 2000 & Midas Civil</li>
                            <li class="skill-set__list-item">SketchUp & Aztec</li>
                        </ul>
                    </div>

                    <div class="main__about-skills-entry skill-set">
                        <h3 class="skill-set__title">Language skills</h3>
                        <ul class="skill-set__list">
                            <li class="skill-set__list-item">Bulgarian – native</li>
                            <li class="skill-set__list-item">German – professional working</li>
                            <li class="skill-set__list-item">English – full professional</li>
                            <li class="skill-set__list-item">Italian – professional working</li>
                        </ul>
                    </div>
                </div>

                <div class="main__about-education column column--centered">
                    <h2>Education</h2>

                    <div class="main__about-education-icon">
                        <img src="./assets/icons/education.svg" alt="Brain icon">
                    </div>

                    <div class="main__about-education-entry">
                        <h2>SoftUni Educational Center - Sofia, Bulgaria</h2>
                        <p>
                            Software Engineering Program – JavaScript Web Developer
                        </p>
                        <h4 id="certificateTrigger" data-collaps="►">Acquired Certificates</h4>
                        <ul class="text-like-list hidden" id="certificateList">
                            <li>JavaScript Applications</li>
                            <li>JavaScript Advanced</li>
                            <li>JavaScript Fundamentals</li>
                            <li>Technology Fundamentals JavaScript</li>
                            <li>Programming basics with C#</li>
                        </ul>
                    </div>
                    <div class="main__about-education-entry">
                        <h3>University of Architecture, Civil Engineering and Geodesy - Sofia, Bulgaria</h3>
                        <p>
                            MSc Civil Engineering
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="main__courses hidden" id="courses">
            <div class="content-container">
                <h2 class="main__title">Courses</h2>

                <div class="main__info">
                    <p>
                        SoftUni's software engineering curriculum is a combination of programming courses depending
                        on
                        the specialization. It focuses on acquiring fundamental knowledge, practical skills and
                        sufficient technical overview in latest
                        software technologies - a must for every "software engineer".
                    </p>
                    <p>
                        JavaScript Web Developer Program has three modules, each having a methodically selected
                        sequence
                        of courses, upgrading the IT competences in a well-considered pace, as follows:
                    </p>
                    <ul class="text-like-list">
                        <li>Entry Module - courses: Programming basics with C#</li>
                        <li>Fundamental Module - courses: Technology Fundamentals JavaScript</li>
                        <li>Professional Module - courses: JS Essentials, JS Advanced, JS Applications, JS Back-End,
                            ReactJS,
                            HTML & CSS and Front-End Frameworks.</li>
                    </ul>
                </div>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">Angular</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/angular.jpg" alt="Angular book">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> practical skills for building Single
                            Page
                            Application & basic
                            TypeScript
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/2760/angular-january-2020">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>Introduction to Angular and TypeScript</li>
                                <li>Components and Data binding</li>
                                <li>Dependency injection, Introduction to RxJS and Services</li>
                                <li>Modules and Routing</li>
                                <li>Forms, Directives and Data retrieval from REST, </li>
                                <li>Pipes,Interceptors and Subjects</li>
                                <li>State management and others</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/08.Angular-Jan-2020">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            14 Jan 2020
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            6 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">CSS Advanced</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> modern front-end design and development
                            with animations and icons
                            for
                            adaptive display on devices with different screen sizes.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/3042/css-advanced-july-2020">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>CSS architecture - IT CSS</li>
                                <li>CSS architecture - BEM</li>
                                <li>SASS</li>
                                <li>CSS transitions, animations and transformations</li>
                                <li>CSS grid</li>
                                <li>Building layouts</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/07.CSS-Advanced-June-2019">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            13 Jul 2020
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            4 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">HTML & CSS</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/HTML&CSS.jpg" alt="Photo by Greg Rakozy on Unsplash">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> practical skills in web development
                            using
                            HTML5 and CSS3 standard
                            latest
                            innovations.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/2375/html-and-css-may-2019">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>Introduction to html & CSS</li>
                                <li>HTML structure</li>
                                <li>CSS & typography</li>
                                <li>CSS box model</li>
                                <li>Position & float</li>
                                <li>Flexbox</li>
                                <li>Working with forms</li>
                                <li>Media queries</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/06.HTML-CSS-May2019">here</a>
                        </div>
                    </div>

                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            14 May 2019
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            7 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">JS Applications</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/JS-applications.jpg"
                                alt="Photo by 🇨🇭 Claudio Schwarz | @purzlb">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> practical skills for building
                            well-structured Single Page
                            Applications.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/2249/js-applications-march-2019">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>REST services</li>
                                <li>AJAX and jquery AJAX</li>
                                <li>Asynchronous programming</li>
                                <li>JS for front-end</li>
                                <li>Templating</li>
                                <li>Routing and architecture</li>
                                <li>Single page application</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/05.JavaScript-Applications-March2019">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            19 Mar 2019
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            4 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">JS Advanced</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/JS-advanced.jpg" alt="Photo by Jesus Hilario H. on Unsplash">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> develops algorithmic thinking and
                            practical
                            skills for DOM tree
                            manipulation
                            and Unit testing.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/2248/js-advanced-february-2019">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>Advanced functions</li>
                                <li>Unit testing</li>
                                <li>JS classes</li>
                                <li>Object composition</li>
                                <li>jQuery</li>
                                <li>Dom manipulations</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/04.JavaScript-Advanced-February2019">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            12 Feb 2019
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            4 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">JS Fundamentals</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/JS-essentials.jpg" alt="Photo by Mark Finn on Unsplash">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> JS syntax and practical skills in
                            manipulation with data types,
                            operators,
                            expressions, conditional constructions, loops and functions.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>JS syntax and operators</li>
                                <li>Document object model</li>
                                <li>Functions and logic flow</li>
                                <li>Arrays and matrices</li>
                                <li>Strings and regexp</li>
                                <li>Objects and JSON</li>
                                <li>Dom events</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/03.JavaScript-Fundamentals-January2019">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            15 Jan 2019
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            4 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">Technology Fundamentals - JavaScript</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/JS-fundamentals.jpg" alt="Photo by Konrad Szerszen on Unsplash">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> basic techniques and tools for
                            practical
                            programming beyond the
                            writing of
                            simple program constructions.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>Basic syntax, conditional statements and loops</li>
                                <li>Basic HTML</li>
                                <li>Data types and variables</li>
                                <li>Basic CSS</li>
                                <li>Arrays</li>
                                <li>Http basics</li>
                                <li>Methods / functions</li>
                                <li>Problem solving</li>
                                <li>Lists / arrays advanced</li>
                                <li>Bitwise operations</li>
                                <li>Associative arrays</li>
                                <li>Intro to computer science</li>
                                <li>Objects and classes</li>
                                <li>Database basics</li>
                                <li>String and text processing</li>
                                <li>Regular expressions</li>
                                <li>Basic web</li>
                                <li>Git and GitHub</li>
                                <li>Basic CRUD</li>
                                <li>QA fundamentals</li>
                                <li>Web project</li>
                                <li>Open-source introduction</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="https://github.com/chavdarovae/02.JavaScript-Essentials-September2018">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            26 Sep 2018
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            12 weeks
                        </span>
                    </div>
                </article>

                <article class="course">
                    <div class="course__header">
                        <h3 class="course__header-title">Programming Basics with C#</h3>
                        <div class="course__header-img">
                            <img src="./assets/images/csharp.jpg" alt="csharp">
                        </div>
                    </div>
                    <div class="course__info">
                        <div class="course__info-focus">
                            <span class="h4-like-title">Course focus:</span> Basic coding skills.
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>Course instance link </span>
                            <a href="https://softuni.bg/trainings/1962/programming-basics-with-csharp-may-2018">here</a>
                        </div>
                        <div class="course__info-scope hidden">
                            <h4>Course scope:</h4>
                            <ul class="text-like-list animations-fancy-list">
                                <li>IDE</li>
                                <li>Simple operations and calculations</li>
                                <li>Conditional statements</li>
                                <li>Loops</li>
                                <li>Nested loops</li>
                            </ul>
                        </div>
                        <div class="course__info-link hidden animations-delayed-appaerance">
                            <span>GitHub repo with own solutions of homework and exam tasks </span>
                            <a href="#">here</a>
                        </div>
                    </div>
                    <div class="course__footer row row--space-btw">
                        <span>
                            <i class="fas fa-rocket"></i>
                            12 May 2018
                        </span>
                        <span>
                            <i class="fas fa-stopwatch"></i>
                            4 weeks
                        </span>
                    </div>
                </article>
            </div>
        </section>

        <section class="main__experience hidden" id="experience">
            <div class="content-container">
                <h2 class="main__title">Work experience</h2>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/freelance/ferenc-almasi-VPmMy8YA_cU-unsplash.jpg" alt="IT image">
                        </div>
                    </div>
                    <h3 class="work__position">Junior Software Engineer</h3>
                    <h4 class="work__employer">Freelance – Hamburg, Germany</h4>
                    <span class="work__period h4-like">2018 - present</span>
                    <div class="work__description">
                        <p>
                            Designed, developed and deployed an MVP Performance Management Tool – a single-page
                            application inspired by Six Sigma performance improvement techniques. Implemented a couple
                            of Single Page Applications with educational purpose - platforms for sharing and rating
                            inspiring movie and song titles.
                        </p>
                        <p>
                            For further information see <a href="#" class="work__description-link">Projects</a> section.
                        </p>
                    </div>
                </article>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/Pohnpei/1.jpg" alt="Pohnpei Solar Farm">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/Pohnpei/2.jpg" alt="Pohnpei Solar Farm">
                        </div>
                    </div>

                    <h3 class="work__position">Site Manager</h3>
                    <h4 class="work__employer">STENLI - 03 LTD – Lom, Bulgaria</h4>
                    <span class="work__period h4-like">2016 - 2017</span>
                    <div class="work__description">
                        Site management and coordination role for Pohnpei Solar Farm, The
                        Federated States of Micronesia. 640kW installed solar capacity of strategical relevance to
                        Pohnpei island power generation system.
                    </div>
                </article>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/PDV/1.jpg" alt="Pedemontana Veneta">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/PDV/2.jpg" alt="Pedemontana Veneta">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/PDV/3.jpg" alt="Pedemontana Veneta">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/PDV/4.jpg" alt="Pedemontana Veneta">
                        </div>
                    </div>
                    <h3 class="work__position">Assistant Planning Coordinator</h3>
                    <h4 class="work__employer">SIPAL S.p.a. – Turin, Italy</h4>
                    <span class="work__period h4-like">2013 - 2015</span>
                    <div class="work__description">
                        Assistant planning coordination, structural design and design
                        supervision role for Pedemontana Veneta Expressway. 95km road artery with great significance
                        for Northern Itlay and Eastern Europe, construction cost € 2.4 billion.
                    </div>
                </article>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/Way/SS640-1.jpg" alt="SS640 State Road">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/Way/SS640-2.jpg" alt="SS640 State Road">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/Way/saida-tiaret-1.jpg" alt="Saida-Tiaret Railway">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/Way/saida-tiaret-2.jpg" alt="Saida-Tiaret Railway">
                        </div>
                    </div>
                    <h3 class="work__position">Head Of Structural Department</h3>
                    <h4 class="work__employer">WAY ENGINEERING AD – Sofia, Bulgaria</h4>
                    <span class="work__period h4-like">2009 - 2013</span>
                    <div class="work__description">
                        <p>
                            Developed the structural design department in Way Engineering AD -
                            Bulgarian branch of SICS Ingegneria S.r.l. Organized and managed its growth from 2 initial
                            employees to 15 in 3 years. Responsible for team recruitment, manpower management and
                            direction
                            of design works.
                        </p>
                        <p>
                            Project coordination role for three significant infrastructural projects and various tender
                            procedures:
                        </p>
                        <ul class="text-like-list">
                            <li>
                                DG48 Salerno-Reggio Calabria Highway – 30km, Italy, construction cost € 650 million.
                                Road facilities design for the main contractor SIS Scpa, Italy
                            </li>
                            <li>
                                State road SS640 – 35km, Italy, construction cost € 739 million. Road facilities design
                                for the main contractor Empedocles II Scpa, Italy,
                            </li>
                            <li>
                                Saida – Tiaret Railway -153km, Algeria, Road and rail way facilities design for the main
                                contractor Astaldi S.p.a, Italy
                            </li>
                        </ul>
                    </div>
                </article>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/Akropolis/1.jpg" alt="Akropolis">
                        </div>
                    </div>
                    <h3 class="work__position">Personal Assistant Head Of Development Department</h3>
                    <h4 class="work__employer">AKROPOLIS BG LTD – Sofia, Bulgaria</h4>
                    <span class="work__period h4-like">2007 - 2008</span>
                    <div class="work__description">
                        Coordination role for Akropolis Shopping and Entertainment Center –
                        a 524,000 sq.m. multifunctional commercial complex (shopping mall and office towers) in Sofia.
                        Responsible for the official communication and the department documentation (concept and
                        tender design stage). Preparation and execution of contractor appointment procedures.
                    </div>
                </article>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/NY-Street/1.jpg" alt="New York Street Set">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/NY-Street/2.jpg" alt="New York Street Set">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/NY-Street/3.jpg" alt="New York Street Set">
                        </div>
                    </div>
                    <h3 class="work__position">Design Coordinator</h3>
                    <h4 class="work__employer">NU BOYANA FILM STUDIO – Sofia, Bulgaria</h4>
                    <span class="work__period h4-like">2006 - 2007</span>
                    <div class="work__description">
                        Design coordination role for the large-scale movie set “New York
                        Street”, Sofia, Bulgaria – 8000 sq.m with real size buildings, power and water supplied,
                        construction cost € 3,5 million. Art design and on-site supervision. Responsible for the
                        design
                        localization and the official correspondence.
                    </div>
                </article>

                <article class="work">
                    <div class="work__media">
                        <div class="work__media-img">
                            <img src="./assets/images/Sofia-Airport/1.jpg" alt="Sofia Airport">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/Sofia-Airport/2.jpg" alt="Sofia Airport">
                        </div>
                        <div class="hidden work__media-img">
                            <img src="./assets/images/Sofia-Airport/3.jpg" alt="Sofia Airport">
                        </div>
                    </div>
                    <h3 class="work__position">Student Trainee</h3>
                    <h4 class="work__employer">STRABAG EAD – Sofia, Bulgaria</h4>
                    <span class="work__period h4-like">2005 - 2006</span>
                    <div class="work__description">
                        Trainee civil engineer during the As-built design stage of Sofia
                        Airport – Terminal 2, Bulgaria, construction cost € 120 million. On-site processes
                        assistance
                        and survey data adoption for design purposes.
                    </div>
                </article>
            </div>
        </section>

        <section class="main__projects hidden" id="projects">
            <div class="content-container">
                <h2 class="main__title">Personal projects</h2>
                <div class="project">
                    <h3 class="project__title">Performance Management Tool - PMT SPA</h3>
                    <div class="project__icon">
                        <img src="./assets/icons/star.svg" alt="Star icon">
                    </div>
                    <p class="project__highlights">
                        Designed, developed and deployed an MVP Performance Management Tool (PMT SPA). The web
                        application is inspired by Six Sigma performance improvement techniques. It provides a
                        platform
                        for multiple
                        parties to quickly exchange highly complex technical reviews of assets or performance
                        indicators,
                        while generating a high-level overview for C level stakeholders.
                    </p>
                    <p class="project__info">
                        Wrote a well-structured Single Page Application with a cloud-based Backend (BaaS) using
                        JavaScript, AJAX, REST and JSON.
                    </p>
                    <p class="project__info">
                        Implemented efficient routing and templating via Handlebars and Sammy.js.
                    </p>
                    <p class="project__info">
                        Partnered with project managers and analysts to deeply understand the necessities of users
                        and
                        build a custom UI that explicitly serves those needs.
                    </p>
                    <p class="project__info">
                        Enabled modern multi-platform application design following the latest standards of HTML5 and
                        CSS3.
                    </p>
                    <p class="project__info">
                        Structured the SCSS code in a least wasteful way by implementing Inverted Triangle
                        architecture
                        and BEM methodology.
                    </p>
                    <div class="project__media">
                        <div class="project__media-title">PMT-Desktop - Gallery</div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/1.png" alt="Login-first step view">
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/2.png" alt="Login-second step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/3.png" alt="Register view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/4.png" alt="Home view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/5.png" alt="New project view">
                        </div> -->
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/6.png" alt="Random project view">
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/7.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/8.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/9.png" alt="Random project view">
                        </div> -->
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/10.png" alt="Project result view">
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/11.png" alt="Templates view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/12.png" alt="Project template view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/13.png" alt="Activity log">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/14.png" alt="Activity log - conversation">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/15.png" alt="Column modification">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/16.png" alt="Column photo modification">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/17.png" alt="User details update">
                        </div> -->
                    </div>
                    <div class="project__media">
                        <div class="project__media-title">PMT-Mobile - Gallery</div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/1.png" alt="Login-first step view">
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/2.png" alt="Login-second step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/3.png" alt="Register view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/4.png" alt="Home view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/5.png" alt="Home-menu view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/6.png" alt="New project view">
                        </div> -->
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/7.png" alt="Random project view">
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/8.png" alt="Random project view">
                        </div> -->
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/9.png" alt="Project results view">
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/10.png" alt="Templates view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/11.png" alt="Random template view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/PermatoSPA/mobile/12.png" alt="User modification view">
                        </div> -->
                    </div>
                </div>

                <h2 class="main__title">Projects with educational purpose</h2>
                <div class="project">
                    <h3 class="project__title">Movie platform SPA</h3>
                    <div class="project__icon">
                        <img src="./assets/icons/star.svg" alt="Star icon">
                    </div>
                    <p class="project__highlights">
                        Implemented Movie platform Single Page Application - platform for
                        sharing and rating inspiring movie titles. The web application keeps users and other
                        relevant data in a could-based backend (Backendless), support register and login for guest
                        users. And allow for various manipulation with instances, like: reviewing, creating,
                        editing,
                        deleting and simulation of purchasing movie tickets.
                    </p>
                    <div class="project__media">
                        <div class="project__media-title">Movie platform - Gallery</div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/1.png" alt="Home view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/2.png" alt="Login view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/3.png" alt="Register view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/4.png" alt="Randome view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/5.png" alt="Create instance view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/6.png" alt="User home view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/7.png" alt="Search results view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/8.png" alt="Instance detailed view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MoviesSPA/9.png" alt="Edit instance view">
                        </div>
                    </div>
                </div>
                <div class="project">
                    <h3 class="project__title">Music platform SPA</h3>
                    <div class="project__icon">
                        <img src="./assets/icons/star.svg" alt="Star icon">
                    </div>
                    <p class="project__highlights">
                        Implemented Music platform Single Page Application - platform for
                        sharing and rating inspiring song titles. The web application keeps users and other
                        relevant data in a could-based backend (Backendless), support register and login for guest
                        users. And allow for various manipulation with instances, like: reviewing, creating,
                        deleting
                        and liking songs.
                    </p>
                    <div class="project__media">
                        <div class="project__media-title">Music platform - Gallery</div>
                        <div class="project__media-img">
                            <img src="./assets/images/MusicSPA/1.png" alt="Home view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MusicSPA/2.png" alt="Login view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MusicSPA/3.png" alt="Random view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MusicSPA/4.png" alt="Random view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MusicSPA/5.png" alt="User home view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/MusicSPA/6.png" alt="Create instance view">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- auxiliary elements for pictures preview-->
        <div class="preview">
            <div class="preview__backdrop"></div>
            <div class="preview__control preview__control--backwards">
                <i class="fas fa-caret-left"></i>
            </div>
            <div class="preview__box">
                <div class="preview__box-description">Description</div>
                <div class="preview__box-close">X</div>
                <img class="preview__box-img" src="https://picsum.photos/200/300">
            </div>
            <div class="preview__control preview__control--forwards">
                <i class="fas fa-caret-right"></i>
            </div>
            <div class="preview__indicator row row--space-btw">

            </div>
        </div>
    </main>
`)