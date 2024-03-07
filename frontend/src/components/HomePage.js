import '../App.css'

// Todo: 触底函数

function Home() {
    return (
        <div className='main-container' style={{top: '11vh'}}>
            <div className='home-nav'>
                <div className='home-nav-logo-container'>
                    <img src='../assets/logo.png' alt='Logo' style={{height: '50px', width: '125px', position: 'fixed', left: '3vw'}} />
                </div>
                <div className='home-nav-category-container'>
                    <div className='home-nav-category-cell'>class1</div>
                    <div className='home-nav-category-cell'>class2</div>
                    <div className='home-nav-category-cell'>class3</div>
                    <div className='home-nav-category-cell'>class4</div>
                    <div className='home-nav-category-cell'>More...</div>
                </div>
                <div className='home-nav-searchbox-container'>
                    <div className="input-group flex-nowrap" style={{width: '15vw', position: 'fixed', right: '3vw'}}>
                        <span className="input-group-text" id="addon-wrapping">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </span>
                        <input type="text" className="form-control" placeholder="Search..." aria-describedby="addon-wrapping" />
                    </div>
                </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '3vh'}}>
                <h1>Recommendations</h1>
            </div>
            <div className='home-products-container'>

            </div>
        </div>
    )
}

export default Home