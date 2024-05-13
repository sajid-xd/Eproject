var cat = [
    {
        "id": 1,
        "name": "Ram"
    },
    {
        "id": 2,
        "name": "Hard Drives"
    },
    {
        "id": 3,
        "name": "Memory Card"
    },
    {
        "id": 4,
        "name": "USB Drives"
    }
];

var product = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "cat_id": 0,
    "brand": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
},
{
    "id": 1,
    "title": "Lexar DDR4-3200 8GB",
    "price": 5500,
    "description": "The Lexar DDR4-3200/2666 UDIMM Desktop Memory lets you wake up your PC with a performance upgrade that gives you faster startups.",
    "cat_id": 1,
    "brand": "Lexar ",
    "image": "https://www.czone.com.pk/Images/Thumbnails/copy-copy-1-czone.com.pk-1540-12076-090921064921.jpg"
},
{
    "id": 2,
    "title": "ADATA DDR5 8GB",
    "price": 7000,
    "description": "The DDR5-4800 U-DIMM delivers blazing frequencies of up to 4800 MT/s, a major leap from the max. frequency of DDR4 modules (3200 MT/s).",
    "brand": "ADATA",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/5-czone.com.pk-1540-13341-040424092424.jpg"
},
{
    "id": 3,
    "title": "XPG SPECTRIX D35G DDR4 8GB",
    "price": 7400,
    "description": "SPECTRIX D35G's composed and understated triangular outline is specifically designed for gamers with unique personalities.",
    "brand": "XPG",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/copy-2-czone.com.pk-1540-15675-310124072422.jpg"
},
{
    "id": 4,
    "title": "Crucial Basics 16GB DDR4-2666",
    "price": 8900,
    "description": "There’s an easy cure for a slow computer: more memory. Designed to help your system run faster and smoother, Crucial® Desktop Memory.",
    "brand": "Crucial Basics",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/copy-18-czone.com.pk-1540-12094-100921085312.jpg"
},
{
    "id": 5,
    "title": "XPG SPECTRIX D35G DDR4 16GB",
    "price": 14500,
    "description": "SPECTRIX D35G's composed and understated triangular outline is specifically designed for gamers with unique personalities.",
    "brand": "XPG",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/1-czone.com.pk-1540-15675-310124072422.jpg"
}, {
    "id": 6,
    "title": "ADATA DDR5 16GB 5600",
    "price": 15500,
    "description": "The DDR5-5600 U-DIMM delivers blazing frequencies of up to 5600 MHz, a major leap from the max. frequency of DDR4 modules (3200 MHz).",
    "brand": "ADATA",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/10-czone.com.pk-1540-15720-140224095332.jpg"
},
{
    "id": 7,
    "title": "XPG LANCER WHITE DDR5",
    "price": 17900,
    "description": "The XPG LANCER ushers in the DDR5 era for gaming memory. Reaching boost for gaming and overclocking.",
    "brand": "XPG",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/40-czone.com.pk-1540-15940-070524095248.jpg"
},
{
    "id": 8,
    "title": "Corsair VENGEANCE RGB",
    "price": 24500,
    "description": "CORSAIR VENGEANCE RGB PRO Series DDR4 overclocked memory RGB lighting, while delivering the best in DDR4 performance.",
    "brand": "Corsair",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/1-czone.com.pk-1540-11388-080421084818.jpg"
},
{
    "id": 9,
    "title": "XPG LANCER DDR5 32GB",
    "price": 41990,
    "description": "era for gaming memory. Reaching frequencies of up to 6400 MT/s, performance boost for gaming and overclocking.",
    "brand": "XPG",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/15-czone.com.pk-1540-15696-060224093419.jpg"
},
{
    "id": 10,
    "title": "Transcend JetRam",
    "price": 12900,
    "description": "Compliant with JEDEC international standards, brand-name DRAM chips that have passed Transcend's strict screening process and testing.",
    "brand": "Transcend",
    "cat_id": 1,
    "image": "https://www.czone.com.pk/Images/Thumbnails/1-czone.com.pk-1540-14714-200523073527.jpg"
},
{
    "id": 11,
    "title": "Hard Disk Drive",
    "price": "$89.99",
    "description": "Seagate 1TB Laptop SATA Hard Disk Drive 2.5\" Mobile HDD ST1000LM035 (New | Pulled-Out)",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 12,
    "title": "WD Purple Hard Drive",
    "price": "$129.99",
    "description": "WD Purple Surveillance Hard Drive 6TB WD63PURZ SATA 6Gb/s 3.5\" 256MB Cache",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 13,
    "title": "Surveillance Hard Drive",
    "price": "$99.99",
    "description": "WD Purple 4TB Surveillance Hard Disk Drive WD42PURX 3.5\" SATA3 HDD",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 14,
    "title": "Seagate Harddrive",
    "price": "$79.99",
    "description": "Seagate Skyhawk 2TB Surveillance Seagate Skyhawk 3.5\" SATA 6Gb/s CMR",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 15,
    "title": "Skyhawk Harddrive",
    "price": "$199.99",
    "description": "Seagate Skyhawk 8TB Surveillance Hard Drive 3.5\" SATA ST8000VX004",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 16,
    "title": "Surveillance Hard Drive",
    "price": "$299.99",
    "description": "Seagate SkyHawk 10TB Surveillance Hard Drive (ST10000VX0004)",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 17,
    "title": "SkyHawk Hard Drive",
    "price": "$149.99",
    "description": "Seagate SkyHawk 1TB Surveillance Hard Drive - ST1000VX005",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 18,
    "title": "Dell Vostro Harddrive",
    "price": "$899.99",
    "description": "Dell Vostro 3910 Tower PC Desktop Computer - Intel Core i7-12700, 4GB, 1TB HDD",
    "cat_id": 2,
    "image": "./assets/display7.png"
},
{
    "id": 19,
    "title": "Lexar Memory Card",
    "price": "$24.99",
    "description": "Lexar 32GB High-Performance 633x microSDXC UHS-I Card BLUE Series LMS0633032G-BNNNG",
    "image": "./assets/lexar_memory_card.png",
    "cat_id": 3,
},
{
    "id": 20,
    "title": "Lexar 128GB High-Performance microSDXC UHS-I Card BLUE Series",
    "price": "$49.99",
    "description": "Lexar 128GB High-Performance 633x microSDXC UHS-I Card BLUE Series with SD Adapter LSDMI128BB633A",
    "image": "./assets/lexar_128gb_microsd.png",
    "cat_id": 3,
},
{
    "id": 21,
    "title": "Lexar 64GB High-Performance microSDXC UHS-I Card BLUE Series",
    "price": "$34.99",
    "description": "Lexar 64GB High-Performance 633x microSDXC UHS-I Card BLUE Series LMS0633064G-BNNNG",
    "image": "./assets/lexar_64gb_microsd.png",
    "cat_id": 3,
},
{
    "id": 22,
    "title": "Kingston Canvas Select Plus UHS-I microSDXC Card 256GB",
    "price": "$79.99",
    "description": "Kingston Canvas Select Plus UHS-I microSDXC Card 256GB SDCS2/256GB with SD Adapter",
    "image": "./assets/kingston_256gb_microsd.png",
    "cat_id": 3,
},
{
    "id": 23,
    "title": "Kingston Canvas Select Plus microSDXC Card 64GB",
    "price": "$19.99",
    "description": "Kingston Canvas Select Plus microSDXC Card 64GB SDCS2/64GB with SD Adapter",
    "image": "./assets/kingston_64gb_microsd.png",
    "cat_id": 3,
},
{
    "id": 24,
    "title": "SanDisk Ultra microSDXC UHS-I 128GB Memory Card",
    "price": "$29.99",
    "description": "SanDisk Ultra microSDXC UHS-I 128GB Memory Card SDSQUNR-128G-GN6MN",
    "image": "./assets/sandisk_128gb_microsd.png",
    "cat_id": 3,
},
{
    "id": 25,
    "title": "Silicon Power Blaze B03 64GB USB 3.2 Gen 1 Flash Drive, Black",
    "price": "$12.99",
    "description": "Silicon Power Blaze B03 64GB USB 3.2 Gen 1 Flash Drive, Black",
    "image": "./assets/silicon_power_blaze_b03_black.png",
    "cat_id": 4,
},
{
    "id": 26,
    "title": "Silicon Power Blaze B25 64GB USB 3.1 Gen 1 Flash Drive Black",
    "price": "$14.99",
    "description": "Silicon Power Blaze B25 64GB USB 3.1 Gen 1 Flash Drive Black",
    "image": "./assets/silicon_power_blaze_b25_black.png",
    "cat_id": 4,
},
{
    "id": 27,
    "title": "Silicon Power Blaze B03 64GB USB 3.2 Gen 1 Flash Drive, White",
    "price": "$12.99",
    "description": "Silicon Power Blaze B03 64GB USB 3.2 Gen 1 Flash Drive, White",
    "image": "./assets/silicon_power_blaze_b03_white.png",
    "cat_id": 4,
},
{
    "id": 28,
    "title": "Lexar 32GB JumpDrive M400 USB 3.0 Flash Drive",
    "price": "$9.99",
    "description": "Lexar 32GB JumpDrive M400 USB 3.0 Flash Drive LJDM400032G",
    "image": "./assets/lexar_jumpdrive_m400_32gb.png",
    "cat_id": 4,
},
{
    "id": 29,
    "title": "Kingston DataTraveler Exodia Onyx 64GB USB 3.2 Flash Drive",
    "price": "$11.99",
    "description": "Kingston DataTraveler Exodia Onyx 64GB USB 3.2 Flash Drive | DTXON/64GB",
    "image": "./assets/kingston_datatraveler_exodia_64gb.png",
    "cat_id": 4,
},
{
    "id": 30,
    "title": "Lexar JumpDrive M35 USB 3.0 Flash Drive 64GB",
    "price": "$10.99",
    "description": "Lexar JumpDrive M35 USB 3.0 Flash Drive 64GB TXON/64GBXMT 332",
    "image": "./assets/lexar_jumpdrive_m35_64gb.png",
    "cat_id": 4,
},
{
    "id": 31,
    "title": "SanDisk Ultra Dual Drive Go 32GB USB Type-C Flash Drive",
    "price": "$8.99",
    "description": "SanDisk Ultra Dual Drive Go 32GB USB Type-C Flash Drive | SDDDC3-032G-G46",
    "image": "./assets/sandisk_ultra_dual_drive_go_32gb.png",
    "cat_id": 4
},
{
    "id": 32,
    "title": "Kingston DataTraveler Exodia Onyx 128GB USB 3.2 Flash Drive",
    "price": "$19.99",
    "description": "Kingston DataTraveler Exodia Onyx 128GB USB 3.2 Flash Drive | DTXON/128GB",
    "image": "./assets/kingston_datatraveler_exodia_128gb.png",
    "cat_id": 4
}
]