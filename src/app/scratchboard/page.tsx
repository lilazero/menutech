import Link from "next/link";

export default function ManagementPage() {
  const Projects = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Management</h1>
      <h3>All Projects : </h3>
      <ul>
        {Projects.map((v, i) => (
          <li key={i}>
            <Link href={"management/" + v}>Project {v}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
