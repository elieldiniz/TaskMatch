import { XpProvider } from "@/app/contexts/XpContext";
import { TarefasProvider } from "@/app/contexts/TarefasContext";
import { RecadosProvider } from "@/app/contexts/painel/RecadosContext";
import { BadgesProvider } from "@/app/contexts/painel/BadgesContext";
import { UsuarioProvider } from "@/app/contexts/usuario/UsuarioContext";
import { ConquistasProvider } from "@/app/contexts/painel/ConquistasContext";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
  return (
    <UsuarioProvider>
      <XpProvider>
        <TarefasProvider>
          <RecadosProvider>
            <BadgesProvider>
              <ConquistasProvider>
                {children}
              </ConquistasProvider>
            </BadgesProvider>
          </RecadosProvider>
        </TarefasProvider>
      </XpProvider>
    </UsuarioProvider>
  );
}