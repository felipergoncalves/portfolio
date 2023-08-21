import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types'
import { motion } from "framer-motion"
import { useForm } from 'react-hook-form';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Contact({setSelectedPage}: Props) {
    const inputStyles = `placeholder-slate-400 resize-none py-3 px-5 bg-slate-200 rounded-lg w-full mt-1 active:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100`;
    const labelStyles = `text-blue-100 font-bold py-5 w-full`;
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async(e: any) => {
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault();
        }
    }

  return (
    <section id="contate-me" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}>
            {/* Header */}
            <motion.div
                className='md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                transition={{duration: 0.5 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <HText>
                    <span>Contate-me</span>
                </HText>
                <p className='my-5'>Entre em contato comigo para mais detalhes.</p>
            </motion.div>
            <div className='mt-10 justify-start gap-8 md:flex'>
                <motion.div
                    className='mt-10 basis-3/5 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    transition={{duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, y:50},
                        visible: {opacity: 1, y: 0},
                    }}
                >
                    <form target='_blank' onSubmit={onSubmit} method='POST' action="https://formsubmit.co/e8ac60e96ff111db091418c2d71d1a8e">
                        <div className='mb-5'>
                            <label htmlFor="nome" className={labelStyles}>Nome</label>
                            <input
                                id='nome'
                                type="text"
                                className={inputStyles}
                                placeholder='Digite seu nome'
                                {...register("nome", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.nome && (
                                <p className='mt-1 text-pink-500'>
                                    {errors.nome.type === "required" && "Esse campo é obrigatório!"}
                                    {errors.nome.type === "maxLength" && "O limite são 100 caracteres!"}
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className={labelStyles}>Email</label>
                            <input
                                id="email"
                                type="email"
                                className={inputStyles}
                                placeholder='Digite seu e-mail'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-pink-500'>
                                    {errors.email.type === "required" && "Esse campo é obrigatório!"}
                                    {errors.email.type === "pattern" && "Endereço de email inválido!"}
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="mensagem" className={labelStyles}>Mensagem</label>
                            <textarea
                                id="mensagem"
                                rows={4}
                                cols={50}
                                className={inputStyles}
                                placeholder='Digite sua mensagem'
                                {...register("mensagem", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.mensagem && (
                                <p className='mt-1 text-pink-500'>
                                    {errors.mensagem.type === "required" && "Esse campo é obrigatório!"}
                                    {errors.mensagem.type === "maxLength" && "O limite são 2000 caracteres!"}
                                </p>
                            )}
                        </div>
                        <div className="w-full flex justify-start">
                            <button className='rounded-lg bg-blue-100 text-white hover:bg-blue-200 text-center px-10 py-2' type="submit">Enviar</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact