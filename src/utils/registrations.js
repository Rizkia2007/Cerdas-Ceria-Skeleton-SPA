const STORAGE_KEY = 'cerdasCeriaRegistrations';

export const STATUS_OPTIONS = ['Baru', 'Sudah dihubungi', 'Terdaftar'];

export function getRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function save(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // penyimpanan penuh atau diblokir browser
  }
  return list;
}

export function addRegistration(data) {
  const item = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'Baru',
    ...data,
  };
  save([item, ...getRegistrations()]);
  return item;
}

export function updateStatus(id, status) {
  return save(
    getRegistrations().map((item) =>
      item.id === id ? { ...item, status } : item
    )
  );
}

export function deleteRegistration(id) {
  return save(getRegistrations().filter((item) => item.id !== id));
}
