document.getElementById('fetchButton').addEventListener('click', function() {
    const userId = document.getElementById('userId').value.trim();
    const userInfoDiv = document.getElementById('userInfo');

    if (!userId) {
        userInfoDiv.innerHTML = `<p style="color:red;">Por favor, digite um ID válido.</p>`;
        return;
    }

    // Simulando os dados diretamente no código
    const users = [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" }
    ];

    const user = users.find(user => user.id == userId);
    if (user) {
        userInfoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;
    } else {
        userInfoDiv.innerHTML = `<p style="color:red;">Usuário não encontrado.</p>`;
    }
});
