export function ExternalLinkWithSVGIcon({ url, children, className }) {
  return (
    <a
      href={url}
      className={className ? className : 'hover:underline text-blue-800 hover:text-blue-500'}>
      {children}
      <svg
        className="w-4 h-4 sm:w-6 sm:h-6 inline ml-1 sm:ml-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}
