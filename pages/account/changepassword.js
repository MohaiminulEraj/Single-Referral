import ChangePassword from '@/components/auth/ChangePassword'
import Layout from '@/components/layout/Layout'
// import { getSession } from 'next-auth/client'

export default function ChangePasswordPage() {
    return (
        <Layout title="Change user password - Single Referral" >
            <ChangePassword />
        </Layout>
    )
}