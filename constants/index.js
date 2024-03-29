const locations = [
  {
    name: "Dhaka",
    areas: [
      "Jatrabari",
      "Demra",
      "Gendaria",
      "Lalbagh",
      "Azimpur",
      "Basabo",
      "Shantinagar",
      "Paltan",
      "Kalabagan",
      "Ramna",
      "Sutrapur",
      "Malibagh",
      "Kotwali",
      "Tikatoli",
      "Shahjahanpur",
      "Motijeel",
      "Wari",
      "Khilgaon",
      "Poribagh",
      "Shahbag",
      "Eskaton",
      "Kodomtoli",
      "Siddheshwari",
      "Laxmibazar",
      "Elephant Road",
      "Segunbagicha",
      "Dhanmondi",
      "Mugdapara",
      "Fakirapul",
      "Arambagh",
      "Motijheel",
      "Green Road",
      "Old Dhaka",
    ],
  },
  {
    name: "khulna",
    areas: [
      "Bagerhat",
      "Chuadanga",
      "Jashore",
      "Jhenaidah",
      "Khulna",
      "Kushtia",
      "Magura",
      "Meherpur",
      "Narail",
      "Satkhira",
    ],
  },
];

const servicesArray = [
  "AC Servicing 1-1.5 ton",
  "AC Servicing 2-3 ton",
  "AC Servicing 4-5 ton",
  "AC Servicing Basic Service",
  "AC Servicing AC Installation & Uninstallation",
  "AC Servicing Compressor fitting with gas refill",
  "AC Servicing Jet Wash",
  "AC Servicing Leak Repair",
  "AC Servicing Master Service",
  "AC Servicing Water-Drop Solution",
  "Fridge Basic Service",
  "Fridge Circuit Repair Or Replacement",
  "Fridge Compressor fitting with gas refill",
  "Fridge Condenser Fitting with gas refill",
  "Fridge Gasket change",
  "Fridge Gas refill",
  "Fridge Thermostat Replace",
  "TV Installation",
  "TV Installation",
  "TV Repair",
  "Microwave Oven Basic services",
  "Microwave Oven Buttons not working",
  "Microwave Oven Not heating",
  "Microwave Oven Sparkle/short circuit",
  "Microwave Oven Transformer replacement",
  "Water Purifier Dismantling",
  "Water Purifier Installation",
  "Water Purifier Kit replacement",
  "Water Purifier Servicing",
  "Kitchen Hood Deep cleaning",
  "Kitchen Hood Installation",
  "Kitchen Hood Repair",
  "Kitchen Hood Shifting",
  "Washing machine Basic service",
  "Washing machine Circuit repair",
  "Washing machine Gearbox repair/replace",
  "Washing machine Installation",
  "Washing machine Motor repair/replace",
  "Washing machine Water level sensor",
  "IPS IPS repair",
  "Geyser Basic",
  "Geyser Installation",
  "Generator Up to 150 KVA",
  "Generator Up to 300 KVA",
  "Generator Up to 500 KVA",
  "Gas stove Installation (Auto)",
  "Gas stove Installation (Normal)",
  "Gas stove Leak repair (Auto)",
  "Gas stove Leak repair (Normal)",
  "Gas stove Component change (Auto)",
  "Gas stove Component change (Normal)",
  "Gas stove Cleaning (Auto)",
  "Gas stove Cleaning (Normal)",
  "Oven burner Cleaning",
  "Oven burner Repair",
  "Oven burner Cleaning and repair",
  "Desktop Software/hardware checkup",
  "Desktop Windows/software installation",
  "Desktop Bios configuring/updating",
  "Desktop Data recovery",
  "Desktop Motherboard installation/repair",
  "Desktop HDD/SSD installation/replacement",
  "Desktop Full cleaning & problem identification",
  "Desktop PSU installation/repair/replace",
  "Laptop Software/hardware checkup",
  "Laptop Windows/software installation",
  "Laptop Bios configuring/updating",
  "Laptop Data recovery",
  "Laptop Motherboard installation/repair",
  "Laptop HDD/SSD installation/replacement",
  "Laptop Full cleaning & problem identification",
  "Laptop Keyboard replacement",
  "Laptop Display replacement",
  "Plumbing Plumbing checkup",
  "Plumbing Water tap installation/repair",
  "Plumbing Sink installation",
  "Plumbing Sink repair",
  "Plumbing Sink blockage",
  "Electric Electrical checkup",
  "Electric Ceiling fan repair",
  "Electric Ceiling fan coil repair",
  "Electric Ceiling fan capacitor/regulator fitting",
  "Electric Light servicing/installation",
  "Electric Circuit breaker installation",
  "Electric Circuit breaker repair/replace",
];

