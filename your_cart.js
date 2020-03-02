document.querySelector("#cart-js").addEventListener("mouseover", show_hide_cart);

function  show_hide_cart(e) {
    e.preventDefault();
    e.stopPropagation();
    var select_cart_container = document.querySelector("#cart_container");

    if (select_cart_container.style.display === 'none') {
        select_cart_container.style.display = 'block';
    } else {
        select_cart_container.style.display = 'none';
    }
}

var document_button_cart = document.querySelector("body").addEventListener("click", function (e) {
    var select_cart_container = document.querySelector("#cart_container");
    if (e.target.classList.contains("title_cart")) {
        return;
    }
    if (e.target.classList.contains("delete_cart")) {
        return;
    }
    if (e.target.classList.contains("fa-times-circle")) {
        return;
    }
    if (e.target.classList.contains("price_column")) {
        return;
    }
    if (e.target.classList.contains("tr_product")) {
        return;
    }
    if (e.target.id == "cart_container") {
        return;
    }
    if (e.target.id == "name_cart") {
        return;
    }
    if (e.target.id == "qty_4") {
        return;
    }
    if (e.target.id == "td_total") {
        return;
    }
    if (select_cart_container.style.display === "block"){
        select_cart_container.style.display = "none";
       }
    });

function add_product_to_body(product) {

    var shoping_cart = document.getElementById("cart_container");
    var tbody = shoping_cart.getElementsByTagName("tbody")[0];
    var tr = document.createElement("tr");
    tr.className = "tr_product";
    tr.setAttribute("id", product.id)
    tbody.appendChild(tr);

    var td_1 = document.createElement("td");
    tr.appendChild(td_1);
    var img = document.createElement("img");
    img.src = product.img;
    img.height = "100";
    td_1.appendChild(img);

    var td_2 = document.createElement("td");
    td_2.innerHTML = product.name;
    td_2.id = "name_cart";
    tr.appendChild(td_2);

    var td_3 = document.createElement("td");
    td_3.id = "price_id" + product.id;
    td_3.className = "price_column";
    td_3.innerHTML = product.price;
    tr.appendChild(td_3);

    var td_usd = document.createElement("td");
    td_usd.id = "price_id" + product.id;
    td_usd.className = "moneda";
    td_usd.innerHTML = product.moneda;
    tr.appendChild(td_usd);

    var td_4 = document.createElement("td");
    tr.appendChild(td_4);
    var input = document.createElement("input");
    input.setAttribute("id", "qty_" + product.id);
    input.className = "nr_on_cart";
    input.type = "number";
    input.value = "1";
    input.name = "qty";
    input.min = "1";
    td_4.appendChild(input);

    var td_5 = document.createElement("td");
    tr.appendChild(td_5);
    var a = document.createElement("a");
    a.src = "#";
    a.className = "delete_cart";
    var i = document.createElement("i");
    i.className = "fas fa-times-circle";
    a.appendChild(i);
    td_5.appendChild(a);

}

var product_container = document.querySelector(".product-container");
product_container.addEventListener("click", select_product)

function select_product(e) {
    if (e.target.type == "submit") {
        var products = [];
        switch (pagina_curenta) {
            case "men":
                products = watches_men;
                break;
            case "women":
                products = watches_women;
                break;
            case "kids":
                products = watches_kids;
                break;
            case "smartwatches":
                products = smartwatches;
                break;
            case "belts":
                products = watches_belt;
                break;
        }
        var id = e.target.getAttribute("data-product_id")
        var product = search_id(products, id);

        // ..........daca produsul exista in toata lista de produse
        if (product) {
            if (is_in_cart(id)) {
                increment_cant(id);
            }
            else { add_product_to_body(product); }
            var pret = calc_price(product)
            document.getElementById("price_id" + id).innerText = pret;
            document.getElementById("total_price").innerHTML = calc_pret_total();
            document.getElementById("number_on_cart").innerText = number_on_cart();
            document.getElementById("bulina_cart").style.display = "block";
            document.getElementById("buy").style.display = "block";
        }
        else { console.log("nu am gasit produsul cu id:" + id) }

    }
}

function search_id(lista_watches, id) {
    for (var i = 0; i < lista_watches.length; i++) {
        if (lista_watches[i].id == id) {
            return lista_watches[i];
        }
    }
}

// .......................remove

var cart_container = document.getElementById("cart_container");
cart_container.addEventListener("click", function (e) {

    if (e.target.parentElement.classList.contains("delete_cart")) {
        e.target.parentElement.parentElement.parentElement.remove();
        document.getElementById("total_price").innerHTML = calc_pret_total();
    }

})

// daca exista deja in cart

function is_in_cart(product_id) {
    var select_tr = document.getElementById(product_id)
    if (select_tr) {
        return true
    }
    else { return false }
}

// incrementeaza cantitatea

function increment_cant(product_id) {
    var qty_input = document.getElementById("qty_" + product_id);
    qty_input.value++;
}

// calculeaza pretul pentru un produs

function calc_price(product) {
    var qty_input = document.getElementById("qty_" + product.id);
    return qty_input.value * product.price;
}

//calculeaza pretul total:

function calc_pret_total() {
    var product_tr = document.getElementsByClassName("tr_product");
    var pret_total = 0;
    for (var i = 0; i < product_tr.length; i++) {
        var td = product_tr[i].children[2];
        pret_total += parseFloat(td.innerText);
    }
    return pret_total;
}

function number_on_cart(){
    var number_tr = document.getElementsByClassName("nr_on_cart");
    var nr_total = 0;
    for (var i = 0; i < number_tr.length; i++) {
        var value = number_tr[i].value;
        nr_total += parseFloat(value);
    }
    return nr_total;
}