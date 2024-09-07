function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        alert("[ERRO] O campo de pesquisa não foi preenchido")
        section.innerHTML = "<p><strong>Nada foi encontrado </strong> </p>"
        return
    }

    campoPesquisa = campoPesquisa.toUpperCase()

    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toUpperCase()
        descricao = dado.descricao.toUpperCase()
        tags = dado.tags.toUpperCase()
        // Se o título existe
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Criando um novo elemento
            resultados += `
            <div class="item-resultado" >
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
            `
        }
    }
    if(!resultados){
        alert("[ERRO] O campo de pesquisa está incorreto")
        resultados = "<p><strong>Este nome não consta na lista de variantes, favor conferir a lista e tentar novamente </strong></p>"
    }
    
    section.innerHTML = resultados

}
