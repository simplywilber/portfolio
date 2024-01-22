export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div className="flex justify-center sm:justify-end p-4">
        <h1>{year}</h1>
      </div>
    </footer>
  );
}
