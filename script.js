// Simulação de banco de dados local
let usersData = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

// Exibe a lista de usuários ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    displayUserList();
});

// Função para listar os usuários
function displayUserList() {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = "<h3>Lista de Usuários</h3>";

    if (usersData.length > 0) {
        usersData.forEach(user => {
            userListDiv.innerHTML += `
                <div id="user-${user.id}">
                    <p class="user-item" onclick="showUserOptions(${user.id})">
                        <strong>${user.name}</strong> - ${user.email}
                    </p>
                    <div id="options-${user.id}" class="edit-form">
                        <input type="text" id="edit-name-${user.id}" value="${user.name}">
                        <input type="email" id="edit-email-${user.id}" value="${user.email}">
                        <button class= "salvar" onclick="saveUser(${user.id})">Salvar</button>
                        <button class= "remover" onclick="deleteUser(${user.id})" style="color: red;">Remover</button>
                    </div>
                </div>
            `;
        });
    } else {
        userListDiv.innerHTML += `<p style="color:red;">Nenhum usuário cadastrado.</p>`;
    }
}

// Exibir opções de edição/remover ao clicar no nome do usuário
function showUserOptions(userId) {
    document.getElementById(`options-${userId}`).style.display = "block";
}

// Salvar alterações no usuário
function saveUser(userId) {
    const newName = document.getElementById(`edit-name-${userId}`).value.trim();
    const newEmail = document.getElementById(`edit-email-${userId}`).value.trim();

    if (newName === "" || newEmail === "") {
        alert("Nome e email não podem estar vazios!");
        return;
    }

    const user = usersData.find(user => user.id === userId);
    if (user) {
        user.name = newName;
        user.email = newEmail;
        displayUserList();
    }
}

// Remover usuário
function deleteUser(userId) {
    usersData = usersData.filter(user => user.id !== userId);
    displayUserList();
}

// Adicionar novo usuário
document.getElementById('addUserButton').addEventListener('click', function() {
    const newName = document.getElementById('newName').value.trim();
    const newEmail = document.getElementById('newEmail').value.trim();

    if (newName === "" || newEmail === "") {
        alert("Nome e email não podem estar vazios!");
        return;
    }

    const newId = usersData.length > 0 ? usersData[usersData.length - 1].id + 1 : 1;
    usersData.push({ id: newId, name: newName, email: newEmail });

    document.getElementById('newName').value = "";
    document.getElementById('newEmail').value = "";

    displayUserList();
});
