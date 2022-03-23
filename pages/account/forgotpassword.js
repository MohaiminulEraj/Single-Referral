import ForgotPassword from '@/components/auth/ForgotPassword'
import Layout from '@/components/layout/Layout'
// import { getSession } from 'next-auth/client'

export default function ForgotPasswordPage() {
    return (
        <Layout title="Forgot Password - Single Referral" >
            <ForgotPassword />
        </Layout>
    )
}