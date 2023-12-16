import "../App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
function ClassFunc() {
  const displayLoginNotification = () => {
    toast.success("LoggedIn Successful");
  };
  const displayLogoutNotification = () => {
    toast("LoggedOut Successful");
  };
  const displayLogwarnNotification = () => {
    toast.error("Classified");
  };
  const displayLogdanNotification = () => {
    toast.info("info");
  };
  
 
  return (
    <div className='App'>
      <ToastContainer
        
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
 
      <button onClick={displayLoginNotification}>Log me In</button>
      <button onClick={displayLogoutNotification}>Log me Out</button>
      <button onClick={displayLogwarnNotification}>Log In without Password</button>
      <button onClick={displayLogdanNotification}>Display</button>

    </div>
  );
}
 
export default ClassFunc;