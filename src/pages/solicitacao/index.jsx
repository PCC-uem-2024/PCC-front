import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { Link, useParams } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { DialogRecusa } from './dialog'

export function Solicitacao() {
  const { id } = useParams()
  const [hasPermission, setHasPermission] = useState(localStorage.getItem('role') === '[ROLE_ADMIN]')

  return (
    <div className="flex justify-center mt-8 pb-5">
      <div className="w-2/3 border border-slate-200 p-3 rounded-md">
        <Link to="/">
          <Button variant="link" className="w-32">
            <ArrowLeft> </ArrowLeft>
            Voltar
          </Button>
        </Link>
        <div className="p-8">
          <div className="mb-4 flex space-x-4">
            <Tabs defaultValue="mestrado" className="w-full">
              <TabsList className="md:w-auto w-full disable">
                <TabsTrigger value="mestrado">Mestrado</TabsTrigger>
                <TabsTrigger value="doutorado">Doutorado</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Você apresentará:</Label>
                <RadioGroup className="space-y-1" defaultValue="exame">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem disabled={!hasPermission} value="exame" id="exame" />
                    <Label htmlFor="exame">Exame de Qualificação</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem disabled={!hasPermission} value="defesa" id="defesa" />
                    <Label htmlFor="defesa">Defesa</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Modalidade da apresentação:</Label>
                <RadioGroup className="space-y-1" defaultValue="presencial" disabled={!hasPermission}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem disabled={!hasPermission} value="presencial" id="presencial" />
                    <Label htmlFor="presencial">Presencial</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem disabled={!hasPermission} value="remota" id="remota" />
                    <Label htmlFor="remota">Remota</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem disabled={!hasPermission} value="hibrida" id="hibrida" />
                    <Label htmlFor="hibrida">Híbrida</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="data">Data</Label>
                <Input id="data" type="date" defaultValue="2024-10-07" disabled={!hasPermission} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="horario">Horário</Label>
                <Input id="horario" type="time" defaultValue="14:00" disabled={!hasPermission} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input id="titulo" placeholder="Bla bla bla bla" disabled={!hasPermission} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orientador">Nome completo do orientador</Label>
                <Input id="orientador" placeholder="José da Silva" disabled={!hasPermission} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="coorientador">
                  Nome completo do coorientador
                </Label>
                <Input id="coorientador" placeholder="Caso houver" disabled={!hasPermission} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="membro1">Nome completo do membro titular 1</Label>
              <Input id="membro1" placeholder="José da Silva" disabled={!hasPermission} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="membro2">Nome completo do membro titular 2</Label>
              <Input id="membro2" placeholder="José da Silva" disabled={!hasPermission} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="membro3">Nome completo do membro titular 3</Label>
              <Input id="membro3" placeholder="José da Silva" disabled={!hasPermission} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="membro4">Nome completo do membro titular 4</Label>
              <Input id="membro4" placeholder="José da Silva" disabled={!hasPermission} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="membro5">Nome completo do membro titular 5</Label>
              <Input id="membro5" placeholder="José da Silva" disabled={!hasPermission} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="suplente1">
                  Nome completo do membro suplente 1
                </Label>
                <Input id="suplente1" placeholder="José da Silva" disabled={!hasPermission} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="suplente2">
                  Nome completo do membro suplente 2
                </Label>
                <Input id="suplente2" placeholder="José da Silva" disabled={!hasPermission} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Anexar arquivos necessários</Label>
              <div className="border rounded-md p-4">
                <p className="text-muted-foreground">
                  Inserir arquivos em .pdf
                </p>
              </div>
            </div>
            {hasPermission && (
              <div className="flex justify-between gap-5">
              <DialogRecusa></DialogRecusa>
                <Button className="w-2/4 bg-green-500 hover:bg-green-700">
                  Aceitar
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}