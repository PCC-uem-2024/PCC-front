import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AvaliarSolicitacoes } from './solicitacoes'
import { MeusDados } from './meus-dados'

export function DashboardGeral() {
  return (
    <div className="h-dvh flex justify-center mt-8">
        <div class="w-2/3">
            <div>
                <h2 className="text-4xl font-black"> Boas Vindas </h2>
            </div>
            <div className='my-6'>
                <span>
                Acesse os atalhos do portal para acompanhar o andamento das solicitações.
                </span>
            </div>
            <div>
                <Tabs defaultValue="solicitacoes" className="w-full">
                    <TabsList>
                        <TabsTrigger value="solicitacoes">Avaliar solicitações</TabsTrigger>
                        <TabsTrigger value="dados">Meus dados</TabsTrigger>
                    </TabsList>
                    <TabsContent value="solicitacoes">
                        <AvaliarSolicitacoes/>
                    </TabsContent>
                    <TabsContent value="dados">
                        <MeusDados/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
  )
}
