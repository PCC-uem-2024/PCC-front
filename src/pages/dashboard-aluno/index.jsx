import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { MeusDados } from '../dashboard-aluno/meus-dados'
import { MinhasSolicitacoes } from './minhas-solicitacoes'
import { NovaSolicitacao } from './nova-solicitacao'

export function DashboardAluno() {
  return (
    <div className="h-dvh flex justify-center mt-8">
      <div className="w-2/3">
        <div>
          <h2 className="text-4xl font-black">Boas vindas</h2>
        </div>
        <div className="my-6">
          <span>
            Acesse os atalhos do portal para acompanhar o andamento das
            solicitações!
          </span>
        </div>
        <div>
          <Tabs defaultValue="minhas-solicitacoes" className="w-full">
            <TabsList className="md:w-auto w-full">
              <TabsTrigger value="minhas-solicitacoes">
                Minhas solicitações
              </TabsTrigger>
              <TabsTrigger value="nova-solicitacao">
                Nova solicitação
              </TabsTrigger>
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

export default DashboardAluno
