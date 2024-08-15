import React from 'react'
import { Button } from "@/components/ui/button"

function gotoDashboard() {
  window.location.href = '/'
}

export function NotFound() {
    return (
        <div className="container mx-auto mt-8 flex flex-col items-center justify-center">
          <h1 className="text-2xl">Página não encontrada</h1>
          <img style={{ height: '30rem' }} src="https://st3.depositphotos.com/4017441/15651/v/450/depositphotos_156516478-stock-illustration-the-robot-sits-reading-book.jpg"></img>
          <Button onClick={gotoDashboard} className="outline outline-2">
            Voltar para a página inicial 
        </Button>
        </div>
      )
}
