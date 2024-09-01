import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";


function Navbar() {
  return (
    <nav className="">
      <div className="flex gap-4  text-center"> 
        <LoginLink>Sign in</LoginLink>
        <RegisterLink>Sign up</RegisterLink>
        <LogoutLink>Log out</LogoutLink>
        </div>
    </nav>
  );
} 

//harrova ta eksportoj
//ja pse s'me doli si import suggestion

export default Navbar;