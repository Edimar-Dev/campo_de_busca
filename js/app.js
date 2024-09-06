function pesquisar (){

    let section = document.getElementById("resultado-pesquisa");
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p><strong>Nenhuma informação digitada. Você precisa inserir no campo.</strong></p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
       //console.log(dado.titulo.includes(campoPesquisa)); 
       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                    <p  class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Cotação em Tempo Real</a>
            </div>`
        }; 
    };
      
    if(!resultado) {
        resultado = "<p><strong>Informação não disponível em nossa base de dados.</strong></p>"
    }
    
    section.innerHTML = resultado;
};






