function Footer() {
  return (
    <footer className="bg-blue-200 py-16 text-white">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex max-w-6xl">
            <div className="mt-16 basis-1/2 md:mt-0">
                <h2 className="text-white font-bold text-2xl">Felipe Gonçalves</h2>
                <p className="my-5">
                    <span>&copy;</span>
                    Felipe Gonçalves. All rights reserved
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p><a href="#home">Home</a></p>
                <p><a href="#sobre">Sobre mim</a></p>
                <p><a href="#projetos">Projetos</a></p>
                <p><a href="#contate-me">Contate me</a></p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contate me</h4>
                <p><a target="_blank" href="https://wa.me//5511943294585?text=Oi%20Felipe%20tudo%20bem?">(11) 94329-4585</a></p>
                <p><a href="mailto:felipergoncalves80@gmail.com">felipergoncalves80@gmail.com</a></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer