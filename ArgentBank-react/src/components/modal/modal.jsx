import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Slices/modalSlice";
import { reset } from "../../features/loginThunk";

const Modal = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userConnection.connection);
  return (
    <aside className="modal-container">
      <div className="modal">
        <button
          type="button"
          className="modal-btn"
          onClick={() => {
            dispatch(reset());
            dispatch(closeModal());
          }}
        >
          X
        </button>
        <h3>une erreur est survenue</h3>
        <h4>{JSON.stringify(error)}</h4>
      </div>
    </aside>
  );
};
export default Modal;
