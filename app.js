//The following is fake hairstylist data to test the search section for Milestone 1

/*const stylist creates the new variable stylists that stores an array of each individual stylist.
Const is used to declare a permanent variable to prevent reassignment.
 Each object in the array represents a stylist that is able to be searchable. Within the array there is a specialties array that stores a list of
 the hair stylist's specialties*/
const stylists = [
    {
        id: 1,
        name: "Berry Hands",
        location: "Sharon, MA",
        specialties: ["Braids"],
        profilePage: "profiles/berryhands.html"
    },
    {
        id: 2,
        name: "Miss Laverne's",
        location: "Boston, MA",
        specialties: ["Natural Hair", "Locks", "Braids"],
        profilePage:"profiles/misslavernes.html"
    },
    {
        id: 3,
        name: "Dane's Unisex Salon",
        location: "Cambridge, MA",
        specialties: ["Barber", "Braids", "Natural Hair", "Extensions", "Haircuts"],
        profilePage: "profiles/danesunisex.html"
    },

    {
        id: 4,
        name: "Professional Image Salon and Suites",
        location: "Worcester, MA",
        specialties: ["Bridal", "Color", "Natural Hair", "Extensions", "Haircuts"],
        profilePage: "profiles/professionalimage.html"
    },
    {
        id: 3,
        name: "Dream Cuts",
        location: "Cambridge, MA",
        specialties: ["Barber", "Haircuts"],
        profilePage: "profiles/dreamcuts.html"
    },

]



// Searching the html document for the tag 'stylist-search' and saving the search box to the variable stylistSearch
const stylistSearch =
    document.querySelector("#stylist-search");


// Searching and creating a dropdown area for the search results
const searchResults =
    document.querySelector("#search-results");


// Runs whenever the user types in the search box
stylistSearch.addEventListener("input", () => {

    // Gets what the user typed
    // Makes it lowercase and removes extra spaces
    const searchText =
        stylistSearch.value.toLowerCase().trim();


    // If the search box is empty,
    // clear and hide the dropdown
    if (searchText === "") {

        searchResults.innerHTML = "";

        searchResults.hidden = true;

        return;
    }


    // Searches the stylist array
    const filteredStylists =
        stylists.filter(stylist =>

            // Search by stylist name
            stylist.name
                .toLowerCase()
                .includes(searchText)

            ||

            // Search by location
            stylist.location
                .toLowerCase()
                .includes(searchText)

            ||

            // Search through all specialties
            stylist.specialties
                .join(" ")
                .toLowerCase()
                .includes(searchText)
        );


    // If no stylist matches the search
    if (filteredStylists.length === 0) {

        searchResults.innerHTML = `
            <li>No stylists found</li>
        `;

        searchResults.hidden = false;

        return;
    }


    // Creates the dropdown results
    searchResults.innerHTML =
        filteredStylists
            .map(stylist => {

                return `
                    <li>

                        <a href="${stylist.profilePage}">

                            <strong>
                                ${stylist.name}
                            </strong>

                            <span>
                                ${stylist.location}
                                -
                                ${stylist.specialties.join(", ")}
                            </span>

                        </a>

                    </li>
                `;
            })
            .join("");


    // Shows the dropdown by making searchResults hidden to be false
    searchResults.hidden = false;

});

// Finds the Login button
const loginButton =
    document.querySelector("#login-button");


// Finds the Login dialog
const loginDialog =
    document.querySelector("#login-dialog");


// Finds the Cancel button inside Login
const closeLogin =
    document.querySelector("#close-login");

// Opens the Login dialog
loginButton.addEventListener("click", () => {

    loginDialog.showModal();

});

// Closes the Login dialog
closeLogin.addEventListener("click", () => {

    loginDialog.close();

});

// Finds the Register button
const registerButton =
    document.querySelector("#register-button");


// Finds the Register dialog
const registerDialog =
    document.querySelector("#register-dialog");


// Finds the Cancel button inside Register
const closeRegister =
    document.querySelector("#close-register");


// Opens the Register dialog
registerButton.addEventListener("click", () => {

    registerDialog.showModal();

});


// Closes the Register dialog
closeRegister.addEventListener("click", () => {

    registerDialog.close();

});

