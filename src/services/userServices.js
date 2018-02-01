import request from 'utils/request'

export default {
  get_node_list() {
    return request.get('data/list')
  }
}