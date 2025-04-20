'use client'
import { motion } from 'framer-motion'

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050] px-4 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-3xl bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-pink-400/30"
      >
        <h1 className="text-4xl font-extrabold text-pink-400 mb-6 text-center">Termos de Uso do TaskMatch</h1>
        <p className="text-gray-300 mb-8 text-center">
          Última atualização: 20 de abril de 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou utilizar o TaskMatch (“Aplicativo”), você declara ter lido, compreendido e aceito integralmente estes Termos de Uso e a nossa Política de Privacidade. Caso não concorde com qualquer disposição, por favor, não utilize o Aplicativo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">2. Cadastro, Conta e Segurança</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Para utilizar o TaskMatch, você deve ter pelo menos 13 anos de idade ou a idade mínima exigida em sua jurisdição.</li>
            <li>Você se compromete a fornecer informações verdadeiras, completas e atualizadas ao criar sua conta e perfil.</li>
            <li>É de sua responsabilidade manter a confidencialidade de suas credenciais de acesso. Notifique-nos imediatamente em caso de uso não autorizado de sua conta.</li>
            <li>Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos, a legislação vigente ou apresentem comportamento inadequado.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">3. Privacidade e Proteção de Dados Pessoais</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>O tratamento de dados pessoais no TaskMatch observa a <b>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</b>, o <b>Regulamento Geral de Proteção de Dados da União Europeia (GDPR)</b> e demais normas aplicáveis.</li>
            <li>Coletamos apenas os dados estritamente necessários para o funcionamento do aplicativo, como nome, e-mail, avatar, preferências, interações e dados de uso.</li>
            <li>Os dados são armazenados de forma segura, com uso de criptografia e controles de acesso, e não são compartilhados com terceiros sem consentimento, salvo por obrigação legal ou ordem judicial.</li>
            <li>Você tem direito de acessar, corrigir, portar, limitar, revogar consentimento e solicitar a exclusão de seus dados pessoais a qualquer momento, conforme previsto na legislação.</li>
            <li>Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:suporte@taskmatch.com" className="underline text-pink-300">suporte@taskmatch.com</a>.</li>
            <li>Para mais detalhes, consulte nossa <a href="/privacidade" className="underline text-pink-300">Política de Privacidade</a>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">4. Uso do Aplicativo e Conduta do Usuário</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>O TaskMatch destina-se exclusivamente ao uso pessoal, sendo vedada sua utilização para fins comerciais sem autorização expressa.</li>
            <li>É proibido publicar, transmitir ou compartilhar conteúdo ilegal, ofensivo, discriminatório, violento, difamatório, pornográfico, que viole direitos de terceiros ou a legislação vigente.</li>
            <li>Você concorda em não tentar acessar áreas restritas, modificar, hackear, realizar engenharia reversa ou prejudicar o funcionamento do aplicativo.</li>
            <li>O descumprimento destas regras pode resultar em suspensão, exclusão da conta e comunicação às autoridades competentes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">5. Conteúdo Gerado pelo Usuário</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Você é o único responsável por todo conteúdo (apelidos, mensagens, imagens, etc.) criado, enviado ou compartilhado no TaskMatch.</li>
            <li>Ao utilizar o aplicativo, você concede ao TaskMatch uma licença não exclusiva, mundial e gratuita para armazenar, exibir e, se necessário, remover conteúdos que violem estes Termos ou a legislação.</li>
            <li>O TaskMatch pode, a seu critério, remover ou moderar conteúdos considerados inadequados, sem aviso prévio.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">6. Propriedade Intelectual</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>O TaskMatch, incluindo marca, logotipo, design, funcionalidades, textos, imagens e códigos, é protegido por direitos autorais e demais normas de propriedade intelectual.</li>
            <li>É proibido copiar, modificar, distribuir, vender, alugar, sublicenciar ou explorar comercialmente qualquer parte do aplicativo sem autorização expressa e por escrito.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">7. Isenção e Limitação de Responsabilidade</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>O TaskMatch é fornecido “no estado em que se encontra”, sem garantias de funcionamento ininterrupto, livre de erros ou adequado a fins específicos.</li>
            <li>Não nos responsabilizamos por danos diretos, indiretos, incidentais, consequenciais ou lucros cessantes decorrentes do uso ou da impossibilidade de uso do aplicativo.</li>
            <li>O usuário é responsável por manter seus dispositivos protegidos contra vírus, malware e outras ameaças digitais.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">8. Alterações dos Termos e do Serviço</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Estes Termos de Uso podem ser alterados a qualquer tempo, visando aprimoramento dos serviços ou adequação legal.</li>
            <li>Notificaremos os usuários sobre alterações relevantes por meio do aplicativo ou e-mail cadastrado.</li>
            <li>O uso contínuo do TaskMatch após alterações implica concordância com os novos termos.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">9. Disposições Gerais</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Estes Termos são regidos pelas leis do Brasil. Eventuais disputas deverão ser resolvidas no foro da comarca de domicílio do usuário.</li>
            <li>Se qualquer disposição destes Termos for considerada inválida, as demais permanecerão em pleno vigor.</li>
            <li>O não exercício de qualquer direito não implica renúncia, podendo ser exercido a qualquer tempo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-300 mb-2">10. Contato e Dúvidas</h2>
          <p>
            Para dúvidas, solicitações, reclamações ou para exercer seus direitos como titular de dados, entre em contato pelo e-mail: <a href="mailto:suporte@taskmatch.com" className="underline text-pink-300">suporte@taskmatch.com</a>
          </p>
        </section>

        <div className="text-center mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} TaskMatch. Todos os direitos reservados.
        </div>
      </motion.div>
    </main>
  )
}