document.addEventListener('DOMContentLoaded', function() {
    const scannerButtons = document.querySelectorAll('.scanner-btn');
    scannerButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.open('scanner.html', '_blank');
        });
    });
});


// Dados dos scanners sem o nome do scanner
const data = {
    "AB12345": {
        nomePeca: "Peça A",
        setor: "Montagem",
        cliente: "Empresa Alpha",
        horario: "08:30/10:00"
    },
    "CD67890": {
        nomePeca: "Peça B",
        setor: "Soldagem",
        cliente: "Empresa Beta",
        horario: "09:15/11:00"
    },
    "EF23456": {
        nomePeca: "Peça C",
        setor: "Usinagem",
        cliente: "Empresa Gamma",
        horario: "10:00/12:30"
    },
    "GH78901": {
        nomePeca: "Peça D",
        setor: "Montagem",
        cliente: "Empresa Delta",
        horario: "08:45/09:30"
    },
    "IJ34567": {
        nomePeca: "Peça E",
        setor: "Soldagem",
        cliente: "Empresa Épsilon",
        horario: "10:30/11:45"
    },
    "KL89012": {
        nomePeca: "Peça F",
        setor: "Usinagem",
        cliente: "Empresa Zeta",
        horario: "09:00/10:15"
    },
    "MN45678": {
        nomePeca: "Peça G",
        setor: "Montagem",
        cliente: "Empresa Eta",
        horario: "08:15/09:45"
    },
    "OP90123": {
        nomePeca: "Peça H",
        setor: "Soldagem",
        cliente: "Empresa Teta",
        horario: "10:15/11:30"
    },
    "QR56789": {
        nomePeca: "Peça I",
        setor: "Usinagem",
        cliente: "Empresa Iota",
        horario: "09:30/10:50"
    },
    "ST01234": {
        nomePeca: "Peça J",
        setor: "Montagem",
        cliente: "Empresa Kappa",
        horario: "08:00/09:20"
    }
};

// Função para buscar informações do item pelo ID
function buscarItem(id) {
    return data[id] || null; // Retorna os dados se encontrados, ou null se não existirem
}

// Função para atualizar o HTML com os dados do item
function atualizarInformacoes(id) {
    const item = buscarItem(id);

    if (item) {
        // Atualizar os parágrafos com as informações do item
        const paragrafos = document.querySelectorAll(".p-info");
        paragrafos[0].innerText = `${id}`;
        paragrafos[1].innerText = `${item.nomePeca}`;
        paragrafos[2].innerText = `${item.setor}`;
        paragrafos[3].innerText = `${item.cliente}`;
        paragrafos[4].innerText = `${item.horario}`;

        // Alterar a imagem de acordo com o setor
        const imgBase = document.querySelector(".img-base");
        switch (item.setor) {
            case "Montagem":
                imgBase.src = "../assets/sourceScanner/sourceScanner/Montagem.png";
                break;
            case "Soldagem":
                imgBase.src = "../assets/sourceScanner/sourceScanner/Soldagem.png";
                break;
            case "Usinagem":
                imgBase.src = "../assets/sourceScanner/sourceScanner/Usinagem.png";
                break;
            default:
                imgBase.src = "../assets/sourceScanner/sourceScanner/Base.png"; // Imagem padrão
        }
    } else {
        console.warn("Item não encontrado!");
    }
}

// Exemplo de uso: captura o ID ao digitar e pressiona Enter
document.querySelector(".busca").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const id = this.value;
        atualizarInformacoes(id);
    }
});