import React from 'react'
import EditMemberProfile from '@/components/user/member/EditMemberProfile'
import Layout from '@/components/layout/Layout'
// import { getSession } from 'next-auth/client'

const updateProfilePage = () => {
    return (
        <Layout title="Update Profile">
            <EditMemberProfile />
        </Layout>
    )
}

export default updateProfilePage