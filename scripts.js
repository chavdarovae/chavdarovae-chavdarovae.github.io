const selectors = {
    main: '.main',
    navBtn: '.site-nav__list-link',
}

class HomePageRouter {
    init() {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.handleNavBtnClick();
    }

    handleNavBtnClick() {
        const { navBtn, main } = selectors;
        $(navBtn).on('click', (e) => {
            const mainComponentId = '#' + e.target.text.split(' ')[0].toLowerCase();
            $(main).children().filter(':visible').addClass('hidden');
            $(mainComponentId).removeClass('hidden');
        })
    }
}

window.HomePageRouter = HomePageRouter;