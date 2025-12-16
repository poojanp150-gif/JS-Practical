let product =
    [
        {
            "id": "1",
            "title": "Reese Grey Seersucker Shirt",
            "price": "999",
            "image": "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2469-03_1.jpg?v=1746688885&quality=80",
            "category": "Shirt"
        },
        {
            "id": "2",
            "title": "Snap Button Suede Stretch Jacket",
            "price": "3099",
            "image": "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4msk8779-01_1.jpg?v=1764785495&quality=80",
            "category": "Jackets"
        },
        {
            "id": "3",
            "title": "Unisex Running Shoes",
            "price": "2000",
            "image": "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/SH0148-01-42-16.jpg?v=1740963021&quality=80",
            "category": "Shoes"
        },
        {
            "id": "4",
            "title": "Men's Slim Fit Jeans",
            "price": "3000",
            "image": "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/abbb1d76924b2b0791bc2d72e018ee19_47ad3ac2-6828-45f6-9be0-d9e227981804.webp?v=1725606087&quality=80",
            "category": "Jeans"
        }
    ]


var product_data = JSON.parse(localStorage.getItem("add_product")) || []


var edit = null



function display(filteredProducts = product_data) {
    let productList = document.querySelector("#productList")
    productList.innerHTML = ""
    filteredProducts.map((pro, index) => {
        let card = document.createElement("div")

        card.innerHTML = `
   <div class="card shadow-sm border-0 rounded-3" style="width: 18rem;">
    <img src="${pro.image}" id="previewMain" class="card-img-top card-img rounded-top" 
         style="cursor:pointer; object-fit: cover; height: 400px;" alt="main image">

    <div class="card-body">
        <h5 class="card-title fw-bold">${pro.title}</h5>

        <p class="text-muted small mb-1">⭐₹${pro.price}</p>
        <p class="badge bg-info text-dark">${pro.category}</p>
    </div>

    <div class="card-footer bg-white border-0 d-flex justify-content-between">
        <a href="#top">
        <button type="button" onclick="Edit(${index})" class="btn btn-sm btn-primary px-3">
            Edit
        </button></a>
       <button type="button" onclick="delete_cloath(${index})" class="btn btn-sm btn-danger px-3">
    Delete
</button>

    </div>
</div>
    `
        productList.appendChild(card)
    })
}
display()

document.querySelector("#Main_Image").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            main_img = e.target.result;
            document.getElementById("previewMain").src = main_img;
        };
        reader.readAsDataURL(file);
    }
});


document.querySelector(".btn").addEventListener("click", () => {

    let title = document.getElementById("title").value
    let Rate = document.getElementById("Rate").value
    let categorySelect = document.getElementById("categorySelect").value


   

      let isValid = true;

    if (title === "") {
        document.getElementById("erra_title").textContent = "Product name is required";
        isValid = false;
    }
    if (Rate === "") {
        document.getElementById("erra_Rate").textContent = "Price required";
        isValid = false;
    }
    if (categorySelect === "") {
        document.getElementById("erra_Categories").textContent = "Add category";
        isValid = false;
    }
    if (!isValid) return;

 let addProduct = {
        id: product_data.length + 1,
        image: main_img,
        title: title,
        price: Rate,
        category: categorySelect,

    }

    if (edit == null) {
        product_data.push(addProduct)
    } else {
        product_data[edit] = {
            id: product_data[edit].id,
            image: main_img,
            title: title,
            price: Rate,
            category: categorySelect,

        };

        edit = null
    }
  

  

  localStorage.setItem("add_product", JSON.stringify(product_data));


    document.getElementById("title").value = "";
    document.getElementById("categorySelect").value = "";
    document.getElementById("Rate").value = "";
    document.getElementById("previewMain").src = "";
    display();
})



function delete_cloath(index) {

    product_data.splice(index, 1);

    localStorage.setItem("add_product", JSON.stringify(product_data));


    display();
}





let Edit = (index) => {
    let prductss = product_data[index];

    document.getElementById("title").value = prductss.title;
    document.getElementById("categorySelect").value = prductss.category;
    document.getElementById("Rate").value = prductss.price;
    document.getElementById("previewMain").src = prductss.image;
    main_img = prductss.image;

    edit = index;
}

var filteredData = [...product_data];

var sorting_pro = document.getElementById("sorting_pro")

sorting_pro.addEventListener("change", () => {
    let dataToSort = [...filteredData];

    if (sorting_pro.value == "high_to_low") {
        dataToSort.sort((a, b) => b.price - a.price);
    }
    else if (sorting_pro.value == "low_to_high") {
        dataToSort.sort((a, b) => a.price - b.price);
    }

    display(dataToSort);
});

var search = document.getElementById("search")
var searchbtn = document.getElementById("searchbtn")
searchbtn.addEventListener("click", () => {

    if (search.value != "") {
        filteredData = product_data.filter(data =>
            data.title.toLowerCase().includes(search.value.toLowerCase())
        );
        display(filteredData);

    } else {
        display(product_data)
    }

})

const dropdown_select = document.getElementById("category_dropdown_select");

product_data.forEach(categorydata => {
    const option = document.createElement("option");
    option.value = categorydata.category;
    option.textContent = categorydata.category;
    dropdown_select.appendChild(option);
});


dropdown_select.addEventListener("change", () => {
    const selectedCategory = dropdown_select.value;

    if (selectedCategory === "") {
        display(product_data);
    } else {
        const categoryFiltered = product_data.filter(item =>
            item.category === selectedCategory
        );
        display(categoryFiltered);
    }
});
