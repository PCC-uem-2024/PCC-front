export const hasRole = (role) => {
  const permission = localStorage.getItem('role')
  return role === permission
}
