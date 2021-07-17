import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import AddAsset from './AddAsset';
import BasicTable from './BasicTable';
import GetAsset from './GetAsset';
import Card from '../components/Card'
import Dropzone from '../components/Dropzone';
import {Upload} from '../pages/Upload';
import {Files} from '../pages/Files';



export default function Home() {
  return (
    <>    
    {/* <Dropzone/> */}
    {/* <Card/>  */}
    {/* <GetAsset/>   */}
      {/* <BasicTable/> */}
      {/* <Sidebar/> */}
      {/* <AddAsset/> */}
      <Upload />
      {/* <Files /> */}
    </>
  )
}
