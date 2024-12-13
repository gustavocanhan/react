import { FaRegCalendarCheck } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { LuFolderInput } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdDriveFolderUpload } from "react-icons/md";
import { LuScrollText } from "react-icons/lu";


let dados = [
    {id: 1, titulo: "Reserva de Sala", descricao: "Agende espaços para reuniões e eventos internos.", icone: <FaRegCalendarCheck />, link: "" },
    {id: 2, titulo: "Lista de Ramais", descricao: "Consulte números de contato dos setores e funcionários.", icone: <TbDeviceLandlinePhone />, link: "" },
    {id: 3, titulo: "SEI", descricao: "Sistema eletrônico para gestão de documentos e processos oficiais.", icone: <LuFolderInput />, link: "https://sei.prefeitura.sp.gov.br/" },
    {id: 4, titulo: "Diário Oficial", descricao: "Publicações oficiais de atos e decisões administrativas.", icone: <FaRegNewspaper />, link: "https://diariooficial.prefeitura.sp.gov.br/" },
    {id: 5, titulo: "SIMPROC Web", descricao: "Plataforma de gestão de processos e serviços públicos online.", icone: <MdDriveFolderUpload />, link: "https://simproc.prefeitura.sp.gov.br/Forms/login.aspx" },
    {id: 6, titulo: "Legislação Municipal", descricao: "Consulte leis e normas vigentes na administração pública.", icone: <LuScrollText />, link: "https://legislacao.prefeitura.sp.gov.br/" }
]

export default dados;