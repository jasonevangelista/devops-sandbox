import { loginEmailPassword } from "state-management/actions/authThunk";
import { useAppSelector, useAppDispatch } from "state-management/app/hooks";
import { LoginPayload } from "types/loginPayload";

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLoginEmailPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginPayload;
    const result = await dispatch(loginEmailPassword(target)).unwrap()
    console.log(result)
  }
  
  return (
    <div className="text-center">

      <h2 className="">Firebase Auth Options</h2>
      
      <form className="flex flex-col bg-slate-500 m-2" onSubmit={handleLoginEmailPassword}>
        <h3>Email/Password</h3>
        <input
          className="m-3 p-2"
          type={"email"}
          name="email"
          placeholder="email"
        />
        <input
          className="m-3 p-2"
          type={"password"}
          name="password"
          placeholder="password"
        />
        <button
          className="bg-green-600 m-3 p-2"
          type="submit"
        >
          Sign in with Email & Password
          </button>
      </form>

      {/* <form className="flex flex-col bg-gray-500 m-2">
        <h3>Google</h3>
        <button className="bg-green-600 m-3 p-2">
          Sign in with Google
        </button>
      </form>
      
      <form className="flex flex-col bg-zinc-500 m-2">
        <h3>GitHub</h3>
        <button className="bg-green-600 m-3 p-2">
          Sign in with GitHub
        </button>
      </form>

      <form className="flex flex-col bg-neutral-500 m-2">
        <h3>Phone Number</h3>
        <input
          className="m-3 p-2"
          type="number"
          placeholder="phone number"
        />
        <button className="bg-green-600 m-3 p-2">
          Send Code to Phone
        </button>
        <input
          className="m-3 p-2"
          type="number"
          placeholder="verification code"
        />
        <button className="bg-green-600 m-3 p-2">
          Submit Code and Sign in with Phone Number
        </button>
      </form> */}

    </div>
  )
}

export default Login
