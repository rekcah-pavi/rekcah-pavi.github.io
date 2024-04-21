function load_img(){

    var images = ['STS-Blog-banners-30.png','orange-juice.jpg','banner_bgg.jpg']
    var random_index = Math.floor(Math.random() * images.length);
    var im = document.getElementById('roll_img');
    im.src = "IMG/"+images[random_index];
}

setInterval(load_img, 3000); 