const selectors = {
    main: '.main',
    navBtn: '.site-nav__list-link',
    curNavBtn: '.site-nav__list-link--current',
    courseInstance: '.course',
    curCourseInstance: '.course--current',
}

class HomePageRouter {
    init() {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.handleNavBtnClick();
        this.handleCourseInstanceClick();
    }

    handleNavBtnClick() {
        const { navBtn, main, curCourseInstance, curNavBtn } = selectors;
        $(navBtn).on('click', (e) => {
            $(curNavBtn).removeClass('site-nav__list-link--current');
            $(e.target).addClass('site-nav__list-link--current');
            const mainComponentId = '#' + e.target.text.toLowerCase();
            if(mainComponentId==='#courses') {
                $(curCourseInstance).removeClass('course--current');
            }
            $(main).children().filter(':visible').addClass('hidden');
            $(mainComponentId).removeClass('hidden');
        })
    }

    handleCourseInstanceClick() {
        const { courseInstance, curCourseInstance } = selectors;
        $(courseInstance).on('click', (e) => {
            if($(e.target).parents(courseInstance).hasClass('course--current')){
                $(e.target).parents(courseInstance).removeClass('course--current');
            }else{
                $(curCourseInstance).removeClass('course--current');
                $(e.target).parents(courseInstance).addClass('course--current');
            }
        })
    }
}

window.HomePageRouter = HomePageRouter;