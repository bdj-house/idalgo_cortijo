export const getInitials = (name?: string): string => {
  if (!name) {
    return '';
  }

  const parts = name.trim().split(' ').filter(Boolean);

  if (parts.length === 0) {
    return '';
  }

  if (parts.length === 1) {
    return parts[0][0]?.toUpperCase() || '?';
  }

  return (
    (parts[0][0] || '') + (parts[parts.length - 1][0] || '')
  ).toUpperCase();
};

export const getSlug = (title?: string): string => {
  if (!title) {
    return '';
  }

  return title.replaceAll(' ', '-').toLowerCase();
};
