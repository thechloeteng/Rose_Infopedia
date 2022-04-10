var containerWidth = 400, randompromptAppear;

$sceneMgr.setStage('#all');

/* START MENU PAGE 1 SCENE */
$sceneMgr.addScene('#menu-wrapper', 1, 'menu', {
    startScene: startMenu,
    endScene: endMenu,
});

/* Falling leaves animation START */
function fallingLeaves (){
    for(let i=0; i<10; i++){
        // set is to initialize the falling animation, just a base, below is for x axis moving*/
        gsap.set(`.menu-leaf-${i+1}`, {y: 0, x: Math.max(0, Math.random()*containerWidth-35)}); /* Math.max chooses the 
        bigger number between -35 to the width of 400 || 0 is basically the default value of the set parameter */
        /* below is for y axis */
        gsap.to(`.menu-leaf-${i+1}`, {duration: 3+Math.random()*10, y: 500, repeat: -1}) /* 5+Math.random means 5 to 10 seconds */
        .progress(Math.random()); /* .progress means a fast forward and back forward button, from the value of 0 to 1, 
        0 is the start and 1 is the end and will start at different points (y) from 0 to 500 */
    }
}

/* When clicked, flowers animation + ripple appears from left to right START */
function appearFlowers(){
    for(let flower=0; flower<5; flower++){
        gsap.set(`.flowers${flower+1}`, {opacity: 0});
        gsap.to(`.flowers${flower+1}`, {duration: 1.4, opacity: 1, rotation: Math.random()*10});
        gsap.to('.ripple', {duration: 1.6, opacity: 0.5});
    }
}

function startMenu(){
    fallingLeaves(); /* playing in background */
    gsap.set('.flowers1, .flowers2, .flowers3, .flowers4, .flowers5, .ripple', {clearProps: 'all'});
    $('#menu-leaf-falling').on('click', appearFlowers);
    $('.menu-button').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
}

/* END MENU PAGE 1 SCENE */
function endMenu(){
    $('.menu-button').off('click');
    gsap.killTweensOf(fallingLeaves); /* kills the animation */
    gsap.killTweensOf(appearFlowers);
}

/* START INSIDE MENU PAGE 2 SCENE */
$sceneMgr.addScene('#inside-menu-wrapper', 2, 'inside-menu', {
    startScene: startInsideMenu,
    endScene: endInsideMenu,
});

function startInsideMenu(){
    $('.button-1').on('click', () => {$sceneMgr.gotoScene('history')});
    $('.button-2').on('click', () => {$sceneMgr.gotoScene('symbolism')});
    $('.button-3').on('click', () => {$sceneMgr.gotoScene('amazing')});
    $('.inside-menu-close-button').on('click', () => {$sceneMgr.gotoScene('menu')});
}

/* END INSIDE MENU PAGE 2 SCENE */
function endInsideMenu() {
    $('.menu-button').off('click');
    $('.button-1').off('click');
    $('.button-2').off('click');
    $('.button-3').off('click');
    $('.inside-menu-close-button').off('click');
}

/* START HISTORY PAGE 3 SCENE */
$sceneMgr.addScene('#history-of-roses-wrapper', 3, 'history', {
    startScene: startHistory, 
    endScene: endHistory,
});

function historybookAppear(){
    let historybookRotates = {
        duration: 0.85,
        x: 0,
        rotation: 360,
        opacity: 1
    };
    let historybookRight1 = {
        duration: 0.75,
        x: 50
    };
    let historybookDisappear = {
        duration: 0.6,
        opacity: 0
    };
    let historybookOpen = {
        duration: 0.8,
        opacity: 1
    };
    let historybookRight2 = {
        duration: 0.9,
        x: -72
    };
    let historytextAppear = {
        duration: 0.2, 
        opacity: 1
    };
    let tl1 = gsap.timeline({});
    gsap.set('.history-book-cover', {clearProps: 'all'});
    tl1.to('.history-book-cover', historybookRotates);
    tl1.to('.history-book-cover', historybookRight1);
    tl1.to('.history-book-cover', historybookDisappear);
    tl1.to('.history-book-open', historybookOpen);
    tl1.to('.history-book-open', historybookRight2);
    tl1.to('#history-of-roses-info-wrapper', historytextAppear);
}

function startHistory(){
    historybookAppear();
    gsap.set('.history-book-cover, .history-book-open, #history-of-roses-info-wrapper', {clearProps: 'all'});
    $('.history-menu-button').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
    $('.back-button').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
}

