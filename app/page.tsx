import Link from "next/link";
import { SVGProps } from "react";

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    fill="currentColor"
    >
    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
  </svg>
);

export const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.26.79-.57v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.52-1.35-1.27-1.71-1.27-1.71-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.21 1.75 1.21 1.02 1.78 2.68 1.26 3.33.96.1-.75.4-1.26.72-1.55-2.55-.3-5.23-1.3-5.23-5.8 0-1.28.45-2.33 1.2-3.15-.12-.3-.52-1.52.12-3.17 0 0 .98-.32 3.2 1.21.93-.26 1.93-.4 2.93-.4 1 0 2 .14 2.93.4 2.22-1.53 3.2-1.21 3.2-1.21.64 1.65.24 2.87.12 3.17.75.82 1.2 1.87 1.2 3.15 0 4.52-2.69 5.49-5.25 5.78.41.36.77 1.07.77 2.16v3.2c0 .31.21.68.8.57A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);


export const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
   {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
  </svg>
);

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

          <div className="flex gap-2">
            <Link
              href="https://github.com/joaokhalaf"
              target="_blank"
              className="underline hover:text-orange-400"
            >
              <GitHubIcon className="w-5 h-5" />
            </Link>

            <Link
              href="https://x.com/kh4lf_"
              target="_blank"
              className="underline hover:text-orange-400"
            >
              <TwitterIcon className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/joaokhalaf/"
              target="_blank"
              className="underline hover:text-orange-400"
            >
              <LinkedInIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>

  );
}