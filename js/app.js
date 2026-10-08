
//Storing the hair services for booking website in an array
const services [
  {
    id: 1,
    name: "Silk Press",
    category: "natural",
    price: 80,
    description: "Includes shampoo, blow dry and silk press."
  },
    {
    id: 2,
    name: "Knotless Braids Long",
    category: "natural",
    price: 350, 
    description: "Medium width, long length knotless braids."
  },
    {
    id: 3,
    name: "Boho Braids Bob",
    category: "natural",
    price: 200,
    description: "Small medium width, short knotless braids styled into a bob."
  },
    {
    id: 4,
    name: "Deep Conditioning Treatment",
    category: "treatment",
    price: 40, 
    description: "An intensive moisturizing treatment for dry or damaged hair."
  },
    {
    id: 5,
    name: "Sew - In",
    category: "extensions",
    price: 300,
    description: "Sew in installation with basic styling included."
  },
    {
    id: 6,
    name: "Quick Weave",
    category: "extensions",
    price: 150,
    description: "Quick weave installation with basic styling included."
  }
  ];

//Finds the HTML element with the id "service-list." This is where the service card will be displayed
const serviceList = document.querySelector("#service-list");
//function that displays the hair services on the webpage
const displayServices = () => {

  // map() goes through each service in the array and creates html for each service
    serviceList.innerHTML = services
        .map(service => {
            return `
                <article class="service-card">
                    <h3>${service.name}</h3>
                    <p>${service.category}</p>
                    <p>${service.description}</p>
                    <p>Price: $${service.price}</p>
                    <button type="button">Select Service</button>
                </article>
            `;
        })
        .join("");
};
//calling the funtion to display the services when the page loads
displayServices();
