import React from 'react'

import Layout from '../components/layout/layout'
import IntroSection from '../sections/intro/intro'
import DearSection from '../sections/dear/dear'
import InfoSection from '../sections/info/info'
import NomadSection from '../sections/nomad/nomad'
import OralSection from '../sections/oral/oral'
import CommentSection from '../sections/comments/comments'
// import MapSection from '../sections/map/map'

const InvitePage = () => {
	return (
		<Layout>
			<IntroSection />
			<DearSection />
			<InfoSection />
			<NomadSection />
			<OralSection />
			{/* <MapSection /> */}
			<CommentSection />
			<div>
			</div>
		</Layout>
	)
}

export default InvitePage
