const illustrations = [
  "babyariees.png",
  "gamerbae.png",
  "lookup.png",
];

const animations = [
    "auzzy.gif",
    "kira.gif",
    "shiki.gif"
]

const designs = [
  "bae.png",
  "fox.png",
  "flexy.png"
];

function populateGallery(images, folder, galleryId) {
  const gallery = document.getElementById(galleryId);

  images.forEach(image => {
    const img = document.createElement("img");

    img.src = `artwork/${folder}/${image}`;
    img.alt = image;

    gallery.appendChild(img);
  });
}

populateGallery(
  illustrations,
  "illustrations",
  "illustrations-gallery"
);

populateGallery(
  animations,
  "animations",
  "animations-gallery"
);

populateGallery(
  designs,
  "design",
  "design-gallery"
);