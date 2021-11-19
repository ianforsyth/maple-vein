import CenteredLayout from '../components/CenteredLayout'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <CenteredLayout>
      <div className="w-full max-w-6xl">
        <img
          className="w-full"
          src="/logo.svg" // Route of the image file
          alt="Maple Vein Woodworking"
        />
      </div>
    </CenteredLayout>
  </Layout>
)

export default IndexPage
