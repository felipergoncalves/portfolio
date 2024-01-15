import HText from "@/shared/HText";
import { ProjectType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import Project from "./Project";
const projects: Array<ProjectType> = [
    {
        image: "expense-tracker/expense-tracker.jpeg",
        title: "Expense Tracker",
        description: "Sistema financeiro desenvolvido para controle de receitas e despesas, retornando o balanço mensal",
        link: "https://github.com/felipergoncalves/expense-tracker"
    },
    {
        image: "fetch-pets/fetch-pets-home.jpeg",
        title: "Fetch Pets",
        description: "Plataforma de adoção e doação de pets, conectando pessoas interessadas em adotar e doar pets",
        link: "https://github.com/felipergoncalves/fetch-pets"
    },
    {
        image: "github-finder/github-finder.jpeg",
        title: "Github Finder",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        link: "https://github.com/felipergoncalves/Github-Finder"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Projects({setSelectedPage}: Props) {
  return (
    <section id="projetos" className="text-blue-100 bg-slate-300 gap-16 py-10 md:h-full md:pb-0">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Projetos)}
            className="md:flex md:my-15 mx-auto w-5/6 items-start flex-col md:h-5/6 max-w-6xl"
        >
            {/* HEADER */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5}}
            transition={{duration: 0.5 }}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0},
            }}
            className="md:mt-16 md:w-3/5">
                <HText>Projetos</HText>
                <p className="my-5">Alguns dos projetos que desenvolvi durante esses anos na área.</p>
            </motion.div>

            {/* PROJECTS */}
            <motion.div
                className="md:flex items-center justify-between gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                    {projects.map((project: ProjectType) => (
                        <Project 
                            key={project.title}
                            image={project.image}
                            title={project.title}
                            link={project.link}
                        />
                    ))}
            </motion.div>
        </motion.div>        
    </section>
  )
}

export default Projects