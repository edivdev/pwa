// import { useEffect, useState } from 'react'
// import { useBreakpointValue } from '@chakra-ui/react'

// export default function useViewport() {
//   const viewport = useBreakpointValue({
//     xs: 'mobile',
//     md: 'desktop'
//   })

//   const [viewports, setViewports] = useState({
//     isMobile: viewport === 'mobile',
//     isDesktop: viewport === 'desktop'
//   })

//   const resizeListener = () => {
//     if (viewport === viewports.viewport || !viewport) {
//       return
//     }

//     setViewports({
//       isMobile: viewport === 'mobile',
//       isDesktop: viewport === 'desktop'
//     })
//   }

//   useEffect(() => {
//     resizeListener()
//   }, [viewport])

//   return viewports
// }

