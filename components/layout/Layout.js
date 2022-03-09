import Head from 'next/head'
import Header from './Header'
// import styles from '@/styles/Layout.module.css'


export default function Layout({ title, description, keywords, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            <div className="container-fluid mt-4">
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Single Referral',
    description: 'Dating App.',
    keywords: 'dating, app, matrimony, single referral'
}