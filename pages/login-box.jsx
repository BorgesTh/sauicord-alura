import appConfig from '../config.json';

function Title(props) {

    const Tag = props.tag;

    return (

        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 1.8em;
                }
            `}</style>
        </>
    )
}

function SubTitle(props) {

    const Tag = props.tag;

    return (

        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['300']};
                    font-size: 1.1em;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
        
    )
}

function UserInput() {

    return (
        
        <div>

            <div id='user-form'>
                <input required></input>
                <label>Usuário</label>
            </div>

            <button>Entrar</button>

            <style jsx>{`
            
                #user-form {
                    position: relative;
                    width: 270px;
                    height: 35px;
                }
                
                input {
                    width: 100%;
                    height: 35px;
                    background: transparent;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid ${appConfig.theme.colors.primary['800']};
                    color: ${appConfig.theme.colors.primary['050']};
                    font-size: 1em;
                }

                label {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: 8px;
                    color: ${appConfig.theme.colors.primary['050']};
                    pointer-events: none;
                    font-size: 1em;
                    text-align: center;
                    transition: 400ms ease all;
                }

                input:focus ~ label {
                    font-size: 0.8em;
                    transition: 400ms ease all;
                    top: -15px;
                    text-align: left;
                }

                
                input:valid ~ label {
                    font-size: 0.8em;
                    top: -15px;
                    text-align: left;
                }

                button {
                    width: 270px;
                    height: 35px;
                    margin-top: 10px;
                    background: ${appConfig.theme.colors.primary['800']};
                    border: none;
                }

                button:hover {
                    cursor: pointer;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 20px;
                }
            `}</style>

        </div>
    )
}

function UserImage() {

    return (

        <div>

            <style jsx>{`
                div {
                    width: 255px;
                    height: 270px;
                    background-color: ${appConfig.theme.colors.neutrals['800']};
                    margin: auto;
                }
            `}</style>

        </div>
    )
}

function LeftSide() {

    return (

        <div>

            <Title tag="h1">Bem-vindo ao chat!</Title>

            <SubTitle tag="h2">SaüÍCord - Alura</SubTitle>

            <UserInput />

            <style jsx>{`

                div {
                    display: flex;
                    flex-direction: column;
                    grid-column: 1;
                    width: 325px;
                    padding-top: 50px;
                }

            `}</style>

        </div>
    )
}

function RightSide() {

    return (

        <div>

            <UserImage />

            <style jsx>{`
                div{
                    display: flex;
                    grid-column: 2;
                    width: 325px;
                }
            `}</style>

        </div>
    )
}

function LoginBox() {
    
    return (

        <div>

            <LeftSide />

            <RightSide />

            <style jsx>{`
                div {
                    display: grid;
                    grid-template-column: 1fr 1fr;
                    text-align: center;
                    width: 650px;
                    height: 300px;
                    background: ${appConfig.theme.colors.neutrals['900']};
                    border-radius: 3px;
                }
            `}</style>

        </div>
    )
}

export default LoginBox