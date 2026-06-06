const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Smartphone Galaxy S23",
        "preco": 3499.90,
        "categoria": "Celulares",
        "imagem": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
        "descricao": "Smartphone com 128GB de armazenamento, câmera de alta resolução e excelente desempenho.",
        "emEstoque": true
      },
      {
        "id": 2,
        "nome": "Notebook Dell Inspiron 15",
        "preco": 4599.00,
        "categoria": "Notebooks",
        "imagem": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
        "descricao": "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e estudos.",
        "emEstoque": false
      },
      {
        "id": 3,
        "nome": "iPhone 15 Pro",
        "preco": 9499.00,
        "categoria": "Celulares",
        "imagem": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
        "descricao": "Chip A17 Pro em titânio com câmera de 48MP e Dynamic Island.",
        "emEstoque": true
      },
      {
        "id": 4,
        "nome": "MacBook Air M3",
        "preco": 12499.00,
        "categoria": "Notebooks",
        "imagem": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
        "descricao": "Ultrafino com chip M3, tela Liquid Retina de 13,6 polegadas e até 18h de bateria.",
        "emEstoque": true
      },
      {
        "id": 5,
        "nome": "PlayStation 5",
        "preco": 4299.90,
        "categoria": "Games",
        "imagem": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80",
        "descricao": "Console de última geração com SSD ultra-rápido, ray-tracing e 4K a 120fps.",
        "emEstoque": true
      },
      {
        "id": 6,
        "nome": "Controle Xbox Series X",
        "preco": 449.90,
        "categoria": "Games",
        "imagem": "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80",
        "descricao": "Controle sem fio com gatilhos texturizados e conexão USB-C.",
        "emEstoque": true
      },
      {
        "id": 7,
        "nome": "AirPods Pro 2",
        "preco": 2199.00,
        "categoria": "Acessórios",
        "imagem": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&q=80",
        "descricao": "Cancelamento ativo de ruído, Transparência adaptativa e áudio espacial personalizado.",
        "emEstoque": true
      },
      {
        "id": 8,
        "nome": "Teclado Mecânico Keychron K8",
        "preco": 699.90,
        "categoria": "Acessórios",
        "imagem": "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80",
        "descricao": "Layout TKL hot-swap, retroiluminação RGB, compatível com Mac e Windows.",
        "emEstoque": false
      },
      {
        "id": 9,
        "nome": "Monitor LG UltraWide 34\"",
        "preco": 3299.00,
        "categoria": "Acessórios",
        "imagem": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
        "descricao": "Painel IPS 21:9 com resolução QHD, 144Hz e cobertura de 99% sRGB.",
        "emEstoque": true
      },
      {
        "id": 10,
        "nome": "Motorola Edge 50 Pro",
        "preco": 3199.90,
        "categoria": "Celulares",
        "imagem": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80",
        "descricao": "Tela pOLED curva 144Hz, carregamento 125W TurboPower e câmera de 50MP.",
        "emEstoque": true
      }
    ]
  }

// getElementById
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
// querySelector
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.querySelector("#btnRender");

function formatPrice(preco) {
    return `R$ ${preco.toFixed(2)}`;
}

function createProductCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);
    card.style.backgroundColor = "#f8f8f8";

    const nome = document.createElement("h3");
    nome.textContent = produto.nome;

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;

    const preco = document.createElement("p");
    preco.textContent = formatPrice(produto.preco);

    const categoria = document.createElement("p");
    categoria.textContent = produto.categoria;

    const btnDetalhes = document.createElement("button");
    btnDetalhes.textContent = "Ver detalhes";
    btnDetalhes.addEventListener("click", () => {
        showProductDetails(produto);
    });

    const btnDestacar = document.createElement("button");
    btnDestacar.textContent = "Destacar";
    btnDestacar.addEventListener("click", () => {
        card.classList.toggle("highlight");
    });

    card.appendChild(nome);
    card.appendChild(imagem);
    card.appendChild(preco);
    card.appendChild(categoria);
    card.appendChild(btnDetalhes);
    card.appendChild(btnDestacar);

    return card;
}

function renderProducts(produtos) {
    productList.innerHTML = "";
    produtos.forEach(produto => {
        const card = createProductCard(produto);
        productList.appendChild(card);
    });
    // querySelectorAll obrigatório
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        console.log("Produto ID:", card.dataset.id);
    });
}

function renderCategories() {
    categorySelect.innerHTML = "";
    const optionTodas = document.createElement("option");
    optionTodas.value = "Todas";
    optionTodas.textContent = "Todas";
    categorySelect.appendChild(optionTodas);

    const categorias = [...new Set(
        data.produtos.map(produto => produto.categoria)
    )];
    categorias.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria;
        option.textContent = categoria;
        categorySelect.appendChild(option);
    });
}

function showProductDetails(produto) {
    productDetails.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Estoque:</strong> ${
            produto.emEstoque ? "Disponível" : "Indisponível"
        }</p>
        <p><strong>Descrição:</strong> ${produto.descricao}</p>
    `;
}

function filterProducts() {
    const texto = searchInput.value.toLowerCase();
    const categoria = categorySelect.value;
    return data.produtos.filter(produto => {
        const nomeValido =
            produto.nome.toLowerCase().includes(texto);
        const categoriaValida =
            categoria === "Todas" ||
            produto.categoria === categoria;
        return nomeValido && categoriaValida;
    });
}

searchInput.addEventListener("input", () => {
    renderProducts(filterProducts());
});

categorySelect.addEventListener("change", () => {
    renderProducts(filterProducts());
});

btnRender.addEventListener("click", () => {
    renderProducts(filterProducts());
});

renderCategories();
renderProducts(data.produtos);