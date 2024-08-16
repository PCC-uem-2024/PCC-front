import React from "react"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export function AvaliarSolicitacoes() {

    const solicitacoes = [
        {
            titulo: "Solicitação 1",
            discente: "Discente 1",
            data_envio: "01/01/2021",
            status: "Pendente",
            tipo_defesa: "Dissertação",
        },
        {
            titulo: "Solicitação TESTE DE TAMANHO 2421321321321",
            discente: "Discente 2",
            data_envio: "24/03/2024",
            status: "Pendente",
            tipo_defesa: "Dissertação",
        },
        {
            titulo: "Solicitação 3",
            discente: "Discente 3",
            data_envio: "13/03/2024",
            status: "Pendente",
            tipo_defesa: "Dissertação",
        }
    ]

    return (
      <div>
        {solicitacoes.map((solicitacao) => (
            <div className="flex flex-col my-6 gap-1">
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
                    <span className="font-medium"> Discente: </span> 
                    <span>{solicitacao.discente}</span>
                </div>
                <div>
                    <span className="font-medium"> Data de envio: </span> 
                    <span>{solicitacao.data_envio}</span>
                </div>
                <div>
                    <span className="font-medium"> Status: </span> <span>{solicitacao.status}</span>
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