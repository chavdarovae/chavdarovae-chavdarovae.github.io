const selectors = {
    main: '.main',
    navBtn: '.nav__list-link',
    curNavBtn: '.nav__list-link--current',
    courseInstance: '.course',
    curCourseInstance: '.course--current',
    img: 'div[class*="__media-img"] img',
    contentContainer: '.content-container',
    preview: '.preview__backdrop, .preview__box',
    previewBackdrop: '.preview__backdrop',
    previewBox: '.preview__box',
    previewImg: '.preview__box-img',
    previewDescription: '.preview__box-description',
    previewControl: '.preview__box-control',
    previewClose: '.preview__box-close, .preview__backdrop',
    certificateTrigger: '#certificateTrigger',
    certificateList: '#certificateList',
    languageToggle: '.header__logo-lang-bar, .header__logo img',


}

class HomePageRouter {
    init() {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.handleNavBtnClick();
        this.handleCourseInstanceClick();
        this.handleImgClick();
        this.handlePreviewControlClick();
        this.handlePreviewCloseClick();
        this.handleCertificateTriggerClick();
        this.handleLanguageToggleClick();

    }

    handleNavBtnClick() {
        const { navBtn, main, curCourseInstance, curNavBtn } = selectors;
        $(navBtn).on('click', (e) => {
            $(curNavBtn).removeClass('nav__list-link--current');
            $(e.target).addClass('nav__list-link--current');
            const mainComponentId = '#' + e.target.text.toLowerCase();
            if (mainComponentId === '#courses') {
                $(curCourseInstance).removeClass('course--current');
            }
            $(main).children().filter(':visible').addClass('hidden');
            $(mainComponentId).removeClass('hidden');
        })
    }

    handleCourseInstanceClick() {
        const { courseInstance, curCourseInstance } = selectors;
        $(courseInstance).on('click', (e) => {
            if ($(e.target).parents(courseInstance).hasClass('course--current')) {
                $(e.target).parents(courseInstance).removeClass('course--current');
            } else {
                $(curCourseInstance).removeClass('course--current');
                $(e.target).parents(courseInstance).addClass('course--current');
            }
        })
    }

    handleImgClick() {
        const { img, preview, previewBox, previewImg, previewDescription } = selectors;

        $(img).on('click', (e) => {
            const $imgDiv = $(e.target).parent();
            const imgWidth = $imgDiv.width();
            const imgHeight = $imgDiv.height();
            const imgSrc = $(e.target).attr('src');
            const imgDescription = $(e.target).attr('alt');
            $(previewImg).attr('src', imgSrc);
            $(previewDescription).text(imgDescription);

            if ($(window).width() < 900) {
                $(previewImg).width(0.95 * $(window).width() - 4);
            } else {
                const maxWidth = 0.85 * $(window).width() - 4;
                const maxHeight = 0.85 * $(window).height() - 22;

                if (imgWidth > imgHeight) {
                    $(previewImg).height('auto');

                    if (imgWidth / imgHeight >= (16 / 9)) {
                        $(previewImg).width(maxWidth);
                    } else {
                        const previewRatio = maxHeight / imgHeight;
                        $(previewImg).width(previewRatio * imgWidth);
                    }
                } else {
                    $(previewImg).width('auto');
                    $(previewImg).height(maxHeight);
                }
            }

            $(preview).animate({ 'opacity': '.50' }, 300, 'linear');
            $(previewBox).animate({ 'opacity': '1' }, 300, 'linear');
            $(preview).css('display', 'block');
        })
    }

    handlePreviewCloseClick() {
        const { previewClose, preview } = selectors;
        $(previewClose).on('click', (e) => {
            $(preview).animate({ 'opacity': '0' }, 300, 'linear', () => {
                $(preview).css('display', 'none');
            });
        })
    }

    handlePreviewControlClick() {
        const { previewControl, previewImg } = selectors;
        $(previewControl).on('click', (e) => {
            const previewControlClass = $(e.target).parent().attr('class');
            let relPath = $(previewImg).attr('src').split('/');
            
            let lastElem = Number(relPath.pop().replace('.png',''));
            if(previewControlClass.includes('forwards')) {
                lastElem++;
            }else if (previewControlClass.includes('backwards')){
                lastElem--;
            }else {
                return;
            }
            relPath.push(lastElem);  
            relPath=relPath.join('/') + '.png'; 
            $(previewImg).attr('src', relPath)       
        })
    }

