import request from '../utils/request';

export async function searchRepoService({ pageSize, pageIndex, filter }) {
  const options = {
    client_id: '8a9bbf3c53006781069d',
    client_secret: '6febf2880914f1e4fe825813215d32f435050fab',
    sort: 'stars',
    order: 'desc',
    q: filter,
    page: pageIndex + 1,
    per_page: pageSize
  }

  let requestParam = '';
  for (const [key, value] of Object.entries(options)) {
    requestParam += `&${key}=${value}`;
  }
  const responseData = await request(`https://api.github.com/search/repositories?${requestParam.substring(1)}`);
  return responseData;
}
