export type TravelScope = "domestic" | "international"
export type TribeId = "solo" | "couple" | "family" | "friends"

export type Place = {
  name: string
  type: string
  hook: string
  priceFrom: string
  image: string
  duration?: string
  inclusions?: string[]
  exclusions?: string[]
  hotelOptions?: string[]
  itinerary?: string[]
  gallery?: string[]
}

export type Region = {
  hook: string
  image: string
  places: Place[]
}

export type DestinationData = {
  domestic: Record<string, Region>
  international: Record<string, Region>
}

const placeholderImage = "/canvas%20images/solo%20tra.png"
const defaultExclusions = ["Flights and visa", "Personal expenses", "Early check-in / late check-out"]
const defaultHotels = ["Option 1", "Option 2", "Option 3"]

function plan(
  duration: string,
  itinerary: string[],
  inclusions: string[] = ["Curated stays", "Airport transfers", "Daily breakfast"],
): Pick<Place, "duration" | "itinerary" | "inclusions" | "exclusions" | "hotelOptions" | "gallery"> {
  return {
    duration,
    itinerary,
    inclusions,
    exclusions: defaultExclusions,
    hotelOptions: defaultHotels,
    gallery: [],
  }
}

export const destinations: DestinationData = {
  domestic: {
    Karnataka: {
      hook: "Coffee estates, waterfalls, and calm mountain air",
      image: "/canvas%20images/karnataka.png",
      places: [
        {
          name: "Coorg",
          type: "Nature",
          hook: "Misty mornings and cozy hill escapes",
          priceFrom: "₹18,999",
          image: "/destinations/coorg.png",
          ...plan("4N/5D", ["Day 1: Bangalore Arrival – Drive to Coorg – Coffee Estate Walk", "Day 2: Abbey Falls – Iruppu Falls – Namdroling Monastery", "Day 3: Raja's Seat – Madikeri Fort – Omkareshwara Temple", "Day 4: Dubare Elephant Camp – River Rafting – Local Cuisine", "Day 5: Departure – Drive back to Bangalore"]),
        },
        { name: "Hampi", type: "Heritage", hook: "Ancient ruins and golden landscapes", priceFrom: "₹15,499", image: "/destinations/hampi.png", ...plan("4N/5D", ["Day 1: Bangalore/Hubli Arrival – Drive to Hampi – Virupaksha Temple", "Day 2: Vittala Temple & Stone Chariot – King's Balance – Stepped Tank", "Day 3: Matanga Hill Sunrise – Hemakuta Hill – Lotus Mahal", "Day 4: Elephant Stables – Zanana Enclosure – Riverside Ruins", "Day 5: Departure – Drive to Hubli / Bangalore"]) },
        { name: "Mysuru", type: "City", hook: "Royal heritage and palace grandeur", priceFrom: "₹18,499", image: "/destinations/mysore.png", ...plan("4N/5D", ["Day 1: Bangalore/Mysuru Arrival – Mysore Palace Illumination", "Day 2: Mysore Palace – Chamundeshwari Temple – Brindavan Gardens", "Day 3: Coorg Day Trip – Dubare – Falls", "Day 4: Srirangapatna – Ranganathittu Bird Sanctuary – Silk Factory", "Day 5: Departure – Drive to Bangalore Airport"]) },
        { name: "Gokarna", type: "Beach", hook: "Laid-back beaches and sunset cliffs", priceFrom: "₹16,999", image: placeholderImage },
      ],
    },
    Kerala: {
      hook: "Backwaters, tea gardens, and soulful slow travel",
      image: "/canvas%20images/kerala.png",
      places: [
        { name: "Alleppey", type: "Backwaters", hook: "Houseboat nights and calm waters", priceFrom: "₹22,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Kochi Arrival – Drive to Alleppey – Houseboat Check-in", "Day 2: Backwater Cruise – Village Walk – Toddy Tasting – Sunset Cruise", "Day 3: Kumarakom Bird Sanctuary – Vembanad Lake – Local Fishing", "Day 4: Marari Beach – Coir Village – Kathakali Show", "Day 5: Departure – Drive to Kochi Airport"], ["Houseboat stay", "Airport transfers", "All meals included"]) },
        { name: "Munnar", type: "Hills", hook: "Tea valleys and romantic weather", priceFrom: "₹19,499", image: placeholderImage, ...plan("4N/5D", ["Day 1: Kochi Arrival – Drive to Munnar – Tea Garden Walk", "Day 2: Eravikulam National Park – Nilgiri Tahr – Top Station", "Day 3: Mattupetty Dam – Echo Point – Tea Museum", "Day 4: Chinnar Wildlife Sanctuary – Trekking – Valara Falls", "Day 5: Departure – Drive to Kochi Airport"]) },
        { name: "Wayanad", type: "Nature", hook: "Green trails and hidden waterfalls", priceFrom: "₹17,999", image: "/destinations/wayanad.png", ...plan("4N/5D", ["Day 1: Calicut Arrival – Drive to Wayanad – Bamboo Cottages", "Day 2: Banasura Sagar Dam – Soochipara Falls – Meenmutty Falls", "Day 3: Edakkal Caves – Pookode Lake – Tribal Village Visit", "Day 4: Wayanad Wildlife Sanctuary Jeep Safari – Tea & Spice Plantation", "Day 5: Departure – Drive to Calicut Airport"]) },
      ],
    },
    Rajasthan: {
      hook: "Royal palaces, desert skies, and timeless culture",
      image: "/canvas%20images/rajasthan.png",
      places: [
        { name: "Jaipur, Jodhpur & Jaisalmer", type: "Heritage", hook: "Royal forts and desert trails", priceFrom: "₹21,999", image: "/destinations/jaipur.png", ...plan("4N/5D", ["Day 1: Jaipur Arrival – Hawa Mahal – Jantar Mantar – City Palace", "Day 2: Amber Fort – Jal Mahal – Pink City Bazaars", "Day 3: Drive to Jodhpur – Mehrangarh Fort – Jaswant Thada", "Day 4: Drive to Jaisalmer – Sonar Fort – Patwon Ki Haveli", "Day 5: Sam Sand Dunes – Camel Safari – Sunset – Desert Camp"]) },
        { name: "Udaipur & Mount Abu", type: "Lakes", hook: "Lake palaces and hill retreats", priceFrom: "₹22,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Udaipur Arrival – City Palace – Pichola Lake Boat Ride", "Day 2: Jagdish Temple – Saheliyon Ki Bari – Fateh Sagar Lake", "Day 3: Chittorgarh Fort Day Trip – Vijay Stambha", "Day 4: Drive to Mount Abu – Dilwara Temples – Nakki Lake", "Day 5: Guru Shikhar Peak – Achalgarh Fort – Departure"]) },
        { name: "Pushkar & Ranthambore", type: "Wildlife", hook: "Tiger safari and spiritual townscapes", priceFrom: "₹23,499", image: placeholderImage, ...plan("4N/5D", ["Day 1: Jaipur Arrival – Drive to Ranthambore – Safari Lodge", "Day 2: Ranthambore Tiger Safari (Morning) – Ranthambore Fort", "Day 3: Evening Safari – Drive to Pushkar", "Day 4: Pushkar Lake – Brahma Temple – Camel Fair Grounds – Sunset", "Day 5: Drive to Jaipur – Departure"]) },
      ],
    },
    "Himachal Pradesh": {
      hook: "Mountain towns and postcard-perfect valleys",
      image: "/canvas%20images/himachal%20pradesh.png",
      places: [
        { name: "Manali", type: "Adventure", hook: "Snow roads and alpine thrills", priceFrom: "₹19,999", image: "/destinations/manali.png", ...plan("4N/5D", ["Day 1: Arrival Manali – Mall Road – Hadimba Temple – Hotel Check-in", "Day 2: Solang Valley – Snow Activities – Rohtang Pass (Permit Required)", "Day 3: Old Manali – Manu Temple – Vashisht Hot Springs – Cafes", "Day 4: Kullu Rafting – Manikaran Sahib Gurudwara – Local Market", "Day 5: Departure – Volvo/Bus to Delhi or Bhuntar Airport"], ["Curated stays", "Volvo/Flight transfers", "Daily breakfast"]) },
        { name: "Shimla", type: "Leisure", hook: "Colonial charm and scenic strolls", priceFrom: "₹18,499", image: placeholderImage, ...plan("4N/5D", ["Day 1: Arrival – Toy Train / Road – Mall Road – Scandal Point", "Day 2: Jakhu Temple – Christ Church – Kufri Day Trip", "Day 3: Chail – Chail Palace – Cricket Ground – Pine Forests", "Day 4: Naldehra Golf Course – Tattapani Hot Springs", "Day 5: Shimla Market Shopping – Departure"], ["Curated stays", "Train/Taxi transfers", "Daily breakfast"]) },
        { name: "Dharamshala & McLeod Ganj", type: "Nature", hook: "Monasteries, treks, and mountain serenity", priceFrom: "₹19,499", image: "/destinations/Dharamshala.png", ...plan("4N/5D", ["Day 1: Arrival Gaggal Airport – Dharamshala Stadium – McLeod Ganj", "Day 2: Tsuglagkhang Complex – Namgyal Monastery – Tibetan Museum", "Day 3: Triund Trek – Bhagsu Waterfall – Bhagsunag Temple", "Day 4: Kangra Fort – Masrur Rock Temple – Tea Garden", "Day 5: Departure – Gaggal Airport or Pathankot Train"]) },
      ],
    },
    Goa: {
      hook: "Beaches, nightlife, and carefree holiday vibes",
      image: "/canvas%20images/goa.png",
      places: [
        { name: "North Goa", type: "Nightlife", hook: "Beach clubs and high energy", priceFrom: "₹15,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Goa Arrival – Calangute Beach – Casino Cruise (Optional)", "Day 2: Fort Aguada – Anjuna Flea Market – Vagator Beach", "Day 3: Chapora Fort – Morjim Turtle Beach – Arambol Beach", "Day 4: Water Sports – Parasailing – Banana Boat – Jet Ski", "Day 5: Departure – Goa Airport"]) },
        { name: "South Goa", type: "Luxury", hook: "Quiet sands and premium resorts", priceFrom: "₹19,499", image: placeholderImage, ...plan("4N/5D", ["Day 1: Goa Arrival – Colva Beach – Hotel Check-in", "Day 2: Palolem Beach – Butterfly Beach – Agonda Beach", "Day 3: Old Goa – Basilica of Bom Jesus – Se Cathedral", "Day 4: Dudhsagar Waterfalls – Spice Plantation Tour", "Day 5: Departure – Goa Airport"]) },
        { name: "Heritage & Nature Goa", type: "Heritage", hook: "Latin quarters, temples, and sanctuaries", priceFrom: "₹18,499", image: "/destinations/goa.png", ...plan("4N/5D", ["Day 1: Goa Arrival – Fontainhas Latin Quarter – Panjim Walk", "Day 2: Tambdi Surla Mahadev Temple – Bhagwan Mahavir Wildlife Sanctuary", "Day 3: Divar Island – Chorao Island – Dr Salim Ali Bird Sanctuary", "Day 4: Rachol Seminary – Big Foot Museum – Loutolim Mansions", "Day 5: Anjuna Flea Market – Departure"], ["Curated stays", "Taxi transfers", "Daily breakfast"]) },
      ],
    },
    "Tamil Nadu": {
      hook: "Culture, hills, and temple heritage",
      image: "/canvas%20images/tamil%20nadu.png",
      places: [
        { name: "Ooty & Kodaikanal", type: "Hills", hook: "Twin hill station escape", priceFrom: "₹18,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Coimbatore Arrival – Toy Train to Ooty – Lake & Botanical Garden", "Day 2: Doddabetta Peak – Tea Factory – Emerald Lake", "Day 3: Drive to Kodaikanal – Coaker's Walk – Lake Boating", "Day 4: Pillar Rocks – Bear Shola Falls – Pine Forest Walk", "Day 5: Departure – Drive to Madurai / Coimbatore"], ["Curated stays", "Taxi transfers", "Daily breakfast"]) },
        { name: "Madurai & Rameswaram", type: "Heritage", hook: "Temple circuit and coastal spirituality", priceFrom: "₹19,499", image: "/destinations/rameshwaram.png", ...plan("4N/5D", ["Day 1: Madurai Arrival – Meenakshi Amman Temple – Hotel Check-in", "Day 2: Tirumalai Nayak Palace – Gandhi Museum – Alagar Kovil", "Day 3: Drive to Rameswaram – Ramanathaswamy Temple – Agni Theertham", "Day 4: Pamban Bridge – Adam's Bridge Viewpoint – Dhanushkodi", "Day 5: Return to Madurai – Departure"], ["Curated stays", "Train/Taxi transfers", "Daily breakfast"]) },
        { name: "Mahabalipuram & Chennai", type: "City", hook: "Shore temples and vibrant city culture", priceFrom: "₹18,499", image: "/destinations/mahabalipuram.png", ...plan("4N/5D", ["Day 1: Chennai Arrival – Marina Beach – Kapaleeshwarar Temple", "Day 2: Government Museum – San Thome Basilica – Elliot's Beach", "Day 3: Drive to Mahabalipuram – Shore Temple – Five Rathas", "Day 4: Arjuna's Penance – Tiger Cave – Crocodile Bank", "Day 5: Departure – Chennai Airport"]) },
      ],
    },
    Sikkim: {
      hook: "Himalayan beauty with peaceful monasteries",
      image: "/canvas%20images/sikkim.png",
      places: [
        { name: "Gangtok", type: "City", hook: "Monastery trails and mountain views", priceFrom: "₹20,999", image: "/destinations/gangtok.png", ...plan("4N/5D", ["Day 1: Arrival Bagdogra – Drive to Gangtok – MG Marg Evening Walk", "Day 2: Rumtek Monastery – Enchey Monastery – Flower Exhibition", "Day 3: Tsomgo Lake – Baba Mandir – Nathula Pass (Permit Required)", "Day 4: North Sikkim – Yumthang Valley – Zero Point", "Day 5: Departure – Drive to Bagdogra Airport"]) },
        { name: "Pelling", type: "Nature", hook: "Kanchenjunga views and serene monasteries", priceFrom: "₹22,499", image: "/destinations/pelling.png", ...plan("4N/5D", ["Day 1: Bagdogra Arrival – Drive to Pelling – Kanchenjunga View", "Day 2: Pemayangtse Monastery – Rabdentse Ruins – Helipad Hill", "Day 3: Khecheopalri Lake – Yuksom – Coronation Throne", "Day 4: Singshore Bridge – Rimbi Waterfalls – Kanchenjunga Sunrise", "Day 5: Departure – Drive to Bagdogra"], ["Curated stays", "Taxi transfers", "Daily breakfast"]) },
        { name: "Lachung & Yumthang", type: "Snow", hook: "Alpine valleys and hot springs", priceFrom: "₹23,499", image: "/destinations/Yumthang.png", ...plan("4N/5D", ["Day 1: Bagdogra – Gangtok – Lachung Drive – Check-in", "Day 2: Zero Point – Yumthang Valley – Hot Springs", "Day 3: Flower Valley Walk – Local Village Visit – Bonfire", "Day 4: Return to Gangtok – MG Marg – Shopping", "Day 5: Departure – Drive to Bagdogra Airport"], ["Curated stays", "Taxi transfers", "Daily breakfast"]) },
      ],
    },
    Meghalaya: {
      hook: "Cloud valleys, waterfalls, and living root bridges",
      image: "/canvas%20images/Meghalaya%20.jpg",
      places: [
        { name: "Meghalaya", type: "Nature", hook: "Living root bridges and cloud valleys", priceFrom: "₹21,499", image: "/destinations/meghalaya.png", ...plan("4N/5D", ["Day 1: Guwahati Arrival – Drive to Shillong – Police Bazaar Walk", "Day 2: Cherrapunji – Nohkalikai Falls – Mawsmai Cave – Seven Sisters Falls", "Day 3: Living Root Bridges – Nongriat Village Trek", "Day 4: Dawki Crystal Clear River – Mawlynnong Cleanest Village", "Day 5: Return to Guwahati – Departure"]) },
      ],
    },
    "Jammu & Kashmir": {
      hook: "Snow peaks, valleys, and postcard moments",
      image: "/canvas%20images/kashmir.jpg",
      places: [
        { name: "Srinagar", type: "Lake", hook: "Shikara rides and houseboat charm", priceFrom: "₹22,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Arrival at Srinagar Airport – Houseboat Check-in – Dal Lake Shikara Ride", "Day 2: Mughal Gardens Tour – Nishat Bagh – Shalimar Bagh – Chashme Shahi", "Day 3: Gulmarg Day Trip – Gondola Ride – Snow Activities", "Day 4: Pahalgam Excursion – Betaab Valley – Aru Valley – Chandanwari", "Day 5: Local Market Visit – Souvenir Shopping – Airport Transfer & Departure"]) },
        { name: "Gulmarg", type: "Snow", hook: "Cable cars and alpine adventure", priceFrom: "₹24,999", image: "/destinations/gulmarg.png", ...plan("4N/5D", ["Day 1: Arrival at Srinagar – Drive to Gulmarg – Hotel Check-in", "Day 2: Gondola Ride Phase 1 & 2 – Apharwat Peak – Snow Sports", "Day 3: Golf Course Walk – St. Mary's Church – Local Village Tour", "Day 4: Skiing/Snowboarding (Seasonal) – Strawberry Valley Trek", "Day 5: Departure – Drive back to Srinagar – Flight Home"]) },
        { name: "Pahalgam", type: "Nature", hook: "Pine valleys and river serenity", priceFrom: "₹23,499", image: "/destinations/Pahalgam.png", ...plan("4N/5D", ["Day 1: Arrival Srinagar – Drive to Pahalgam – Lidder River Walk", "Day 2: Aru Valley – Betaab Valley – Baisaran (Mini Switzerland)", "Day 3: Kolahoi Glacier Trek – Pine Forest Walk", "Day 4: Chandanwari – Sheshnag Lake Excursion – Cultural Evening", "Day 5: Departure – Drive to Srinagar Airport – Fly Home"]) },
      ],
    },
    Ladakh: {
      hook: "High-altitude deserts, monasteries, and unmatched landscapes",
      image: "/canvas%20images/ladakh.webp",
      places: [
        { name: "Leh", type: "Adventure", hook: "Monasteries, passes, and market walks", priceFrom: "₹24,999", image: "/destinations/ladakh.png", ...plan("4N/5D", ["Day 1: Arrival Leh – Acclimatization Rest – Leh Palace & Market Walk", "Day 2: Shanti Stupa – Namgyal Tsemo Gompa – Hall of Fame Museum", "Day 3: Nubra Valley via Khardung La Pass – Diskit Monastery – Sand Dunes", "Day 4: Pangong Tso Lake – Changthang Wildlife Sanctuary", "Day 5: Local Café Hopping – Souvenir Shopping – Departure"]) },
        { name: "Nubra Valley", type: "Nature", hook: "Sand dunes and high mountain routes", priceFrom: "₹26,499", image: "/destinations/nubra.png", ...plan("4N/5D", ["Day 1: Leh Arrival – Acclimatization – Drive to Nubra via Khardung La", "Day 2: Diskit Monastery – Maitreya Buddha Statue – Hunder Sand Dunes", "Day 3: Bactrian Camel Safari – Panamik Hot Springs", "Day 4: Sumur Village – Samstanling Monastery – Scenic Walks", "Day 5: Return Drive to Leh – Departure"], ["Curated camps", "Airport transfers", "Daily breakfast"]) },
        { name: "Pangong Lake", type: "Nature", hook: "Lakeside camps and dramatic scenery", priceFrom: "₹27,999", image: "/destinations/pangong.png", ...plan("4N/5D", ["Day 1: Leh Arrival – Acclimatization – Leh Palace", "Day 2: Thiksey Monastery – Hemis Monastery – Drive to Pangong", "Day 3: Sunrise at Pangong – Lakeside Walk – Photography", "Day 4: Spangmik Village – Merak Village – Return to Leh", "Day 5: Leh Local Sightseeing – Departure"], ["Curated camps", "Airport transfers", "Daily breakfast"]) },
      ],
    },
    Gujarat: {
      hook: "White deserts, lion safaris, and sacred coastlines",
      image: "/gujarath.png",
      places: [
        { name: "Rann of Kutch", type: "Desert", hook: "White rann and cultural evenings", priceFrom: "₹21,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Bhuj Arrival – Hotel Check-in – Aina Mahal & Prag Mahal", "Day 2: White Rann – Tent City – Cultural Program & Folk Dance", "Day 3: Kalo Dungar – Sunrise – Fossil Park – Mandvi Beach", "Day 4: Kutch Handicrafts Village Tour – Local Artisan Workshops", "Day 5: Departure – Bhuj Airport"]) },
        { name: "Gir National Park", type: "Wildlife", hook: "Asiatic lion safari trails", priceFrom: "₹24,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Rajkot/Ahmedabad Arrival – Drive to Sasan Gir", "Day 2: Morning & Evening Jeep Safari – Asiatic Lion Spotting", "Day 3: Crocodile Breeding Center – Devaliya Safari Park", "Day 4: Somnath Temple – Veraval Beach – Local Seafood", "Day 5: Departure – Return to Rajkot / Ahmedabad"], ["Curated safari stays", "Airport transfers", "Daily breakfast"]) },
        { name: "Dwarka & Somnath", type: "Heritage", hook: "Temple towns and sea-facing shrines", priceFrom: "₹20,999", image: "/destinations/dwarka.png", ...plan("4N/5D", ["Day 1: Ahmedabad Arrival – Drive to Dwarka – Hotel Check-in", "Day 2: Dwarkadhish Temple – Bet Dwarka Island – Nageshwar Jyotirlinga", "Day 3: Rukmini Devi Temple – Gopi Talav – Shankhodhar", "Day 4: Drive to Somnath – Somnath Temple – Beach Walk", "Day 5: Departure – Drive to Rajkot / Flight Home"], ["Curated stays", "Taxi transfers", "Daily breakfast"]) },
      ],
    },
    "Andhra Pradesh & Telangana": {
      hook: "Temple circuits, heritage forts, and cultural cities",
      image: "/ap%20%26%20tg.png",
      places: [
        { name: "Tirupati & Vijayawada", type: "Heritage", hook: "Pilgrimage route with cave and fort visits", priceFrom: "₹18,999", image: "/destinations/tirupati.png", ...plan("4N/5D", ["Day 1: Tirupati Arrival – Srikalahasti Temple – Padmavathi Temple", "Day 2: Tirumala – Venkateswara Temple Darshan – Akasha Ganga", "Day 3: Chandragiri Fort – Silathoranam – Natural Arch", "Day 4: Drive to Vijayawada – Kanakadurga Temple – Prakasam Barrage", "Day 5: Undavalli Caves – Kondapalli Fort – Departure"], ["Curated stays", "Train/Taxi transfers", "Daily breakfast"]) },
        { name: "Hyderabad", type: "City", hook: "Old city landmarks and modern attractions", priceFrom: "₹19,999", image: "/destinations/hyderabad.png", ...plan("4N/5D", ["Day 1: Hyderabad Arrival – Charminar – Laad Bazaar – Biryani Dinner", "Day 2: Golconda Fort – Sound & Light Show – Qutb Shahi Tombs", "Day 3: Salar Jung Museum – Hussain Sagar Lake – Lumbini Park", "Day 4: Ramoji Film City – Birla Mandir – Hi-Tech City", "Day 5: Shopping – Shilparamam – Departure"]) },
        { name: "Araku Valley", type: "Nature", hook: "Scenic train journeys and cave landscapes", priceFrom: "₹20,499", image: "/destinations/araku.png", ...plan("4N/5D", ["Day 1: Visakhapatnam Arrival – Kailasagiri Hill – RK Beach", "Day 2: Scenic Train to Araku Valley – Tribal Museum – Coffee Plantation", "Day 3: Borra Caves – Chaparai Waterfalls – Padmapuram Gardens", "Day 4: Tyda Nature Camp – Galikonda Viewpoint – Ananthagiri Forest", "Day 5: Return to Vizag – Departure"], ["Curated stays", "Train/Taxi transfers", "Daily breakfast"]) },
      ],
    },
    "North-East India": {
      hook: "Waterfalls, wildlife, and remote mountain cultures",
      image: "/canvas%20images/Meghalaya%20.jpg",
      places: [
        { name: "Assam", type: "Wildlife", hook: "Rhino safaris and river island culture", priceFrom: "₹21,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Guwahati Arrival – Kamakhya Temple – Brahmaputra Cruise", "Day 2: Kaziranga National Park – Morning Elephant Safari", "Day 3: Kaziranga Jeep Safari – One-Horned Rhinoceros – Tea Estate", "Day 4: Majuli Island – Largest River Island – Satras (Monasteries)", "Day 5: Sivasagar – Rang Ghar – Departure"]) },
        { name: "Arunachal Pradesh", type: "Adventure", hook: "Monasteries, high passes, and mountain drives", priceFrom: "₹25,999", image: "/destinations/arunachal.png", ...plan("4N/5D", ["Day 1: Itanagar Arrival – Ita Fort – Ganga Lake – Buddhist Temple", "Day 2: Tawang Drive – Sela Pass – Jaswant Garh War Memorial", "Day 3: Tawang Monastery – Madhuri Lake – Shonga-tser Lake", "Day 4: Bumla Pass – Ptso Lake – P.T. Tso Lake", "Day 5: Return Drive – Departure via Guwahati"], ["Curated stays", "Permit arranged", "Daily breakfast"]) },
      ],
    },
    Lakshadweep: {
      hook: "Coral islands and serene beach escapes",
      image: "/canvas%20images/maldives.png",
      places: [
        { name: "Agatti Island", type: "Beach", hook: "Lagoon stays and reef exploration", priceFrom: "₹31,999", image: "/destinations/agatti.png", ...plan("4N/5D", ["Day 1: Kochi – Flight/Ship to Agatti – Lagoon View Check-in", "Day 2: Snorkeling – Glass Bottom Boat Ride – Coral Reef Exploration", "Day 3: Kavaratti Island Visit – Ujra Mosque – Marine Aquarium", "Day 4: Deep Sea Fishing – Beach BBQ – Sunset Walk", "Day 5: Departure – Flight back to Kochi"], ["Curated beach stay", "Sea/Air transfers", "All meals"]) },
        { name: "Bangaram Island", type: "Beach", hook: "Eco-resort charm and marine adventures", priceFrom: "₹34,999", image: "/destinations/bangaram.png", ...plan("4N/5D", ["Day 1: Kochi – Ship to Bangaram – Uninhabited Island Charm", "Day 2: Scuba Diving – Snorkeling – Water Sports", "Day 3: Beach Walk – Kayaking – Hammock Relaxation", "Day 4: Night Sky Stargazing – Bioluminescent Water Walk", "Day 5: Departure – Return to Kochi"], ["Curated eco resort", "Sea transfers", "All meals"]) },
        { name: "Kavaratti Island", type: "Beach", hook: "Marine life, watersports, and island culture", priceFrom: "₹32,999", image: "/destinations/kavaratti.png", ...plan("4N/5D", ["Day 1: Kochi – Flight to Agatti – Boat to Kavaratti", "Day 2: Marine Aquarium – Lagoon Swimming – Watersports", "Day 3: Ujra Mosque – Lighthouse – Local Market", "Day 4: Kayaking – Fishing – Sunset Cruise", "Day 5: Departure – Boat to Agatti – Flight to Kochi"], ["Curated stays", "Sea transfers", "All meals"]) },
      ],
    },
    "Andaman & Nicobar Islands": {
      hook: "Island hopping, coral reefs, and tropical shores",
      image: "/canvas%20images/andaman%20and%20lakshdweeep.png",
      places: [
        { name: "Port Blair & Havelock", type: "Beach", hook: "Historic landmarks and world-class beaches", priceFrom: "₹30,999", image: "/destinations/havelock.png", ...plan("4N/5D", ["Day 1: Port Blair Arrival – Cellular Jail – Light & Sound Show", "Day 2: Ross Island – North Bay – Corbyn's Cove Beach", "Day 3: Ferry to Havelock – Radhanagar Beach", "Day 4: Elephant Beach – Snorkeling – Kayaking – Glass Boat", "Day 5: Return to Port Blair – Departure"], ["Curated stays", "Ferry transfers", "Daily breakfast"]) },
        { name: "Neil Island", type: "Beach", hook: "Slow island days and coral-rich waters", priceFrom: "₹29,999", image: "/destinations/Neil Island.png", ...plan("4N/5D", ["Day 1: Port Blair – Ferry to Neil Island – Laxmanpur Beach", "Day 2: Natural Bridge – Bharat Pur Beach – Coral Reef Snorkeling", "Day 3: Sitapur Sunrise Beach – Cycling Around Island – Fishing", "Day 4: Scuba Diving – Sea Walk – Overnight Stargazing", "Day 5: Return to Port Blair – Departure"], ["Curated stays", "Ferry transfers", "Daily breakfast"]) },
        { name: "Baratang & North Andaman", type: "Adventure", hook: "Caves, mangroves, and remote island stretches", priceFrom: "₹33,999", image: "/destinations/andaman.png", ...plan("4N/5D", ["Day 1: Port Blair – Baratang – Limestone Caves – Mud Volcano", "Day 2: Parrot Island – Mangrove Creek – Dugong Creek", "Day 3: Drive to Diglipur – Ross & Smith Islands Walk", "Day 4: Kalipur Beach – Lamiya Bay – Sea Turtle Nesting", "Day 5: Return to Port Blair – Departure"], ["Curated stays", "Boat/Ferry transfers", "Daily breakfast"]) },
      ],
    },
    Maharashtra: {
      hook: "City icons, cave heritage, and hill retreats",
      image: "/Maharashtra.png",
      places: [
        { name: "Mumbai & Lonavala", type: "City", hook: "City lights and hill station breaks", priceFrom: "₹22,499", image: "/destinations/lonavala.png", ...plan("4N/5D", ["Day 1: Mumbai Arrival – Gateway of India – Marine Drive Walk", "Day 2: Elephanta Caves – Colaba Causeway – Bollywood Tour", "Day 3: Sanjay Gandhi National Park – Kanheri Caves – Juhu Beach", "Day 4: Drive to Lonavala – Tiger's Leap – Bhushi Dam – Bhaja Caves", "Day 5: Karla Caves – Return to Mumbai – Departure"]) },
        { name: "Aurangabad (Ajanta & Ellora)", type: "Heritage", hook: "Cave art and Deccan history", priceFrom: "₹21,999", image: "/destinations/ajanta.png", ...plan("4N/5D", ["Day 1: Aurangabad Arrival – Bibi Ka Maqbara – Daulatabad Fort", "Day 2: Ellora Caves – Kailasa Temple – Ghrishneshwar Jyotirlinga", "Day 3: Ajanta Caves – Rock-cut Buddhist Paintings – Guided Tour", "Day 4: Panchakki – Aurangabad Caves – Local Silk Market", "Day 5: Departure – Aurangabad Airport"]) },
        { name: "Mahabaleshwar & Panchgani", type: "Nature", hook: "Strawberry farms and valley viewpoints", priceFrom: "₹20,999", image: "/destinations/Mahabaleshwar.png", ...plan("4N/5D", ["Day 1: Pune Arrival – Drive to Mahabaleshwar – Strawberry Farm", "Day 2: Pratapgad Fort – Lingmala Waterfall – Venna Lake Boating", "Day 3: Wilson Point Sunrise – Lodwick Point – Arthur's Seat", "Day 4: Panchgani – Table Land – Sydney Point – Mapro Garden", "Day 5: Departure – Drive to Pune Airport"], ["Curated stays", "Taxi transfers", "Daily breakfast"]) },
      ],
    },
    Chardham: {
      hook: "Sacred Himalayan circuits and spiritual journeys",
      image: "/canvas%20images/himachal%20pradesh.png",
      places: [
        { name: "Yamunotri & Gangotri", type: "Pilgrimage", hook: "Dual dham route through mountain temples", priceFrom: "₹26,999", image: "/destinations/gangotri.png", ...plan("4N/5D", ["Day 1: Haridwar/Rishikesh – Barkot – Janki Chatti", "Day 2: Yamunotri Trek – Surya Kund – Divya Shila – Puja", "Day 3: Drive to Uttarkashi – Gangotri", "Day 4: Gangotri Temple Darshan – Surya Kund – Bhagirathi River", "Day 5: Drive back to Haridwar / Rishikesh – Departure"], ["Curated stays", "Dedicated transport", "Daily breakfast"]) },
        { name: "Kedarnath", type: "Pilgrimage", hook: "Temple darshan with trek or helicopter access", priceFrom: "₹29,999", image: "/destinations/kadharnath.png", ...plan("4N/5D", ["Day 1: Haridwar – Guptkashi – Hotel Check-in", "Day 2: Sonprayag – Kedarnath Trek or Helicopter – Temple Darshan", "Day 3: Morning Aarti – Bhairavnath Temple – Vasuki Tal (Optional)", "Day 4: Return Trek – Drive to Rudraprayag – Sangam", "Day 5: Return to Haridwar – Departure"], ["Curated stays", "Helicopter option", "Daily breakfast"]) },
        { name: "Badrinath", type: "Pilgrimage", hook: "Sacred shrines and high-altitude villages", priceFrom: "₹27,999", image: "/destinations/badrinath.png", ...plan("4N/5D", ["Day 1: Haridwar – Joshimath – Badrinath Drive", "Day 2: Badrinath Temple Darshan – Tapt Kund – Narad Kund", "Day 3: Mana Village – India's Last Village – Vyas Cave – Bhim Pul", "Day 4: Valley of Flowers Excursion – Hemkund Sahib (Optional)", "Day 5: Return to Haridwar – Departure"], ["Curated stays", "Dedicated transport", "Daily breakfast"]) },
      ],
    },
    "Uttar Pradesh & Uttarakhand": {
      hook: "Sacred cities, river ghats, and Himalayan foothills",
      image: "/Uttar%20Pradesh%20%26%20Uttarakhand.png",
      places: [
        { name: "Agra, Mathura & Vrindavan", type: "Heritage", hook: "Mughal marvels and devotional circuits", priceFrom: "₹19,999", image: "/destinations/agra.png", ...plan("4N/5D", ["Day 1: Delhi/Agra Arrival – Taj Mahal Sunset View – Hotel Check-in", "Day 2: Taj Mahal Sunrise – Agra Fort – Mehtab Bagh", "Day 3: Fatehpur Sikri – Buland Darwaza – Drive to Mathura", "Day 4: Krishna Janmabhoomi – Vrindavan – ISKCON Temple – Prem Mandir", "Day 5: Departure – Delhi Airport"], ["Curated stays", "Train/Car transfers", "Daily breakfast"]) },
        { name: "Varanasi", type: "Spiritual", hook: "Ghats, aarti, and timeless heritage", priceFrom: "₹18,999", image: placeholderImage, ...plan("4N/5D", ["Day 1: Varanasi Arrival – Dasaswamedh Ghat – Ganga Aarti", "Day 2: Sunrise Boat Ride – Manikarnika Ghat – Kashi Vishwanath", "Day 3: Sarnath – Dhamek Stupa – Mulagandha Kuti Vihar", "Day 4: Ramnagar Fort – Bharat Mata Temple – Silk Weaving", "Day 5: Evening Aarti – Departure – Lal Bahadur Shastri Airport"]) },
        { name: "Rishikesh & Haridwar", type: "Adventure", hook: "River rafting, yoga, and spiritual calm", priceFrom: "₹20,499", image: "/destinations/Rishikesh & Haridwar.png", ...plan("4N/5D", ["Day 1: Dehradun/Haridwar Arrival – Har Ki Pauri – Ganga Aarti", "Day 2: Drive to Rishikesh – Lakshman Jhula – Triveni Ghat", "Day 3: White Water Rafting – Bungee Jumping – Neergarh Waterfall", "Day 4: Yoga & Meditation Class – Beatles Ashram – Ram Jhula", "Day 5: Departure – Drive to Dehradun Airport"], ["Curated stays", "Train/Taxi transfers", "Daily breakfast"]) },
      ],
    },
    "Andaman & Lakshadweep": {
      hook: "Crystal waters and tropical island escapes",
      image: "/canvas%20images/andaman%20and%20lakshdweeep.png",
      places: [
        { name: "Havelock", type: "Beach", hook: "Turquoise water and scuba bliss", priceFrom: "₹29,999", image: "/destinations/havelock.png" },
        { name: "Neil Island", type: "Relax", hook: "Quiet beaches and slow sunsets", priceFrom: "₹27,999", image: "/destinations/Neil Island.png" },
      ],
    },
  },
  international: {
    Singapore: {
      hook: "Clean luxury, family fun, and city wonders",
      image: "/canvas%20images/singapore.png",
      places: [
        { name: "4N/5D - City Wonders", type: "Package", hook: "A compact Singapore highlights journey", priceFrom: "₹56,999", image: "/destinations/city wonders.png", ...plan("4N/5D", ["Day 1: Arrival Changi Airport – Gardens by the Bay – Marina Bay Sands Skypark", "Day 2: Universal Studios Singapore – Sentosa Island – Beach Walk", "Day 3: Singapore Zoo – River Safari – Mandai Wildlife", "Day 4: Chinatown – Little India – Clarke Quay – Night Safari", "Day 5: Shopping Orchard Road – Departure"]) },
        { name: "5N/6D - Discovery", type: "Package", hook: "More attractions and city neighborhoods", priceFrom: "₹64,999", image: "/destinations/discovery.png", ...plan("5N/6D", ["Day 1: Arrival – Marina Bay Sands – Garden Rhapsody Show", "Day 2: Sentosa – Universal Studios – S.E.A. Aquarium", "Day 3: Singapore Zoo – Jurong Bird Park – MacRitchie Reservoir", "Day 4: Chinatown – Buddha Tooth Relic Temple – Hawker Centre", "Day 5: Little India – Mustafa Centre – Clarke Quay Night Life", "Day 6: Orchard Road – ION Mall – Departure"]) },
        { name: "6N/7D - Complete Singapore", type: "Package", hook: "Complete city + nature blend", priceFrom: "₹72,999", image: "/destinations/complete singapore.png", ...plan("6N/7D", ["Day 1: Arrival – Changi Jewel – Waterfall – Canopy Park", "Day 2: Gardens by the Bay – Cloud Forest – Flower Dome – Supertree", "Day 3: Universal Studios – Water World – Resorts World Sentosa", "Day 4: Singapore Zoo – Night Safari – River Wonders", "Day 5: Chinatown – Little India – Kampong Glam – Bugis", "Day 6: Pulau Ubin Island – Chek Jawa Wetlands – Cycling", "Day 7: Orchard – Departure"]) },
      ],
    },
    Malaysia: {
      hook: "Modern cities with tropical adventures",
      image: "/canvas%20images/malaysia.png",
      places: [
        { name: "4N/5D - Kuala Lumpur Highlights", type: "Package", hook: "Classic KL city itinerary", priceFrom: "₹49,999", image: "/destinations/kula.png", ...plan("4N/5D", ["Day 1: KL Arrival – Petronas Twin Towers – Bukit Bintang", "Day 2: Batu Caves – National Mosque – Merdeka Square", "Day 3: KL Tower – Aquaria KLCC – Central Market", "Day 4: Genting Highlands – Theme Park – Casino", "Day 5: Shopping Pavilion Mall – Departure"]) },
        { name: "5N/6D - KL & Langkawi", type: "Package", hook: "City + island combination", priceFrom: "₹57,999", image: "/destinations/kl.png", ...plan("5N/6D", ["Day 1: KL Arrival – Twin Towers – Bukit Bintang Night", "Day 2: Batu Caves – Islamic Arts Museum – KLCC Park", "Day 3: Flight to Langkawi – Beach Resort Check-in", "Day 4: Langkawi Cable Car – Eagle Square – Island Hopping", "Day 5: Mangrove Tour – Crocodile Farm – Duty-Free Shopping", "Day 6: Departure via KL"], ["Curated hotels", "Air/Ferry transfers", "Daily breakfast"]) },
        { name: "6N/7D - Malaysia Mosaic", type: "Package", hook: "KL, Penang, and Langkawi circuit", priceFrom: "₹66,999", image: "/destinations/malaysia mosaic.png", ...plan("6N/7D", ["Day 1: KL Arrival – Petronas Towers – Dinner", "Day 2: Batu Caves – Putrajaya – National Museum", "Day 3: Genting Highlands – Theme Parks", "Day 4: Flight to Penang – Georgetown Heritage Walk", "Day 5: Penang Hill – Kek Lok Si Temple – Hawker Street Food", "Day 6: Langkawi Flight – Beach – Duty Free", "Day 7: Departure"]) },
      ],
    },
    Bali: {
      hook: "Temples, rice terraces, and beach sunsets",
      image: "/canvas%20images/bali.png",
      places: [
        { name: "4N/5D - Bali Bliss", type: "Package", hook: "Seminyak to Ubud classics", priceFrom: "₹44,999", image: "/destinations/bali bliss.png", ...plan("4N/5D", ["Day 1: Arrival Ngurah Rai – Villa Check-in – Seminyak Beach – Sunset", "Day 2: Benoa Beach – Uluwatu Temple – Kecak Fire Dance", "Day 3: Kintamani – Ubud – Tegallalang Rice Terrace – Bali Swing", "Day 4: Bedugul – Tanah Lot – Handara Gate", "Day 5: Spa – Shopping – Departure"], ["Curated villas", "Airport transfers", "Daily breakfast"]) },
        { name: "5N/6D - Island Explorer", type: "Package", hook: "Beaches, Ubud, and Nusa Penida", priceFrom: "₹52,999", image: "/destinations/bali island.png", ...plan("5N/6D", ["Day 1: Arrival – Kuta Beach – Waterbom Park", "Day 2: Uluwatu – Padang Padang Beach – GWK Cultural Park", "Day 3: Ubud – Monkey Forest – Art Market – Rice Terraces", "Day 4: Mount Batur Sunrise Trek – Hot Springs", "Day 5: Nusa Penida – Kelingking – Angel's Billabong – Crystal Bay", "Day 6: Spa Day – Seminyak Dinner – Departure"], ["Curated villas", "Airport transfers", "Daily breakfast"]) },
        { name: "6N/7D - Ultimate Bali", type: "Package", hook: "Complete Bali from cliffs to east coast", priceFrom: "₹61,999", image: "/destinations/bali ultimate.png", ...plan("6N/7D", ["Day 1: Arrival – Seminyak – Sunset at Petitenget Temple", "Day 2: Uluwatu Cliff – Jimbaran Seafood BBQ", "Day 3: Ubud – Monkey Forest – Tegallalang – Bali Swing", "Day 4: Mount Batur Sunrise – Kintamani – Volcanic Views", "Day 5: Nusa Penida Full Day – Kelingking Beach – Crystal Bay", "Day 6: Amed – Snorkeling – East Bali – Tirta Gangga", "Day 7: Last Spa – Kuta Shopping – Departure"], ["Curated villas", "Airport transfers", "Daily breakfast"]) },
      ],
    },
    Azerbaijan: {
      hook: "Caspian charm, fire temples, and mountain villages",
      image: "/Azerbaijan%20%2B%20Georgia.jpg",
      places: [
        { name: "4N/5D - Baku Highlights", type: "Package", hook: "Classic Baku and nearby wonders", priceFrom: "₹46,999", image: "/destinations/baku.png", ...plan("4N/5D", ["Day 1: Baku Arrival – Flame Towers Night View – Bulvar Promenade", "Day 2: Old City – Maiden Tower – Palace of Shirvanshahs", "Day 3: Gobustan National Park – Mud Volcanoes – Petroglyphs", "Day 4: Heydar Aliyev Centre – Carpet Museum – Highland Park", "Day 5: Nizami Street Shopping – Departure"]) },
        { name: "5N/6D - Azerbaijan Explored", type: "Package", hook: "Baku plus Sheki and Lahij", priceFrom: "₹54,999", image: "/destinations/aze explord.png", ...plan("5N/6D", ["Day 1: Baku Arrival – Flame Towers – Boulevard", "Day 2: Old City – Miniature Books Museum – Ateshgah Fire Temple", "Day 3: Gobustan – Mud Volcanoes – Yanardagh Eternal Flame", "Day 4: Sheki – Khan Palace – Caravanserai", "Day 5: Lahij Village – Handicraft Bazaar – Return to Baku", "Day 6: Shopping – Departure"]) },
        { name: "6N/7D - Complete Azerbaijan", type: "Package", hook: "Full Azerbaijan circuit", priceFrom: "₹62,999", image: "/destinations/complete azerbaijan.png", ...plan("6N/7D", ["Day 1: Baku Arrival – Flame Towers – Promenade", "Day 2: Old City – Ateshgah – Gobustan Petroglyphs", "Day 3: Mud Volcanoes – Yanardagh Fire Mountain – Absheron", "Day 4: Drive to Sheki – Palace of Sheki Khans – Caravanserai", "Day 5: Lahij Copper Village – Gabala – Adventure Park", "Day 6: Quba – Red Settlement – Khinalig Village Trek", "Day 7: Return to Baku – Shopping – Departure"]) },
      ],
    },
    "Sri Lanka": {
      hook: "Culture, tea country, and coastal escapes",
      image: "/Sri%20Lanka.jpg",
      places: [
        { name: "4N/5D - Cultural Triangle", type: "Package", hook: "Temples and heritage highlights", priceFrom: "₹48,999", image: "/destinations/cultural triangle.png", ...plan("4N/5D", ["Day 1: Colombo Arrival – Gangaramaya Temple – Galle Face Green", "Day 2: Sigiriya Rock Fortress – Dambulla Cave Temple", "Day 3: Kandy – Temple of the Tooth – Cultural Dance Show", "Day 4: Tea Country – Nuwara Eliya – Gregory Lake", "Day 5: Departure – Colombo Airport"]) },
        { name: "5N/6D - Island Discovery", type: "Package", hook: "Classic north-central and hill country route", priceFrom: "₹56,999", image: "/destinations/island discovery.png", ...plan("5N/6D", ["Day 1: Colombo Arrival – City Tour – Pettah Market", "Day 2: Sigiriya – Lion Rock Climb – Village Safari", "Day 3: Polonnaruwa Ruins – Minneriya Elephant Gathering", "Day 4: Kandy – Peradeniya Botanical Gardens – Temple", "Day 5: Nuwara Eliya – Tea Plantation – Horton Plains", "Day 6: Departure"]) },
        { name: "6N/7D - Sri Lanka Complete", type: "Package", hook: "Island-wide itinerary from culture to coast", priceFrom: "₹65,999", image: "/destinations/complete sri lanka.png", ...plan("6N/7D", ["Day 1: Colombo Arrival – Gangaramaya – Galle Face", "Day 2: Sigiriya Rock – Pidurangala Rock Sunrise", "Day 3: Dambulla Cave – Anuradhapura Sacred City", "Day 4: Kandy – Temple of Tooth – Elephant Orphanage", "Day 5: Tea Country Drive – Train Ride Ella", "Day 6: Ella Rock – Nine Arch Bridge – Mirissa Beach", "Day 7: Galle Dutch Fort – Departure"]) },
      ],
    },
    Thailand: {
      hook: "Island fun, nightlife, and city glam",
      image: "/canvas%20images/thailand.png",
      places: [
        { name: "4N/5D - Bangkok & Pattaya", type: "Package", hook: "Classic Thailand twin-city route", priceFrom: "₹39,999", image: "/destinations/bankok.png", ...plan("4N/5D", ["Day 1: Bangkok Arrival – Grand Palace – Wat Pho", "Day 2: Floating Market – Ayutthaya Day Trip – Temples", "Day 3: Drive to Pattaya – Coral Island – Water Sports", "Day 4: Nong Nooch Village – Tiger Zoo – Alcazar Show", "Day 5: Shopping – Departure"]) },
        { name: "5N/6D - Bangkok & Phuket", type: "Package", hook: "City temples plus island cruising", priceFrom: "₹48,999", image: "/destinations/phuket.png", ...plan("5N/6D", ["Day 1: Bangkok Arrival – Grand Palace – Khao San Road", "Day 2: Damnoen Saduak Market – Wat Arun – Chao Phraya Cruise", "Day 3: Flight to Phuket – Patong Beach – Beach Walk", "Day 4: Phi Phi Islands – Maya Bay – Snorkeling", "Day 5: James Bond Island – Phang Nga Bay Kayaking", "Day 6: Departure"], ["Curated hotels", "Air transfers", "Daily breakfast"]) },
        { name: "6N/7D - Thailand Explorer", type: "Package", hook: "Bangkok, Chiang Mai, and Phuket", priceFrom: "₹57,999", image: "/destinations/thailand explorer.png", ...plan("6N/7D", ["Day 1: Bangkok Arrival – Grand Palace – Temple Trail", "Day 2: Ayutthaya – Historic Temples – Floating Market", "Day 3: Flight to Chiang Mai – Night Bazaar – Doi Suthep", "Day 4: Elephant Sanctuary – Trekking – Hill Tribes", "Day 5: Flight to Phuket – Patong – Big Buddha", "Day 6: Phi Phi Islands – Snorkeling – Crystal Clear Waters", "Day 7: Departure"], ["Curated hotels", "Air transfers", "Daily breakfast"]) },
      ],
    },
    Maldives: {
      hook: "Overwater villas and unmatched ocean calm",
      image: "/canvas%20images/maldives.png",
      places: [
        { name: "4N/5D - Paradise Escape", type: "Package", hook: "Water villa getaway with marine adventures", priceFrom: "₹74,999", image: "/destinations/paradise escape.png", ...plan("4N/5D", ["Day 1: Male Arrival – Speedboat to Resort – Water Villa Check-in", "Day 2: House Reef Snorkeling – Sandbank Picnic – Sunset Cruise", "Day 3: Diving or Snorkeling Excursion – Manta Ray Spotting", "Day 4: Local Island Visit – Culture Walk – Dolphin Watching", "Day 5: Departure – Speedboat to Male – Flight Home"], ["Water villa stay", "Speedboat transfers", "All meals"]) },
        { name: "5N/6D - Luxury Lagoon", type: "Package", hook: "Overwater luxury and seaplane transfers", priceFrom: "₹94,999", image: "/destinations/luxury lagoon.png", ...plan("5N/6D", ["Day 1: Male – Seaplane to Resort – Overwater Villa", "Day 2: Sunrise Yoga – House Reef Snorkeling – Spa Treatment", "Day 3: Full Day Diving – Coral Garden – Marine Life", "Day 4: Whale Shark Safari – Sandbank BBQ Lunch", "Day 5: Kayaking – Glass-Bottom Boat – Sunset Fishing", "Day 6: Departure"], ["Overwater villa", "Seaplane transfers", "All meals"]) },
        { name: "6N/7D - Ultimate Maldives", type: "Package", hook: "Premium all-inclusive island plan", priceFrom: "₹1,14,999", image: "/destinations/ultimate maldives.png", ...plan("6N/7D", ["Day 1: Male – Transfer to Resort – Welcome Cocktail", "Day 2: Sunrise Yoga – Reef Snorkeling – Dolphin Cruise", "Day 3: PADI Scuba Diving – Coral Restoration Tour", "Day 4: Whale Shark Excursion – Sandbank Picnic", "Day 5: Local Island – Maldivian Culture – Traditional Crafts", "Day 6: Kayaking – Paddle Boarding – Sunset Cruise – Bonfire", "Day 7: Departure – Seaplane / Speedboat to Male"], ["Overwater villa", "Seaplane/Speedboat", "All meals"]) },
      ],
    },
    Dubai: {
      hook: "Skyline luxury and desert adventures",
      image: "/canvas%20images/dubai.png",
      places: [
        { name: "4N/5D - Dubai Highlights", type: "Package", hook: "City icons and desert safari", priceFrom: "₹52,999", image: "/destinations/dubai highights.png", ...plan("4N/5D", ["Day 1: Dubai Arrival – Burj Khalifa Top – Dubai Fountain Show", "Day 2: Desert Safari – Dune Bashing – BBQ Dinner – Belly Dance", "Day 3: Dubai Frame – Gold Souk – Spice Souk – Creek Abra Ride", "Day 4: Palm Jumeirah – Atlantis Aquaventure – Dubai Marina Walk", "Day 5: Dubai Mall – Departure"]) },
        { name: "5N/6D - Dubai & Abu Dhabi", type: "Package", hook: "Dual emirate highlights", priceFrom: "₹61,999", image: "/destinations/abu dubai.png", ...plan("5N/6D", ["Day 1: Dubai Arrival – Burj Khalifa – Downtown Walk", "Day 2: Desert Safari – Sand Boarding – Camel Ride – BBQ", "Day 3: Abu Dhabi – Sheikh Zayed Grand Mosque – Louvre Abu Dhabi", "Day 4: Palm Jumeirah – Atlantis – Dubai Marina Dinner Cruise", "Day 5: Gold & Spice Souk – Dubai Frame – Global Village", "Day 6: Departure"]) },
        { name: "6N/7D - UAE Complete", type: "Package", hook: "Dubai, Abu Dhabi, Sharjah complete plan", priceFrom: "₹69,999", image: "/destinations/uae complete.png", ...plan("6N/7D", ["Day 1: Dubai Arrival – Burj Khalifa – Dubai Fountain", "Day 2: Desert Safari – Dune Bashing – Stargazing Camp", "Day 3: Abu Dhabi – Grand Mosque – Ferrari World – Corniche", "Day 4: Sharjah – Blue Souk – Al Noor Island – Arts Area", "Day 5: IMG Worlds of Adventure – Global Village", "Day 6: Palm Jumeirah – Aquaventure – Sunset Marina Cruise", "Day 7: Shopping – Departure"]) },
      ],
    },
    China: {
      hook: "Ancient wonders, fast trains, and mega cities",
      image: "/china.png",
      places: [
        { name: "4N/5D - Beijing Highlights", type: "Package", hook: "Great Wall and historic Beijing", priceFrom: "₹59,999", image: "/destinations/beijing.png", ...plan("4N/5D", ["Day 1: Beijing Arrival – Tiananmen Square – Forbidden City", "Day 2: Great Wall of China (Mutianyu) – Summer Palace", "Day 3: Temple of Heaven – 798 Art District – Wangfujing Night Market", "Day 4: Lama Temple – Confucius Temple – Hutong Rickshaw Tour", "Day 5: Shopping – Silk Market – Departure"]) },
        { name: "5N/6D - Beijing & Shanghai", type: "Package", hook: "Twin-city China highlights", priceFrom: "₹68,999", image: "/destinations/beijing highlights.png", ...plan("5N/6D", ["Day 1: Beijing Arrival – Tiananmen – Forbidden City", "Day 2: Great Wall – Ming Tombs – Peking Duck Dinner", "Day 3: High Speed Train to Shanghai – Bund Walk", "Day 4: The Bund – Yu Garden – Nanjing Road – Pudong", "Day 5: Shanghai Tower – French Concession – Xintiandi", "Day 6: Departure"], ["Curated hotels", "High speed train", "Daily breakfast"]) },
        { name: "6N/7D - Classic China", type: "Package", hook: "Beijing, Xi'an, and Shanghai", priceFrom: "₹78,999", image: "/destinations/classic china.png", ...plan("6N/7D", ["Day 1: Beijing – Tiananmen – Forbidden City", "Day 2: Great Wall – Summer Palace", "Day 3: Train to Xi'an – Terracotta Warriors", "Day 4: Xi'an City Wall – Muslim Quarter – Dumplings", "Day 5: Train to Shanghai – Bund Walk", "Day 6: Shanghai Tower – Yu Garden – Xintiandi", "Day 7: Departure"], ["Curated hotels", "Train transfers", "Daily breakfast"]) },
      ],
    },
    Japan: {
      hook: "Tradition meets futuristic wonder",
      image: "/canvas%20images/japan.png",
      places: [
        { name: "4N/5D - Tokyo & Nikko", type: "Package", hook: "Tokyo landmarks with Nikko day trip", priceFrom: "₹1,09,999", image: "/destinations/tokyo.png", ...plan("4N/5D", ["Day 1: Tokyo Arrival – Shibuya Crossing – Shinjuku Gyoen", "Day 2: Senso-ji Asakusa – Tokyo Skytree – Akihabara", "Day 3: Nikko – Tosho-gu Shrine – Kegon Falls", "Day 4: Harajuku – Meiji Shrine – Odaiba – TeamLab Planets", "Day 5: Tsukiji Market – Ginza – Departure"]) },
        { name: "5N/6D - Tokyo & Kyoto", type: "Package", hook: "Fast-paced city and temple circuit", priceFrom: "₹1,19,999", image: "/destinations/kyoto.png", ...plan("5N/6D", ["Day 1: Tokyo Arrival – Shinjuku – Shibuya Night", "Day 2: Senso-ji – Akihabara – Ueno Park", "Day 3: Shinkansen to Kyoto – Fushimi Inari Shrine", "Day 4: Arashiyama Bamboo Grove – Kinkaku-ji (Golden Pavilion)", "Day 5: Nishiki Market – Gion District – Geisha Walk", "Day 6: Departure – Osaka Kansai Airport"], ["Curated hotels", "Shinkansen pass", "Daily breakfast"]) },
        { name: "6N/7D - Japan Classic", type: "Package", hook: "Tokyo, Hakone, Kyoto, Nara, Osaka", priceFrom: "₹1,29,999", image: "/destinations/japan classic.png", ...plan("6N/7D", ["Day 1: Tokyo Arrival – Shibuya – Shinjuku", "Day 2: Asakusa – Akihabara – TeamLab", "Day 3: Mt. Fuji – Hakone – Lake Ashi Cruise", "Day 4: Shinkansen to Kyoto – Fushimi Inari", "Day 5: Arashiyama – Golden Pavilion – Philosopher's Path", "Day 6: Nara – Deer Park – Todai-ji Temple – Osaka", "Day 7: Dotonbori – Osaka Castle – Departure"], ["Curated hotels", "JR pass", "Daily breakfast"]) },
      ],
    },
    Vietnam: {
      hook: "Lantern towns, cruises, and mountain views",
      image: "/canvas%20images/vietnam.png",
      places: [
        { name: "4N/5D - Hanoi & Ha Long", type: "Package", hook: "Old quarter and cruise experiences", priceFrom: "₹45,999", image: "/destinations/hanai.png", ...plan("4N/5D", ["Day 1: Hanoi Arrival – Hoan Kiem Lake – Old Quarter Walk", "Day 2: Ho Chi Minh Mausoleum – Temple of Literature – Tran Quoc Pagoda", "Day 3: Ha Long Bay Cruise – Kayaking – Floating Village", "Day 4: Sunrise on Bay – Return to Hanoi – Cooking Class", "Day 5: Hanoi Market – Departure"]) },
        { name: "5N/6D - North to South", type: "Package", hook: "Hanoi to Hoi An to Ho Chi Minh", priceFrom: "₹53,999", image: "/destinations/north and south.png", ...plan("5N/6D", ["Day 1: Hanoi Arrival – Old Quarter – Street Food Tour", "Day 2: Ha Long Bay – Cruise – Caves – Kayaking", "Day 3: Return Hanoi – Flight to Hoi An – Ancient Town", "Day 4: Hoi An Lantern Village – Bicycle Tour – Beach", "Day 5: Flight to Ho Chi Minh City – Ben Thanh Market – Cu Chi", "Day 6: Departure – Tan Son Nhat Airport"], ["Curated hotels", "Air transfers", "Daily breakfast"]) },
        { name: "6N/7D - Vietnam Complete", type: "Package", hook: "North, central, and south highlights", priceFrom: "₹61,999", image: "/destinations/vietnam complete .png", ...plan("6N/7D", ["Day 1: Hanoi – Old Quarter – Hoan Kiem Lake", "Day 2: Ha Long Bay – Junk Cruise – Kayaking", "Day 3: Ninh Binh – Tam Coc – Trang An Grotto", "Day 4: Flight to Da Nang – Marble Mountains – My Khe Beach", "Day 5: Hoi An Ancient Town – Lantern Festival – Tailors", "Day 6: Flight to Ho Chi Minh – Cu Chi Tunnels – War Museum", "Day 7: Mekong Delta – Departure"], ["Curated hotels", "Air transfers", "Daily breakfast"]) },
      ],
    },
  },
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function unslug(slug: string) {
  return slug.replace(/-/g, " ").trim()
}
