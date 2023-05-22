import styles from './Form.css'

export default function Form() {
    return (
        <section id='form'>

            <div className='txt-entrada'>
                <h3 className='text-center'>Entre em contato com a minha equipe por aqui</h3>
            </div>

            <form action="https://formsubmit.co/email@email.com" method="POST">
                <div className='alinhar-div'>

                    <input type="text" name="name" aria-label="First name" className=" form-control " required placeholder='Digite seu nome' />
                    <input type="email" name="email" aria-label="E-mail" className=" form-control" required placeholder='Digite seu e-mail' />
                    <input type="tel" name="tel" aria-label="tel" className=" form-control " required placeholder='Digite seu telefone com DDD' />
                    <textarea className="form-control " name="menssage" id="exampleFormControlTextarea1" rows="3" required placeholder='Digite a mensagem desejada'></textarea>

                    <button type="button d-flex justify-content-center submit" className="btn btnn" target="blank">Enviar</button>

                    <input type="hidden" name="_subject" value="Novo Contato!" />
                    <input type="text" name="_honey" className='display-none' />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="SEU SITE AQUI" target="blank" />
                </div>


            </form>

        </section>
    )
}