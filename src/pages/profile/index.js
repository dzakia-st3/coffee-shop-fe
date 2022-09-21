import Layout from '../../layouts/layouts'
import Profile from '../../component/profile/profile'

export default function ProfilePage () {
    return (
    <>
        <Layout title='Profile' withNavbar withFooter>
        <Profile/>
        </Layout>
    </>
    )
}