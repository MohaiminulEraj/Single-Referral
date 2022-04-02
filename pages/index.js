import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Simple from '@/components/example/Simple'
import Advanced from '@/components/example/Advanced'
import Switch from 'react-ios-switch'
import dbConnect from '@/server/config/dbConnect'

export default function Home({ isConnected }) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <Layout>
      <div className={styles.appLayout}>
        {showAdvanced ? <Advanced /> : <Simple />}
        <div className={styles.row}>
          <p style={{ color: 'black' }}>{showAdvanced ? 'Hide' : 'Show'} Buttons</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    await dbConnect()
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
