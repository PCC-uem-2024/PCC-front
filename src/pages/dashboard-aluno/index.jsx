import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MinhasSolicitacoes } from './minhas-solicitacoes'
import { NovaSolicitacao } from './nova-solicitacao'
import { MeusDados } from '../dashboard-geral/meus-dados'

export function DashboardAluno() {
  return (
    <div className="h-dvh flex justify-center mt-8">
      <div className="w-2/3">
        <div>
          <h2 className="text-4xl font-black">Boas vindas</h2>
        </div>
        <div className="my-6">
          <span>
            Acesse os atalhos do portal para acompanhar o andamento das solicitações!
          </span>
        </div>
        <div>
          <Tabs defaultValue="minhas-solicitacoes" className="w-full">
            <TabsList className="md:w-auto w-full">
              <TabsTrigger value="minhas-solicitacoes">Minhas solicitações</TabsTrigger>
              <TabsTrigger value="nova-solicitacao">Nova solicitação</TabsTrigger>
              <TabsTrigger value="meus-dados">Meus dados</TabsTrigger>
            </TabsList>
            <TabsContent value="minhas-solicitacoes">
              <MinhasSolicitacoes />
            </TabsContent>
            <TabsContent value="nova-solicitacao">
              <NovaSolicitacao />
            </TabsContent>
            <TabsContent value="meus-dados">
              <MeusDados />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default DashboardAluno;
