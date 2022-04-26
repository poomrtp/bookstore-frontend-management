import NavLayout from '../../layouts/Navbar'
import UploadImage from '../../components/uploadFile/UploadImage'
const Home = () => {
  return (
    <div className="home">
      <NavLayout>
        <div>HOME</div>
        <div>
          <UploadImage />
        </div>
      </NavLayout>
    </div>
  )
}

export default Home