const keyWords = [
  "TV Mounting",
  "AC Jet Wash",
  "Refrigerator Gas refill",
  "Windows 11 Setup",
  "Oven Repair",
  "AC Basic Service",
  "Water Purifier Kit replacement",
  "AC Jet Wash",
];

const forHomeServices = [
  { title: "AC Installation", path: "/services/ac-logo.jpg" },
  { title: "Desktop Service", path: "/services/desktop.jpg" },
  { title: "Fridge Repair", path: "/services/fridge.webp" },
  { title: "Laptop Services", path: "/services/laptop-repair.jpg" },
  { title: "Oven Servicing", path: "/services/Oven-repair.jpg" },
  { title: "Sink Installation", path: "/services/Sink-reapir.jpg" },
  { title: "TV Repair", path: "/services/tv-repair.jpg" },
  { title: "Washing Machine Servicing", path: "/services/washing-machine.jpg" },
  {
    title: "Water Purifier Installation",
    path: "/services/water-purifier.jpg",
  },
];

const customerReview = [
  {
    name: "Kr Rodoshi",
    address: "Bashundhora, Dhaka",
    image: "/rodoshi.jpg",
    review:
      "Yimbs is a game-changing online service company that excels in delivering top-notch customer satisfaction. With their diverse range of services, Yimbs stands out as a versatile and reliable platform. Their user-friendly interface ensures a seamless experience. From web development and digital marketing to content creation, they offer it all. Yimbs' expert team. ",
  },
  {
    name: "Kr Rodoshi",
    address: "Bashundhora, Dhaka",
    image: "/papel.jpg",
    review:
      "Yimbs is a game-changing online service company that excels in delivering top-notch customer satisfaction. With their diverse range of services, Yimbs stands out as a versatile and reliable platform. Their user-friendly interface ensures a seamless experience. From web development and digital marketing to content creation, they offer it all. Yimbs' expert team. ",
  },
  {
    name: "Kr Rodoshi",
    address: "Bashundhora, Dhaka",
    image: "/ahad.jpg",
    review:
      "Yimbs is a game-changing online service company that excels in delivering top-notch customer satisfaction. With their diverse range of services, Yimbs stands out as a versatile and reliable platform. Their user-friendly interface ensures a seamless experience. From web development and digital marketing to content creation, they offer it all. Yimbs' expert team. ",
  },
  {
    name: "Kr Rodoshi",
    address: "Bashundhora, Dhaka",
    image: "/aysha.jpg",
    review:
      "Yimbs is a game-changing online service company that excels in delivering top-notch customer satisfaction. With their diverse range of services, Yimbs stands out as a versatile and reliable platform. Their user-friendly interface ensures a seamless experience. From web development and digital marketing to content creation, they offer it all. Yimbs' expert team. ",
  },
  {
    name: "Kr Rodoshi",
    address: "Bashundhora, Dhaka",
    image: "/papel.jpg",
    review:
      "Yimbs is a game-changing online service company that excels in delivering top-notch customer satisfaction. With their diverse range of services, Yimbs stands out as a versatile and reliable platform. Their user-friendly interface ensures a seamless experience. From web development and digital marketing to content creation, they offer it all. Yimbs' expert team. ",
  },
];

const whyYimbns = [
  "Expert Technicians with Experience",
  "warrenty on service",
  "Service at your doorstep",
  "There's no Additional Cost",
  "Assurance of Safety",
  "Propeor Diagnosis",
  "One Stop For All Service",
];

const footerlinks = [
  {
    name: "Pages",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Carrer",
    link: "#",
  },
  {
    name: "Help",
    link: "#",
  },
  {
    name: "Terms of Use",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Sitemap",
    link: "#",
  },
];

const footerImages = [
  "/clipArts/facebook.jpg",
  "/clipArts/instagram.png",
  "/clipArts/twitter.png",
  "/clipArts/linkedin.png",
  "/clipArts/youtube.png",
];

