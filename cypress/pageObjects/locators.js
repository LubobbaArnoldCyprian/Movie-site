
// search Movie .
const btnNotification= '#onesignal-slidedown-cancel-button'
const txtSearch= '#search > .search-content > form > .form-control'
const dropDown= '#search > .search-content > .nav >'
const verifySearchResult = '.heading-name > a'

//Player.

const watchNow = '.dp-i-c-stick > .btn-focus'
const sharingBanner = '.modal-content > .modal-header > .close >'
const changeServer = '#watch-9080962'
const playerInView = '.watching > .container'

// Genres
    //action
const genreNavigation = '#mobile_menu > .fa'
const genreMenuClick = ':nth-child(2) > .toggle-submenu > .more-less'
const genreVerify = '.cat-heading'

const genreAction = '#sidebar_subs_genre > .nav > :nth-child(1) > .nav-link'
const filmposter = ':nth-child(1) > .film-poster'
const genreActionFilmVerify = ':nth-child(2) > [href="/genre/action"]'
const actionScroll = '.col-xl-5 > :nth-child(2) > .type > strong'




export default {
    btnNotification,
    txtSearch,
    dropDown,
    verifySearchResult,

    // Player

    watchNow,
    sharingBanner,
    changeServer,
    playerInView,

    // Action genre

    genreNavigation,
    genreMenuClick,
    genreAction,
    genreVerify,
    filmposter,
    genreActionFilmVerify,
    actionScroll


}