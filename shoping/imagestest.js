const images = [
    {
        image: "Adidas img/1.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A low-profile retro sneaker with a slim silhouette, suede/leather-style upper, classic 3-Stripes and gum-style outsole. It has a vintage football/trainer-inspired look and works well as a casual everyday sneaker.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"₹9,999"
    },

    {
        image: "Adidas img/2.jpg",
        title: "Adidas Handball Spezial",
        description: "A classic retro sneaker with a slim shape, 3-Stripes branding and gum outsole. It was originally introduced for handball and later became a popular lifestyle sneaker.",
        best_for: "Casual wear, streetwear",
        style: "Retro / sporty",
        brand: "adidas Originals",
        price:"₹3,732.32"
    },

    {
        image: "Adidas img/3.jpg",
        title: "Adidas Originals Superstar|| ",
        description: "A classic adidas lifestyle sneaker with a distinctive shell toe, low-cut profile and iconic 3-Stripes. It has a clean, recognizable look that works with casual outfits..",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"₹5,000"
    },
    {
        image: "Adidas img/4.jpg",
        title: "Adidas Originals Forum Low CL",
        description: "A chunkier retro basketball-inspired sneaker with a broad shape, layered upper and classic adidas branding. Compared with the Tokyo and Spezial, it has a more substantial, basketball-inspired appearance.",
        best_for: "Casual wear, streetwear",
        style: "Retro basketball / lifestyle",
        brand: "adidas Originals",
        price:"₹10,999"
    },
    {
        image: "Adidas img/5.jpg",
        title: "Adidas Originals Brown / Beige — SL 72 RS",
        description: "A lightweight-looking retro sneaker that combines vintage running inspiration with a modern casual style.",
        best_for: "Lifestyle / Retro Running",
        style: "Retro / Vintage",
        brand: "adidas Originals",
        price:"₹9,999"
    },
    {
        image: "Adidas img/6.jpg",
        title: "Adidas Originals White / Black — SL 72 RS",
        description: "A low-profile retro sneaker with a slim silhouette, suede/leather-style upper, classic 3-Stripes and gum-style outsole. It has a vintage football/trainer-inspired look and works well as a casual everyday sneaker.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"₹19,999"
    },
    {
        image: "Adidas img/7.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A classic retro sneaker with a slim silhouette and bold color contrast, making it easy to use as a statement piece with casual clothing.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"₹11,999"
    },
    {
        image: "Adidas img/8.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A chunky, modern-retro sneaker with a technical running-inspired design. Its larger silhouette gives it a more substantial appearance than the SL 72.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"₹12,999"
    },
    {
        image: "Adidas img/9.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A low-profile retro sneaker with a slim silhouette, suede/leather-style upper, classic 3-Stripes and gum-style outsole. It has a vintage football/trainer-inspired look and works well as a casual everyday sneaker.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"$2,999"
    },
    {
        image: "Adidas img/10.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A low-profile retro sneaker with a slim silhouette, suede/leather-style upper, classic 3-Stripes and gum-style outsole. It has a vintage football/trainer-inspired look and works well as a casual everyday sneaker.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"$2,999"
    },
    {
        image: "Adidas img/1.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A low-profile retro sneaker with a slim silhouette, suede/leather-style upper, classic 3-Stripes and gum-style outsole. It has a vintage football/trainer-inspired look and works well as a casual everyday sneaker.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"$2,999"
    },
    {
        image: "Adidas img/2.jpg",
        title: "Adidas Originals Tokyo Sneakers",
        description: "A low-profile retro sneaker with a slim silhouette, suede/leather-style upper, classic 3-Stripes and gum-style outsole. It has a vintage football/trainer-inspired look and works well as a casual everyday sneaker.",
        best_for: "Casual wear, college/outings, streetwear",
        style: "Retro / low-profile",
        brand: "adidas Originals",
        price:"$2,999"
    },
];


function openDetails(index) {

    const data = images[index];

    document.getElementById("detailImage").src = data.image;

    document.getElementById("detailTitle").innerText = data.title;

    document.getElementById("detailDescription").innerText =
        data.description;

    document.getElementById("detailBest_for").innerText =
        "Best_for: " + data.best_for;
    
    document.getElementById("detailStyle").innerText =
        "Style: " + data.style;

    document.getElementById("detailBrand").innerText =
        "Brand: " + data.brand;

    document.getElementById("detailPrice").innerText =
        "Price: " + data.price;


    document.getElementById("details").classList.add("active");
}


function closeDetails() {

    document.getElementById("details").classList.remove("active");

}