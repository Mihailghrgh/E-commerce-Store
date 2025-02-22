import { useNavigation } from "react-router";

const SubmitBtn = ({ text, color, handleClick }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      className={`btn btn-${color} btn-block ${
        text === `Login` ? "mt-4" : "mt-o"
      } `}
      disabled={isSubmitting}
      type="submit"
      onClick={handleClick}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">Sending...</span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