/* END HISTORY PAGE 3 SCENE */
function endHistory() {
    $('.history-menu-button').off('click');
    $('.back-button').off('click');
    gsap.killTweensOf(historybookAppear);
}

/* START SYMBOLISM PAGE 4 SCENE */
$sceneMgr.addScene('#symbolism-of-roses-wrapper', 4, 'symbolism', {
    startScene: startSymbolism, 
    endScene: endSymbolism,
});

function speechbubbleAppear(){
    let speechbubble = {
        opacity: 0
    };
    let speechbubbleAppear = {
        duration: 0.75,
        opacity: 1
    };
    let speechbubbleDisappear = {
        duration: 0.55,
        opacity: 0
    };
    let tl2 = gsap.timeline({});
    gsap.set('#symbolism-speech-bubble', {clearProps: 'all'});
    tl2.to('#symbolism-speech-bubble', speechbubble);
    tl2.to('#symbolism-speech-bubble', speechbubbleAppear);
    tl2.to('#symbolism-speech-bubble', speechbubbleDisappear);
}

function roseGrow(){
    let handAppear = {
        duration: 0.5,
        opacity: 1
    };
    let handLeft = {
        duration: 0.6,
        x: -40
    };
    let handDisappear = {
        opacity: 0
    };
    let seedappearLeft = {
        duration: 0.7,
        x: 45,
        opacity: 1
    };
    let seedappearTop = {
        duration: 0.7,
        delay: 0.2,
        y: 47,
        opacity: 1
    };
    let seedappearRight = {
        duration: 0.7,
        x: -45,
        opacity: 1
    };
    let seedleftDisappear = {
        duration: 0.4,
        opacity: 0  
    };
    let seedtopDisappear = {
        duration: 0.4,
        opacity: 0
    };
    let seedrightDisappear = {
        duration: 0.4,
        opacity: 0
    };
    let roseBig = {
        duration: 0.85,
        x: -10,
        y: -45,
        scale: 1.17
    };
    let symbolismtextAppear = {
        duration: 0.2, 
        opacity: 1
    };
    let tl3 = gsap.timeline({});
    gsap.set('#symbolism-hand-wrapper', {clearProps: 'all'});
    tl3.to('#symbolism-hand-wrapper', handAppear);
    tl3.to('#symbolism-hand-wrapper', handLeft);
    tl3.to('#symbolism-hand-wrapper', handDisappear);
    tl3.to('.symbolism-rose-seed-1', seedappearLeft);
    tl3.to('.symbolism-rose-seed-1', seedleftDisappear);
    tl3.to('.symbolism-rose-seed-2', seedappearTop);
    tl3.to('.symbolism-rose-seed-2', seedtopDisappear);
    tl3.to('.symbolism-rose-seed-3', seedappearRight);
    tl3.to('.symbolism-rose-seed-3', seedrightDisappear);
    tl3.to('#symbolism-rose-wrapper', roseBig);
    tl3.to('#symbolism-of-roses-info-wrapper', symbolismtextAppear);
}

function startSymbolism(){
    speechbubbleAppear();
    gsap.set('#symbolism-speech-bubble, #symbolism-hand-wrapper, .symbolism-rose-seed-1, .symbolism-rose-seed-2, .symbolism-rose-seed-3, #symbolism-rose-wrapper, #symbolism-of-roses-info-wrapper', {clearProps: 'all'});
    $('#symbolism-rose-wrapper').on('click', roseGrow);
    $('.symbolism-menu-button').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
    $('.back-button-2').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
}

/* END SYMBOLISM PAGE 4 SCENE */
function endSymbolism() {
    $('.back-button-2').off('click');
    $('.symbolism-menu-button').off('click');
    gsap.killTweensOf(speechbubbleAppear);
    gsap.killTweensOf(roseGrow);
}

/* START AMAZING FACTS PAGE 5 SCENE */
$sceneMgr.addScene('#amazing-facts-of-roses-wrapper', 5, 'amazing', {
    startScene: startAmazing, 
    endScene: endAmazing,
});

function shootingStar(){
    let shootingstarRight = {
        x: 30
    };
    let shootingstarLeft = {
        duration: 0.45,
        x: -40,
        opacity: 0
    };
    let tl4 = gsap.timeline({});
    tl4.to('.amazing-facts-shooting-star-1', shootingstarRight);
    tl4.to('.amazing-facts-shooting-star-1', shootingstarLeft);
}

