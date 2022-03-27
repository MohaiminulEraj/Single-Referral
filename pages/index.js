import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Simple from '@/components/example/Simple'
import Advanced from '@/components/example/Advanced'
import Switch from 'react-ios-switch'

export default function Home() {
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
