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
            <div class="header__logo-lang-bar header__logo-lang-bar--backend">DE</div>
        </div>
        <nav class="nav">
            <ul class="nav__list row row--right-aligned">
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="about">About</a></li>
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="courses">Kurse</a></li>
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="experience">Erfahrung</a></li>
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="projects">Projekte</a></li>
            </ul>
        </nav>
        <div class="header__logo header__logo--frontend">
            <img src="./assets/icons/noun_front end_133743.svg" alt="front-end-icon">
            <div class="header__logo-lang-bar header__logo-lang-bar--frontend">DE</div>
        </div>
    </div>
</header>

<main class="main">
    <section class="main__about" id="aboutSection">
        <div class="content-container">
            <h2 class="main__about-title page-title">About</h2>

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
                    Mit zunehmender Neugier wuchs auch mein Interesse, eigene Anwendungen zu entwickeln und Bereiche
                    meines Fachgebiets und Alltagslebens abzudecken, die meiner Meinung nach mit digitalen Lösungen
                    verbessert werden könnten.
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
                        <li class="skill-set__list-item">Projektleitungserfahrung</li>
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

    <section class="main__courses hidden" id="coursesSection">
        <div class="content-container">
            <h2 class="main__title page-title">Kurse</h2>

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
                        <span class="h4-like-title">Fokus des Kurses:</span> Praktische Kenntnisse für die
                        Erstellung von Einzelseitenanwendungen und TypeScript Basis
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
                        <span class="h4-like-title">Fokus des Kurses:</span> modernes
                        Multi-Plattform-Anwendungsdesign und Entwicklung mit Animationen und Ikonen.
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
                        <span class="h4-like-title">Fokus des Kurses:</span> praktische Kenntnisse in der
                        Web-Entwicklung mit den neuesten Innovationen des HTML5- und CSS3-Standards.
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
                        <img src="./assets/images/JS-applications.jpg" alt="Photo by 🇨🇭 Claudio Schwarz | @purzlb">
                    </div>
                </div>
                <div class="course__info">
                    <div class="course__info-focus">
                        <span class="h4-like-title">Fokus des Kurses:</span> praktische Kenntnisse zur Erstellung
                        gut strukturierter Einzelseitenanwendungen.
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
                        <span class="h4-like-title">Fokus des Kurses:</span> algorithmisches Denken und praktische
                        Kenntnisse für DOM-Baummanipulation und Unit-Tests.
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
                        <span class="h4-like-title">Fokus des Kurse:</span> JS-Syntax und praktische Kenntnisse in
                        der Manipulation mit Datentypen, Operatoren, Expressions, Konditionskonstruktionen, Loops
                        und Funktionen.
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
                        <span class="h4-like-title">Fokus des Kurses:</span> Basis Techniken und Instrumente für die
                        praktische Programmierung
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

    <section class="main__experience hidden" id="experienceSection">
        <div class="content-container">
            <h2 class="main__title page-title">Berufliche Erfahrung</h2>

            <article class="work">
                <div class="work__media">
                    <div class="work__media-img">
                        <img src="./assets/images/Carrypicker/Teaser_Logistik.jpg" alt="Digitales Logistikbild">
                    </div>
                </div>
                <h3 class="work__position">Frontend Entwickler</h3>
                <h4 class="work__employer">Carrypicker GmbH - Hamburg, Deutschland</h4>
                <span class="work__period h4-like">2021, Januar - heute</span>
                <div class="work__description">
                    <p>
                        Betreuung, Weiterentwicklung und UX-Design eines webbasierten Ökosystems von vier Webanwendungen
                        für die digitale Logistik.
                    </p>
                    <ul class="text-like-list">
                        <li><a href="https://my.carrypicker.com/">Carrypicker</a> - Verlader-Plattform, auf der
                            Versandaufträge erteilt werden</li>
                        <li><a href="https://neu.colleta.de/">Colleta TMS</a> - Transportmanagement/Dispatcher
                            Plattform, auf der Sendungen disponiert und Touren zugewiesen werden</li>
                        <li><a href="https://trucking.colleta.de/">Colleta Trucking</a> - Transportdienstleister
                            Plattform, auf der Transoprtaufträge entgegengenommen werden</li>
                        <li><a href="https://my.colleta.de/">Colleta Manager</a> - Benutzerverwaltungsplattform, die die
                            die anderen Baumanwendungen</li>
                    </ul>
                    <p>
                        These Web Applications togehter digitalise the palette truck transport process chain and
                        offer an AI-based logistics solution for all companies that want to ship their truck freight
                        easily, efficiently and sustainably.
                    </p>
                    <p>
                        For further information see <a href="#" class="work__description-link"
                            id="projects">Projects</a> section.
                    </p>
                </div>
            </article>

            <article class="work">
                <div class="work__media">
                    <div class="work__media-img">
                        <img src="./assets/images/freelance/ferenc-almasi-VPmMy8YA_cU-unsplash.jpg" alt="IT image">
                    </div>
                </div>
                <h3 class="work__position">Freiberuflicher Software-Ingenieurin </h3>
                <h4 class="work__employer">Freiberuflerin – Hamburg, Germany</h4>
                <span class="work__period h4-like">2018 - 2020</span>
                <div class="work__description">
                    Design, Entwickelung und Implementation von MVP Performance-Management-Tool. PMT ist eine
                    Single-Page-Webanwendung, die von Six-Sigma-Techniken zur Leistungsverbesserung inspiriert ist.
                    Single Page Applications mit Ausbildungszweck - Plattformen zum Austausch und zur Bewertung
                    inspirierender Film- und Songtitel.
                    Für weitere Informationen siehen Sie bitte Kapitel <a href="#"
                        class="work__description-link">Projekte</a>.
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

    <section class="main__projects hidden" id="projectsSection">
        <div class="content-container">
            <h2 class="main__title page-title">Projekte</h2>
            <div class="anchor-nav">
                <ul class="anchor-nav__list">
                    <li class="anchor-nav__list-item"><a href="#"
                            class="anchor-nav__list-link anchor-nav__list-link-aktuell" id="workProjects">Arbeit</a>
                    </li>
                    <li class="anchor-nav__list-item"><a href="#" class="anchor-nav__list-link"
                            id="personalProjects">Persönlich</a></li>
                    <li class="anchor-nav__list-item"><a href="#" class="anchor-nav__list-link"
                            id="studyProjects">Ausbildung</a></li>
                </ul>
            </div>
            <div class="content-container" id="workProjectsDiv">
                <h2 class="main__title">ARBEITSPROJEKTE</h2>
                <div class="project">
                    <h3 class="project__title">Carrypicker Web-Anwendungen</h3>
                    <div class="project__icon">
                        <img src="./assets/icons/star.svg" alt="Star icon">
                    </div>
                    <p class="project__highlights">
                        Entwicklung von weiteren Features und Funktionalitäten für drei Webanwendungen:Carrypicker, Colleta TMS und Colleta Trucking. Die symbiotischen Beziehungen zwischen diesen Anwendungen ermöglichen es, alle drei Schritte des LKW-Transportlogistikprozesses abzudecken. Angefangen bei der Eingabe eines Verladeauftrages in Carrypicker, über eine KI-basierte automatische Disposition mit einer Fallback-Option - der manuellen Disposition in Colleta TMS.  Und endet mit der Erteilung von Touranfragen und Transportaufträgen über die Colleta Trucking Platform, wobei die Colleta User Management Platform als Mittelmann in diesem Ökosystem dient.
                    </p>
                    <p class="project__info">
                        Erweiterung der vier SPAs um weitere Features, die imperativ mit TypeScript (Angular), AJAX, REST und JSON geschrieben wurden.
                    </p>
                    <p class="project__info">
                        Entwicklung mehrerer UX-Design-Entwürfe mit Sketch unter Einhaltung etablierter Designlinien und deren Umsetzung mit SCSS.
                    </p>
                    <p class="project__info">
                        Erstellung mehrerer E-Mail-Templates mit Stripo (Online-Plattform für E-Mail-Templates) und integrierte Handlebars als Template-Compiler.
                    </p>
                    <p class="project__info">
                        Zusammenarbeit mit Backend-Entwicklern, Datenanalysten und Produktentwicklern.
                    </p>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Carrypicker - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Carrypicker-ui/0.png" alt="Shipment orders list view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Carrypicker ist eine Webplattform, auf der Verlader einfach Verladeaufträge anlegen können. Sie bietet einen KI-basierten Algorithmus zur Tagespreisberechnung und unterstützt manuelle, CSV- oder Excel-basierte Sendungseingaben.
                            </p>
                            <p>
                                Das Webportal verfolgt den Status und die aktuelle Lage der Sendungen, die für einen einzelnen Nutzer oder eine Gruppe von Nutzern relevant sind. Es stellt auch automatisch Verladeaufträge aus und ermöglicht den Dokumentenaustausch zwischen den Beteiligten.
                            </p>
                            <a href="https://my.carrypicker.com/">https://my.carrypicker.com/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/1.png" alt="Shipment orders list view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/2.png" alt="Shipment input">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/3.png" alt="Read-only shipment order detail view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/4.png" alt="Favorite companies input">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/5.png" alt="Backoffice shipment orders list view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/6.png" alt="Editable shipment order detail view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/7.png" alt="Shipment price update">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/8.png" alt="Report genration">
                        </div> -->
                    </div>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Colleta TMS - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Colleta-tms/0.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Colleta TMS ist ein Dispositionstool, das hauptsächlich dem Transportmanagement dient. Es ist als Fallback-Webplattform gedacht, auf der Sendungen, die von der KI nicht automatisch disponiert werden konnten, von Disponenten manuell gebündelt werden.
                            </p>
                            <p>
                                Colleta TMS vereinfacht die Prozesskette von der Bündelung mehrerer Sendungen über die Erstellung einer Touranfrage bis hin zur Kontaktaufnahme mit zahlreichen Transportunternehmen auf wenige Buttonklicks. Auch die Preisverhandlung und die eigentliche Vergabe eines Transportauftrages finden in dieser Web-Plattform statt.
                            </p> 
                            <a href="https://neu.colleta.de/">https://neu.colleta.de/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/1.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/2.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/3.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/4.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/5.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/6.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/7.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/8.png" alt="Project result view">
                        </div> -->
                    </div>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Colleta Trucking - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Colleta-trucking/0.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Colleta Trucking ist eine Webanwendung, die für Transportunternehmen gedacht ist. Sie ermöglicht es ihnen, aktiv an Touranfragen teilzunehmen, verfügbare Fahrzeuge zu registrieren und häufig gefahrene Strecken anzubieten. Ein weiteres Feature der Plattform ist das Archivieren aller Transportaufträge und der Online-Zugriff auf die entsprechende Dokumentation.
                            </p>
                            <a href="https://trucking.colleta.de/">https://trucking.colleta.de/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/1.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/2.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/3.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/4.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/5.png" alt="Project result view">
                        </div> -->
                    </div>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Colleta Manager - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Colleta-manager/0.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Colleta Manager kümmert sich um die Benutzerverwaltung für die anderen drei Webplattformen: Carrypicker, Colleta und Colleta Trucking. Er ermöglicht den systemübergreifenden Datenaustausch und ist der Punkt, an dem das Onboarding für alle Beteiligten im Carrypicker-Ökosystem stattfindet.
                            </p>
                            <a href="https://my.colleta.de/">https://my.colleta.de/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Colleta-manager/1.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-manager/2.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-manager/3.png" alt="Project result view">
                        </div> -->
                    </div>
                </div>
            </div>

            <div class="content-container" id="personalProjectsDiv">
                <h2 class="main__title">PERSÖNLICHE PROJEKTE</h2>
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
            </div>

            <div class="content-container" id="studyProjectsDiv">
                <h2 class="main__title">PROJEKTE MIT AUSBILDUNGSZWECK</h2>
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
`);


const $bodyContentEn = $(`
<header class="header">
    <div class="content-container">
        <div class="header__logo header__logo--backend">
            <img src="./assets/icons/noun_back end_133744.svg" alt="back-end-icon">
            <div class="header__logo-lang-bar header__logo-lang-bar--backend">DE</div>
        </div>
        <nav class="nav">
            <ul class="nav__list row row--right-aligned">
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="about">About</a></li>
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="courses">Kurse</a></li>
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="experience">Erfahrung</a></li>
                <li class="nav__list-item"><a href="#" class="nav__list-link" id="projects">Projekte</a></li>
            </ul>
        </nav>
        <div class="header__logo header__logo--frontend">
            <img src="./assets/icons/noun_front end_133743.svg" alt="front-end-icon">
            <div class="header__logo-lang-bar header__logo-lang-bar--frontend">DE</div>
        </div>
    </div>
