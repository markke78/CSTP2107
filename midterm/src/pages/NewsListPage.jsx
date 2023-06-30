
import NewsList from "../components/NewsList"
import Header from "../components/header"
import AppFooter from "../components/Footer"
export default function NewsListPage() {
  return (
    <>
        <div className='App'>
            <header id="header">
                <Header />
            </header>
            <main id="home" className='hero-block'>
                <NewsList />
            </main>
            <footer id='footer'>
                <AppFooter />
            </footer>
        </div>
    </>
  )
}
