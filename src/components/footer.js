import React from 'react'

function footer() {
  return (
    <>
        {/* <Footer /> */}
        <footer id="footer" className="footer dark-background">
            <div className="container">
            <h3 className="sitename">Selecao</h3>
                <p>
                    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
                    fuga maxime saepe commodi placeat.
                </p>
                <div className="social-links d-flex justify-content-center">
                    <a href="/">
                    <i className="bi bi-twitter-x" />
                    </a>
                    <a href="/">
                    <i className="bi bi-facebook" />
                    </a>
                    <a href="/">
                    <i className="bi bi-instagram" />
                    </a>
                    <a href="/">
                    <i className="bi bi-skype" />
                    </a>
                    <a href="/">
                    <i className="bi bi-linkedin" />
                    </a>
                </div>
            </div>
        </footer> 
    </>
  )
}

export default footer
