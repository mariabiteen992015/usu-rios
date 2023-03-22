let dados = [
    {
        email: "A",
        senha: "A"
    },
    {
        email: "Paulo@gmail.com",
        senha: "SenhaB"
    },
    {
        email: "Lucas@gmail.com",
        senha: "SenhaC"
    },
    {
        email: "Larissa@gmail.com",
        senha: "SenhaD"
    },
    {
        email: "Maria@gmail.com",
        senha: "SenhaE"
    },
    {
        email: "Bia@gmail.com",
        senha: "SenhaF"
    },
    {
        email: "Mathias@gmail.com",
        senha: "SenhaG"
    },
    {
        email: "Gustavo@gmail.com",
        senha: "SenhaH"
    },
    {
        email: "Maiza@gmail.com",
        senha: "SenhaI"
    },
    {
        email: "Carol@gmail.com",
        senha: "SenhaJ"
    }
]



let usuariologado = localStorage.getItem("usuariologado")


if (usuariologado != undefined) {


    let contjs = localStorage.getItem("contjs")
    if (contjs == 1) {
        localStorage.setItem("contjs", 2)
    } else {
        localStorage.removeItem("usuariologado")
        window.location.href = "./index.html"
    }

    let titulopg2 = document.querySelector("#ola")
    titulopg2.innerHTML += `${usuariologado}`




    let botlistar = document.querySelector("input.botlistar");
    botlistar.addEventListener("click", listar)

    function listar() {
        let div = document.querySelector('div.quadro')
        div.innerHTML = " "
        div.innerHTML += "<p class=titular>Lista de Usuários: </p><br><br>";

        let listar = document.querySelector('div.listar')
        for (let i = 0; i < dados.length; i++) {
            div.innerHTML += `<label>${dados[i].email}</label><br>`
        }
    }






    let botlimpar = document.querySelector("input.botlimpar");
    botlimpar.addEventListener("click", limpar)

    function limpar() {
        let div = document.querySelector('div.quadro')
        div.innerHTML = " "
    }





    let botsair = document.querySelector("input.botsair");
    botsair.addEventListener("click", sair)

    function sair() {
        let div = document.querySelector('div.quadro')
        div.innerHTML = " "
        botsair.addEventListener("click", window.location.href = './index.html')
    }






    let botdeletar = document.querySelector("input.botdeletar");
    botdeletar.addEventListener("click", deletar)

    function deletar() {
        let div = document.querySelector('div.quadro')
        div.innerHTML = " "
        div.innerHTML += "<p class=titular>Deletar Usuário: </p><br><br>";

        for (let i = 0; i < dados.length; i++) {
            div.innerHTML += `<div><input type="checkbox" id="${i}"><label> ${dados[i].email}</label></div><br>`
        }
        div.innerHTML += `<input type="button" value="deletar" class="excluir" id="excluir">`

        let excluir1 = document.querySelector("input#excluir");
        excluir1.addEventListener("click", excluir)
    }







    function excluir() {
        userdeletado = [""]
        for (let i = 0; i < dados.length; i++) {
            let checbox = document.getElementById(`${i}`);

            if (checbox.checked == true) {
                userdeletado[i] = 1
            }
            else {
                userdeletado[i] = 0
            }
        }

        for (let i = userdeletado.length - 1; i >= 0; i--) {
            if (userdeletado[i] == 1) {
                dados.splice(i, 1);//usado para apagar dados do vetor
            }
        }
        listar();
    }






    let botadicionar = document.querySelector("input.botadicionar");
    botadicionar.addEventListener("click", adicionar)

    function adicionar() {
        let div = document.querySelector('div.quadro');
        div.innerHTML = " ";
        div.innerHTML += "<p class=titular>Adicionar Usuário: </p><br><br>";
        div.innerHTML += ` <form>
    <label > Digite seu usuário:</label><br>
    <input class="inputuser" type="text"><br><br><br> 
    <label> Digite sua senha:</label><br>
    <input class="inputsenha" type="password"><br><br><br>
    <label> Confirme sua senha:</label><br>
    <input class="inputsenha2" type="password"><br><br>
    <input id="botadicionar1" value="Adicionar" type="button">
    </form>`

        let adicionar33 = document.querySelector("input#botadicionar1");
        adicionar33.addEventListener("click", adicionar1)
    }






    function adicionar1() {
        let novousuario = {
            email: document.querySelector('input.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }
        let senha2 = document.querySelector('input.inputsenha2').value

        if (novousuario.email != "" && novousuario.senha!= "" && senha2 != "") {
           
            if (novousuario.senha == senha2) {

                let repetida = 0
                for (let i = 0; i < dados.length; i++) {
                    if (dados[i].email == novousuario.email) {
                        repetida = 1
                    }
                }
                if (repetida == 0) {
                    dados.push(novousuario)
                    alert("Usuário adicionado com sucesso!")
                    listar()
                } else {
                    alert("Usuário já existe no cadastro, digite outro nome")
                    adicionar()
                }
            } else {
                alert("A senha é diferente da confirmação")
                adicionar()
            }
        } else{  
           alert("Preencha todos campos")
            adicionar()    
       }
    }





    let botatualizar = document.querySelector("input.botatualizar");
    botatualizar.addEventListener("click", atualizar)

    function atualizar() {
        let div = document.querySelector('div.quadro');
        div.innerHTML = " ";
        div.innerHTML += "<p class=titular>Atualizar dados do usuário: </p><br><br>";
        div.innerHTML += `<form>
    <label > Digite seu nome de usuário:</label><br>
    <input class="inputuser" type="text"><br><br>    
    <label> Digite sua senha atual:</label><br>
    <input class="inputsenha" type="password"><br><br> 
    <label > Digite novo nome de usuário:</label><br>
    <input class="inputuser1" type="text"><br><br>    
    <label> Digite nova senha:</label><br>
    <input class="inputsenha1" type="password"><br><br> 
    <label> Confirme sua senha:</label><br>
    <input class="inputsenha2" type="password"><br><br>
    <input id="botatualizar1" class="botatualizar1" value="Atualizar" type="button">
    </form>`
        let atualizar1 = document.querySelector("input#botatualizar1");
        atualizar1.addEventListener("click", botatualizar1)
    }






    function botatualizar1() {
        let nome = document.querySelector('input.inputuser').value
        let nome1 = document.querySelector('input.inputuser1').value
        let senha = document.querySelector('input.inputsenha').value
        let senha1 = document.querySelector('input.inputsenha1').value
        let senha2 = document.querySelector('input.inputsenha2').value

        let errosenha = 1
        let repetida = 0
        let indice = 0

        if (nome != "" && nome1!= "" && senha!= "" && senha1!= "" && senha2!= "") {
            if (senha1 == senha2) {



                for (let i = 0; i < dados.length; i++) {
                    if (dados[i].email == nome1) {
                        if (dados[i].email != nome) {
                            repetida = 1
                        }
                    }
                }
                if (repetida == 0) {
                    for (let i = 0; i < dados.length; i++) {
                        if (dados[i].email == nome) {


                            if ((dados[i].senha == senha)) {
                                errosenha = 0
                                indice = i
                                i = dados.length
                            }
                        }
                    }

                    if (errosenha == 0) {
                        let lista = document.querySelector('div.quadro')
                        dados[indice].email = nome1
                        dados[indice].senha = senha1
                        alert("Dados atualizados com sucesso")

                        listar()
                    } else {
                        alert("Login incorreto, favor verificar os dados, senha incorreta")
                        atualizar()
                    }
                } else {
                    alert("Login incorreto, favor verificar os dados, usuário incorreto")
                    atualizar()
                }

            } else {
                alert("As senhas não condizem")
                atualizar()
            }
        } else {
            alert("Preencha todos os dados")
            atualizar()
        }
    }


    let bottestar = document.querySelector("input.bottestar");
    bottestar.addEventListener("click", testar)

    function testar() {
        let lista = document.querySelector('div.quadro');
        lista.innerHTML = "<p class=titular>Testar Usuário: </p><br><br>";
        lista.innerHTML += `<form>
    <label > Nome de usuário:</label><br>
    <input class="inputuser" type="text"><br><br> 
    <label> Digite sua senha:</label><br>
    <input class="inputsenha" type="password"><br><br> 
    <input id="testar1" class="testar1" value="Logar" type="button">
    </form>`
        const inputtestar = document.querySelector("input#testar1")
        inputtestar.addEventListener("click", testar1)
    }

    function testar1() {

        let usersenha = {
            email: document.querySelector('input.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }          
            let erro = 1

            for (let i = 0; i < dados.length; i++) {
                if (dados[i].email == usersenha.email && dados[i].senha == usersenha.senha) {
                    erro = 0
                    i = dados.length
                }
            }
            if (erro == 0) {
                alert("Login realizado com sucesso!")
                testar()
            } else {
                alert("Login incorreto, favor verificar os dados, usuário ou senha incorretos")
                testar()
            }
         

    }

} else {


    localStorage.setItem("contjs", 1)

    let login = document.querySelector("input#login");
    login.addEventListener("click", funclogin)




    function funclogin() {


        let controle = 0
        let user = document.querySelector('input.Email').value
        let pass = document.querySelector('input.Senha').value
        let i2 = document.querySelector('div.inf')


        for (let i = 0; i < dados.length; i++) {

            if (user == dados[i].email && pass == dados[i].senha) {
                localStorage.setItem("usuariologado", dados[i].email)
                i = dados.length
                controle = 1
                window.location.href = "./listagem.html"
            }

        } if (controle == 0) {
            i2.innerHTML = " "
            i2.innerHTML += '<br><p2>Usuario não encontrado</p2>'
        }
    }
}