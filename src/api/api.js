import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.github.com/users/',
	// withCredentials разрешает при кросдоменных запросах кидать куки
	// withCredentials: true,
	// headers: { 'API-KEY': 'b4231545-34ed-44fa-a91e-ecaf22644a17' }
});

// pfxtv nen return
export const profileApi = {
	
	getProfile(userName) {
		return instance.get(userName).then(response => response.data);
	},

	getRepos(userName, reposPageSize, carentPage) {
		return instance.get(`${userName}/repos?per_page=${reposPageSize}&page=${carentPage}`).then(response => response.data);
	},
}




