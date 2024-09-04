let home = document.getElementById("homeBtn");
let projects = document.getElementById("projectsBtn");
let about = document.getElementById("aboutBtn");
let contact = document.getElementById("contactBtn");

let homeElement = document.getElementsByTagName("header")[0];
let projectsElement = document.getElementById("projectPage");
let aboutElement = document.getElementById("aboutMe");
let contactElement = document.getElementById("contact");

home.addEventListener("click", scroll);
projects.addEventListener("click", scroll);
about.addEventListener("click", scroll);
contact.addEventListener("click", scroll);
window.addEventListener("scroll", handleScroll);

function scroll(event){
	const btnId = event.target.id;
	let element = homeElement;
	let offsetPosition = window.pageYOffset;

	if(btnId === "homeBtn") {
		element = homeElement;
	}
	else if(btnId === "projectsBtn") {
		element = projectsElement;
		offsetPosition -= 50;
	}
	else if(btnId === "aboutBtn") {
		element = aboutElement;
		offsetPosition -= 100;
	}
	else if(btnId === "contactBtn") {
		element = contactElement;
	}

	const elementPosition = element.getBoundingClientRect().top;
	offsetPosition += elementPosition;

	//prevents button-triggered scroll from also triggering manual scroll handling function
	window.removeEventListener("scroll", handleScroll);
	setTimeout(() => { window.addEventListener("scroll", handleScroll); }, 500); 

	window.scrollTo({top: offsetPosition});
	highlightPageBtn(event.target);
}


function handleScroll(){
	if(window.scrollY <= homeElement.getBoundingClientRect().top){
		highlightPageBtn(home);
	}
	else if(window.scrollY > projectsElement.getBoundingClientRect().top && window.scrollY < projectsElement.getBoundingClientRect().bottom){
		highlightPageBtn(projects);
	}
	else if(window.scrollY > aboutElement.getBoundingClientRect().top && window.scrollY < aboutElement.getBoundingClientRect().bottom){
		highlightPageBtn(about);
	}
	else if(window.scrollY > contactElement.getBoundingClientRect().top){
	 	highlightPageBtn(contact);
	}
}

function highlightPageBtn(page){
	let previousActive = document.querySelector(".active");
	previousActive.classList.remove("active");
	page.classList.add("active");
}