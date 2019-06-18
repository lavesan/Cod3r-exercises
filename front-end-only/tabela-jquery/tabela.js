$(document).ready(_ => {
    const pessoas = [
        { nome: 'Ana', nota: 9.1 },
        { nome: 'Bianca', nota: 8.4 },
        { nome: 'Carlos', nota: 7.6 },
        { nome: 'Julia', nota: 9.7 },
    ];

    const table = $('#table');
    table.append('<thead>');
    table.append('<tbody>');

    const thead = table.find('thead');
    thead.append('<tr>');
    thead.children().append('<td>Nome</td>');
    thead.children().append('<td>Nota</td>');

    const tbody = table.find('tbody');
    pessoas.forEach(elem => {
        tbody.append('<tr>');
        tr = tbody.find('tr:last');
        tr.append(`<td>${elem.nome}</td>`);
        tr.append(`<td>${elem.nota}</td>`);
    })
})