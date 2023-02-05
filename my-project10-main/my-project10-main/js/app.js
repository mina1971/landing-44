/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment(); //new document fragment


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigationbar() {
    // loop over sections
    sections.forEach(section =>{
        // attributes from section id , data-nav
        const sectionId = section.getAttribute("id") //section.id
        const sectionTitle = section.getAttribute("data-nav") //section.dataset.nav

        // create list item and enchor tag
        const listItem = document.createElement("li")
        const listLink = document.createElement("a")
        //add class , href , smooth scrolling ,title
        listLink.classList.add("menu__link");
        listLink.href = `#${sectionId}`
        listLink.textContent = sectionTitle
        listLink.addEventListener("click", evt =>{
            evt.preventDefault()
            section.scrollIntoView({
                behavior: "smooth"
            })
        })
        listItem.appendChild(listLink)
        fragment.appendChild(listItem)
    })
    list.appendChild(fragment);
}
buildNavigationbar()


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener("scroll", addHighlight)
//scroll to section on link click
const links = document.querySelectorAll("a.menu__link")
function addHighlight() {
    //loop over section
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionTitle = section.getAttribute("data-nav");
        if (sectionTop > 0 && sectionTop < 250) {
            //add active class 
            section.classList.add("your-active-class")
            // add active class link 
            //loop over links
            links.forEach(link => {
                if (link.textContent === sectionTitle) {
                    link.classList.add("active-link")

                } else {
                    link.classList.remove("active-link")
                }
            })
        }

    })

}

// Scroll to section on link click

// Set sections as active


