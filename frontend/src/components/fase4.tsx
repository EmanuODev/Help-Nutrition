import { useState, type ComponentProps } from "react";
import { TDRefeicao } from "./td_refeicao";
import { THRefeicao } from "./th_refeicao";
import { twMerge } from "tailwind-merge";
import { DetalhesAlimentos } from "./detalhes_alimento";
import { BsInfoSquareFill } from "react-icons/bs";

type AlimentoProps = {

    "id": number,
    "Codigo": number,
    "descricacao_do_alimento": string,
    "Categoria": string,
    "Codigo_de_preparacao": number,
    "descricao_da_preparacao": string,
    "Energia_kcal": number,
    "Proteina_g": number,
    "Lipidios_totais_g": number,
    "Carboi_drato_g": number,
    "Fibra_alimentar_total_g": number,
    "Coles_terol_mg": number,
    "AG_Satura_dos_g": number,
    "AG_Mono_g": number,
    "AG_Poli_g": number,
    "AG_Lino_leico_g": number,
    "AG_Linole_nico_g": number,
    "AG_Trans_total_g": number,
    "Acucar_total_g": number,
    "Acucar_de_adicacao_g": number,
    "Calcio_mg": number,
    "Mag_nesio_mg": number,
    "Man_ganes_mg": number,
    "Fosforo_mg": number,
    "Ferro_mg": number,
    "Sodio_mg": number,
    "Sodio_de_adicao_mg": number,
    "Potas_sio_mg": number,
    "Co_bre_mg": number,
    "Zinco_mg": number,
    "Sele_nio_mcg": number,
    "Reti_nol_mcg": number,
    "Vitami_na_A_RAE_mcg": number,
    "Tiami_na_mg": number,
    "Ribofla_vina_mg": number,
    "Niaci_na_mg": number,
    "Niaci_na_NE_mg": number,
    "Pirido_xina_mg": number,
    "Coba_lami_na_mcg": number,
    "Folato_DFE_mcg": number,
    "Vitami_na_D_mcg": number,
    "Vitami_na_E_mg": number,
    "Vitami_na_C_mg": number,
    "created_at": Date,
    "updated_at": Date,

}

type MacronutrientesProps = {

    "Energia_kcal": number,
    "Carboi_drato_g": number,
    "Proteina_g": number,
    "Gorduras_Saturadas": number,
    "Gorduras_Trans": number,
    "Gorduras_Totais": number,
    "Acucar_total_g": number

}

interface Fase4Props extends ComponentProps<'div'> {

    refeicao: AlimentoProps[],
    macronutrientes: MacronutrientesProps

}

export function Fase4 ( props: Fase4Props ) {

    const [modal, setModal] = useState(false)
    const [index, setIndex] = useState(0)

    return (

        <div className="">

            <h1 className="">Refeição Recomendada:</h1>

            <table className="w-[100rem] rounded-lg overflow-hidden table-fixed">
                
                <thead className="">

                    <tr>
                        <THRefeicao className="w-[5%]">Nº</THRefeicao>
                        <THRefeicao className="w-[27%]">Nome</THRefeicao>
                        <THRefeicao className="w-[28%]">Categoria</THRefeicao>
                        <THRefeicao className="w-[20%]">Preparo</THRefeicao>
                        <THRefeicao className="w-[10%]">Calorias</THRefeicao>
                        <THRefeicao className="w-[10%] text-center pl-0">Ver mais</THRefeicao>
                    </tr>

                </thead>

                <tbody className="divide-y divide-gray-300">

                    {props.refeicao.slice(0, 5).map((alimento, index) =>
                        <tr key={alimento.id} className="">
                            <TDRefeicao>{index + 1}</TDRefeicao>
                            <TDRefeicao>{alimento.descricacao_do_alimento}</TDRefeicao>
                            <TDRefeicao>{alimento.Categoria}</TDRefeicao>
                            <TDRefeicao>{alimento.descricao_da_preparacao}</TDRefeicao>
                            <TDRefeicao>{alimento.Energia_kcal.toFixed(2).replace('.', ',')}</TDRefeicao>
                            <TDRefeicao className="text-center h-full w-full pl-0"><button onClick={() => {setModal(true); setIndex(index)}} className="h-full w-full flex justify-center items-center cursor-pointer"><BsInfoSquareFill className="text-[#42A5F5] text-3xl"/></button></TDRefeicao>
                        </tr>
                    )}

                </tbody>

            </table>

            {modal && <DetalhesAlimentos setModal={setModal} alimento={props.refeicao[index]}/>}
        </div>

    )
}