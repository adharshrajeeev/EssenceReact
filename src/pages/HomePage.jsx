import React from 'react'
import NavBar from '../components/Navbar'
import SkeletonCard from '../components/SkeletonCard'

const LazyImages = React.lazy(() => import('../components/Cardss'))


function HomePage() {



  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <React.Suspense fallback={<SkeletonCard />}>
          <LazyImages />
        </React.Suspense>
      </main>
    </div>
  )
}

export default HomePage