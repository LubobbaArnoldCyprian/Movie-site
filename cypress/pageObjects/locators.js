
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
    // action
const genreNavigation = '#mobile_menu > .fa'
const genreMenuClick = ':nth-child(2) > .toggle-submenu > .more-less'
const genreVerify = '.cat-heading'

const genreAction = '#sidebar_subs_genre > .nav > :nth-child(1) > .nav-link'
const filmposter = ':nth-child(1) > .film-poster'
const genreActionFilmVerify = ':nth-child(2) > [href="/genre/action"]'
const actionScroll = '.col-xl-5 > :nth-child(2) > .type > strong'


// adventure

const genreAdventure = '#sidebar_subs_genre > .nav > :nth-child(3) > .nav-link'
const genreAdventureFilmVerify = ':nth-child(2) > [href="/genre/adventure"]'

// Animation

const genreAnimation = '#sidebar_subs_genre > .nav > :nth-child(4) > .nav-link'
const genreAnimationFilmVerify = ':nth-child(2) > [href="/genre/animation"]'

// romance

const genreRomance = '#sidebar_subs_genre > .nav > :nth-child(19) > .nav-link'
const genreRomanceFilmVerify = ':nth-child(2) > [href="/genre/romance"]'

// biography
const genreBiography = '#sidebar_subs_genre > .nav > :nth-child(5) > .nav-link'
const genreBiographyFilmVerify = ':nth-child(2) > [href="/genre/biography"]'


// comedy

const genreComedy = '#sidebar_subs_genre > .nav > :nth-child(6) > .nav-link'
const genreComedyFilmVerify = ':nth-child(2) > [href="/genre/comedy"]'

// crime

const genreCrime = '#sidebar_subs_genre > .nav > :nth-child(7) > .nav-link'
const genreCrimeFilmVerify = ':nth-child(2) > [href="/genre/crime"]'

// Documentary
const genreDocumentary = '#sidebar_subs_genre > .nav > :nth-child(8) > .nav-link'
const genreDocumentaryFilmVerify = ':nth-child(2) > [href="/genre/documentary"]'

// Drama

const genreDrama = '#sidebar_subs_genre > .nav > :nth-child(9) > .nav-link'
const genreDramaFilmVerify = ':nth-child(2) > [href="/genre/drama"]'

// Family

const genreFamily = '#sidebar_subs_genre > .nav > :nth-child(10) > .nav-link'
const genreFamilyFilmVerify = ':nth-child(2) > [href="/genre/family"]'

// fantasy

const genreFantasy = '#sidebar_subs_genre > .nav > :nth-child(11) > .nav-link'
const genreFantasyFilmVerify = ':nth-child(2) > [href="/genre/fantasy"]'

// History

const genreHistory = '#sidebar_subs_genre > .nav > :nth-child(12) > .nav-link'
const genreHistoryFilmVerify = ':nth-child(2) > [href="/genre/history"]'





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
    actionScroll,


    // Adventure

    genreAdventure,
    genreAdventureFilmVerify,

    // Animation
    genreAnimation,
    genreAnimationFilmVerify,

    // Romance

    genreRomance,
    genreRomanceFilmVerify,

    // Biography
    genreBiography,
    genreBiographyFilmVerify,

    // Comedy
    genreComedy,
    genreComedyFilmVerify,

    // Crime

    genreCrime,
    genreCrimeFilmVerify,

    // Documentary

    genreDocumentary,
    genreDocumentaryFilmVerify,

    // Drama

    genreDrama,
    genreDramaFilmVerify,

    // Family

    genreFamily,
    genreFamilyFilmVerify,

    // Fantasy

    genreFantasy,
    genreFantasyFilmVerify,

    // History

    genreHistory,
    genreHistoryFilmVerify


}