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

function handleScroll() {
    let scrollPosition = window.scrollY;
    const homeTop = homeElement.offsetTop;
    const projectsTop = projectsElement.offsetTop;
    const aboutTop = aboutElement.offsetTop;
    const contactTop = contactElement.offsetTop;

    if (scrollPosition >= homeTop && scrollPosition < projectsTop - 200) {
        highlightPageBtn(home);
    } 
    else if (scrollPosition >= projectsTop - 200 && scrollPosition < aboutTop - 400) {
        highlightPageBtn(projects);
    } 
    else if (scrollPosition >= aboutTop - 400 && scrollPosition < contactTop - 100) {
        highlightPageBtn(about);
    } 
    else if (scrollPosition >= contactTop - 100) {
        highlightPageBtn(contact);
    }
}

function highlightPageBtn(page){
	let previousActive = document.querySelector(".active");
	previousActive.classList.remove("active");
	page.classList.add("active");
}