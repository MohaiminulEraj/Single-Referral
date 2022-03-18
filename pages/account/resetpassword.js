import ResetPassword from '@/components/auth/ResetPassword'
import Layout from '@/components/layout/Layout'
// import { getSession } from 'next-auth/client'

export default function ResetPasswordPage() {
    return (
        <Layout title="Reset Password - Single Referral" >
            <ResetPassword />
        </Layout>
    )
}