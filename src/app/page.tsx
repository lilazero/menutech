import DynamicPage from "./[businessNameMenu]/page";
import MenuScannerComponent from "./components/MenuScannerComponent";

export default function Home() {
//ja nje sek sa ta krijoj si emer
  var id = "Autiku dhe Mato";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MenuScannerComponent></MenuScannerComponent>
      <DynamicPage params={{ slug: id }} />
    </main>
  );
}