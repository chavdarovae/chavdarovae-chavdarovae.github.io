const selectors = {
    main: '.main',
    navBtn: '.site-nav__list-link',
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
        const { navBtn, main,curCourseInstance } = selectors;
        $(navBtn).on('click', (e) => {
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
            $(curCourseInstance).removeClass('course--current');
            $(e.target).parents(courseInstance).addClass('course--current');
        })
    }
}

window.HomePageRouter = HomePageRouter;