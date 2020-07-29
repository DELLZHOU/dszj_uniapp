const TokenKey = 'Admin-Token'
export function getToken() {
	return uni.getStorageSync(TokenKey);
}
export function setToken(token) {
	return uni.setStorageSync(TokenKey, 'hello');
}
export function removeToken() {
	return uni.removeStorageSync(TokenKey);
}
