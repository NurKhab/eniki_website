"use strict"

const select = document.querySelector('select');
const langs = ['ru', 'tat', 'en']

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#'+lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!langs.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['doctitle'][hash];

	for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();

//! scroll-top button
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll-top').show();
		} else {
			$('#scroll-top').hide();
		}
	});
 
	$('#scroll-top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});	