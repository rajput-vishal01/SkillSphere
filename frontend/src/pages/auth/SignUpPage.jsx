import { Link } from "react-router-dom";
import SignUpForm from "../../components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-base-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
			<img
          className="mx-auto h-40 w-auto rounded-badge my-4"
          src="/logo.png"
          alt="SkillSphere"
        />
        <h2 className="text-center text-3xl font-extrabold text-text-primary">
          Craft a Legacy Through Your Career
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md">
        <div className="bg-neutral py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignUpForm />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral text-text-secondary">
                  Already on SkillSphere?
                </span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/login"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-info bg-neutral hover:bg-base-200">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
