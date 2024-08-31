import React from "react"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export function MinhasSolicitacoes() {

    const solicitacoes = [
        {
            titulo: "Tal tal tal",
            data_envio: "24/03/2024",
            status: "Aguardando avaliação do orientador",
            tipo_defesa: "Dissertação de Mestrado",
        },
        {
            titulo: "Tal tal tal",
            data_envio: "24/03/2024",
            status: "Aguardando avaliação do orientador",
            tipo_defesa: "Dissertação de Mestrado",
        },
        {
            titulo: "Tal tal tal",
            data_envio: "24/03/2024",
            status: "Aguardando avaliação do orientador",
            tipo_defesa: "Dissertação de Mestrado",
        }
    ]

    return (
      <div>
        {solicitacoes.map((solicitacao, index) => (
            <div key={index} className="flex flex-col my-6 gap-1">
                <div className="flex mb-1 font-black">
                    <div className="hover:underline cursor-pointer">
                        <Link to={`/`}>
                        <span className="text-xl"> Título: </span> 
                        <span>{solicitacao.titulo}</span> 
                        <FontAwesomeIcon className="mx-3" icon={faUpRightFromSquare} />
                        </Link>
                    </div>
                </div>
                <div>
                    <span className="font-medium"> Data de envio: </span> 
                    <span>{solicitacao.data_envio}</span>
                </div>
                <div>
                    <span className="font-medium"> Status: </span> 
                    <span>{solicitacao.status}</span>
                </div>
                <div>
                    <span className="font-medium"> Tipo de defesa: </span> 
                    <span>{solicitacao.tipo_defesa}</span>
                </div>
                <hr className="my-2" />
            </div>
        ))}
      </div >
    )
}
