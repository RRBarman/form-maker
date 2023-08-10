import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center py-2 bg-white">
        <p title="Author of this app">
          Created by Raunak Roy Barman{" "}
          <Link href="https://www.github.com/rrbarman">@rrbarman</Link>
        </p>

        <ul className="flex gap-2">
          <Link href="https://www.github.com/rrbarman/form-maker">
            <li title="View project repository">
              <i className="bi bi-github" />
            </li>
          </Link>

          <Link href="mailto:raunakroybarman@gmail.com">
            <li title="Send email to raunakroybarman">
              <i className="bi bi-envelope-fill" />
            </li>
          </Link>
        </ul>
      </footer>
    </>
  );
}
