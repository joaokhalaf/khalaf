import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center sm:items-start">
        <h1 className="my-4 font-jetbrains text-lg font-semibold tracking-tight">
          j. khalaf
          <Link
            href="https://x.com/kh4lf_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-orange-400"
          >
            {" "}
            / @kh4lf_
          </Link>
        </h1>

        <div className="space-y-4 font-mono text-sm leading-relaxed">
          <p>
            I'm a software engineer with experience in{" "}
            <i className="font-jetbrains text-orange-400">frontend systems</i>{" "}
            and{" "}
            <i className="font-playfair text-orange-400">web development</i>.
          </p>
          <p>I'm learning and exploring the open source world.</p>
          <p>
            I'm currently working as an Intern Software Developer at{" "}
            <Link
              href="https://www.linkedin.com/company/fitoformula/"
              target="_blank"
              className="underline hover:text-orange-400"
            >
              Fitofórmula
            </Link>{" "}
            and pursuing my Internet Systems undergrad at{" "}
            <Link
              href="https://fatecrl.edu.br/"
              target="_blank"
              className="underline hover:text-orange-400"
            >
              Fatec Rubens Lara.
            </Link>
          </p>
        </div>

        {/* <nav className="mt-8">
          <ul className="flex space-x-6 font-mono text-sm">
            <li>
              <Link
                href="/projects"
                className="underline hover:text-orange-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="underline hover:text-orange-400">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="underline hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav> */}
      </main>
    </div>
  );
}