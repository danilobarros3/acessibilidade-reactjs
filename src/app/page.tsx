"use client";
import Image from "next/image";
import logo from "../assets/teste.svg";
import styles from "../app/styles/Home.module.css";
import Head from "next/head";
import * as Dialog from "@radix-ui/react-dialog";
export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolvendo uma web acessível</title>
      </Head>
      <header className={styles.header}>
        <Image src={logo} alt="Blog da Rocketseat" width={100} height={100} />
        <nav className={styles.nav}>
          <a
            href="https://github.com/danilobarros3"
            aria-label="Acessar Github"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.463-1.11-1.463-.909-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.846a9.56 9.56 0 0 1 2.507.338c1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.202 2.397.1 2.65.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolvendo uma web acessível</h1>
            <h2>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
          </header>
          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>
          <h3>O que é acessibilidade, afinal?</h3>
        </article>
      </main>
      <footer className={styles.footer}>
        <Image src={logo} alt="Blog da Rocketseat" width={100} height={100} />
        <nav className={styles.nav} aria-label="Footer">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type="button">Termos de uso</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay}/>
              <Dialog.Content className={styles.modal}> 
                <Dialog.Title>Termos de uso</Dialog.Title>
                <Dialog.Description className={styles.desc}>Esses são o termo de uso</Dialog.Description>
                <Dialog.Close>
                  <button type="button" className={styles.closeModalButton}>Fechar</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </footer>
    </>
  );
}