const AllServices = [
  {
    service: { title: "AC Servicing", source: "", serviceID: "AC-Servicing" },
    subServices: [
      {
        title: "Basic Service",
        source: "/services/AC/Basic Service.jpg",
      },
      {
        title: "AC Installation & Uninstallation",
        source: "/services/AC/AC-Installation-&-Uninstallation.png",
      },
      {
        title: "Compressor fitting with gas refill",
        source: "/services/AC/Compressor fitting with gas refil.jpg",
      },
      {
        title: "Jet Wash",
        source: "/services/AC/Jet Wash.jpg",
      },
      {
        title: "Leak Repair",
        source: "/services/AC/Leak Repair.jpg",
      },
      {
        title: "Master Service",
        source: "/services/AC/master service.jpg",
      },
    ],
  },
  {
    service: { title: "Fridge", source: "", serviceID: "Fridge" },
    subServices: [
      {
        title: "Basic Service",
        source: "/services/Fridge/fridge basic service.webp",
      },
      {
        title: "Circuit Repair Or Replacement",
        source: "/services/Fridge/Circuit Repair Or Replacement.jpg",
      },
      {
        title: "Compressor fitting with gas refill",
        source: "/services/Fridge/compresor repair.jpg",
      },
      {
        title: "Condenser Fitting with gas refill",
        source: "/services/Fridge/condenser fitting.webp",
      },
      {
        title: "Gasket change",
        source: "/services/Fridge/Gasket change.jpg",
      },
      {
        title: "Gas refill",
        source: "/services/Fridge/refrigerator Gas refill.webp",
      },
      {
        title: "Thermostat Replace",
        source: "/services/Fridge/Thermostat Replace.jpg",
      },
    ],
  },
  {
    service: { title: "TV", source: "", serviceID: "TV" },
    subServices: [
      {
        title: "Installation",
        source: "/services/TV/installation.jpg",
      },
      {
        title: "Repair",
        source: "/services/TV/Repair.jpg",
      },
    ],
  },
  {
    service: {
      title: "Microwave Oven",
      source: "",
      serviceID: "Microwave-Oven",
    },
    subServices: [
      {
        title: "Basic services",
        source: "/services/Microwave Oven/basic services.jpg",
      },
      {
        title: "Buttons not working",
        source: "/services/Microwave Oven/Buttons not working.jpg",
      },
      {
        title: "Not heating",
        source: "/services/Microwave Oven/Not heating.jpg",
      },
      {
        title: "sparkle/short circuit",
        source: "/services/Microwave Oven/sparkleshort circuit.jpg",
      },
      {
        title: "Transformer replacement",
        source: "/services/Microwave Oven/Transformer replacement.jpg",
      },
    ],
  },
  {
    service: {
      title: "Water Purifier",
      source: "",
      serviceID: "Water-Purifier",
    },
    subServices: [
      {
        title: "dismantling",
        source: "/services/Water Purifier/water purifier dismantling.jpg",
      },
      {
        title: "installation",
        source: "/services/Water Purifier/water purifier installation.jpg",
      },
      {
        title: "Kit replacement",
        source: "/services/Water Purifier/water purifier Kit replacement.jpg",
      },
      {
        title: "servicing",
        source: "/services/Water Purifier/water purifier servicing.jpg",
      },
    ],
  },
  {
    service: { title: "Kitchen Hood", source: "", serviceID: "Kitchen-Hood" },
    subServices: [
      {
        title: "Deep cleaning",
        source: "/services/Kitchen Hood/Deep cleaning.jpg",
      },
      {
        title: "Installation",
        source: "/services/Kitchen Hood/Installation.jpg",
      },
      {
        title: "Repair",
        source: "/services/Kitchen Hood/Repair.jpg",
      },
      {
        title: "Shifting",
        source: "/services/Kitchen Hood/Shifting.jpg",
      },
    ],
  },
  {
    service: {
      title: "Washing machine",
      source: "",
      serviceID: "Washing-machine",
    },
    subServices: [
      {
        title: "Basic service",
        source: "/services/Kitchen Hood/Deep cleaning.jpg",
      },
      {
        title: "Circuit repair",
        source: "/services/Washing Machine/Washing machine Circuit repair.jpg",
      },
      {
        title: "Gearbox repair/replace",
        source:
          "/services/Washing Machine/Washing machine Gearbox repair orreplace.jpg",
      },
      {
        title: "installation",
        source: "/services/Washing Machine/installation.jpg",
      },
      {
        title: "Motor repair/replace",
        source: "/services/Washing Machine/Motor repair.jpg",
      },
      {
        title: "Water level sensor",
        source: "/services/Washing Machine/Water level sensor.jpg",
      },
    ],
  },
];

export {
  locations,
  servicesArray,
  keyWords,
  forHomeServices,
  customerReview,
  whyYimbns,
  footerlinks,
  footerImages,
  AllServices,
};