function randompromptBubble(){
    let randomPrompt = gsap.utils.random(['#amazing-facts-speech-bubble-1', 
    '#amazing-facts-speech-bubble-2', '#amazing-facts-speech-bubble-3']);
    gsap.to(randomPrompt, {duration: 0.75, opacity: 1});
    gsap.to(randomPrompt, {duration: 0.55, delay: 1, opacity: 0});
}

function lightBulbFirst(){
    let lightbulboffDisappear = {
        duration: 0.25,
        opacity: 0
    };
    let lightbulbOn = {
        opacity: 1
    };
    let firsttextAppear = {
        duration: 0.2, 
        opacity: 1
    };
    let tl6 = gsap.timeline({});
    tl6.to('.amazing-facts-off-lightbulb-1', lightbulboffDisappear);
    tl6.to('.amazing-facts-on-lightbulb-1', lightbulbOn);
    tl6.to('#amazing-facts-info-para-block-3', firsttextAppear);
}

function lightBulbSecond(){
    let lightbulboffDisappear = {
        duration: 0.25,
        opacity: 0
    };
    let lightbulbOn = {
        opacity: 1
    };
    let secondtextAppear = {
        duration: 0.2, 
        opacity: 1
    };
    let tl6 = gsap.timeline({});
    tl6.to('.amazing-facts-off-lightbulb-2', lightbulboffDisappear);
    tl6.to('.amazing-facts-on-lightbulb-2', lightbulbOn);
    tl6.to('#amazing-facts-info-para-block-2', secondtextAppear);
}

function lightBulbThird(){
    let lightbulboffDisappear = {
        duration: 0.25,
        opacity: 0
    };
    let lightbulbOn = {
        opacity: 1
    };
    let thirdtextAppear = {
        duration: 0.2, 
        opacity: 1
    };
    let tl6 = gsap.timeline({});
    tl6.to('.amazing-facts-off-lightbulb-3', lightbulboffDisappear);
    tl6.to('.amazing-facts-on-lightbulb-3', lightbulbOn);
    tl6.to('#amazing-facts-info-para-block-1', thirdtextAppear);
}

function startAmazing(){
    randompromptAppear = setInterval(randompromptBubble, 600);
    /* to stop animation, variable is assigned */
    shootingStar();
    $('.amazing-facts-off-lightbulb-1').on('click', lightBulbFirst);
    $('.amazing-facts-off-lightbulb-2').on('click', lightBulbSecond);
    $('.amazing-facts-off-lightbulb-3').on('click', lightBulbThird);
    gsap.set('.amazing-facts-shooting-star-1, #amazing-facts-speech-bubble-1, #amazing-facts-speech-bubble-2, #amazing-facts-speech-bubble-3, .amazing-facts-off-lightbulb-1, .amazing-facts-on-lightbulb-1, #amazing-facts-info-para-block-3, .amazing-facts-off-lightbulb-2, .amazing-facts-on-lightbulb-2, #amazing-facts-info-para-block-2, .amazing-facts-off-lightbulb-3, .amazing-facts-on-lightbulb-3, #amazing-facts-info-para-block-1', {clearProps: 'all'});
    $('.amazing-facts-menu-button').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
    $('.back-button-3').on('click', () => {$sceneMgr.gotoScene('inside-menu')});
}

/* END AMAZING FACTS PAGE 5 SCENE */
function endAmazing(){
    $('.amazing-facts-menu-button').off('click');
    $('.back-button-3').off('click');
    clearInterval(randompromptAppear); /* kills the animation */
    gsap.killTweensOf(shootingStar);
    gsap.killTweensOf(lightBulbFirst);
    gsap.killTweensOf(lightBulbSecond);
    gsap.killTweensOf(lightBulbThird);
}

/* PAGE READY FUNCTION */ // is the same as $(function(){});
$sceneMgr.ready(function(){
    $sceneMgr.start('menu');
});

/* OVERLAY */
// forward buttons
$('.menu-button').on('click', () => {
    $sceneMgr.goNext('inside-menu');
});
$('.history-menu-button').on('click', () => {
    $sceneMgr.goNext('history');
});
$('.symbolism-menu-button').on('click', () => {
    $sceneMgr.goNext('symbolism');
});
$('.amazing-facts-menu-button').on('click', () => {
    $sceneMgr.goNext('amazing');
});
// back buttons
$('.inside-menu-close-button').on('click', () => {
    $sceneMgr.goPrev('menu');
});