import api from "../api";

export async function pegarRepositoriosDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`)
        return resultado.data
        // como resultado será um Array. colocar .data para pegar apenas os dados
        // e colocamos também a posição 0 para retornar a primeira posição
        // do que estamos buscando
    }

    catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizarRepositoriosDoUsuario(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        })
        return "Sucesso"
        // como resultado será um Array. colocar .data para pegar apenas os dados
        // e colocamos também a posição 0 para retornar a primeira posição
        // do que estamos buscando
    }

    catch (error) {
        console.log(error)
        return "Erro"
    }
}