</header>

<main class="main">
    <section class="main__about" id="aboutSection">
        <div class="content-container">
            <h2 class="main__about-title page-title">About</h2>

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
                    Mit zunehmender Neugier wuchs auch mein Interesse, eigene Anwendungen zu entwickeln und Bereiche
                    meines Fachgebiets und Alltagslebens abzudecken, die meiner Meinung nach mit digitalen Lösungen
                    verbessert werden könnten.
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
                        <li class="skill-set__list-item">Projektleitungserfahrung</li>
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

    <section class="main__courses hidden" id="coursesSection">
        <div class="content-container">
            <h2 class="main__title page-title">Kurse</h2>

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
                        <span class="h4-like-title">Fokus des Kurses:</span> Praktische Kenntnisse für die
                        Erstellung von Einzelseitenanwendungen und TypeScript Basis
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
                        <span class="h4-like-title">Fokus des Kurses:</span> modernes
                        Multi-Plattform-Anwendungsdesign und Entwicklung mit Animationen und Ikonen.
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
                        <span class="h4-like-title">Fokus des Kurses:</span> praktische Kenntnisse in der
                        Web-Entwicklung mit den neuesten Innovationen des HTML5- und CSS3-Standards.
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
                        <img src="./assets/images/JS-applications.jpg" alt="Photo by 🇨🇭 Claudio Schwarz | @purzlb">
                    </div>
                </div>
                <div class="course__info">
                    <div class="course__info-focus">
                        <span class="h4-like-title">Fokus des Kurses:</span> praktische Kenntnisse zur Erstellung
                        gut strukturierter Einzelseitenanwendungen.
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
                        <span class="h4-like-title">Fokus des Kurses:</span> algorithmisches Denken und praktische
                        Kenntnisse für DOM-Baummanipulation und Unit-Tests.
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
                        <span class="h4-like-title">Fokus des Kurse:</span> JS-Syntax und praktische Kenntnisse in
                        der Manipulation mit Datentypen, Operatoren, Expressions, Konditionskonstruktionen, Loops
                        und Funktionen.
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
                        <span class="h4-like-title">Fokus des Kurses:</span> Basis Techniken und Instrumente für die
                        praktische Programmierung
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

    <section class="main__experience hidden" id="experienceSection">
        <div class="content-container">
            <h2 class="main__title page-title">Berufliche Erfahrung</h2>

            <article class="work">
                <div class="work__media">
                    <div class="work__media-img">
                        <img src="./assets/images/Carrypicker/Teaser_Logistik.jpg" alt="Digitales Logistikbild">
                    </div>
                </div>
                <h3 class="work__position">Frontend Entwickler</h3>
                <h4 class="work__employer">Carrypicker GmbH - Hamburg, Deutschland</h4>
                <span class="work__period h4-like">2021, Januar - heute</span>
                <div class="work__description">
                    <p>
                        Betreuung, Weiterentwicklung und UX-Design eines webbasierten Ökosystems von vier Webanwendungen
                        für die digitale Logistik.
                    </p>
                    <ul class="text-like-list">
                        <li><a href="https://my.carrypicker.com/">Carrypicker</a> - Verlader-Plattform, auf der
                            Versandaufträge erteilt werden</li>
                        <li><a href="https://neu.colleta.de/">Colleta TMS</a> - Transportmanagement/Dispatcher
                            Plattform, auf der Sendungen disponiert und Touren zugewiesen werden</li>
                        <li><a href="https://trucking.colleta.de/">Colleta Trucking</a> - Transportdienstleister
                            Plattform, auf der Transoprtaufträge entgegengenommen werden</li>
                        <li><a href="https://my.colleta.de/">Colleta Manager</a> - Benutzerverwaltungsplattform, die die
                            die anderen Baumanwendungen</li>
                    </ul>
                    <p>
                        These Web Applications togehter digitalise the palette truck transport process chain and
                        offer an AI-based logistics solution for all companies that want to ship their truck freight
                        easily, efficiently and sustainably.
                    </p>
                    <p>
                        For further information see <a href="#" class="work__description-link"
                            id="projects">Projects</a> section.
                    </p>
                </div>
            </article>

            <article class="work">
                <div class="work__media">
                    <div class="work__media-img">
                        <img src="./assets/images/freelance/ferenc-almasi-VPmMy8YA_cU-unsplash.jpg" alt="IT image">
                    </div>
                </div>
                <h3 class="work__position">Freiberuflicher Software-Ingenieurin </h3>
                <h4 class="work__employer">Freiberuflerin – Hamburg, Germany</h4>
                <span class="work__period h4-like">2018 - 2020</span>
                <div class="work__description">
                    Design, Entwickelung und Implementation von MVP Performance-Management-Tool. PMT ist eine
                    Single-Page-Webanwendung, die von Six-Sigma-Techniken zur Leistungsverbesserung inspiriert ist.
                    Single Page Applications mit Ausbildungszweck - Plattformen zum Austausch und zur Bewertung
                    inspirierender Film- und Songtitel.
                    Für weitere Informationen siehen Sie bitte Kapitel <a href="#"
                        class="work__description-link">Projekte</a>.
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

    <section class="main__projects hidden" id="projectsSection">
        <div class="content-container">
            <h2 class="main__title page-title">Projekte</h2>
            <div class="anchor-nav">
                <ul class="anchor-nav__list">
                    <li class="anchor-nav__list-item"><a href="#"
                            class="anchor-nav__list-link anchor-nav__list-link--current" id="workProjects">Arbeit</a>
                    </li>
                    <li class="anchor-nav__list-item"><a href="#" class="anchor-nav__list-link"
                            id="personalProjects">Persönlich</a></li>
                    <li class="anchor-nav__list-item"><a href="#" class="anchor-nav__list-link"
                            id="studyProjects">Ausbildung</a></li>
                </ul>
            </div>
            <div class="content-container" id="workProjectsDiv">
                <h2 class="main__title">ARBEITSPROJEKTE</h2>
                <div class="project">
                    <h3 class="project__title">Carrypicker Web-Anwendungen</h3>
                    <div class="project__icon">
                        <img src="./assets/icons/star.svg" alt="Star icon">
                    </div>
                    <p class="project__highlights">
                        Entwicklung von weiteren Features und Funktionalitäten für drei Webanwendungen:Carrypicker, Colleta TMS und Colleta Trucking. Die symbiotischen Beziehungen zwischen diesen Anwendungen ermöglichen es, alle drei Schritte des LKW-Transportlogistikprozesses abzudecken. Angefangen bei der Eingabe eines Verladeauftrages in Carrypicker, über eine KI-basierte automatische Disposition mit einer Fallback-Option - der manuellen Disposition in Colleta TMS.  Und endet mit der Erteilung von Touranfragen und Transportaufträgen über die Colleta Trucking Platform, wobei die Colleta User Management Platform als Mittelmann in diesem Ökosystem dient.
                    </p>
                    <p class="project__info">
                        Erweiterung der vier SPAs um weitere Features, die imperativ mit TypeScript (Angular), AJAX, REST und JSON geschrieben wurden.
                    </p>
                    <p class="project__info">
                        Entwicklung mehrerer UX-Design-Entwürfe mit Sketch unter Einhaltung etablierter Designlinien und deren Umsetzung mit SCSS.
                    </p>
                    <p class="project__info">
                        Erstellung mehrerer E-Mail-Templates mit Stripo (Online-Plattform für E-Mail-Templates) und integrierte Handlebars als Template-Compiler.
                    </p>
                    <p class="project__info">
                        Zusammenarbeit mit Backend-Entwicklern, Datenanalysten und Produktentwicklern.
                    </p>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Carrypicker - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Carrypicker-ui/0.png" alt="Shipment orders list view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Carrypicker ist eine Webplattform, auf der Verlader einfach Verladeaufträge anlegen können. Sie bietet einen KI-basierten Algorithmus zur Tagespreisberechnung und unterstützt manuelle, CSV- oder Excel-basierte Sendungseingaben.
                            </p>
                            <p>
                                Das Webportal verfolgt den Status und die aktuelle Lage der Sendungen, die für einen einzelnen Nutzer oder eine Gruppe von Nutzern relevant sind. Es stellt auch automatisch Verladeaufträge aus und ermöglicht den Dokumentenaustausch zwischen den Beteiligten.
                            </p>
                            <a href="https://my.carrypicker.com/">https://my.carrypicker.com/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/1.png" alt="Shipment orders list view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/2.png" alt="Shipment input">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/3.png" alt="Read-only shipment order detail view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/4.png" alt="Favorite companies input">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/5.png" alt="Backoffice shipment orders list view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/6.png" alt="Editable shipment order detail view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/7.png" alt="Shipment price update">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Carrypicker-ui/8.png" alt="Report genration">
                        </div> -->
                    </div>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Colleta TMS - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Colleta-tms/0.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Colleta TMS ist ein Dispositionstool, das hauptsächlich dem Transportmanagement dient. Es ist als Fallback-Webplattform gedacht, auf der Sendungen, die von der KI nicht automatisch disponiert werden konnten, von Disponenten manuell gebündelt werden.
                            </p>
                            <p>
                                Colleta TMS vereinfacht die Prozesskette von der Bündelung mehrerer Sendungen über die Erstellung einer Touranfrage bis hin zur Kontaktaufnahme mit zahlreichen Transportunternehmen auf wenige Buttonklicks. Auch die Preisverhandlung und die eigentliche Vergabe eines Transportauftrages finden in dieser Web-Plattform statt.
                            </p> 
                            <a href="https://neu.colleta.de/">https://neu.colleta.de/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/1.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/2.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/3.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/4.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/5.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/6.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/7.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-tms/8.png" alt="Project result view">
                        </div> -->
                    </div>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Colleta Trucking - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Colleta-trucking/0.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Colleta Trucking ist eine Webanwendung, die für Transportunternehmen gedacht ist. Sie ermöglicht es ihnen, aktiv an Touranfragen teilzunehmen, verfügbare Fahrzeuge zu registrieren und häufig gefahrene Strecken anzubieten. Ein weiteres Feature der Plattform ist das Archivieren aller Transportaufträge und der Online-Zugriff auf die entsprechende Dokumentation.
                            </p>
                            <a href="https://trucking.colleta.de/">https://trucking.colleta.de/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/1.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/2.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/3.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/4.png" alt="Project result view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-trucking/5.png" alt="Project result view">
                        </div> -->
                    </div>
                    <div class="project__media project__media--info">
                        <div class="project__media-title">Colleta Manager - Gallery</div>
                        <div class="project__media-img--big">
                            <img src="./assets/images/Colleta-manager/0.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-info">
                            <p>
                                Colleta Manager kümmert sich um die Benutzerverwaltung für die anderen drei Webplattformen: Carrypicker, Colleta und Colleta Trucking. Er ermöglicht den systemübergreifenden Datenaustausch und ist der Punkt, an dem das Onboarding für alle Beteiligten im Carrypicker-Ökosystem stattfindet.
                            </p>
                            <a href="https://my.colleta.de/">https://my.colleta.de/</a>
                        </div>
                        <!-- <div class="project__media-img">
                            <img src="./assets/images/Colleta-manager/1.png" alt="Login-first step view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-manager/2.png" alt="Random project view">
                        </div>
                        <div class="project__media-img">
                            <img src="./assets/images/Colleta-manager/3.png" alt="Project result view">
                        </div> -->
                    </div>
                </div>
            </div>

            <div class="content-container" id="personalProjectsDiv">
                <h2 class="main__title">PERSÖNLICHE PROJEKTE</h2>
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
            </div>

            <div class="content-container" id="studyProjectsDiv">
                <h2 class="main__title">PROJEKTE MIT AUSBILDUNGSZWECK</h2>
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
`);