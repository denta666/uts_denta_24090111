// Login Validation
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Email dan Password tidak boleh kosong!");
        return;
    }

    // Tampilkan loading animasi
    document.body.insertAdjacentHTML("beforeend", `
        <div id="loading-screen" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        ">
            <div class="loader"></div>
        </div>
    `);

    // Delay sebelum redirect
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1500);
}

// Loader CSS
const loaderStyle = document.createElement("style");
loaderStyle.innerHTML = `
    .loader {
        width: 55px;
        height: 55px;
        border: 6px solid #ddd;
        border-top-color: #111;
        border-radius: 50%;
        animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(loaderStyle);


// Summary Data for Dashboard
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

function loadSummary() {
    document.getElementById("totalProducts").innerText = summary.totalProducts;
    document.getElementById("totalSales").innerText = summary.totalSales;
    document.getElementById("totalRevenue").innerText = summary.totalRevenue;
}

// Product List Data
const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

function loadProducts() {
    const table = document.getElementById("productTable");

    products.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>Rp ${product.price}</td>
            <td>${product.stock}</td>
            <td>
                <button class="edit-btn" onclick="editProduct('${product.name}')">✏️ Edit</button>
                <button class="delete-btn" onclick="deleteProduct(this)">🗑️ Delete</button>
            </td>
        `;

        table.appendChild(row);
    });
}

function editProduct(name) {
    alert(`Edit produk: ${name}`);
}

function deleteProduct(button) {
    if (confirm("Yakin hapus produk ini?")) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
}
