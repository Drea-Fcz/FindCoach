import mutations from '@/store/modules/requests/mutations';
import actions from '@/store/modules/requests/actions';
import getters from '@/store/modules/requests/getters';

export default {
  namespace: true,
  state() {
    return {
      requests: []
    };
  },
  getters,
  mutations,
  actions,
};
