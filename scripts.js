const selectors = {
    main: '.main',
    navBtn: '.nav__list-link',
    curNavBtn: '.nav__list-link--current',
    courseInstance: '.course',
    curCourseInstance: '.course--current',
    img: 'div[class*="__media-img"] img',
    contentContainer: '.content-container',
    previewSet: '.preview__backdrop, .preview',
    preview: '.preview',
    previewBackdrop: '.preview__backdrop',
    previewBox: '.preview__box',
    previewImg: '.preview__box-img',
    previewDescription: '.preview__box-description',
    previewControl: '.preview__control',
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
        this.handlePreviewImgSipeleft();
        this.handlePreviewImgSiperight();

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
        const { img, previewSet, preview } = selectors;

        $(img).on('click', (e) => {
            this.displayPreviewImg($(e.target));

            $(previewSet).animate({ 'opacity': '.50' }, 300, 'linear');
            $(preview).animate({ 'opacity': '1' }, 300, 'linear');
            $(previewSet).css('display', 'grid');
        })
    }

    displayPreviewImg($img) {
        const { previewImg, previewDescription, previewControl } = selectors;

        const $imgDiv = $img.parent();
        const imgWidth = $imgDiv.width();
        const imgHeight = $imgDiv.height();
        const imgSrc = $img.attr('src');
        const imgDescription = $img.attr('alt');

        $(previewImg).attr('src', imgSrc);
        $(previewDescription).text(imgDescription);
        $(previewControl).css('opacity', 1);

        if ($(window).width() < 900) {
            $(previewImg).width(0.85 * $(window).width() - 10);
        } else {
            const maxWidth = 0.85 * $(window).width() - 10;
            const maxHeight = 0.85 * $(window).height() - 30;

            if (imgWidth > imgHeight) {
                $(previewImg).height('auto');
                const previewRatio = maxHeight / imgHeight;
                $(previewImg).width(previewRatio * imgWidth);
            } else {
                $(previewImg).width('auto');
                $(previewImg).height(maxHeight);
            }
        }
    }

    handlePreviewCloseClick() {
        const { previewClose, previewSet } = selectors;
        $(previewClose).on('click', () => {
            $(previewSet).animate({ 'opacity': '0' }, 300, 'linear', () => {
                $(previewSet).css('display', 'none');
            });
        })
    }

    handlePreviewControlClick() {
        const { previewControl } = selectors;

        $(previewControl).on('click', (e) => {
            const previewControlClass = $(e.target).parent().attr('class');

            if (previewControlClass.includes('forwards')) {
                this.changePreviewImage('next', $(e.target).parent())
            } else if (previewControlClass.includes('backwards')) {
                this.changePreviewImage('previous', $(e.target).parent())
            }
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
                // $('body').empty();
                // $('body').append($bodyContentDe);
                // this.init();

            } else if ($languageBar.text() === 'DE') {
                $languageBar.text('EN');
                // $('body').empty();
                // $('body').append($bodyContentEn);
                // this.init();
            }
        })
    }

    handlePreviewImgSipeleft() {
        const { previewImg } = selectors;

        $(previewImg).on('swipeleft', (e) => {
            this.changePreviewImage('next');
        })
    }

    handlePreviewImgSiperight() {
        const { previewImg } = selectors;

        $(previewImg).on('swiperight', (e) => {
            this.changePreviewImage('previous');
        })
    }

    changePreviewImage(position, $control) {
        const { previewImg } = selectors;
        const relPath = $(previewImg).attr('src');
        const $thumbnailImg = $('div[class$="-img"]').find(`img[src="${relPath}"]`).not('.preview__box-img');

        let $newPrevImage = '';
        if (position === 'next') {
            $newPrevImage = $thumbnailImg.parents('div[class$="-img"]').next('div[class$="-img"]').find('img');
        } else if (position === 'previous') {
            $newPrevImage = $thumbnailImg.parents('div[class$="-img"]').prev('div[class$="-img"]').find('img');
        }

        if($newPrevImage.length === 0 && $control.length !== 0){
            $control.css('opacity', '0');  
            return;  
        }
        $(previewImg).css('opacity', '0');
        this.displayPreviewImg($newPrevImage);
        $(previewImg).animate({ opacity: '1' }, 600, 'linear');
    }
}

window.HomePageRouter = HomePageRouter;