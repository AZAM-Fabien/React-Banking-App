import { useDispatch, useSelector } from "react-redux";
import { triggerEdit } from "../../Slices/userInfoSlice";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const { userName, firstName, lastName, edit } = useSelector(
    (state) => state.userInfo
  );
  return (
    <>
      {edit == true ? (
        <>
          <h1> {userName} </h1>
        </>
      ) : (
        <>
          {" "}
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstName} {lastName} !
            </h1>
            <button
              className="edit-button"
              onClick={() => dispatch(triggerEdit())}
            >
              Edit Name
            </button>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default ProfileHeader;
