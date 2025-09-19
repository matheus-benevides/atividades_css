function json() {
    var obj_form = {
        nome: "",
        idade: "",
        telefone: "",
        endereco: "",
        planeta: "",
        raca: "",
        trabalho: "",
        sabor: "",
        tamanho: "",
        obs: "",
    }
    var el_nome = document.getElementById("nome");
    obj_form.nome = el_nome.value;

    var el_idade = document.getElementById("idade");
    obj_form.idade = el_idade.value;

    var el_telefone = document.getElementById("telefone");
    obj_form.telefone = el_telefone.value;

    var el_endereco = document.getElementById("endereco");
    obj_form.endereco = el_endereco.value;

    var el_planeta = document.getElementById("planeta");
    obj_form.planeta = el_planeta.value;

    var el_raca = document.getElementById("raca");
    obj_form.raca = el_raca.value;

    var el_trabalho = document.querySelector("input[name='trabalho']:checked");
    obj_form.trabalho = el_trabalho.value;

    var el_sabor = document.querySelector("input[name='acaiPref']:checked");
    obj_form.sabor = el_sabor.value;

    var el_tamanho = document.querySelector("input[name='tamanho']:checked")
    obj_form.tamanho = el_tamanho.value;

    var el_obs = document.getElementById("obs");
    obj_form.obs = el_obs.value;

    var json = JSON.stringify(obj_form, null, "");
    document.write("<h1>Dados JSON:</h1>");
    document.write(json);
}
