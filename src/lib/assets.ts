/** Prefija recursos públicos cuando la landing se publica bajo /Pachakuna en GitHub Pages. */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
