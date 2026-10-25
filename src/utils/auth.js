// Ganti username dan password ini sesuai keinginan kamu
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'cerdasceria123';

const SESSION_KEY = 'cerdasCeriaAdminLoggedIn';

export function login(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {
      return false;
    }
    return true;
  }
  return false;
}

export function logout() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // abaikan
  }
}

export function isLoggedIn() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}
