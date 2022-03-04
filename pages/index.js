import LoginBox from './login-box'
import GlobalStyle from './global-style'

function HomePage() {

    return (

        <div>
            <GlobalStyle />
            <LoginBox />
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: black;
                }
            `}</style>
        </div>
    )
}
  
export default HomePage