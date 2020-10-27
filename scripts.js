const selectors = {
    main: '.main',
    navBtn: '.site-nav__list-link',
    curNavBtn: '.site-nav__list-link--current',
    courseInstance: '.course',
    curCourseInstance: '.course--current',
    img: 'div[class*="__media-img"] img',
    contentContainer: '.content-container',
}

class HomePageRouter {
    init() {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.handleNavBtnClick();
        this.handleCourseInstanceClick();
        this.handleImgClick();
    }

    handleNavBtnClick() {
        const { navBtn, main, curCourseInstance, curNavBtn } = selectors;
        $(navBtn).on('click', (e) => {
            $(curNavBtn).removeClass('site-nav__list-link--current');
            $(e.target).addClass('site-nav__list-link--current');
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
        const { img, contentContainer } = selectors;
        let initialWidth = 300;

        $(img).on('click', (e) => {
            const $imgDiv = $(e.target).parent();
            const $imgHolder = $(e.target).parent().parent();
            const imgWidth = $imgDiv.width();
            let windowWidth = $(contentContainer).width();
            $imgHolder.children().not($imgDiv).css('width', initialWidth);

            // $.keyframe.define([{
            //     name: 'view',
            //     '0%': { width: 300 },
            //     '100%': { width: 600 }
            // }]);

            // imgDiv.playKeyframe({
            //     name: 'view', 
            //     duration: 600, 
            //     timingFunction: 'ease-out', // [optional, default: ease] specifies the speed curve of the animation
            //     fillMode: 'forwards',
            //     });

            if (windowWidth < 900) {
                windowWidth -= 40;
            } else {
                $imgHolder.children().not($imgDiv).hide();
                $imgHolder.css('display', 'block');
                $imgDiv.css('position', 'relative');
            }

            if (imgWidth < windowWidth) {
                initialWidth = imgWidth;
                $imgDiv.animate({
                    width: windowWidth
                }, 300);
            } else {
                $imgDiv.animate({
                    width: initialWidth
                }, 300);

                if (windowWidth > 900) {
                    $imgHolder.children().show();
                    $imgDiv.css('position', 'static');
                    $imgHolder.css('display', 'grid');
                }
            }

        })
    }
}

window.HomePageRouter = HomePageRouter;