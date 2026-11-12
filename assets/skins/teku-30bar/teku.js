var PAGE_COCKPIT = 0, PAGE_LYRICS = 1, PAGE_EQ = 2;
var currentPage = PAGE_COCKPIT;

function boot() {
    showPage(PAGE_COCKPIT);
    followPlayer();
}

function followPlayer() {
    var playing = (player.playState == 3);
    play.visible = !playing;
    pause.visible = playing;
}

function showPage(index) {
    currentPage = index;
    cockpitPage.visible = (currentPage == PAGE_COCKPIT);
    lyricsPage.visible = (currentPage == PAGE_LYRICS);
    eqPage.visible = (currentPage == PAGE_EQ);
}
