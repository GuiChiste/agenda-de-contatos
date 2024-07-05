const form = document.getElementById("formulario")
const nomeUser = [];
const telUser = [];
const emailUser = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha()
    atualizaTabela()
});

function adicionarLinha() {
    const inputNomeUser = document.getElementById('nome');
    const inputTelUser = document.getElementById('telephone');
    const inputEmailUser = document.getElementById('e-mail');

    if (nomeUser.includes(inputNomeUser.value)) {
        alert(`O usuário ${inputNomeUser.value} já foi inserido`)
    } else {
        nomeUser.push(inputNomeUser.value);
    telUser.push(inputNomeUser.value);
    emailUser.push(inputEmailUser.value);

    let linha = '<tr>';
    linha += `<td>${capitalizar(inputNomeUser.value)}</td>`;
    linha += `<td>${inputTelUser.value}</td>`;
    linha += `<td>${inputEmailUser.value}</td>`;
    linha += `</tr>`;

    linhas += linha;  
    }

    inputNomeUser.value = '';
    inputTelUser.value = '';
    inputEmailUser.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function capitalizar(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}


