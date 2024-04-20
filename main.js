$('form').on('submit', function(e){
    e.preventDefault();
    
    const tarefaInsert = $('#atividade-lista').val()
    const novaTarefa = $(`
    <li>
        ${tarefaInsert}
    </li>`)
    novaTarefa.appendTo('ul')
    
    $(novaTarefa).on('click', function() {
    $(novaTarefa).css('text-decoration-line', 'line-through'); 
    })
    
})
