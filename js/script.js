/* =========================== typing animation =========================== */

var typed = new Typed(".typing", {
    strings:["", "Cyber Security", "Machine Learning", "Data Engineering", "Cloud Engineering", "DevOps Engineering"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

});

/* =========================== Aside Setting Buttons Active depending on if clicked =========================== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++){
        const a  = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    
                }
                navList[j].querySelector("a").classList.remove("active");

            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }

        })

    }

function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");

        }
}

function addBackSection(num)
{
    allSection[num].classList.add("back-section");


}

function showSection(element)
{
    for(let i=0; i<totalSection; i++ )
    {
       allSection[i].classList.remove("active");
    }
    const target  = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target  = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }

    }

}

/*document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);

}) */


/* Trial Hire me  */

const hireMe = document.querySelectorAll(".hire-me");
hireMe.forEach(hireMe => {
    hireMe.addEventListener('click', function() {

        
        const sectionIndex = this.getAttribute("data-section-index");                   /*Tomorrow*/
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);



    });
});


/*nTrial Hire me*/



const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => 
    {
        asideSectionTogglerBtn();

    });

    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");

        }
    }
 

/* Dropdown Button */
/* function to toggle the dropdown menu*/


const button = document.querySelectorAll('.dropdown-button');
button.forEach(button => {
    button.addEventListener('click', () => {
        

        const buttonId = button.id;
        dropdownMenuId = `dropdownMenu${buttonId}`;
        const selectedDropDownMenu = document.getElementById(dropdownMenuId);
        const isVisible = selectedDropDownMenu.style.display === 'block';
        selectedDropDownMenu.style.display = isVisible ? 'none' : 'block';

        // Toggling ratation of arrow depending on Id of clicked button
        const selectedButton = document.getElementById(buttonId),
              selectedButtonIconClass = selectedButton.querySelector(".icon");
              selectedButtonIconClass.classList.toggle('rotated');



    });
});



