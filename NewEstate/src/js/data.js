
let places = [
  {
    image: "https://capeholidays.info/files/Large-Apartment-To-Rent-In-Cape-Town-City-Bowl14.jpg",
    type: "Apartment",
    location: "Paarl",
    price: 1000,
    bedrooms: "1",
    status: "For rent",
  },
  {
    image: "https://cdn.remax.co.za/listings/2747199/original/pic_34823019.jpg",
    type: "Estate House",
    location: "Constantia",
    price: 2500,
    bedrooms: "1",
    status: "For sale",
  },
  {
    image: "https://www.rentcafe.com/blog/wp-content/uploads/sites/5/2018/07/residential-building_890x400.png",
    type: "Condo",
    location: "Rondebosch",
    price: 1500,
    bedrooms: "1",
    status: "For rent",
  },
  {
    image: "http://www.villavdl.co.uk/user/cimage/Villa.png",
    type: "Villa",
    location: "Camps Bay",
    price: 5000,
    bedrooms: "1",
    status: "For sale",
  },
  {
    image: "https://www.cometocapetown.com/wp-content/uploads/2018/04/Top-10-Luxury-Apartments-in-Cape-Town-for-the-Perfect-Staycation-Artea.jpg",
    type: "Apartment",
    location: "Paarl",
    price: 3500,
    bedrooms: "1",
    status: "For sale",
  },
  {
    image: "https://www.edenrockestate.co.za/wp-content/uploads/2016/02/Eden-Rock-1480-View-1-Final-High-Resolution.jpg",
    type: "Estate House",
    location: "Constantia",
    price: 4000,
    bedrooms: "1",
    status: "For rent",
  },
  {
    image: "https://images.adsttc.com/media/images/51d6/fde6/e8e4/4ebb/5000/001b/large_jpg/VIEW_08_-_PENTHOUSE_TERRACE_VIEW_LOOKING_NORTH.jpg?1373044156",
    type: "Condo",
    location: "Rondebosch",
    price: 1000,
    bedrooms: "1",
    status: "For sale",
  },
  {
    image: "https://southafricatoday.net/wp-content/uploads/2019/06/growth-of-real-estate.jpg",
    type: "Villa",
    location: "Camps Bay",
    price: 4500,
    bedrooms: "1",
    status: "For rent",
  },
  {
    image: "https://southafricatoday.net/wp-content/uploads/2019/06/growth-of-real-estate.jpg",
    type: "Villa",
    location: "Camps Bay",
    price: 4500,
    bedrooms: "1",
    status: "For rent",
  },
];

function search() {

  // get input from dropdown
  let searchType = document.getElementById("type").value;
  let searchLocation = document.getElementById("location").value;
  let searchBed = document.getElementById("bedrooms").value;
  let searchStatus = document.getElementById("status").value;

  console.log(searchType)
  console.log(searchLocation)
  console.log(searchBed)
  console.log(searchStatus)

  // filter
  var myPlaces = places.filter((e) => {
   /* if (
      e.type == searchType &&
      e.location == searchLocation &&
      e.status == searchStatus &&
      e.bedrooms == searchBed
    ) {
      return e;
    }*/
    return e;
  });

  console.log(myPlaces);
  // the card
  let card = "";
  for (let i = 0; i < myPlaces.length; i++) {
    card += `
    <div class="card">
        <div class="card-header">
        <img class="card-img" src=${myPlaces[i].image}>
        </div>
        <div class="card-content">
            <h3>${myPlaces[i].type}</h3>
            <p>
            <i class="fa fa-map-marker "></i>
            ${myPlaces[i].location}</p>
            <p>Price : R${myPlaces[i].price}
            <p>Status : ${myPlaces[i].status}
        </div>
        <hr>
        <div class="card-footer">
            <ul>
                <li>
                
                    ${myPlaces[i].bedrooms} Bedrooms
                </li>
                
            </ul>
            <hr/>
            <button>View Details</button>
        </div>
    </div>`;
  }
  document.getElementById("properties-slider").innerHTML = card;
};
