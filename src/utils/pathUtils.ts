export const repoBasePath = process.env.NODE_ENV === 'production' ? '/Team-Volante' : '';

export function withRepoBase(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${repoBasePath}${normalized}`;
}
