import React from 'react'
import EditAffiliateProfile from '@/components/user/affiliate/EditAffiliateProfile'
import Layout from '@/components/layout/Layout'
// import { getSession } from 'next-auth/client'

const updateProfilePage = () => {
    return (
        <Layout title="Update Profile - Single Referral">
            <EditAffiliateProfile />
        </Layout>
    )
}

export default updateProfilePage