// Global variables for management
let productContainer = JSON.parse(localStorage.getItem("products")) || [];
let updateIndex = -1;

// DOM input elements selection
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDescription = document.getElementById("productDescription");
const productImage = document.getElementById("productImage");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

// Display existing products on start
displayProducts(productContainer);

// Handle main submit button click
function handleProductSubmit() {
    if (productName.value.trim() === "" || productPrice.value === "") {
        alert("Please fill in required fields!");
        return;
    }

    const file = productImage.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            saveProduct(e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        const defaultImg = "https://via.placeholder.com/50";
        saveProduct(updateIndex !== -1 ? productContainer[updateIndex].image : defaultImg);
    }
}

// Save or update product inside array and LocalStorage
function saveProduct(imageSrc) {
    const product = {
        name: productName.value.trim(),
        price: productPrice.value,
        category: productCategory.value.trim(),
        description: productDescription.value.trim(),
        image: imageSrc
    };

    if (updateIndex === -1) {
        // Add new product
        productContainer.push(product);
    } else {
        // Update existing product
        productContainer[updateIndex] = product;
        updateIndex = -1;
        submitBtn.textContent = "Add Product";
        submitBtn.className = "btn btn-primary px-4";
    }

    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProducts(productContainer);
    clearForm();
}

// Render product list inside HTML table
function displayProducts(list) {
    let rows = "";
    for (let i = 0; i < list.length; i++) {
        rows += 
            `<tr>
                <td>${i + 1}</td>
                <td><img src="${list[i].image}" class="product-img" alt="Product"></td>
                <td class="fw-bold">${list[i].name}</td>
                <td>$${list[i].price}</td>
                <td>${list[i].category}</td>
                <td class="text-muted small">${list[i].description}</td>
                <td>
                    <button class="btn btn-sm btn-outline-warning" onclick="setupUpdate(${i})">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${i})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>`
        ;
    }
    tableBody.innerHTML = rows;
}

// Clear all input values from form
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
    productImage.value = "";
}

// Delete product by index
function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProducts(productContainer);
}

// Load product data into inputs for updating
function setupUpdate(index) {
    updateIndex = index;
    productName.value = productContainer[index].name;
    productPrice.value = productContainer[index].price;
    productCategory.value = productContainer[index].category;
    productDescription.value = productContainer[index].description;

    submitBtn.textContent = "Update Product";
    submitBtn.className = "btn btn-warning px-4";
}
// Filter product list by name realtime
function searchProduct(term) {
    const matchedProducts = productContainer.filter(p => 
        p.name.toLowerCase().includes(term.toLowerCase())
    );
    displayProducts(matchedProducts);
}