import useLocalStorage from "./useLocalStorage";

export default function Reset() {
  //object destructing the useLocalStorage
  const { email, setEmail } = useLocalStorage();
  // const [email, setEmail] = useState("");

  // useEffect(() => {
  //   let email = localStorage.getItem("email");

  //   if (email) {
  //     setEmail(email);
  //   }
  // },[])

  // useEffect(() => {
  //   console.log(1);
  //   localStorage.setItem("email", email);
  // }, [email]);

  return (
    <>
      <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
