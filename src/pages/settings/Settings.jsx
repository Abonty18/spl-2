import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src="https://media.istockphoto.com/photos/overhead-shot-of-woman-digging-in-a-vegetable-garden-picture-id157505043" />
                        <label htmlFor='fileInput'>
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Labiba Farah' />
                    <label>E-mail</label>
                    <input type='email' placeholder='labibafarah2998@gmail.com' />
                    <label>Password</label>
                    <input type='password' />
                    <button className='settingsSubmit'>Update</button>


                </form>

            </div>
            <Sidebar />
        </div>
    )
}


