export const repoBasePath = '';

export function withRepoBase(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}