    handleCertificateTriggerClick() {
        const { certificateTrigger, certificateList } = selectors;
        $(certificateTrigger).on('click', (e) => {

            const listClass = $(certificateList).attr('class')
            if (listClass === 'text-like-list hidden') {
                $(certificateTrigger).attr('data-collaps', '▼')
                $(certificateList).show();
                $(certificateList).addClass('animations-fancy-list');
            } else {
                $(certificateList).find('li').animate({ 'opacity': '0' }, 500, 'linear', () => {
                    $(certificateList).css('display', 'none');
                    $(certificateTrigger).attr('data-collaps', '►')
                    $(certificateList).removeClass('animations-fancy-list');
                });
            }
        })
    }

    handleLanguageToggleClick() {
        const { languageToggle } = selectors;
        $(languageToggle).on('click', (e) => {

            const $languageBar = $(e.target).parents('.header__logo').find('.header__logo-lang-bar');
            if (!$languageBar.is(':visible')) return;

            if ($languageBar.text() === 'EN') {
                $languageBar.text('DE');

                const $bodyContentDe = (`    
            <header class="header">
                <div class="content-container">
                    <div class="header__logo header__logo--backend">
                        <img src="./assets/icons/noun_back end_133744.svg" alt="back-end-icon">
                        <div class="header__logo-lang-bar header__logo-lang-bar--backend">DE</div>
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
                        <div class="header__logo-lang-bar header__logo-lang-bar--frontend">DE</div>
                    </div>
                </div>
            </header>
        
            <main class="main">
                <section class="main__about" id="about">
                    <div class="content-container">
                        <h2 class="main__about-title">About me DE</h2>
        
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
                                In the past 2 years I have decided to pursue this desire fully by completing a developer
                                program
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg"
                                        alt="Photo by KOBU Agency on Unsplash">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> practical skills for building Single
                                    Page
                                    Application & basic
                                    TypeScript
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2760/angular-january-2020">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>Introduction to Angular and TypeScript</li>
                                        <li>Components and Data binding</li>
                                        <li>Dependency injection, Introduction to RxJS and Services</li>
                                        <li>Modules and Routing</li>
                                        <li>Forms, Directives and Data retrieval from REST, </li>
                                        <li>Pipes,Interceptors and Subjects</li>
                                        <li>State management and others</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
                                    <span>GitHub repo with own solutions of homework and exam tasks </span>
                                    <a href="#">here</a>
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/3042/css-advanced-july-2020">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>CSS architecture - IT CSS</li>
                                        <li>CSS architecture - BEM</li>
                                        <li>SASS</li>
                                        <li>CSS transitions, animations and transformations</li>
                                        <li>CSS grid</li>
                                        <li>Building layouts</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2375/html-and-css-may-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
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
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> practical skills for building
                                    well-structured Single Page
                                    Applications.
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2249/js-applications-march-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>REST services</li>
                                        <li>AJAX and jquery AJAX</li>
                                        <li>Asynchronous programming</li>
                                        <li>JS for front-end</li>
                                        <li>Templating</li>
                                        <li>Routing and architecture</li>
                                        <li>Single page application</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2248/js-advanced-february-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>Advanced functions</li>
                                        <li>Unit testing</li>
                                        <li>JS classes</li>
                                        <li>Object composition</li>
                                        <li>jQuery</li>
                                        <li>Dom manipulations</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> JS syntax and practical skills in
                                    manipulation with data types,
                                    operators,
                                    expressions, conditional constructions, loops and functions.
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>JS syntax and operators</li>
                                        <li>Document object model</li>
                                        <li>Functions and logic flow</li>
                                        <li>Arrays and matrices</li>
                                        <li>Strings and regexp</li>
                                        <li>Objects and JSON</li>
                                        <li>Dom events</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
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
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> Basic coding skills.
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/1962/programming-basics-with-csharp-may-2018">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>IDE</li>
                                        <li>Simple operations and calculations</li>
                                        <li>Conditional statements</li>
                                        <li>Loops</li>
                                        <li>Nested loops</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                            <div class="work__media-img">
                                <img src="./assets/images/ferenc-almasi-VPmMy8YA_cU-unsplash.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Junior Software Engineer</h3>
                            <h4 class="work__employer">Freelance – Hamburg, Germany</h4>
                            <span class="work__period h4-like">2018 - present</span>
                            <div class="work__description">
                                Designed, developed and deployed an MVP Performance Management Tool – a single-page
                                application inspired by Six Sigma performance improvement techniques. Implemented a couple
                                of
                                Single Page Applications with educational purpose - platforms for
                                sharing and rating inspiring movie and song titles.
                            </div>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/Pohnpei Solar Farm.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Site Manager</h3>
                            <h4 class="work__employer">STENLI - 03 LTD – Lom, Bulgaria</h4>
                            <span class="work__period h4-like">2016 - 2017</span>
                            <p class="work__description">Site management and coordination role for Pohnpei Solar Farm, The
                                Federated States of Micronesia. 640kW installed solar capacity of strategical relevance to
                                Pohnpei island power generation system.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/PDV.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Assistant Planning Coordinator</h3>
                            <h4 class="work__employer">SIPAL S.p.a. – Turin, Italy</h4>
                            <span class="work__period h4-like">2013 - 2015</span>
                            <p class="work__description">Assistant planning coordination, structural design and design
                                supervision role for Pedemontana Veneta Expressway. 95km road artery with great significance
                                for
                                Northern Itlay and Eastern Europe, construction cost € 2.4 billion.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/SS640.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Head Of Structural Department</h3>
                            <h4 class="work__employer">WAY ENGINEERING AD – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2009 - 2013</span>
                            <p class="work__description">Developed the structural design department in Way Engineering AD -
                                Bulgarian branch of SICS Ingegneria S.r.l. Organized and managed its growth from 2 initial
                                employees to 15 in 3 years. Responsible for team recruitment, manpower management and
                                direction
                                of design works. Project coordination role for three significant infrastructural projects
                                and
                                various tender procedures:
                                DG48 Salerno-Reggio Calabria Highway – 30km, Italy, construction cost € 650 million. Road
                                facilities design for the main contractor SIS Scpa, Italy
                                State road SS640 – 35km, Italy, construction cost € 739 million. Road facilities design for
                                the
                                main contractor Empedocles II Scpa, Italy,
                                way facilities design for the main contractor Astaldi S.p.a, Italy
                            </p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="https://picsum.photos/300/200" alt="Project image">
                            </div>
                            <h3 class="work__position">Personal Assistant Head Of Development Department</h3>
                            <h4 class="work__employer">AKROPOLIS BG LTD – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2007 - 2008</span>
                            <p class="work__description">Coordination role for Akropolis Shopping and Entertainment Center –
                                a
                                524,000 sq.m. multifunctional commercial complex (shopping mall and office towers) in Sofia.
                                Responsible for the official communication and the department documentation (concept and
                                tender
                                design stage). Preparation and execution of contractor appointment procedures.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/NY-Street.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Design Coordinator</h3>
                            <h4 class="work__employer">NU BOYANA FILM STUDIO – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2006 - 2007</span>
                            <p class="work__description">Design coordination role for the large-scale movie set “New York
                                Street”, Sofia, Bulgaria – 8000 sq.m with real size buildings, power and water supplied,
                                construction cost € 3,5 million. Art design and on-site supervision. Responsible for the
                                design
                                localization and the official correspondence.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/Sofia-Airport.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Student Trainee</h3>
                            <h4 class="work__employer">STRABAG EAD – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2005 - 2006</span>
                            <p class="work__description">Trainee civil engineer during the As-built design stage of Sofia
                                Airport – Terminal 2, Bulgaria, construction cost € 120 million. On-site processes
                                assistance
                                and survey data adoption for design purposes.</p>
                        </article>
        
                    </div>
                </section>
        
                <section class="main__projects hidden" id="projects">
                    <div class="content-container">
                        <h2 class="main__title">Personal projects</h2>
        
                        <div class="project">
                            <h3 class="project__title">Performance Management Tool - PerMaTo SPA</h3>
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
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-home.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/register.png" alt="">
                                </div>
                                <div class="project__media-img ">
                                    <img src="./assets/images/MoviesSPA/login.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-cinema.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-my.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-search.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movie-details.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movie-create.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movie-update.png" alt="">
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
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/home.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/register.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/login.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/songs-all.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/songs-my.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/create.png" alt="">
                                </div>
                            </div>
                        </div>
        
                    </div>
                </section>
        
                <!-- auxiliary elements -->
                <div class="preview__backdrop"></div>
                <div class="preview__box">
                    <div class="preview__box-close">X</div>
                    <img class="preview__box-img" src="https://picsum.photos/200/300">
                </div>
            </main>`)
                $('body').empty();
                $('body').append($bodyContentDe);
                this.init();

            } else if ($languageBar.text() === 'DE') {
                $languageBar.text('EN');
                const $bodyContentEn = (`    
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
                                In the past 2 years I have decided to pursue this desire fully by completing a developer
                                program
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg"
                                        alt="Photo by KOBU Agency on Unsplash">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> practical skills for building Single
                                    Page
                                    Application & basic
                                    TypeScript
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2760/angular-january-2020">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>Introduction to Angular and TypeScript</li>
                                        <li>Components and Data binding</li>
                                        <li>Dependency injection, Introduction to RxJS and Services</li>
                                        <li>Modules and Routing</li>
                                        <li>Forms, Directives and Data retrieval from REST, </li>
                                        <li>Pipes,Interceptors and Subjects</li>
                                        <li>State management and others</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
                                    <span>GitHub repo with own solutions of homework and exam tasks </span>
                                    <a href="#">here</a>
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/3042/css-advanced-july-2020">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>CSS architecture - IT CSS</li>
                                        <li>CSS architecture - BEM</li>
                                        <li>SASS</li>
                                        <li>CSS transitions, animations and transformations</li>
                                        <li>CSS grid</li>
                                        <li>Building layouts</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2375/html-and-css-may-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
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
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> practical skills for building
                                    well-structured Single Page
                                    Applications.
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2249/js-applications-march-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>REST services</li>
                                        <li>AJAX and jquery AJAX</li>
                                        <li>Asynchronous programming</li>
                                        <li>JS for front-end</li>
                                        <li>Templating</li>
                                        <li>Routing and architecture</li>
                                        <li>Single page application</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2248/js-advanced-february-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>Advanced functions</li>
                                        <li>Unit testing</li>
                                        <li>JS classes</li>
                                        <li>Object composition</li>
                                        <li>jQuery</li>
                                        <li>Dom manipulations</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> JS syntax and practical skills in
                                    manipulation with data types,
                                    operators,
                                    expressions, conditional constructions, loops and functions.
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>JS syntax and operators</li>
                                        <li>Document object model</li>
                                        <li>Functions and logic flow</li>
                                        <li>Arrays and matrices</li>
                                        <li>Strings and regexp</li>
                                        <li>Objects and JSON</li>
                                        <li>Dom events</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
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
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/2247/js-fundamentals-january-2019">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
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
                                <div class="course__info-link hidden">
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
                                    <img src="./assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="programmer">
                                </div>
                            </div>
                            <div class="course__info">
                                <div class="course__info-focus">
                                    <span class="h4-like-title">Course focus:</span> Basic coding skills.
                                </div>
                                <div class="course__info-link hidden">
                                    <span>Course instance link </span>
                                    <a href="https://softuni.bg/trainings/1962/programming-basics-with-csharp-may-2018">here</a>
                                </div>
                                <div class="course__info-scope hidden">
                                    <h4>Course scope:</h4>
                                    <ul class="text-like-list">
                                        <li>IDE</li>
                                        <li>Simple operations and calculations</li>
                                        <li>Conditional statements</li>
                                        <li>Loops</li>
                                        <li>Nested loops</li>
                                    </ul>
                                </div>
                                <div class="course__info-link hidden">
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
                            <div class="work__media-img">
                                <img src="./assets/images/ferenc-almasi-VPmMy8YA_cU-unsplash.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Junior Software Engineer</h3>
                            <h4 class="work__employer">Freelance – Hamburg, Germany</h4>
                            <span class="work__period h4-like">2018 - present</span>
                            <div class="work__description">
                                Designed, developed and deployed an MVP Performance Management Tool – a single-page
                                application inspired by Six Sigma performance improvement techniques. Implemented a couple
                                of
                                Single Page Applications with educational purpose - platforms for
                                sharing and rating inspiring movie and song titles.
                            </div>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/Pohnpei Solar Farm.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Site Manager</h3>
                            <h4 class="work__employer">STENLI - 03 LTD – Lom, Bulgaria</h4>
                            <span class="work__period h4-like">2016 - 2017</span>
                            <p class="work__description">Site management and coordination role for Pohnpei Solar Farm, The
                                Federated States of Micronesia. 640kW installed solar capacity of strategical relevance to
                                Pohnpei island power generation system.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/PDV.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Assistant Planning Coordinator</h3>
                            <h4 class="work__employer">SIPAL S.p.a. – Turin, Italy</h4>
                            <span class="work__period h4-like">2013 - 2015</span>
                            <p class="work__description">Assistant planning coordination, structural design and design
                                supervision role for Pedemontana Veneta Expressway. 95km road artery with great significance
                                for
                                Northern Itlay and Eastern Europe, construction cost € 2.4 billion.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/SS640.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Head Of Structural Department</h3>
                            <h4 class="work__employer">WAY ENGINEERING AD – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2009 - 2013</span>
                            <p class="work__description">Developed the structural design department in Way Engineering AD -
                                Bulgarian branch of SICS Ingegneria S.r.l. Organized and managed its growth from 2 initial
                                employees to 15 in 3 years. Responsible for team recruitment, manpower management and
                                direction
                                of design works. Project coordination role for three significant infrastructural projects
                                and
                                various tender procedures:
                                DG48 Salerno-Reggio Calabria Highway – 30km, Italy, construction cost € 650 million. Road
                                facilities design for the main contractor SIS Scpa, Italy
                                State road SS640 – 35km, Italy, construction cost € 739 million. Road facilities design for
                                the
                                main contractor Empedocles II Scpa, Italy,
                                way facilities design for the main contractor Astaldi S.p.a, Italy
                            </p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="https://picsum.photos/300/200" alt="Project image">
                            </div>
                            <h3 class="work__position">Personal Assistant Head Of Development Department</h3>
                            <h4 class="work__employer">AKROPOLIS BG LTD – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2007 - 2008</span>
                            <p class="work__description">Coordination role for Akropolis Shopping and Entertainment Center –
                                a
                                524,000 sq.m. multifunctional commercial complex (shopping mall and office towers) in Sofia.
                                Responsible for the official communication and the department documentation (concept and
                                tender
                                design stage). Preparation and execution of contractor appointment procedures.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/NY-Street.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Design Coordinator</h3>
                            <h4 class="work__employer">NU BOYANA FILM STUDIO – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2006 - 2007</span>
                            <p class="work__description">Design coordination role for the large-scale movie set “New York
                                Street”, Sofia, Bulgaria – 8000 sq.m with real size buildings, power and water supplied,
                                construction cost € 3,5 million. Art design and on-site supervision. Responsible for the
                                design
                                localization and the official correspondence.</p>
                        </article>
        
                        <article class="work">
                            <div class="work__media-img">
                                <img src="./assets/images/Sofia-Airport.jpg" alt="Project image">
                            </div>
                            <h3 class="work__position">Student Trainee</h3>
                            <h4 class="work__employer">STRABAG EAD – Sofia, Bulgaria</h4>
                            <span class="work__period h4-like">2005 - 2006</span>
                            <p class="work__description">Trainee civil engineer during the As-built design stage of Sofia
                                Airport – Terminal 2, Bulgaria, construction cost € 120 million. On-site processes
                                assistance
                                and survey data adoption for design purposes.</p>
                        </article>
        
                    </div>
                </section>
        
                <section class="main__projects hidden" id="projects">
                    <div class="content-container">
                        <h2 class="main__title">Personal projects</h2>
        
                        <div class="project">
                            <h3 class="project__title">Performance Management Tool - PerMaTo SPA</h3>
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
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-home.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/register.png" alt="">
                                </div>
                                <div class="project__media-img ">
                                    <img src="./assets/images/MoviesSPA/login.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-cinema.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-my.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movies-search.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movie-details.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movie-create.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MoviesSPA/movie-update.png" alt="">
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
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/home.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/register.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/login.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/songs-all.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/songs-my.png" alt="">
                                </div>
                                <div class="project__media-img">
                                    <img src="./assets/images/MusicSPA/create.png" alt="">
                                </div>
                            </div>
                        </div>
        
                    </div>
                </section>
        
                <!-- auxiliary elements -->
                <div class="preview__backdrop"></div>
                <div class="preview__box">
                    <div class="preview__box-close">X</div>
                    <img class="preview__box-img" src="https://picsum.photos/200/300">
                </div>
            </main>`)
                $('body').empty();
                $('body').append($bodyContentEn);
                this.init();
            }
        })
    }
}

window.HomePageRouter = HomePageRouter;