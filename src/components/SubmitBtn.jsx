import { useNavigation } from "react-router";

const SubmitBtn = ({ text, color }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      className={`btn btn-${color} btn-block `}
      disabled={isSubmitting}
      type="submit"
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">Sending...</span>
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
