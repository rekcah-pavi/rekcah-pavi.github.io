function addNewItem(ftype,imageSrc, itemName, rating, price) {
    var card = document.createElement("div");
    card.classList.add("card");

    var img = document.createElement("img");
    img.src = imageSrc;
    img.alt = itemName;
    img.style.width = "100%";
    card.appendChild(img);

    var link = document.createElement("a");
    link.href = "login.html";
    var icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-cart-shopping","test1");
    link.appendChild(icon);
    card.appendChild(link);

    var container = document.createElement("div");
    container.classList.add("container");

    var title = document.createElement("h4");
    title.innerHTML = "<b>" + itemName + "</b>";
    container.appendChild(title);

    var stars = "";
    for (var i = 0; i < rating; i++) {
        stars += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    container.innerHTML += stars;

    var priceTag = document.createElement("p");
    priceTag.textContent = price + "RS";
    container.appendChild(priceTag);

    card.appendChild(container);
    var section = document.getElementById(ftype);
    section.appendChild(card);
}





$.ajax({
    url: 'ajax/product.json',
    dataType: 'json',
    success: function(data) {
        $.each(data, function(index, item) {
            addNewItem(item.type,item.img, item.name, item.rating, item.price);
        });
    }
});

