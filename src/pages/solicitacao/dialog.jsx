import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export function DialogRecusa() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-2/4 bg-red-500 hover:bg-red-700">Recusar</Button>
      </DialogTrigger>
      <DialogContent className="h-96">
        <div className="flex flex-col py-4 h-60">
            <Label htmlFor="motivo" className="py-2 text-xl">
              Tese recusada
            </Label>
            <Textarea
              placeholder="Descreva o motivo da recusa e indique as correções necessárias para essa solicitação."
              id="motivo"
              className="h-full"
            />
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
          <Button type="submit">Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
