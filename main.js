$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#b-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val()
        const descr = $('#descricao').val()
        const novoItem = $('<li style="Display: none;"></li>')

        $(`<h3>${nomeTarefa}</h3>`).appendTo(novoItem);
        $(`
        <p>${descr}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3500);
        $('#nome-tarefa').val('');
        $('#descricao').val('');
    })
})