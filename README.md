##Documentatie proiect:

##“Magazin online – ceasuri”



Dirvariu Mirela Andreea,
Frontend, Javascript - Wantsome
Grupa 4

Scopul acestui proiect este de a implementa un site web ce ofera posibilitatea utilizatorilor sa vizualizeze si sa achizitioneze  ceasuri de mana. 
Pentru a construi acest sistem am folosit urmatoarele tehnologii:
-	 HTML5 – (Hyper Text Markup Language)
-	 CSS3 – (Cascading Style Sheets and CSS Object Model)
-	Javascript

  Site-ul poate fi accesat folosind orice browser web iar punctul de intrare in site este pagina de “Index” iar de aici utilizatorul are linkuri catre toate paginile site-ului dupa cum urmeaza:
-	Home;
-	Pagina produse;
-	Register;
-	Login;
-	Contact.

##Home:
Pagina “Home” este o pagina introductiva unde utilizatorul poate vizualiza un carusel cu o lista de imagini unde la fiecare 0.6 secunde va avea loc un “transition” cu imagini reprezentative firmelor de top;
- un header cu o lista de link-uri catre toate categoriile de ceasuri: pentru barbati “Men’s watches”, pentru femei “Women’s watches”, pentru copii “Kid’s watches”, ceasuri inteligente “SmartWatches” si curele pentru ceasuri “Belts”;
-	un meniu de unde poate accesa sectiunea de inregistrare si formularul 
de autentificare, fiind construit  cu elemente de tip <a>;
-	un buton de “Contact us” pe care daca va apasa va ajunge la pagina de contact.
Folosind meniurile de mai sus utilizatorul are ca si posibilitati de navigare accesarea paginii de inregistrare sau accesarea diferitelor categorii de produse.
Register:
Daca acceseaza pagina “Register”  utilizatorul va trebui sa completeze un formular cu <input> speciale email si password, iar dupa ce va da click pe butonul de “Sign up” toate datele din <input> vor fi trimise catre server-ul local pentru autentificare si apoi daca a completat corect campurile, serverul va da accept si in mod automat se va creea un username ce va putea fi utilizat in viitor la fiecare accesare a site-ului printr-un simplu “mouseover” pe butonul de “Login”;
Pagina de produse:
Daca alege sa mearga la vizualizarea produselor utilizatorul va avea acces implicit la lista de ceasuri barbatesti, iar celelalte categorii pot fi accesate folosind link-urile din <header>.
Dupa un click pe oricare din categoriile din <header>  utilizatorul va putea gasi o varietate de ceasuri afisate in pagina prin manipularea DOM-ului – (Document Object Model) cu ajutorul careia am reusit sa ofer posibilitatea utilizatoarului sa poata vizualiza un produs caracterizat printr-o imagine, detalii si pret. In structura HTML a produsului am folosit elemente de tip <img> pentru afisarea imaginii, un element de tip <p> pentru detalii si un element de tip <h3> pentru pret.
Pentru achizitionarea unui produs utilizatorul are acces la un buton “Your cart”, ce reprezinta un <table> cu un <theader>, un <tbody> si un <tfooter>; unde va putea vedea in timp real numarul de produse selectate spre a fi cumparate prin accesarea butonului “Add to cart” si la un “mousehover” pe “Your cart” va putea vizualiza produsele selectate alaturi de detaliile: pret, cantitate – ce  poate fi modificata in momentul vizualizarii cosului de cumparaturi (cart) in functie de numarul de produse dorite accesand elementul <input> cu atributul “number”; pretul total reprezentand intreaga valoare a comenzii ce este calculat in mod automat in functie de cantitate si valoarea elementara a fiecarui produs. 
Fiecare comanda poate fi finalizata apasand tasta de “Buy now” in vederea stabilirii eventualelor date de livrare a produselor;
In aceeasi pagina utilizatorul poate selecta/ cauta produsul dorit dupa un detaliu (brand, culoare, dimensiuni, etc) completand intr-un <input> de tip “text” si apoi apasand butonul de tip “submit” cu valoarea “Search”. 
In partea stanga a ecranului se poate gasi o lista de “Brand”, aceasta fiind inca o metoda de filtrare, unde poate selecta cele mai cautate branduri cu cea mai relevanta rata de cautare: Rolex, Seiko, Sekonda, Fossil si Pulsar.
“Sort by” si “Result per page” sunt doua elemente de tip <select> ce pot face mai usoara si placuta vizionarea si de asemenea experienta utilizarii site-ului oferi posibilitatea de a sorta produsele dupa pret si numarul produselor dorite pe pagina curenta.
Pentru o vizualizare cat mai placuta a fiecarui detaliu pe langa elementele din HTML (<div>, <img>, <table>, <form>, <p>, <h1>, <h2>, <h3>, <i>, <select>, <button>, <ul>, <li>, <input>, <label>, <tr>, <td>, <th>, etc ) am aplicat si cunostiintele din CSS (selectors, box model, position, display, backgrounds, floating, height, width, etc).
A treia tehnologie utilizata in proiect este Javascript, cu ajutorul caruia am reusit sa adaug elemente HTML noi, sa le modific pe cele deja existente si sa adaug actiuni sau evenimente asociate diferitelor tipuri de elemente HTML ca de exemplu: la un simplu mouseover deasupra unor elemente poate conduce la directionarea catre  alte pagini ale site-ului, sau la un mouse-click pe butonul de “add-to-cart” va aparea numarul de produse in cosul de cumparaturi si in acelasi timp daca utilizatorul doreste poate vizualiza toate elemente selectate. 
Pentru crearea tuturor actiunilor de mai sus am utilizat Functii, reprezentand cea mai importanta parte a limbajului de programare ajutand programatorul sa structureze programul in mai multe “subprograme”, sa grupeze anumite secvente de cod in unitati unice in vederea reutilizarii lor astfel evitand repetarea. 
Un exemplu: pentru ca pagina de “Sign up” sa poata avea functionalitate a fost nevoie sa utilizez limbajul de programare Javascript si anume functia Fetch cu ajutorul careia am reusit ca dupa inregistrarea utilizatorului sa obtin un Token necesar in autorizarea acestuia catre site.
Contact:
-	In pagina de “Contact us” poate gasi toate variantele de contact ale firmei asezate intr-o lista de linkuri: email, numar de telefon si adresa.


Concluzii:
Pe parcursul implementarii acestui proiect am reusit sa dobandesc experinta in structurarea paginilor HTML, stilizarea aceastora cu CSS si manipularea continutului acestora utilizand Javascript. In plus am invatat bazele conceputului de User Experience (UX) si a aplicatilor “responsive”.



Bibliografia:

1.	Cursurile  wantsome https://edu.wantsome.ro/course/view.php?id=33
2.	 w3schools https://www.w3schools.com/
3.	MDN web docs 
https://developer.mozilla.org/en-US/docs/Web/JavaScript
4.	CSS-TRICKS https://css-tricks.com/almanac/properties/b/border/
5.	Google Fonts 
https://fonts.google.com/?selection.family=Noto+Serif+JP
6.	Font Awesome 
https://fontawesome.com/icons/address-book?style=regular
7.	Data Structures: Objects and Arrays 
https://eloquentjavascript.net/04_data.html


