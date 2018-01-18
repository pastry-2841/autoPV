import fetch from 'dva/fetch'

export default {
  async get(url, options = '') {
    // const data = JSON.stringify(options)
    return request(`/monitor/${url}/${options}`)
  },
  async post(url, options = {}) {
    const data = JSON.stringify(options)
    return request(`/monitor/${url}`, { method: 'POST', body: data})
  },
  async del(url) {
    return request(`/monitor/${url}`, { method: 'DELETE'})
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else if (response.status >= 500) {
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options = {}) {
  // options.credentials = 'same-origin'
  const headers = {
    'Content-Type': 'application/json'
  }
  const response = await fetch(encodeURI(url), { headers, ...options })
  
  let data
  try {
    checkStatus(response)

    data = await response.json()
    if (data.success !== true) {
      throw data.message
    }
  } catch (e) {
    throw e
  }
  const ret = {
    data,
    headers: {}
  }

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count')
  }

  return ret
}
