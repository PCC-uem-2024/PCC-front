export const hasRole = (role) => {
    const token = localStorage.getItem('role');
    return role === token;
};