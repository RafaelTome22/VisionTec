document.addEventListener('DOMContentLoaded', function() {
    const scannerButtons = document.querySelectorAll('.scanner-btn');
    scannerButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.open('scanner.html', '_blank');
        });
    });
});


// Lista de peças com informações fornecidas
const pecas = [
    { id: "AC1234B", nome: "Scanner-X", peca: "Peça A", cliente: "Empresa Alpha", setor: "A1", chegada: "08:30", saida: "10:00" },
    { id: "CD67890", nome: "Scanner-Y", peca: "Peça B", cliente: "Empresa Beta", setor: "A2", chegada: "09:15", saida: "11:00" },
    { id: "EF23456", nome: "Scanner-Z", peca: "Peça C", cliente: "Empresa Gamma", setor: "B1", chegada: "10:00", saida: "12:30" },
    { id: "GH78901", nome: "Scanner-A", peca: "Peça D", cliente: "Empresa Delta", setor: "B2", chegada: "08:45", saida: "09:30" },
    { id: "IJ34567", nome: "Scanner-B", peca: "Peça E", cliente: "Empresa Épsilon", setor: "B3", chegada: "10:30", saida: "11:45" },
    { id: "KL89012", nome: "Scanner-C", peca: "Peça F", cliente: "Empresa Zeta", setor: "A3", chegada: "09:00", saida: "10:15" },
    { id: "MN45678", nome: "Scanner-D", peca: "Peça G", cliente: "Empresa Eta", setor: "A1", chegada: "08:15", saida: "09:45" },
    { id: "OP90123", nome: "Scanner-E", peca: "Peça H", cliente: "Empresa Teta", setor: "A2", chegada: "10:15", saida: "11:30" },
    { id: "QR56789", nome: "Scanner-F", peca: "Peça I", cliente: "Empresa Iota", setor: "B1", chegada: "09:30", saida: "10:50" },
    { id: "ST01234", nome: "Scanner-G", peca: "Peça J", cliente: "Empresa Kappa", setor: "B3", chegada: "08:00", saida: "09:20" }
];

function buscarPeca() {
    const idDigitado = document.getElementById("pecaIdInput").value;
    const peca = pecas.find(item => item.id === idDigitado);
    
    if (peca) {
        document.getElementById("nome").innerText = peca.nome.toUpperCase();
        document.getElementById("peca").innerText = peca.peca.toUpperCase();
        document.getElementById("idPeca").innerText = peca.id.toUpperCase();
        document.getElementById("cliente").innerText = peca.cliente.toUpperCase();
        document.getElementById("setor").innerText = peca.setor.toUpperCase();
        document.getElementById("chegadaSaida").innerText = `${peca.chegada.toUpperCase()} / ${peca.saida.toUpperCase()}`;
    } else {
        alert("Peça não encontrada. Verifique o ID digitado.");
        limparCampos();
    }
}

function limparCampos() {
    document.getElementById("nome").innerText = "-";
    document.getElementById("peca").innerText = "-";
    document.getElementById("idPeca").innerText = "-";
    document.getElementById("cliente").innerText = "-";
    document.getElementById("setor").innerText = "-";
    document.getElementById("chegadaSaida").innerText = "-";
}

