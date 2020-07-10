# OBJETIVO
Consumir uma API e, com o resultado criar uma aplicação simulando uma plataforma online de filmes.

# REQUISITOS
- O projeto deverá ser desenvolvido preferencialmente em Angular
- Pré-processador css: SCSS ou SASS
- Caso queira, poderá utilizar Bootstrap 4
- Projeto consiste em 4 telas: Perfil, Filmes Favoritos, Lista de Filmes e Detalhes do Filme
- As telas deverão estar em rotas distintas
- O projeto deverá seguir o seguinte layout:
https://xd.adobe.com/spec/da86c0cd-ee39-4494-58d3-015a8e658e56-acb7/
- Consumir o seguinte endpoint para listar os filmes: https://api-movies.linkapi.com.br/v1/movies

# BUGS
-Feed de filmes:
Quando o filtro de favoritos está ativado, ao clicar no filme ele redireciona para outro filme (Aparentemente a rota está pegando o index do array de filmes favoritos e jogando o usuário na tela do array de filmes normal).
Mensagem de filtros não encontrados não está aparecendo ao digitar algo que não foi encontrado no input. (Porém funciona corretamente no filtro de favoritos).
Ainda não está salvando os favoritos por usuário.

-Detalhes do filme:
Ainda não consegui fazer o botão de favorito nessa pagina.
Ainda não coloquei a imagem do "rated" nas subcategorias.

"Ta tudo beleza, tirando todos os defeitos está perfeito!" - Meu pai.
