//Nextjs funksionon duke krijuar subdomain me ane te dosjeve
// domain.com/menu
// dhe contenti qe do te shfaqet ruhet ne page.tsx & layout.tsx gjithmone
// qr copilot fliska dhe shqipe
// sorry adhd

import ProtectedRoute from "../components/ProtectedRoute";

//classat, dmth te cilat jane filet ne NextJS kane nje export, cfare do exportohet varet nga returni dhe nga funksioni
function Menu(){

  return(

    <div>
      <ProtectedRoute>
        <h1>Je i loguar</h1>
      </ProtectedRoute>
      <h1>Ske nevoje te jesh i loguar te shohesh kete element</h1>
    </div>
  )
}

//exporti i larte permendur
export default Menu;