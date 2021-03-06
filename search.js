var button_search = document.getElementById("submit-find");
button_search.addEventListener("click", search);

//cauta produse cand se apasa pe butonul search
function search(e) {
    e.preventDefault();
    var search_text = get_search_text();
    var search_brand = get_search_brand();
    var select = document.getElementById("sort");
    var result_page = document.getElementById("result");
    search_product(search_text, search_brand, select.value, result_page.value);
}

var ul_checkbox = document.getElementById("brand");
ul_checkbox.addEventListener("click", select_brand);

//cauta produse cand se selecteaza branduri
function select_brand(e) {
    var search_text = get_search_text();
    var search_brand = get_search_brand();
    var select = document.getElementById("sort");
    var result_page = document.getElementById("result");
    search_product(search_text, search_brand, select.value, result_page.value);
}

//citeste valoarea din inputul text
function get_search_text() {
    var input = document.getElementById("text-find");
    var search_text = input.value;
    return search_text;
}
//imi da brendurile selectate
function get_search_brand() {
    var select = document.getElementsByClassName("checkbox-brand");
    var select_value = [];
    for (var i = 0; i < select.length; i++) {
        if (select[i].checked) {
            select_value.push(select[i].value);
        }
    }
    return select_value;
}

// filtreaza dupa text, brand, sort, limita
function search_product(search_text, lista_brand, sort, limita) {
    var final_results = [];
    switch (pagina_curenta) {
        case "men":
            var results_name = search_name(watches_men, search_text);
            if (lista_brand.length == 0) { final_results = results_name }
            else {
                for (var i = 0; i < lista_brand.length; i++) {
                    var result_brand = search_brands(results_name, lista_brand[i]);

                    for (var z = 0; z < result_brand.length; z++) {
                        final_results.push(result_brand[z])
                    }
                }
            }
            break;
        case "women":
            var results_name = search_name(watches_women, search_text);

            if (lista_brand.length == 0) { final_results = results_name }
            else {
                for (var i = 0; i < lista_brand.length; i++) {
                    var result_brand = search_brands(results_name, lista_brand[i]);

                    for (var z = 0; z < result_brand.length; z++) {
                        final_results.push(result_brand[z])
                    }
                }
            }
            break;
        case "kids":
            var results_name = search_name(watches_kids, search_text);

            if (lista_brand.length == 0) { final_results = results_name }
            else {
                for (var i = 0; i < lista_brand.length; i++) {
                    var result_brand = search_brands(results_name, lista_brand[i]);

                    for (var z = 0; z < result_brand.length; z++) {
                        final_results.push(result_brand[z])
                    }
                }
            }
            break;
        case "smartwatches":
            var results_name = search_name(smartwatches, search_text);

            if (lista_brand.length == 0) { final_results = results_name }
            else {
                for (var i = 0; i < lista_brand.length; i++) {
                    var result_brand = search_brands(results_name, lista_brand[i]);

                    for (var z = 0; z < result_brand.length; z++) {
                        final_results.push(result_brand[z])
                    }
                }
            }
            break;
        case "belts":
            var results_name = search_name(watches_belt, search_text);

            if (lista_brand.length == 0) { final_results = results_name }
            else {
                for (var i = 0; i < lista_brand.length; i++) {
                    var result_brand = search_brands(results_name, lista_brand[i]);

                    for (var z = 0; z < result_brand.length; z++) {
                        final_results.push(result_brand[z])
                    }
                }
            }
            break;
    }
    switch (sort) {
        case "asc": final_results.sort((a, b) => {
            if (a.price == b.price) {
                return 0;
            }
            return a.price < b.price ? -1 : 1;
        }
        )
            break;
        case "desc": final_results.sort((a, b) => {
            if (a.price == b.price) {
                return 0;
            }
            return a.price > b.price ? -1 : 1;
        }
        )
            break;
        case "alfab": final_results.sort((a, b) => {
            if (a.name == b.name) {
                return 0;
            }
            return a.name < b.name ? -1 : 1;
        }
        )
            break;
    }
    myWhatches(final_results.slice(0, limita));
}

// imi cauta numele selectat in array-urile de ceasuri
function search_name(lista_watches, text) {
    if (text.length == 0) {
        return lista_watches;
    }
    var results = [];
    for (var i = 0; i < lista_watches.length; i++) {
        
        if (lista_watches[i].name.toLowerCase().search(text.toLowerCase()) > -1) {

            results.push(lista_watches[i]);
        }
    }
    return results;
}

//in fct de butonul selectat imi cauta produsul in lista de ceasuri
function search_brands(lista_watches, text) {
    if (text.length == 0) {
        return lista_watches;
    }
    var results = [];
    for (var i = 0; i < lista_watches.length; i++) {
        if (lista_watches[i].brand.toLowerCase().search(text.toLowerCase()) > -1) {
            results.push(lista_watches[i]);
        }
    }
    return results;
}

//.................
var select = document.getElementById("sort");
select.addEventListener("change", select_price);

function select_price(e) {
    var search_text = get_search_text();
    var search_brand = get_search_brand();
    var result_page = document.getElementById("result");
    search_product(search_text, search_brand, this.value, result_page.value)
}

//..................
var result_page = document.getElementById("result");
result_page.addEventListener("change", select_number);

function select_number(e) {
    var search_text = get_search_text();
    var search_brand = get_search_brand();
    var select = document.getElementById("sort");
    search_product(search_text, search_brand, select.value, this.value)
}
