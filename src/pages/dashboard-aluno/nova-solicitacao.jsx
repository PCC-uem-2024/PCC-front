import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const formSchema = z.object({
    modalidade: z.string(),
    data: z.string(),
    horario: z.string(),
    titulo: z.string(),
    orientador: z.string(),
    coorientador: z.string().optional(),
    membroTitular1: z.string(),
    membroTitular2: z.string(),
    membroTitular3: z.string(),
    membroTitular4: z.string(),
    membroTitular5: z.string(),
    suplente1: z.string(),
    suplente2: z.string(),
    emailSuplente1: z.string().email(),
    emailSuplente2: z.string().email(),
});

export function NovaSolicitacao() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            modalidade: "",
            data: "",
            horario: "",
            titulo: "",
            orientador: "",
            coorientador: "",
            membroTitular1: "",
            membroTitular2: "",
            membroTitular3: "",
            membroTitular4: "",
            membroTitular5: "",
            suplente1: "",
            suplente2: "",
            emailSuplente1: "",
            emailSuplente2: "",
        },
    });

    const [selectedTab, setSelectedTab] = useState("Mestrado");

    function onSubmit(values) {
        alert("Solicitação enviada");
        console.log(values);
    }

    return (
        <div className="border border-slate-200 p-5 rounded-md space-y-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="mb-5">
                    <TabsTrigger value="Mestrado">Mestrado</TabsTrigger>
                    <TabsTrigger value="Doutorado">Doutorado</TabsTrigger>
                </TabsList>
                <TabsContent value={selectedTab}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {/* Seção: Você apresentará */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Você Apresentará</h3>
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup defaultValue="Exame de Qualificação">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Exame de Qualificação" />
                                                <FormLabel>Exame de Qualificação</FormLabel>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Defesa" />
                                                <FormLabel>Defesa</FormLabel>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            </div>

                            {/* Seção: Modalidade de Apresentação */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Modalidade da Apresentação</h3>
                                <FormField
                                    control={form.control}
                                    name="modalidade"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <RadioGroup {...field}>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Presencial" />
                                                        <FormLabel>Presencial</FormLabel>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Remota" />
                                                        <FormLabel>Remota</FormLabel>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Híbrida" />
                                                        <FormLabel>Híbrida</FormLabel>
                                                    </div>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Seção: Dados do Evento */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Dados do Evento</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Data */}
                                    <FormField
                                        control={form.control}
                                        name="data"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Data</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Horário */}
                                    <FormField
                                        control={form.control}
                                        name="horario"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Horário</FormLabel>
                                                <FormControl>
                                                    <Input type="time" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Título */}
                                    <FormField
                                        control={form.control}
                                        name="titulo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Título</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Orientador */}
                                    <FormField
                                        control={form.control}
                                        name="orientador"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nome completo do orientador</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Coorientador */}
                                    <FormField
                                        control={form.control}
                                        name="coorientador"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nome completo do coorientador</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Caso houver" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Seção: Dados da Banca */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Dados da Banca</h3>
                                <div className="grid md:grid-cols-1 gap-4">
                                    {/* Membros titulares */}
                                    {[...Array(5)].map((_, i) => (
                                        <FormField
                                            key={i}
                                            control={form.control}
                                            name={`membroTitular${i + 1}`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Membro titular {i + 1}</FormLabel>
                                                    <Select {...field}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Nome completo titular" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value={`Titular ${i + 1}`}>Titular {i + 1}</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}

                                    {/* Membros suplentes */}
                                    {[...Array(2)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <FormField
                                                control={form.control}
                                                name={`suplente${i + 1}`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nome completo do membro suplente {i + 1}</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`emailSuplente${i + 1}`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>E-mail membro suplente {i + 1}</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Seção: Anexos */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Anexos</h3>
                                <FormField
                                    control={form.control}
                                    name="anexos"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Documentos anexos</FormLabel>
                                            <FormControl>
                                                <Input type="file" {...field} multiple />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Enviar Solicitação
                            </Button>
                        </form>
                    </Form>
                </TabsContent>
            </Tabs>
        </div>
    );
}
