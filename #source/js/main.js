let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");
let mobile = document.querySelector(".mobile");
let btn = document.querySelector(".btn-burger");
let span = btn.querySelectorAll("span");
let header = document.querySelector(".header");
let rusbase = document.querySelector("img[alt='rusbase']");
let flug = true;
btn.onclick = () => {
	for(s of span) {
		flug ? s.classList.add('active') : 
		s.classList.remove('active');
	}
	flug ? mobile.style.display = 'block' :
	mobile.style.display = 'none';
	flug ? rusbase.classList.add('invert') : 
		rusbase.classList.remove('invert');
	flug ? header.style.background = '#FBFBFD' :
	header.style.background = '#000';
	flug = !flug;
}
let f = true;
function person(e) {
	f ? e.classList.add('aPerson') : 
	e.classList.remove('aPerson');
	f = !f;
}