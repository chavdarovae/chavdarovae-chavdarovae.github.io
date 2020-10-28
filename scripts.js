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
    previewClose: '.preview__box-close, .preview__backdrop',
    certificateTrigger: '#certificateTrigger',
    certificateList: '#certificateList',
    languageToggle: '.header__logo-lang-bar',
    englishVersion: '#englishVersion',
    germanVersion: '#germanVersion',

}

class HomePageRouter {
    init() {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.handleNavBtnClick();
        this.handleCourseInstanceClick();
        this.handleImgClick();
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
        const { img, preview, previewBox, previewImg } = selectors;

        $(img).on('click', (e) => {
            const $imgDiv = $(e.target).parent();
            const imgWidth = $imgDiv.width();
            const imgHeight = $imgDiv.height();
            const imgSrc = $(e.target).attr('src');
            $(previewImg).attr('src', imgSrc);

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
        const { languageToggle, englishVersion, germanVersion } = selectors;
        $(languageToggle).on('click', (e) => {
            if($(e.target).text()==='EN'){
                $(e.target).text('DE');
                $(englishVersion).hide();
                $(germanVersion).show();
            }else if($(e.target).text()==='DE'){
                $(e.target).text('EN');
                $(germanVersion).hide();
                $(englishVersion).show();
            }
        })
    }
}

window.HomePageRouter = HomePageRouter;