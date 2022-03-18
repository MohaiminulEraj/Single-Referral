import React from 'react'
import MatchPreferences from '@/components/user/member/MatchPreferences'
import Layout from '@/components/layout/Layout'
// import { getSession } from 'next-auth/client'

const matchPreferences = () => {
    return (
        <Layout title="Match Preferences - Single Referral">
            <MatchPreferences />
        </Layout>
    )
}

export default matchPreferences