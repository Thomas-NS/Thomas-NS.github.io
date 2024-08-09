let home = document.getElementById("homeBtn");
let projects = document.getElementById("projectsBtn");
let about = document.getElementById("aboutBtn");
let contact = document.getElementById("contactBtn");


home.addEventListener("click", scroll);
projects.addEventListener("click", scroll);
about.addEventListener("click", scroll);
contact.addEventListener("click", scroll);
window.addEventListener("scroll", handleScroll);


//*********change to be based off of elements rather than coords*****************


function scroll(event){
	let coord;
	if(event.target.id === "homeBtn") coord = 0;
	else if(event.target.id === "projectsBtn") coord = 1025;
	else if(event.target.id === "aboutBtn") coord = 2250;
	else coord = 3300;

	//prevents button-triggered scroll from also triggering manual scroll handling function
	window.removeEventListener("scroll", handleScroll);
	setTimeout(() => { window.addEventListener("scroll", handleScroll); }, 500); 

	window.scrollTo({top: coord});
	highlightPageBtn(event.target);
}

function handleScroll(){
	if(window.scrollY <= 200){
		highlightPageBtn(home);
	}
	else if(window.scrollY > 400 && window.scrollY < 1500){
		highlightPageBtn(projects);
	}
	else if(window.scrollY > 1500 && window.scrollY < 2500){
		highlightPageBtn(about);
	}
	else if(window.scrollY > 2500) highlightPageBtn(contact);
}

function highlightPageBtn(page){
	let previousActive = document.querySelector(".active");
	previousActive.classList.remove("active");
	page.classList.add("active");
}