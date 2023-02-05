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

//scroll to section on link click
window.addEventListener("scroll", navLight);
//scroll to section on link click
const links = document.querySelectorAll("a.menu__link");
function navLight() {
  //loop over section
  sections.forEach(section => {
    //using getBoundingClientRect Return the size of an element and its position relative to the viewport
    const sectionTop = section.getBoundingClientRect().top;
    //Selection of items by dataset
    const sectionTitle = section.getAttribute("data-nav");
    // if begin
    if (sectionTop > 0 && sectionTop < 250) {
      // add active class link
      section.classList.add("your-active-class");
      //loop over links
      links.forEach(link => {
        if (link.textContent === sectionTitle) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      })
    }else{
      section.classList.remove("your-active-class");
    }
  })
}
    
// Scroll to section on link click

// Build  mini menu using  small list icon
function miniNavBar() {
    const nav = document.getElementById("navbar__list");
    if (nav.className === "nav-top") {
      nav.className += " show_list";
    } else {
      nav.className = "nav-top";
    }
  }
// Set sections as active


